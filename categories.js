import { supabase } from './config.js';

export async function loadCategories() {
    const { data: categories, error } = await supabase
        .from('categories')
        .select(`
            *,
            subcategories (*)
        `)
        .order('sort_order', { ascending: true });

    if (error) {
        console.error('Error loading categories:', error);
        return [];
    }

    return categories.map(cat => ({
        ...cat,
        subcategories: cat.subcategories.sort((a, b) => a.sort_order - b.sort_order)
    }));
}

export function renderCategoryNav(categories, onCategorySelect) {
    const nav = document.createElement('div');
    nav.className = 'bg-white rounded-xl shadow-lg p-6 mb-8';

    nav.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
        <div class="space-y-4">
            ${categories.map(category => `
                <div class="category-section">
                    <button
                        class="category-btn w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all"
                        data-category-id="${category.id}"
                        data-category-slug="${category.slug}"
                    >
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">${category.icon}</span>
                            <span class="font-semibold text-gray-900 text-left">${category.name}</span>
                        </div>
                        <svg class="w-5 h-5 text-gray-400 transform transition-transform category-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="subcategory-list hidden pl-12 pt-2 space-y-2">
                        ${category.subcategories.map(sub => `
                            <button
                                class="subcategory-btn w-full text-left p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all"
                                data-subcategory-id="${sub.id}"
                                data-category-id="${category.id}"
                            >
                                ${sub.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        <button
            id="clearCategoryFilter"
            class="hidden w-full mt-4 p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all"
        >
            Clear Filter
        </button>
    `;

    nav.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = btn.closest('.category-section');
            const subList = section.querySelector('.subcategory-list');
            const chevron = btn.querySelector('.category-chevron');

            subList.classList.toggle('hidden');
            chevron.classList.toggle('rotate-180');
        });
    });

    nav.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subcategoryId = btn.dataset.subcategoryId;
            const categoryId = btn.dataset.categoryId;

            nav.querySelectorAll('.subcategory-btn').forEach(b => b.classList.remove('bg-blue-100', 'text-blue-700', 'font-semibold'));
            btn.classList.add('bg-blue-100', 'text-blue-700', 'font-semibold');

            document.getElementById('clearCategoryFilter').classList.remove('hidden');

            if (onCategorySelect) {
                onCategorySelect(categoryId, subcategoryId);
            }
        });
    });

    nav.querySelector('#clearCategoryFilter').addEventListener('click', () => {
        nav.querySelectorAll('.subcategory-btn').forEach(b => b.classList.remove('bg-blue-100', 'text-blue-700', 'font-semibold'));
        nav.querySelector('#clearCategoryFilter').classList.add('hidden');

        if (onCategorySelect) {
            onCategorySelect(null, null);
        }
    });

    return nav;
}
