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
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            ${categories.map(category => `
                <div class="category-section">
                    <button
                        class="category-btn w-full aspect-square flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg"
                        data-category-id="${category.id}"
                        data-category-slug="${category.slug}"
                    >
                        <span class="text-4xl mb-2">${category.icon}</span>
                        <span class="font-semibold text-gray-900 text-center text-sm leading-tight">${category.name}</span>
                    </button>
                    <div class="subcategory-list hidden mt-2 space-y-2 col-span-full">
                        <div class="bg-blue-50 rounded-lg p-4">
                            <div class="flex flex-wrap gap-2">
                                ${category.subcategories.map(sub => `
                                    <button
                                        class="subcategory-btn px-4 py-2 bg-white text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg transition-all font-medium text-sm border border-blue-200"
                                        data-subcategory-id="${sub.id}"
                                        data-category-id="${category.id}"
                                    >
                                        ${sub.name}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <button
            id="clearCategoryFilter"
            class="hidden w-full mt-6 p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all"
        >
            Clear Filter & Show All Prompts
        </button>
    `;

    nav.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = btn.closest('.category-section');
            const subList = section.querySelector('.subcategory-list');

            nav.querySelectorAll('.subcategory-list').forEach(list => {
                if (list !== subList) {
                    list.classList.add('hidden');
                }
            });

            nav.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('ring-4', 'ring-blue-500');
            });

            subList.classList.toggle('hidden');

            if (!subList.classList.contains('hidden')) {
                btn.classList.add('ring-4', 'ring-blue-500');
            }
        });
    });

    nav.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subcategoryId = btn.dataset.subcategoryId;
            const categoryId = btn.dataset.categoryId;

            nav.querySelectorAll('.subcategory-btn').forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            btn.classList.remove('bg-white', 'text-gray-700');
            btn.classList.add('bg-blue-600', 'text-white');

            document.getElementById('clearCategoryFilter').classList.remove('hidden');

            if (onCategorySelect) {
                onCategorySelect(categoryId, subcategoryId);
            }
        });
    });

    nav.querySelector('#clearCategoryFilter').addEventListener('click', () => {
        nav.querySelectorAll('.subcategory-btn').forEach(b => {
            b.classList.remove('bg-blue-600', 'text-white');
            b.classList.add('bg-white', 'text-gray-700');
        });
        nav.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('ring-4', 'ring-blue-500');
        });
        nav.querySelectorAll('.subcategory-list').forEach(list => {
            list.classList.add('hidden');
        });
        nav.querySelector('#clearCategoryFilter').classList.add('hidden');

        if (onCategorySelect) {
            onCategorySelect(null, null);
        }
    });

    return nav;
}
