import { supabase, authManager } from './auth.js';

class MyPromptsManager {
    constructor() {
        this.purchases = [];
        this.init();
    }

    async init() {
        const hasAuth = await authManager.requireAuth();
        if (!hasAuth) return;

        await this.loadPurchases();
        this.renderPrompts();
    }

    async loadPurchases() {
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) return;

            const { data, error } = await supabase
                .from('purchases')
                .select(`
                    *,
                    prompts (*)
                `)
                .eq('user_id', session.user.id)
                .order('purchased_at', { ascending: false });

            if (error) throw error;

            this.purchases = data || [];
        } catch (error) {
            console.error('Error loading purchases:', error);
            authManager.showNotification('Error loading your prompts', 'error');
        }
    }

    renderPrompts() {
        const grid = document.getElementById('promptsGrid');

        if (this.purchases.length === 0) {
            grid.innerHTML = `
                <div class="text-center py-12 col-span-full">
                    <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                    <p class="text-gray-600 text-lg mb-4">No purchased prompts yet</p>
                    <a href="shop.html" class="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all">
                        Browse Shop
                    </a>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.purchases.map(purchase => {
            const prompt = purchase.prompts;
            return `
                <div class="prompt-card bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex-1">
                            <h3 class="text-xl font-semibold text-primary mb-2">${prompt.title}</h3>
                            <span class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                                ${prompt.category}
                            </span>
                        </div>
                        <div class="text-right">
                            <div class="text-sm text-gray-500">Purchased</div>
                            <div class="text-sm font-medium text-gray-700">${new Date(purchase.purchased_at).toLocaleDateString()}</div>
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

                    <div class="flex gap-2">
                        <button
                            onclick="myPromptsManager.viewPrompt('${prompt.id}')"
                            class="flex-1 bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                        >
                            View Prompt
                        </button>
                        <button
                            onclick="navigator.clipboard.writeText(\`${prompt.content.replace(/`/g, '\\`')}\`).then(() => window.authManager?.showNotification('Copied to clipboard!', 'success'))"
                            class="px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                            title="Copy to clipboard"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    viewPrompt(promptId) {
        const purchase = this.purchases.find(p => p.prompts.id === promptId);
        if (!purchase) return;

        const prompt = purchase.prompts;

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

const myPromptsManager = new MyPromptsManager();
window.myPromptsManager = myPromptsManager;
