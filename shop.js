const prompts = [
    {
        id: 1,
        title: "Creative Writing Assistant",
        description: "Act as a creative writing assistant. Help me develop characters, plot twists, and dialogue for stories.",
        fullPrompt: "Act as a creative writing assistant. Help me develop characters, plot twists, and dialogue for stories. When I provide a concept or scenario, give me detailed character profiles with motivations, backstories, and unique traits. Suggest compelling plot twists that fit the narrative naturally. Create authentic dialogue that reveals character personality and advances the story.",
        author: "Sarah Chen",
        rating: 4.8,
        tags: ["creative", "writing", "fantasy"],
        platform: "ChatGPT"
    },
    {
        id: 2,
        title: "Code Review Expert",
        description: "Review code for best practices, performance, and bugs with clear explanations.",
        fullPrompt: "Review code for best practices, performance, and bugs with clear explanations. Analyze the provided code and identify: 1) Potential bugs or logic errors, 2) Performance bottlenecks and optimization opportunities, 3) Code readability and maintainability issues, 4) Security vulnerabilities, 5) Best practice violations. For each issue, explain why it matters and suggest specific improvements with code examples.",
        author: "Mike Rodriguez",
        rating: 4.9,
        tags: ["programming", "code-review", "best-practices"],
        platform: "Claude"
    },
    {
        id: 3,
        title: "Marketing Strategy Generator",
        description: "Build marketing plans and growth tactics for startups with measurable KPIs.",
        fullPrompt: "Build marketing plans and growth tactics for startups with measurable KPIs. Create comprehensive marketing strategies that include: target audience analysis, positioning strategy, channel recommendations (paid, organic, social), content calendar suggestions, budget allocation, and specific KPIs to track success. Focus on cost-effective tactics suitable for early-stage companies.",
        author: "Emma Thompson",
        rating: 4.7,
        tags: ["marketing", "strategy", "startups"],
        platform: "ChatGPT"
    },
    {
        id: 4,
        title: "Data Analysis Interpreter",
        description: "Explain datasets, stats, and visualizations; give actionable insights.",
        fullPrompt: "Explain datasets, stats, and visualizations; give actionable insights. When provided with data or statistical information: 1) Summarize key findings in plain language, 2) Identify patterns and trends, 3) Explain the significance of statistical measures, 4) Suggest appropriate visualizations, 5) Provide actionable business recommendations based on the data. Make complex analysis accessible to non-technical stakeholders.",
        author: "David Kim",
        rating: 4.6,
        tags: ["data-analysis", "statistics", "visualization"],
        platform: "Claude"
    },
    {
        id: 5,
        title: "UI/UX Design Consultant",
        description: "Provide interface feedback and UX improvements with design trends.",
        fullPrompt: "Provide interface feedback and UX improvements with design trends. Analyze user interfaces and provide: 1) Usability assessment following Nielsen's heuristics, 2) Visual hierarchy and layout recommendations, 3) Accessibility improvements (WCAG compliance), 4) Current design trend alignment, 5) Mobile responsiveness considerations, 6) User flow optimization. Include specific examples and mockup suggestions.",
        author: "Lisa Wang",
        rating: 4.8,
        tags: ["design", "ui-ux", "interface"],
        platform: "Claude"
    },
    {
        id: 6,
        title: "Business Plan Analyzer",
        description: "Evaluate business plans, highlight risks, and suggest improvements.",
        fullPrompt: "Evaluate business plans, highlight risks, and suggest improvements. Review business plans systematically: 1) Assess market opportunity and competitive landscape, 2) Evaluate financial projections for realism, 3) Identify potential risks and mitigation strategies, 4) Review operational feasibility, 5) Suggest improvements to strengthen the plan. Provide constructive feedback that helps entrepreneurs refine their strategy.",
        author: "James Wilson",
        rating: 4.5,
        tags: ["business", "strategy", "analysis"],
        platform: "ChatGPT"
    },
    {
        id: 7,
        title: "Language Learning Partner",
        description: "Correct grammar and help practice natural conversations in Spanish.",
        fullPrompt: "Correct grammar and help practice natural conversations in Spanish. Act as a patient language tutor: 1) Engage in conversational Spanish appropriate to my level, 2) Correct mistakes gently with explanations, 3) Introduce new vocabulary in context, 4) Explain grammar rules when needed, 5) Provide cultural context for expressions, 6) Suggest topics for practice. Focus on building confidence and natural fluency.",
        author: "Maria Garcia",
        rating: 4.7,
        tags: ["language", "learning", "spanish"],
        platform: "Claude"
    },
    {
        id: 8,
        title: "Recipe Creator and Modifier",
        description: "Invent and adapt recipes for dietary preferences or ingredients.",
        fullPrompt: "Invent and adapt recipes for dietary preferences or ingredients. Create or modify recipes based on: 1) Available ingredients or dietary restrictions (vegan, gluten-free, keto, etc.), 2) Cooking skill level and equipment, 3) Time constraints, 4) Serving size needs. Provide clear instructions, ingredient substitutions, nutritional information, and cooking tips. Make recipes accessible and delicious.",
        author: "Chef Robert",
        rating: 4.4,
        tags: ["cooking", "recipes", "dietary"],
        platform: "Claude"
    },
    {
        id: 9,
        title: "Fitness and Nutrition Coach",
        description: "Create workouts and meal plans with progression tracking.",
        fullPrompt: "Create workouts and meal plans with progression tracking. Design personalized fitness programs: 1) Assess current fitness level and goals, 2) Create progressive workout plans (strength, cardio, flexibility), 3) Develop meal plans matching caloric and macro needs, 4) Provide form guidance for exercises, 5) Suggest progression strategies, 6) Track and adjust based on results. Focus on sustainable, science-backed approaches.",
        author: "Alex Johnson",
        rating: 4.6,
        tags: ["fitness", "nutrition", "health"],
        platform: "Claude"
    },
    {
        id: 10,
        title: "Travel Itinerary Planner",
        description: "Plan trips with budgets, cultural tips, and hidden-gem destinations.",
        fullPrompt: "Plan trips with budgets, cultural tips, and hidden-gem destinations. Create comprehensive travel itineraries: 1) Balance popular attractions with local hidden gems, 2) Provide day-by-day schedules with realistic timing, 3) Include budget breakdowns for accommodation, food, activities, 4) Share cultural etiquette and useful phrases, 5) Suggest optimal travel times and booking strategies, 6) Recommend local restaurants and experiences. Make travel planning stress-free and exciting.",
        author: "Travel Expert Lisa",
        rating: 4.8,
        tags: ["travel", "planning", "itinerary"],
        platform: "Claude"
    },
    {
        id: 11,
        title: "Meditation and Mindfulness Guide",
        description: "Offer daily mindfulness and stress-relief practices.",
        fullPrompt: "Offer daily mindfulness and stress-relief practices. Guide users through: 1) Various meditation techniques (breathing, body scan, loving-kindness), 2) Mindfulness exercises for different situations (work stress, anxiety, sleep), 3) Progressive muscle relaxation, 4) Gratitude and journaling prompts, 5) Building consistent practice habits. Provide gentle, non-judgmental guidance that makes mindfulness accessible to beginners and valuable for experienced practitioners.",
        author: "Zen Master Tom",
        rating: 4.7,
        tags: ["mindfulness", "wellness", "mental-health"],
        platform: "Claude"
    },
    {
        id: 12,
        title: "Financial Advisor Assistant",
        description: "Give budgeting and investment guidance with practical insights.",
        fullPrompt: "Give budgeting and investment guidance with practical insights. Provide financial advice: 1) Create personalized budgets using 50/30/20 or similar frameworks, 2) Explain investment concepts (stocks, bonds, ETFs, retirement accounts), 3) Suggest strategies for different goals (emergency fund, retirement, home purchase), 4) Analyze spending patterns and suggest optimizations, 5) Explain tax implications in simple terms. Focus on practical, actionable advice suitable for various financial situations.",
        author: "Financial Guru Amy",
        rating: 4.5,
        tags: ["finance", "investing", "budgeting"],
        platform: "Claude"
    }
];

let filteredPrompts = [...prompts];

function renderPrompts(promptsToRender) {
    const grid = document.getElementById('promptsGrid');
    const noResults = document.getElementById('noResults');

    if (promptsToRender.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    grid.innerHTML = promptsToRender.map(prompt => `
        <div class="prompt-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer" onclick="openModal(${prompt.id})">
            <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-xl font-bold text-gray-900 flex-1 pr-4">${prompt.title}</h3>
                    <span class="platform-badge platform-${prompt.platform.toLowerCase()}">${prompt.platform}</span>
                </div>

                <p class="text-gray-600 mb-4 line-clamp-2">${prompt.description}</p>

                <div class="flex items-center mb-4">
                    <div class="flex items-center">
                        ${generateStars(prompt.rating)}
                        <span class="ml-2 text-sm font-semibold text-gray-700">${prompt.rating}</span>
                    </div>
                    <span class="mx-2 text-gray-300">•</span>
                    <span class="text-sm text-gray-600">👤 ${prompt.author}</span>
                </div>

                <div class="flex flex-wrap gap-2">
                    ${prompt.tags.map(tag => `<span class="tag-pill">🏷️ ${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<svg class="w-5 h-5 star inline" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    if (hasHalfStar) {
        stars += '<svg class="w-5 h-5 star inline" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#e5e7eb"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<svg class="w-5 h-5 inline text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    return stars;
}

function openModal(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="mb-6">
            <div class="flex items-start justify-between mb-4">
                <h2 class="text-3xl font-bold text-gray-900 flex-1 pr-8">🧠 ${prompt.title}</h2>
                <span class="platform-badge platform-${prompt.platform.toLowerCase()}">${prompt.platform}</span>
            </div>

            <div class="flex items-center mb-4">
                <div class="flex items-center">
                    ${generateStars(prompt.rating)}
                    <span class="ml-2 text-lg font-semibold text-gray-700">${prompt.rating} ⭐</span>
                </div>
                <span class="mx-3 text-gray-300">•</span>
                <span class="text-gray-700">👤 ${prompt.author}</span>
            </div>

            <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</h3>
                <p class="text-gray-700 leading-relaxed">${prompt.description}</p>
            </div>

            <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Tags</h3>
                <div class="flex flex-wrap gap-2">
                    ${prompt.tags.map(tag => `<span class="tag-pill">🏷️ ${tag}</span>`).join('')}
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Full Prompt</h3>
                <div class="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                    <p class="text-gray-800 leading-relaxed whitespace-pre-wrap">${prompt.fullPrompt}</p>
                </div>
            </div>

            <button
                onclick="copyPrompt(${prompt.id})"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                📋 Copy Prompt
            </button>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

function copyPrompt(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;

    navigator.clipboard.writeText(prompt.fullPrompt).then(() => {
        showToast('Copied! ✓');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy', 'error');
    });
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    toast.className = `toast ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg mb-2 font-semibold`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
        filteredPrompts = [...prompts];
    } else {
        filteredPrompts = prompts.filter(prompt => {
            return prompt.title.toLowerCase().includes(query) ||
                   prompt.description.toLowerCase().includes(query) ||
                   prompt.author.toLowerCase().includes(query) ||
                   prompt.tags.some(tag => tag.toLowerCase().includes(query)) ||
                   prompt.platform.toLowerCase().includes(query);
        });
    }

    renderPrompts(filteredPrompts);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

window.openModal = openModal;
window.closeModal = closeModal;
window.copyPrompt = copyPrompt;

renderPrompts(filteredPrompts);
