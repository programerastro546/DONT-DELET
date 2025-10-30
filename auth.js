import { createClient } from '@supabase/supabase-js';
import { config } from './config.js';

const supabaseUrl = config.supabaseUrl;
const supabaseAnonKey = config.supabaseAnonKey;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase configuration missing. Please check your configuration.');
    throw new Error('Supabase configuration is not properly set up.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        const { data: { session } } = await supabase.auth.getSession();
        this.currentUser = session?.user || null;
        this.updateUI();

        supabase.auth.onAuthStateChange((_event, session) => {
            (async () => {
                this.currentUser = session?.user || null;
                this.updateUI();
            })();
        });
    }

    updateUI() {
        const authButton = document.getElementById('authButton');
        const myPromptsLink = document.getElementById('myPromptsLink');

        if (authButton) {
            if (this.currentUser) {
                authButton.textContent = 'Sign Out';
                authButton.onclick = () => this.signOut();
            } else {
                authButton.textContent = 'Sign In';
                authButton.onclick = () => this.showAuthModal();
            }
        }

        if (myPromptsLink) {
            myPromptsLink.style.display = this.currentUser ? 'block' : 'none';
        }
    }

    showAuthModal() {
        const modal = document.createElement('div');
        modal.id = 'authModal';
        modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-primary">Welcome Back</h2>
                    <button onclick="document.getElementById('authModal').remove()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div id="authTabs" class="flex gap-4 mb-6 border-b">
                    <button class="tab-btn active pb-2 px-4 font-semibold border-b-2 border-secondary text-secondary" data-tab="signin">Sign In</button>
                    <button class="tab-btn pb-2 px-4 font-semibold text-gray-500" data-tab="signup">Sign Up</button>
                </div>

                <form id="authForm" class="space-y-4">
                    <div id="nameField" style="display: none;">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="fullName" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="John Doe">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="you@example.com">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="••••••••">
                    </div>

                    <div id="errorMessage" class="hidden bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm"></div>

                    <button type="submit" class="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all">
                        <span id="submitText">Sign In</span>
                    </button>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        const tabBtns = modal.querySelectorAll('.tab-btn');
        const form = modal.querySelector('#authForm');
        const nameField = modal.querySelector('#nameField');
        const submitText = modal.querySelector('#submitText');
        const errorMessage = modal.querySelector('#errorMessage');

        let currentTab = 'signin';

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('active', 'text-secondary', 'border-secondary', 'border-b-2');
                    b.classList.add('text-gray-500');
                });
                btn.classList.add('active', 'text-secondary', 'border-secondary', 'border-b-2');
                btn.classList.remove('text-gray-500');

                currentTab = btn.dataset.tab;
                nameField.style.display = currentTab === 'signup' ? 'block' : 'none';
                submitText.textContent = currentTab === 'signin' ? 'Sign In' : 'Sign Up';
            });
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            errorMessage.classList.add('hidden');

            const email = modal.querySelector('#email').value;
            const password = modal.querySelector('#password').value;
            const fullName = modal.querySelector('#fullName').value;

            try {
                if (currentTab === 'signup') {
                    const { data, error } = await supabase.auth.signUp({
                        email,
                        password,
                    });

                    if (error) throw error;

                    if (data.user) {
                        await supabase.from('profiles').insert({
                            id: data.user.id,
                            email: data.user.email,
                            full_name: fullName
                        });
                    }

                    this.showNotification('Account created successfully!', 'success');
                } else {
                    const { error } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });

                    if (error) throw error;

                    this.showNotification('Signed in successfully!', 'success');
                }

                modal.remove();
            } catch (error) {
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hidden');
            }
        });
    }

    async signOut() {
        await supabase.auth.signOut();
        this.showNotification('Signed out successfully', 'success');
        window.location.href = '/';
    }

    async requireAuth() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            window.location.href = '/';
            return false;
        }
        return true;
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } shadow-lg transform transition-all duration-300`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

export const authManager = new AuthManager();
