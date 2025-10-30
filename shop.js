import { supabase, authManager } from './auth.js';

class ShopManager {
    constructor() {
        this.prompts = [];
        this.filteredPrompts = [];
        this.currentCategory = 'all';
        this.init();
    }

    async init() {
        await this.loadPrompts();
        this.setupEventListeners();
        this.renderPrompts();
    }

    async loadPrompts() {
        try {
            const { data, error } = await supabase
                .from('prompts')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });

            if (error) throw error;

            this.prompts = data || [];
            this.filteredPrompts = this.prompts;
        } catch (error) {
            console.error('Error loading prompts:', error);
            authManager.showNotification('Error loading prompts', 'error');
        }
    }

    setupEventListeners() {
        const categoryPills = document.querySelectorAll('.category-pill');
        categoryPills.forEach(pill => {
            pill.addEventListener('click', () => {
                categoryPills.forEach(p => {
                    p.classList.remove('active');
                });
                pill.classList.add('active');

                this.currentCategory = pill.dataset.category;
                this.filterPrompts();
            });
        });

        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.filterPrompts();
        });
    }

    filterPrompts() {
        this.filteredPrompts = this.prompts.filter(prompt => {
            const matchesCategory = this.currentCategory === 'all' || prompt.category === this.currentCategory;
            const matchesSearch = !this.searchQuery ||
                prompt.title.toLowerCase().includes(this.searchQuery) ||
                prompt.description.toLowerCase().includes(this.searchQuery) ||
                (prompt.tags && prompt.tags.some(tag => tag.toLowerCase().includes(this.searchQuery)));

            return matchesCategory && matchesSearch;
        });

        this.renderPrompts();
    }

    renderPrompts() {
        const grid = document.getElementById('promptsGrid');

        if (this.filteredPrompts.length === 0) {
            grid.innerHTML = `
                <div class="text-center py-12 col-span-full">
                    <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-gray-600 text-lg">No prompts found</p>
                    <p class="text-gray-500">Try adjusting your filters or search query</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredPrompts.map(prompt => `
            <div class="prompt-card bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold text-primary mb-2">${prompt.title}</h3>
                        <span class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                            ${prompt.category}
                        </span>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold text-secondary">$${parseFloat(prompt.price).toFixed(2)}</div>
                        ${prompt.rating > 0 ? `
                            <div class="flex items-center justify-end mt-1">
                                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                                <span class="ml-1 text-sm text-gray-600">${parseFloat(prompt.rating).toFixed(1)}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <p class="text-gray-600 mb-4 flex-grow">${prompt.description}</p>

                ${prompt.tags && prompt.tags.length > 0 ? `
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${prompt.tags.slice(0, 3).map(tag => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">${tag}</span>
                        `).join('')}
                    </div>
                ` : ''}

                <button
                    onclick="shopManager.purchasePrompt('${prompt.id}')"
                    class="w-full bg-gradient-to-r from-secondary to-accent text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                    Purchase Now
                </button>
            </div>
        `).join('');
    }

    async purchasePrompt(promptId) {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            authManager.showAuthModal();
            authManager.showNotification('Please sign in to purchase prompts', 'error');
            return;
        }

        const prompt = this.prompts.find(p => p.id === promptId);
        if (!prompt) return;

        const { data: existingPurchase } = await supabase
            .from('purchases')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('prompt_id', promptId)
            .maybeSingle();

        if (existingPurchase) {
            authManager.showNotification('You already own this prompt!', 'error');
            this.showPromptContent(prompt);
            return;
        }

        this.showCheckoutModal(prompt);
    }

    showCheckoutModal(prompt) {
        const modal = document.createElement('div');
        modal.id = 'checkoutModal';
        modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-primary">Complete Purchase</h2>
                    <button onclick="document.getElementById('checkoutModal').remove()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 class="font-semibold text-lg mb-2">${prompt.title}</h3>
                    <p class="text-gray-600 text-sm mb-3">${prompt.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-700">Price:</span>
                        <span class="text-2xl font-bold text-secondary">$${parseFloat(prompt.price).toFixed(2)}</span>
                    </div>
                </div>

                <div class="mb-6">
                    <p class="text-sm text-gray-600 mb-4">
                        This is a demo checkout. In production, this would integrate with Stripe or another payment processor.
                    </p>

                    <div class="space-y-3">
                        <input type="text" placeholder="Card Number" class="w-full px-4 py-2 border border-gray-300 rounded-lg" value="4242 4242 4242 4242" readonly>
                        <div class="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="MM/YY" class="px-4 py-2 border border-gray-300 rounded-lg" value="12/25" readonly>
                            <input type="text" placeholder="CVC" class="px-4 py-2 border border-gray-300 rounded-lg" value="123" readonly>
                        </div>
                    </div>
                </div>

                <button
                    onclick="shopManager.completePurchase('${prompt.id}')"
                    class="w-full bg-gradient-to-r from-secondary to-accent text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                    Complete Purchase - $${parseFloat(prompt.price).toFixed(2)}
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    async completePurchase(promptId) {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;

        const prompt = this.prompts.find(p => p.id === promptId);

        try {
            const { error } = await supabase
                .from('purchases')
                .insert({
                    user_id: session.user.id,
                    prompt_id: promptId,
                    amount: prompt.price,
                    transaction_id: 'demo_' + Date.now()
                });

            if (error) throw error;

            document.getElementById('checkoutModal')?.remove();
            authManager.showNotification('Purchase successful!', 'success');

            setTimeout(() => {
                this.showPromptContent(prompt);
            }, 500);
        } catch (error) {
            console.error('Purchase error:', error);
            authManager.showNotification('Purchase failed: ' + error.message, 'error');
        }
    }

    showPromptContent(prompt) {
        const modal = document.createElement('div');
        modal.id = 'contentModal';
        modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-primary">${prompt.title}</h2>
                    <button onclick="document.getElementById('contentModal').remove()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="mb-6">
                    <h3 class="font-semibold mb-2">Description:</h3>
                    <p class="text-gray-600">${prompt.description}</p>
                </div>

                <div class="mb-6">
                    <h3 class="font-semibold mb-2">Full Prompt:</h3>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <pre class="whitespace-pre-wrap text-sm text-gray-700">${prompt.content}</pre>
                    </div>
                </div>

                <button
                    onclick="navigator.clipboard.writeText(\`${prompt.content.replace(/`/g, '\\`')}\`).then(() => window.authManager?.showNotification('Copied to clipboard!', 'success'))"
                    class="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                    Copy to Clipboard
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }
}

const shopManager = new ShopManager();
window.shopManager = shopManager;
