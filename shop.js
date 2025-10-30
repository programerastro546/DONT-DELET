const prompts = [
    {
        id: 1,
        title: "Creative Writing Assistant",
        description: "Act as a creative writing assistant. Help me develop characters, plot twists, and dialogue for stories.",
        fullPrompt: "Act as a creative writing assistant. Help me develop characters, plot twists, and dialogue for stories. When I provide a concept or scenario, give me detailed character profiles with motivations, backstories, and unique traits. Suggest compelling plot twists that fit the narrative naturally. Create authentic dialogue that reveals character personality and advances the story.",
        author: "Sarah Chen",
        rating: 4.8,
        tags: ["creative", "writing", "fantasy"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 2,
        title: "Code Review Expert",
        description: "Review code for best practices, performance, and bugs with clear explanations.",
        fullPrompt: "Review code for best practices, performance, and bugs with clear explanations. Analyze the provided code and identify: 1) Potential bugs or logic errors, 2) Performance bottlenecks and optimization opportunities, 3) Code readability and maintainability issues, 4) Security vulnerabilities, 5) Best practice violations. For each issue, explain why it matters and suggest specific improvements with code examples.",
        author: "Mike Rodriguez",
        rating: 4.9,
        tags: ["programming", "code-review", "best-practices"],
        platform: "Claude",
        price: 14.99
    },
    {
        id: 3,
        title: "Marketing Strategy Generator",
        description: "Build marketing plans and growth tactics for startups with measurable KPIs.",
        fullPrompt: "Build marketing plans and growth tactics for startups with measurable KPIs. Create comprehensive marketing strategies that include: target audience analysis, positioning strategy, channel recommendations (paid, organic, social), content calendar suggestions, budget allocation, and specific KPIs to track success. Focus on cost-effective tactics suitable for early-stage companies.",
        author: "Emma Thompson",
        rating: 4.7,
        tags: ["marketing", "strategy", "startups"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 4,
        title: "Data Analysis Interpreter",
        description: "Explain datasets, stats, and visualizations; give actionable insights.",
        fullPrompt: "Explain datasets, stats, and visualizations; give actionable insights. When provided with data or statistical information: 1) Summarize key findings in plain language, 2) Identify patterns and trends, 3) Explain the significance of statistical measures, 4) Suggest appropriate visualizations, 5) Provide actionable business recommendations based on the data. Make complex analysis accessible to non-technical stakeholders.",
        author: "David Kim",
        rating: 4.6,
        tags: ["data-analysis", "statistics", "visualization"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 5,
        title: "UI/UX Design Consultant",
        description: "Provide interface feedback and UX improvements with design trends.",
        fullPrompt: "Provide interface feedback and UX improvements with design trends. Analyze user interfaces and provide: 1) Usability assessment following Nielsen's heuristics, 2) Visual hierarchy and layout recommendations, 3) Accessibility improvements (WCAG compliance), 4) Current design trend alignment, 5) Mobile responsiveness considerations, 6) User flow optimization. Include specific examples and mockup suggestions.",
        author: "Lisa Wang",
        rating: 4.8,
        tags: ["design", "ui-ux", "interface"],
        platform: "Claude",
        price: 13.99
    },
    {
        id: 6,
        title: "Business Plan Analyzer",
        description: "Evaluate business plans, highlight risks, and suggest improvements.",
        fullPrompt: "Evaluate business plans, highlight risks, and suggest improvements. Review business plans systematically: 1) Assess market opportunity and competitive landscape, 2) Evaluate financial projections for realism, 3) Identify potential risks and mitigation strategies, 4) Review operational feasibility, 5) Suggest improvements to strengthen the plan. Provide constructive feedback that helps entrepreneurs refine their strategy.",
        author: "James Wilson",
        rating: 4.5,
        tags: ["business", "strategy", "analysis"],
        platform: "ChatGPT",
        price: 10.99
    },
    {
        id: 7,
        title: "Language Learning Partner",
        description: "Correct grammar and help practice natural conversations in Spanish.",
        fullPrompt: "Correct grammar and help practice natural conversations in Spanish. Act as a patient language tutor: 1) Engage in conversational Spanish appropriate to my level, 2) Correct mistakes gently with explanations, 3) Introduce new vocabulary in context, 4) Explain grammar rules when needed, 5) Provide cultural context for expressions, 6) Suggest topics for practice. Focus on building confidence and natural fluency.",
        author: "Maria Garcia",
        rating: 4.7,
        tags: ["language", "learning", "spanish"],
        platform: "Claude",
        price: 8.99
    },
    {
        id: 8,
        title: "Recipe Creator and Modifier",
        description: "Invent and adapt recipes for dietary preferences or ingredients.",
        fullPrompt: "Invent and adapt recipes for dietary preferences or ingredients. Create or modify recipes based on: 1) Available ingredients or dietary restrictions (vegan, gluten-free, keto, etc.), 2) Cooking skill level and equipment, 3) Time constraints, 4) Serving size needs. Provide clear instructions, ingredient substitutions, nutritional information, and cooking tips. Make recipes accessible and delicious.",
        author: "Chef Robert",
        rating: 4.4,
        tags: ["cooking", "recipes", "dietary"],
        platform: "Claude",
        price: 7.99
    },
    {
        id: 9,
        title: "Fitness and Nutrition Coach",
        description: "Create workouts and meal plans with progression tracking.",
        fullPrompt: "Create workouts and meal plans with progression tracking. Design personalized fitness programs: 1) Assess current fitness level and goals, 2) Create progressive workout plans (strength, cardio, flexibility), 3) Develop meal plans matching caloric and macro needs, 4) Provide form guidance for exercises, 5) Suggest progression strategies, 6) Track and adjust based on results. Focus on sustainable, science-backed approaches.",
        author: "Alex Johnson",
        rating: 4.6,
        tags: ["fitness", "nutrition", "health"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 10,
        title: "Travel Itinerary Planner",
        description: "Plan trips with budgets, cultural tips, and hidden-gem destinations.",
        fullPrompt: "Plan trips with budgets, cultural tips, and hidden-gem destinations. Create comprehensive travel itineraries: 1) Balance popular attractions with local hidden gems, 2) Provide day-by-day schedules with realistic timing, 3) Include budget breakdowns for accommodation, food, activities, 4) Share cultural etiquette and useful phrases, 5) Suggest optimal travel times and booking strategies, 6) Recommend local restaurants and experiences. Make travel planning stress-free and exciting.",
        author: "Travel Expert Lisa",
        rating: 4.8,
        tags: ["travel", "planning", "itinerary"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 11,
        title: "Meditation and Mindfulness Guide",
        description: "Offer daily mindfulness and stress-relief practices.",
        fullPrompt: "Offer daily mindfulness and stress-relief practices. Guide users through: 1) Various meditation techniques (breathing, body scan, loving-kindness), 2) Mindfulness exercises for different situations (work stress, anxiety, sleep), 3) Progressive muscle relaxation, 4) Gratitude and journaling prompts, 5) Building consistent practice habits. Provide gentle, non-judgmental guidance that makes mindfulness accessible to beginners and valuable for experienced practitioners.",
        author: "Zen Master Tom",
        rating: 4.7,
        tags: ["mindfulness", "wellness", "mental-health"],
        platform: "Claude",
        price: 8.99
    },
    {
        id: 12,
        title: "Financial Advisor Assistant",
        description: "Give budgeting and investment guidance with practical insights.",
        fullPrompt: "Give budgeting and investment guidance with practical insights. Provide financial advice: 1) Create personalized budgets using 50/30/20 or similar frameworks, 2) Explain investment concepts (stocks, bonds, ETFs, retirement accounts), 3) Suggest strategies for different goals (emergency fund, retirement, home purchase), 4) Analyze spending patterns and suggest optimizations, 5) Explain tax implications in simple terms. Focus on practical, actionable advice suitable for various financial situations.",
        author: "Financial Guru Amy",
        rating: 4.5,
        tags: ["finance", "investing", "budgeting"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 13,
        title: "Email Marketing Specialist",
        description: "Craft compelling email campaigns that convert subscribers into customers.",
        fullPrompt: "Craft compelling email campaigns that convert subscribers into customers. Design email sequences with attention-grabbing subject lines, persuasive body copy, and clear CTAs. Include A/B testing strategies, segmentation recommendations, and automation workflows for welcome series, abandoned cart, and re-engagement campaigns.",
        author: "Kelly Martinez",
        rating: 4.6,
        tags: ["marketing", "email", "conversion"],
        platform: "ChatGPT",
        price: 10.99
    },
    {
        id: 14,
        title: "SEO Content Optimizer",
        description: "Optimize content for search engines while maintaining readability and value.",
        fullPrompt: "Optimize content for search engines while maintaining readability and value. Analyze content for keyword density, semantic relevance, readability scores, and technical SEO factors. Provide recommendations for meta descriptions, header structure, internal linking, and featured snippet optimization.",
        author: "Tom Sanders",
        rating: 4.7,
        tags: ["seo", "content", "optimization"],
        platform: "Claude",
        price: 13.99
    },
    {
        id: 15,
        title: "Social Media Content Creator",
        description: "Generate engaging posts for Instagram, TikTok, Twitter, and LinkedIn.",
        fullPrompt: "Generate engaging posts for Instagram, TikTok, Twitter, and LinkedIn. Create platform-specific content with hooks, storytelling elements, hashtag strategies, and posting schedules. Include carousel ideas, video scripts, and caption formulas that drive engagement and grow followers organically.",
        author: "Nina Chen",
        rating: 4.8,
        tags: ["social-media", "content", "engagement"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 16,
        title: "Product Description Writer",
        description: "Write persuasive product descriptions that highlight benefits and drive sales.",
        fullPrompt: "Write persuasive product descriptions that highlight benefits and drive sales. Focus on emotional triggers, unique selling propositions, feature-benefit translations, and SEO-friendly copy. Include formatting recommendations for bullet points, headlines, and trust-building elements.",
        author: "Rachel Green",
        rating: 4.5,
        tags: ["copywriting", "ecommerce", "sales"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 17,
        title: "Resume and Cover Letter Expert",
        description: "Create ATS-friendly resumes and compelling cover letters for job applications.",
        fullPrompt: "Create ATS-friendly resumes and compelling cover letters for job applications. Optimize for applicant tracking systems while showcasing achievements with quantifiable results. Tailor content to specific job descriptions, highlight transferable skills, and craft compelling narratives.",
        author: "Career Coach Dan",
        rating: 4.7,
        tags: ["career", "resume", "job-search"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 18,
        title: "Interview Preparation Coach",
        description: "Prepare for job interviews with tailored questions and winning answers.",
        fullPrompt: "Prepare for job interviews with tailored questions and winning answers. Generate company-specific interview questions, STAR method responses, behavioral examples, and salary negotiation strategies. Include tips for virtual interviews and follow-up communications.",
        author: "Interview Pro Sarah",
        rating: 4.6,
        tags: ["career", "interview", "preparation"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 19,
        title: "Podcast Script Writer",
        description: "Write engaging podcast scripts with hooks, segments, and smooth transitions.",
        fullPrompt: "Write engaging podcast scripts with hooks, segments, and smooth transitions. Structure episodes with compelling intros, valuable content sections, guest interview questions, ad placements, and memorable outros. Include timing notes and delivery suggestions.",
        author: "Audio Creator Max",
        rating: 4.5,
        tags: ["podcast", "audio", "content"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 20,
        title: "YouTube Video Optimizer",
        description: "Optimize YouTube videos for views with titles, descriptions, and tags.",
        fullPrompt: "Optimize YouTube videos for views with titles, descriptions, and tags. Create click-worthy titles, SEO-optimized descriptions, strategic tags, and engaging thumbnails concepts. Include video structure recommendations, retention hooks, and end screen strategies.",
        author: "YouTuber Jake",
        rating: 4.8,
        tags: ["youtube", "video", "optimization"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 21,
        title: "Legal Document Analyzer",
        description: "Simplify complex legal documents and highlight key terms and risks.",
        fullPrompt: "Simplify complex legal documents and highlight key terms and risks. Break down contracts, terms of service, and agreements into plain language. Identify obligations, liabilities, termination clauses, and red flags that require attention or negotiation.",
        author: "Legal Expert Morgan",
        rating: 4.6,
        tags: ["legal", "contracts", "analysis"],
        platform: "Claude",
        price: 14.99
    },
    {
        id: 22,
        title: "Grant Proposal Writer",
        description: "Write compelling grant proposals that secure funding for projects.",
        fullPrompt: "Write compelling grant proposals that secure funding for projects. Structure proposals with clear problem statements, innovative solutions, measurable outcomes, budget justifications, and impact assessments. Tailor language to specific funders and grant requirements.",
        author: "Nonprofit Pro Linda",
        rating: 4.5,
        tags: ["grants", "nonprofit", "funding"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 23,
        title: "Academic Research Assistant",
        description: "Help with literature reviews, research methodology, and citation formatting.",
        fullPrompt: "Help with literature reviews, research methodology, and citation formatting. Synthesize academic sources, identify research gaps, suggest methodologies, and format citations in APA, MLA, Chicago, or Harvard styles. Assist with research questions and hypothesis formulation.",
        author: "Dr. Patricia Moore",
        rating: 4.7,
        tags: ["academic", "research", "writing"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 24,
        title: "Proofreading and Editing Pro",
        description: "Polish written content for grammar, clarity, tone, and style consistency.",
        fullPrompt: "Polish written content for grammar, clarity, tone, and style consistency. Provide developmental editing, line editing, and copy editing services. Check for grammar errors, awkward phrasing, logical flow, and style guide compliance. Enhance readability while preserving author voice.",
        author: "Editor Jane Smith",
        rating: 4.8,
        tags: ["editing", "proofreading", "writing"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 25,
        title: "Brand Voice Developer",
        description: "Define and maintain consistent brand voice across all communications.",
        fullPrompt: "Define and maintain consistent brand voice across all communications. Create brand voice guidelines including tone, vocabulary, personality traits, and communication principles. Provide examples for different contexts and channels with do's and don'ts.",
        author: "Branding Expert Chris",
        rating: 4.6,
        tags: ["branding", "voice", "marketing"],
        platform: "ChatGPT",
        price: 14.99
    },
    {
        id: 26,
        title: "Customer Service Response Templates",
        description: "Create empathetic, professional responses for common customer inquiries.",
        fullPrompt: "Create empathetic, professional responses for common customer inquiries. Develop templates for complaints, refund requests, technical support, product questions, and feedback acknowledgments. Balance customer satisfaction with company policies.",
        author: "Support Lead Anna",
        rating: 4.5,
        tags: ["customer-service", "support", "communication"],
        platform: "Claude",
        price: 8.99
    },
    {
        id: 27,
        title: "Sales Pitch Creator",
        description: "Craft persuasive sales pitches for products, services, and ideas.",
        fullPrompt: "Craft persuasive sales pitches for products, services, and ideas. Structure pitches with attention-grabbing openings, value propositions, social proof, objection handling, and compelling closes. Adapt for cold calls, warm leads, and presentations.",
        author: "Sales Guru Marcus",
        rating: 4.7,
        tags: ["sales", "pitch", "persuasion"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 28,
        title: "Technical Documentation Writer",
        description: "Create clear, user-friendly technical documentation and API guides.",
        fullPrompt: "Create clear, user-friendly technical documentation and API guides. Write installation guides, user manuals, API references, troubleshooting sections, and FAQ pages. Use consistent formatting, code examples, and visual aids for complex concepts.",
        author: "Tech Writer Ben",
        rating: 4.6,
        tags: ["technical", "documentation", "writing"],
        platform: "Claude",
        price: 14.99
    },
    {
        id: 29,
        title: "Press Release Writer",
        description: "Write newsworthy press releases that get media attention and coverage.",
        fullPrompt: "Write newsworthy press releases that get media attention and coverage. Follow AP style with compelling headlines, lead paragraphs, quotes, boilerplate, and contact information. Angle stories for maximum news value and journalist interest.",
        author: "PR Specialist Laura",
        rating: 4.5,
        tags: ["pr", "media", "communications"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 30,
        title: "Event Planning Assistant",
        description: "Plan memorable events with timelines, checklists, and vendor coordination.",
        fullPrompt: "Plan memorable events with timelines, checklists, and vendor coordination. Create detailed event plans including venue selection, catering, entertainment, decor, budget tracking, and contingency plans. Provide day-of schedules and troubleshooting guides.",
        author: "Event Pro Michelle",
        rating: 4.6,
        tags: ["events", "planning", "coordination"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 31,
        title: "Real Estate Listing Optimizer",
        description: "Write compelling property listings that attract buyers and renters.",
        fullPrompt: "Write compelling property listings that attract buyers and renters. Highlight unique features, neighborhood benefits, and lifestyle advantages. Use descriptive language, optimal photo sequencing, and strategic pricing presentation.",
        author: "Realtor Jessica",
        rating: 4.7,
        tags: ["real-estate", "copywriting", "sales"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 32,
        title: "Curriculum Designer",
        description: "Design educational curricula with learning objectives and assessments.",
        fullPrompt: "Design educational curricula with learning objectives and assessments. Create course outlines, lesson plans, learning activities, and evaluation methods aligned with educational standards. Include differentiation strategies for diverse learners.",
        author: "Educator Dr. James",
        rating: 4.5,
        tags: ["education", "curriculum", "teaching"],
        platform: "Claude",
        price: 13.99
    },
    {
        id: 33,
        title: "Chatbot Conversation Designer",
        description: "Design natural, helpful chatbot conversations for customer interactions.",
        fullPrompt: "Design natural, helpful chatbot conversations for customer interactions. Create conversation flows, intent recognition, entity extraction, fallback responses, and escalation paths. Balance automation efficiency with human-like empathy.",
        author: "UX Designer Sam",
        rating: 4.6,
        tags: ["chatbot", "ux", "conversation"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 34,
        title: "Game Design Consultant",
        description: "Develop engaging game mechanics, storylines, and player experiences.",
        fullPrompt: "Develop engaging game mechanics, storylines, and player experiences. Design core gameplay loops, progression systems, reward mechanisms, and narrative arcs. Balance challenge and accessibility for target audiences.",
        author: "Game Designer Tyler",
        rating: 4.7,
        tags: ["gaming", "design", "entertainment"],
        platform: "ChatGPT",
        price: 16.99
    },
    {
        id: 35,
        title: "Negotiation Strategy Coach",
        description: "Prepare winning negotiation strategies for business and personal scenarios.",
        fullPrompt: "Prepare winning negotiation strategies for business and personal scenarios. Analyze BATNA, develop value propositions, anticipate objections, and create win-win solutions. Include tactics for salary negotiations, contracts, and conflict resolution.",
        author: "Negotiator Prof. Allen",
        rating: 4.8,
        tags: ["negotiation", "strategy", "business"],
        platform: "Claude",
        price: 14.99
    },
    {
        id: 36,
        title: "Personal Brand Builder",
        description: "Build a powerful personal brand across professional platforms.",
        fullPrompt: "Build a powerful personal brand across professional platforms. Define unique value proposition, create content pillars, develop LinkedIn strategy, and build thought leadership. Include networking tactics and online reputation management.",
        author: "Personal Brand Expert Sophia",
        rating: 4.6,
        tags: ["branding", "career", "linkedin"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 37,
        title: "Crisis Communication Manager",
        description: "Handle PR crises with effective communication strategies and messaging.",
        fullPrompt: "Handle PR crises with effective communication strategies and messaging. Develop holding statements, press responses, internal communications, and stakeholder management plans. Include social media crisis protocols and reputation recovery strategies.",
        author: "Crisis Expert Robert",
        rating: 4.5,
        tags: ["pr", "crisis", "communications"],
        platform: "Claude",
        price: 17.99
    },
    {
        id: 38,
        title: "Voice Assistant Skill Developer",
        description: "Create engaging voice assistant skills for Alexa and Google Assistant.",
        fullPrompt: "Create engaging voice assistant skills for Alexa and Google Assistant. Design conversational flows, handle intents, manage session state, and create voice-first experiences. Include wake words, invocations, and skill discovery optimization.",
        author: "Voice Dev Maria",
        rating: 4.4,
        tags: ["voice", "alexa", "development"],
        platform: "Claude",
        price: 14.99
    },
    {
        id: 39,
        title: "Diversity and Inclusion Consultant",
        description: "Develop inclusive workplace policies and training programs.",
        fullPrompt: "Develop inclusive workplace policies and training programs. Assess organizational culture, identify bias, create DEI initiatives, and measure progress. Include unconscious bias training, inclusive hiring practices, and employee resource group support.",
        author: "DEI Expert Dr. Taylor",
        rating: 4.7,
        tags: ["dei", "hr", "workplace"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 40,
        title: "Conversion Rate Optimizer",
        description: "Increase website conversions through strategic optimization techniques.",
        fullPrompt: "Increase website conversions through strategic optimization techniques. Analyze user behavior, identify friction points, design A/B tests, and optimize landing pages, CTAs, and checkout flows. Include psychological triggers and persuasion principles.",
        author: "CRO Specialist Derek",
        rating: 4.8,
        tags: ["cro", "conversion", "optimization"],
        platform: "ChatGPT",
        price: 16.99
    },
    {
        id: 41,
        title: "App Store Optimization Expert",
        description: "Optimize mobile app listings for increased downloads and visibility.",
        fullPrompt: "Optimize mobile app listings for increased downloads and visibility. Create compelling app titles, descriptions, keywords, screenshots, and video previews. Include localization strategies, review management, and category optimization.",
        author: "ASO Pro Kevin",
        rating: 4.6,
        tags: ["aso", "mobile", "apps"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 42,
        title: "Sustainability Consultant",
        description: "Develop environmental sustainability strategies for businesses.",
        fullPrompt: "Develop environmental sustainability strategies for businesses. Conduct carbon footprint assessments, recommend reduction initiatives, create sustainability reports, and develop green marketing strategies. Include ESG reporting and certification guidance.",
        author: "Eco Expert Dr. Green",
        rating: 4.5,
        tags: ["sustainability", "environment", "esg"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 43,
        title: "Blockchain Explainer",
        description: "Explain blockchain, crypto, and Web3 concepts in simple terms.",
        fullPrompt: "Explain blockchain, crypto, and Web3 concepts in simple terms. Break down complex topics like smart contracts, DeFi, NFTs, DAOs, and tokenomics. Provide use cases, risk assessments, and beginner-friendly explanations without jargon.",
        author: "Crypto Educator Alex",
        rating: 4.4,
        tags: ["blockchain", "crypto", "web3"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 44,
        title: "Remote Work Productivity Coach",
        description: "Optimize productivity and work-life balance for remote professionals.",
        fullPrompt: "Optimize productivity and work-life balance for remote professionals. Provide time management strategies, home office setup recommendations, communication best practices, and burnout prevention techniques. Include tools and routines for distributed teams.",
        author: "Remote Pro Diana",
        rating: 4.7,
        tags: ["remote-work", "productivity", "balance"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 45,
        title: "Influencer Marketing Strategist",
        description: "Plan and execute influencer marketing campaigns that drive results.",
        fullPrompt: "Plan and execute influencer marketing campaigns that drive results. Identify ideal influencers, negotiate partnerships, create campaign briefs, measure ROI, and manage relationships. Include platform-specific strategies and compliance guidelines.",
        author: "Influencer Pro Megan",
        rating: 4.6,
        tags: ["influencer", "marketing", "social-media"],
        platform: "ChatGPT",
        price: 14.99
    },
    {
        id: 46,
        title: "Patent Application Assistant",
        description: "Help prepare patent applications with clear descriptions and claims.",
        fullPrompt: "Help prepare patent applications with clear descriptions and claims. Draft technical specifications, create claim structures, conduct prior art searches, and explain patentability requirements. Include provisional patent strategies and USPTO guidelines.",
        author: "Patent Agent Richard",
        rating: 4.5,
        tags: ["patent", "legal", "innovation"],
        platform: "Claude",
        price: 18.99
    },
    {
        id: 47,
        title: "Accessibility Auditor",
        description: "Audit and improve digital accessibility for inclusive user experiences.",
        fullPrompt: "Audit and improve digital accessibility for inclusive user experiences. Evaluate WCAG compliance, identify barriers for users with disabilities, recommend remediation strategies, and test with assistive technologies. Include ARIA best practices.",
        author: "A11y Expert Jordan",
        rating: 4.8,
        tags: ["accessibility", "wcag", "inclusion"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 48,
        title: "Conflict Resolution Mediator",
        description: "Facilitate productive conflict resolution in workplace and personal settings.",
        fullPrompt: "Facilitate productive conflict resolution in workplace and personal settings. Use mediation techniques, active listening, reframing, and collaborative problem-solving. Create agreements, manage emotions, and restore relationships.",
        author: "Mediator Carol",
        rating: 4.6,
        tags: ["conflict", "mediation", "communication"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 49,
        title: "Wine Sommelier Guide",
        description: "Provide wine recommendations, tasting notes, and food pairing suggestions.",
        fullPrompt: "Provide wine recommendations, tasting notes, and food pairing suggestions. Explain wine regions, varietals, production methods, and proper serving techniques. Create tasting experiences and cellar management advice for enthusiasts.",
        author: "Sommelier Pierre",
        rating: 4.5,
        tags: ["wine", "food", "hospitality"],
        platform: "ChatGPT",
        price: 10.99
    },
    {
        id: 50,
        title: "Chess Strategy Coach",
        description: "Improve chess skills with opening theory, tactics, and endgame strategies.",
        fullPrompt: "Improve chess skills with opening theory, tactics, and endgame strategies. Analyze positions, explain strategic concepts, recommend study plans, and provide puzzle sets. Include tournament preparation and psychological aspects of competitive chess.",
        author: "Grandmaster Viktor",
        rating: 4.7,
        tags: ["chess", "strategy", "games"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 51,
        title: "Standup Comedy Writer",
        description: "Write hilarious standup comedy material and develop your comedic voice.",
        fullPrompt: "Write hilarious standup comedy material and develop your comedic voice. Create setup-punchline structures, callbacks, crowd work suggestions, and timing notes. Help find personal stories with comedic angles and develop a consistent persona.",
        author: "Comedian Dave",
        rating: 4.6,
        tags: ["comedy", "writing", "entertainment"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 52,
        title: "Cybersecurity Advisor",
        description: "Assess security risks and implement protection strategies for digital assets.",
        fullPrompt: "Assess security risks and implement protection strategies for digital assets. Conduct vulnerability assessments, recommend security tools, create incident response plans, and provide employee training guidance. Include compliance with GDPR, CCPA, and industry standards.",
        author: "Security Expert Lisa",
        rating: 4.8,
        tags: ["security", "cyber", "privacy"],
        platform: "Claude",
        price: 17.99
    },
    {
        id: 53,
        title: "Interior Design Consultant",
        description: "Design beautiful, functional interior spaces with style and budget guidance.",
        fullPrompt: "Design beautiful, functional interior spaces with style and budget guidance. Provide room layouts, color schemes, furniture selections, lighting plans, and decor recommendations. Include mood boards, shopping lists, and DIY vs. professional guidance.",
        author: "Designer Olivia",
        rating: 4.5,
        tags: ["interior", "design", "home"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 54,
        title: "Wedding Speech Writer",
        description: "Craft heartfelt, memorable wedding speeches for any role.",
        fullPrompt: "Craft heartfelt, memorable wedding speeches for any role. Create personalized speeches for best man, maid of honor, parents, and couples. Include humor, emotion, structure, timing, and delivery tips for confident public speaking.",
        author: "Speech Writer Emma",
        rating: 4.4,
        tags: ["speeches", "weddings", "writing"],
        platform: "ChatGPT",
        price: 8.99
    },
    {
        id: 55,
        title: "Genealogy Research Assistant",
        description: "Trace family history and build comprehensive family trees.",
        fullPrompt: "Trace family history and build comprehensive family trees. Guide research through census records, vital records, immigration documents, and DNA testing. Organize findings, identify brick walls, and suggest next research steps.",
        author: "Genealogist Martha",
        rating: 4.5,
        tags: ["genealogy", "research", "family"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 56,
        title: "Pet Training Expert",
        description: "Train dogs and cats with positive reinforcement techniques.",
        fullPrompt: "Train dogs and cats with positive reinforcement techniques. Address behavioral issues, teach commands, solve problem behaviors, and strengthen human-animal bonds. Include puppy/kitten training, senior pet care, and enrichment activities.",
        author: "Trainer Victoria",
        rating: 4.7,
        tags: ["pets", "training", "animals"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 57,
        title: "Freelancer Business Coach",
        description: "Build a successful freelance business with client acquisition strategies.",
        fullPrompt: "Build a successful freelance business with client acquisition strategies. Develop pricing models, create proposals, manage projects, handle contracts, and scale services. Include portfolio building, networking, and work-life integration.",
        author: "Freelance Pro Jake",
        rating: 4.6,
        tags: ["freelance", "business", "career"],
        platform: "Claude",
        price: 13.99
    },
    {
        id: 58,
        title: "Music Theory Teacher",
        description: "Learn music theory from basics to advanced concepts.",
        fullPrompt: "Learn music theory from basics to advanced concepts. Explain scales, chords, harmony, rhythm, composition techniques, and analysis methods. Provide exercises, ear training suggestions, and practical applications for musicians.",
        author: "Musician Prof. David",
        rating: 4.5,
        tags: ["music", "theory", "education"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 59,
        title: "Startup Pivot Consultant",
        description: "Guide startups through strategic pivots with minimal disruption.",
        fullPrompt: "Guide startups through strategic pivots with minimal disruption. Analyze market signals, validate new directions, plan transition strategies, communicate with stakeholders, and preserve team morale. Include case studies and pivot frameworks.",
        author: "Startup Advisor Chen",
        rating: 4.7,
        tags: ["startup", "strategy", "pivots"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 60,
        title: "Book Publishing Guide",
        description: "Navigate traditional and self-publishing paths for authors.",
        fullPrompt: "Navigate traditional and self-publishing paths for authors. Explain query letters, literary agents, manuscript preparation, self-publishing platforms, book marketing, and launch strategies. Include cost breakdowns and timeline planning.",
        author: "Publisher Melissa",
        rating: 4.6,
        tags: ["publishing", "books", "writing"],
        platform: "ChatGPT",
        price: 14.99
    },
    {
        id: 61,
        title: "Vintage Fashion Curator",
        description: "Identify, authenticate, and style vintage clothing and accessories.",
        fullPrompt: "Identify, authenticate, and style vintage clothing and accessories. Explain eras, designers, quality indicators, care instructions, and valuation. Create outfit combinations and sustainable fashion strategies.",
        author: "Fashion Historian Kate",
        rating: 4.4,
        tags: ["fashion", "vintage", "style"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 62,
        title: "Urban Gardening Specialist",
        description: "Grow thriving gardens in small urban spaces and apartments.",
        fullPrompt: "Grow thriving gardens in small urban spaces and apartments. Plan container gardens, balcony setups, vertical gardens, and indoor growing systems. Include plant selection, soil management, pest control, and seasonal planning.",
        author: "Gardener Rosa",
        rating: 4.5,
        tags: ["gardening", "urban", "plants"],
        platform: "Claude",
        price: 8.99
    },
    {
        id: 63,
        title: "Astrology Birth Chart Reader",
        description: "Interpret natal charts with insights into personality and life patterns.",
        fullPrompt: "Interpret natal charts with insights into personality and life patterns. Explain sun, moon, rising signs, planetary aspects, houses, and transits. Provide personalized readings while maintaining ethical boundaries.",
        author: "Astrologer Luna",
        rating: 4.3,
        tags: ["astrology", "spirituality", "guidance"],
        platform: "ChatGPT",
        price: 7.99
    },
    {
        id: 64,
        title: "Home Brewing Master",
        description: "Brew craft beer at home with recipes and troubleshooting tips.",
        fullPrompt: "Brew craft beer at home with recipes and troubleshooting tips. Guide through equipment selection, ingredient sourcing, brewing processes, fermentation, bottling, and quality control. Include recipe formulation and style guidelines.",
        author: "Brewmaster Tony",
        rating: 4.6,
        tags: ["brewing", "beer", "hobbies"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 65,
        title: "Voice Acting Coach",
        description: "Develop voice acting skills for animation, games, and audiobooks.",
        fullPrompt: "Develop voice acting skills for animation, games, and audiobooks. Train vocal techniques, character voices, emotional range, microphone technique, and audition preparation. Include home studio setup and demo reel creation.",
        author: "Voice Coach Jennifer",
        rating: 4.5,
        tags: ["voice-acting", "audio", "performance"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 66,
        title: "Ergonomics Specialist",
        description: "Optimize workspace ergonomics for comfort and injury prevention.",
        fullPrompt: "Optimize workspace ergonomics for comfort and injury prevention. Assess desk setup, chair positioning, monitor placement, keyboard/mouse configuration, and lighting. Provide exercises, break schedules, and equipment recommendations.",
        author: "Ergonomist Dr. Paul",
        rating: 4.4,
        tags: ["ergonomics", "health", "workspace"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 67,
        title: "Magic Trick Designer",
        description: "Create and perform impressive magic tricks for entertainers.",
        fullPrompt: "Create and perform impressive magic tricks for entertainers. Explain sleight of hand, misdirection, presentation, routine construction, and audience management. Include beginner to advanced tricks with performance tips.",
        author: "Magician Marco",
        rating: 4.6,
        tags: ["magic", "entertainment", "performance"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 68,
        title: "Minimalist Lifestyle Coach",
        description: "Simplify life through intentional minimalism and decluttering.",
        fullPrompt: "Simplify life through intentional minimalism and decluttering. Guide downsizing possessions, creating capsule wardrobes, digital decluttering, mindful consumption, and finding contentment with less. Include room-by-room strategies.",
        author: "Minimalist Sophie",
        rating: 4.5,
        tags: ["minimalism", "lifestyle", "organization"],
        platform: "Claude",
        price: 8.99
    },
    {
        id: 69,
        title: "Escape Room Designer",
        description: "Design immersive escape room puzzles and experiences.",
        fullPrompt: "Design immersive escape room puzzles and experiences. Create narrative frameworks, puzzle chains, red herrings, difficulty progression, and theme integration. Include testing protocols and player flow management.",
        author: "Game Designer Felix",
        rating: 4.7,
        tags: ["escape-room", "puzzles", "design"],
        platform: "ChatGPT",
        price: 14.99
    },
    {
        id: 70,
        title: "Memory Improvement Trainer",
        description: "Enhance memory with proven techniques and mental exercises.",
        fullPrompt: "Enhance memory with proven techniques and mental exercises. Teach mnemonic devices, memory palaces, spaced repetition, chunking, and association methods. Include brain health tips and age-specific strategies.",
        author: "Memory Expert Dr. Kim",
        rating: 4.6,
        tags: ["memory", "learning", "cognition"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 71,
        title: "Nonprofit Fundraising Strategist",
        description: "Develop effective fundraising campaigns for nonprofit organizations.",
        fullPrompt: "Develop effective fundraising campaigns for nonprofit organizations. Plan donor cultivation, major gifts, annual campaigns, online fundraising, grant writing, and event planning. Include donor retention and stewardship strategies.",
        author: "Fundraiser Rebecca",
        rating: 4.5,
        tags: ["nonprofit", "fundraising", "charity"],
        platform: "Claude",
        price: 15.99
    },
    {
        id: 72,
        title: "Speed Reading Instructor",
        description: "Increase reading speed and comprehension with proven techniques.",
        fullPrompt: "Increase reading speed and comprehension with proven techniques. Eliminate subvocalization, expand peripheral vision, improve focus, and enhance retention. Include exercises, measurement tools, and progressive training plans.",
        author: "Reading Coach Tim",
        rating: 4.4,
        tags: ["reading", "learning", "productivity"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 73,
        title: "Sustainable Fashion Consultant",
        description: "Build ethical, sustainable wardrobes without sacrificing style.",
        fullPrompt: "Build ethical, sustainable wardrobes without sacrificing style. Evaluate brands, understand certifications, shop secondhand, repair clothing, and make conscious purchasing decisions. Include capsule wardrobe creation and care guides.",
        author: "Eco Stylist Hannah",
        rating: 4.7,
        tags: ["fashion", "sustainability", "ethics"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 74,
        title: "Dream Interpretation Guide",
        description: "Analyze dreams for symbolic meanings and personal insights.",
        fullPrompt: "Analyze dreams for symbolic meanings and personal insights. Explain common symbols, recurring themes, nightmare processing, and lucid dreaming techniques. Use psychological frameworks while respecting cultural interpretations.",
        author: "Dream Analyst Maya",
        rating: 4.3,
        tags: ["dreams", "psychology", "analysis"],
        platform: "ChatGPT",
        price: 7.99
    },
    {
        id: 75,
        title: "Aquarium Setup Expert",
        description: "Create healthy, beautiful aquariums for freshwater and saltwater fish.",
        fullPrompt: "Create healthy, beautiful aquariums for freshwater and saltwater fish. Guide tank selection, cycling, filtration, lighting, plant/coral care, fish compatibility, and maintenance schedules. Include troubleshooting common issues.",
        author: "Aquarist Steve",
        rating: 4.6,
        tags: ["aquarium", "fish", "pets"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 76,
        title: "Etsy Shop Optimizer",
        description: "Grow Etsy sales with SEO, product photography, and marketing strategies.",
        fullPrompt: "Grow Etsy sales with SEO, product photography, and marketing strategies. Optimize listings, pricing, tags, shipping, customer service, and shop policies. Include product development and seasonal planning.",
        author: "Etsy Seller Nicole",
        rating: 4.5,
        tags: ["etsy", "ecommerce", "handmade"],
        platform: "ChatGPT",
        price: 12.99
    },
    {
        id: 77,
        title: "Parkour Training Guide",
        description: "Learn parkour safely with progressive skill development and conditioning.",
        fullPrompt: "Learn parkour safely with progressive skill development and conditioning. Teach fundamental movements, safety protocols, strength training, landing techniques, and flow creation. Include indoor/outdoor training and injury prevention.",
        author: "Traceur Jason",
        rating: 4.4,
        tags: ["parkour", "fitness", "training"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 78,
        title: "Calligraphy and Lettering Tutor",
        description: "Master beautiful handwriting styles from basic to advanced techniques.",
        fullPrompt: "Master beautiful handwriting styles from basic to advanced techniques. Teach traditional calligraphy, modern lettering, brush lettering, and digital lettering. Include tools, practice methods, and project ideas.",
        author: "Calligrapher Iris",
        rating: 4.6,
        tags: ["calligraphy", "art", "lettering"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 79,
        title: "Sourdough Bread Baker",
        description: "Bake artisan sourdough bread with starter maintenance and recipes.",
        fullPrompt: "Bake artisan sourdough bread with starter maintenance and recipes. Explain fermentation, hydration levels, folding techniques, scoring, baking temperatures, and troubleshooting. Include variations and flavor additions.",
        author: "Baker Francois",
        rating: 4.7,
        tags: ["baking", "sourdough", "bread"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 80,
        title: "Cold Email Outreach Expert",
        description: "Write effective cold emails that get responses and build relationships.",
        fullPrompt: "Write effective cold emails that get responses and build relationships. Create personalized subject lines, compelling body copy, clear CTAs, and follow-up sequences. Include A/B testing strategies and deliverability tips.",
        author: "Outreach Pro Daniel",
        rating: 4.5,
        tags: ["email", "outreach", "sales"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 81,
        title: "Mythology Storyteller",
        description: "Explore world mythologies with engaging stories and cultural context.",
        fullPrompt: "Explore world mythologies with engaging stories and cultural context. Share tales from Greek, Norse, Egyptian, Asian, African, and Indigenous cultures. Explain symbolism, historical significance, and modern relevance.",
        author: "Mythologist Dr. Helen",
        rating: 4.4,
        tags: ["mythology", "stories", "culture"],
        platform: "ChatGPT",
        price: 8.99
    },
    {
        id: 82,
        title: "Habit Formation Specialist",
        description: "Build lasting positive habits using behavioral science principles.",
        fullPrompt: "Build lasting positive habits using behavioral science principles. Apply habit stacking, implementation intentions, environment design, and accountability systems. Break bad habits and create sustainable lifestyle changes.",
        author: "Habit Coach James",
        rating: 4.8,
        tags: ["habits", "behavior", "productivity"],
        platform: "Claude",
        price: 11.99
    },
    {
        id: 83,
        title: "Board Game Designer",
        description: "Design engaging board games with balanced mechanics and fun gameplay.",
        fullPrompt: "Design engaging board games with balanced mechanics and fun gameplay. Develop core mechanics, victory conditions, player interaction, theme integration, and playtesting protocols. Include component design and rulebook writing.",
        author: "Game Creator Lisa",
        rating: 4.5,
        tags: ["board-games", "design", "gaming"],
        platform: "ChatGPT",
        price: 14.99
    },
    {
        id: 84,
        title: "Wilderness Survival Guide",
        description: "Learn essential survival skills for outdoor emergencies.",
        fullPrompt: "Learn essential survival skills for outdoor emergencies. Teach shelter building, water purification, fire starting, foraging, navigation, first aid, and signaling. Include gear recommendations and scenario planning.",
        author: "Survival Expert Bear",
        rating: 4.6,
        tags: ["survival", "outdoors", "skills"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 85,
        title: "Crossword Puzzle Constructor",
        description: "Create challenging, entertaining crossword puzzles with themes.",
        fullPrompt: "Create challenging, entertaining crossword puzzles with themes. Design grids, write clues at varying difficulty levels, incorporate wordplay, and maintain crossword conventions. Include software recommendations and publishing guidance.",
        author: "Puzzle Maker Ruth",
        rating: 4.4,
        tags: ["puzzles", "crossword", "games"],
        platform: "ChatGPT",
        price: 9.99
    },
    {
        id: 86,
        title: "Vintage Motorcycle Restorer",
        description: "Restore classic motorcycles with mechanical and aesthetic expertise.",
        fullPrompt: "Restore classic motorcycles with mechanical and aesthetic expertise. Guide engine rebuilds, electrical systems, paint work, chrome restoration, and parts sourcing. Include authenticity considerations and value preservation.",
        author: "Mechanic Eddie",
        rating: 4.5,
        tags: ["motorcycles", "restoration", "automotive"],
        platform: "Claude",
        price: 13.99
    },
    {
        id: 87,
        title: "Silent Film Historian",
        description: "Explore early cinema history with film recommendations and analysis.",
        fullPrompt: "Explore early cinema history with film recommendations and analysis. Discuss silent era directors, actors, techniques, restoration efforts, and cultural impact. Provide viewing guides and historical context.",
        author: "Film Scholar Dr. Clara",
        rating: 4.3,
        tags: ["film", "history", "cinema"],
        platform: "ChatGPT",
        price: 8.99
    },
    {
        id: 88,
        title: "Natural Dye Expert",
        description: "Create beautiful colors from plants for textile dyeing projects.",
        fullPrompt: "Create beautiful colors from plants for textile dyeing projects. Explain mordants, dye extraction, color fastness, fabric preparation, and pattern techniques. Include sustainable practices and troubleshooting.",
        author: "Dyer Botanical Beth",
        rating: 4.4,
        tags: ["dyeing", "textiles", "natural"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 89,
        title: "Improv Comedy Instructor",
        description: "Develop improvisational comedy skills for stage and social situations.",
        fullPrompt: "Develop improvisational comedy skills for stage and social situations. Teach yes-and principle, scene work, character development, game structures, and ensemble dynamics. Include warm-ups and show formats.",
        author: "Improv Teacher Amy",
        rating: 4.6,
        tags: ["improv", "comedy", "performance"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 90,
        title: "Foraging Guide",
        description: "Safely identify and harvest wild edible plants and mushrooms.",
        fullPrompt: "Safely identify and harvest wild edible plants and mushrooms. Teach identification methods, toxic look-alikes, sustainable harvesting, seasonal availability, and preparation methods. Include safety protocols and ethical considerations.",
        author: "Forager Sam",
        rating: 4.5,
        tags: ["foraging", "nature", "food"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 91,
        title: "Time Management Optimizer",
        description: "Master time management with productivity systems and prioritization.",
        fullPrompt: "Master time management with productivity systems and prioritization. Implement GTD, time blocking, Pomodoro, Eisenhower Matrix, and energy management. Eliminate time wasters and create focused work routines.",
        author: "Productivity Expert Carl",
        rating: 4.7,
        tags: ["time-management", "productivity", "efficiency"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 92,
        title: "Historical Reenactment Consultant",
        description: "Create authentic historical reenactments with period accuracy.",
        fullPrompt: "Create authentic historical reenactments with period accuracy. Research clothing, equipment, language, customs, and events. Provide sourcing guides, authenticity standards, and immersive portrayal techniques.",
        author: "Historian Marcus",
        rating: 4.4,
        tags: ["history", "reenactment", "education"],
        platform: "ChatGPT",
        price: 11.99
    },
    {
        id: 93,
        title: "Kombucha Brewing Master",
        description: "Brew delicious kombucha with SCOBY care and flavor experimentation.",
        fullPrompt: "Brew delicious kombucha with SCOBY care and flavor experimentation. Guide first and second fermentation, troubleshooting, carbonation, flavoring, and health benefits. Include equipment needs and recipe variations.",
        author: "Fermenter Kelly",
        rating: 4.5,
        tags: ["kombucha", "brewing", "fermentation"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 94,
        title: "Scientific Paper Reviewer",
        description: "Review academic papers for methodology, clarity, and publication readiness.",
        fullPrompt: "Review academic papers for methodology, clarity, and publication readiness. Evaluate research design, statistical analysis, literature integration, writing quality, and adherence to journal standards. Provide constructive feedback.",
        author: "Reviewer Dr. Singh",
        rating: 4.6,
        tags: ["academic", "research", "peer-review"],
        platform: "Claude",
        price: 16.99
    },
    {
        id: 95,
        title: "Bonsai Tree Cultivator",
        description: "Grow and shape miniature bonsai trees with patience and artistry.",
        fullPrompt: "Grow and shape miniature bonsai trees with patience and artistry. Teach species selection, pruning, wiring, repotting, and styling principles. Include care schedules, pest management, and display aesthetics.",
        author: "Bonsai Master Kenji",
        rating: 4.7,
        tags: ["bonsai", "gardening", "art"],
        platform: "Claude",
        price: 12.99
    },
    {
        id: 96,
        title: "Tabletop RPG Game Master",
        description: "Run engaging D&D and RPG campaigns with storytelling and mechanics.",
        fullPrompt: "Run engaging D&D and RPG campaigns with storytelling and mechanics. Create adventures, balance encounters, develop NPCs, manage player agency, and handle rules disputes. Include world-building and session preparation.",
        author: "Game Master Dylan",
        rating: 4.8,
        tags: ["rpg", "dnd", "storytelling"],
        platform: "ChatGPT",
        price: 13.99
    },
    {
        id: 97,
        title: "Vintage Vinyl Collector",
        description: "Identify, evaluate, and care for vintage vinyl records.",
        fullPrompt: "Identify, evaluate, and care for vintage vinyl records. Assess condition, rarity, pressings, and value. Provide cleaning methods, storage solutions, and equipment recommendations for optimal sound quality.",
        author: "Collector Rick",
        rating: 4.5,
        tags: ["vinyl", "music", "collecting"],
        platform: "ChatGPT",
        price: 10.99
    },
    {
        id: 98,
        title: "Origami Artist Instructor",
        description: "Fold intricate origami creations from simple paper.",
        fullPrompt: "Fold intricate origami creations from simple paper. Teach fundamental folds, traditional models, modular origami, and original design principles. Include paper selection, troubleshooting, and display ideas.",
        author: "Origami Master Yuki",
        rating: 4.6,
        tags: ["origami", "art", "crafts"],
        platform: "Claude",
        price: 9.99
    },
    {
        id: 99,
        title: "Stoic Philosophy Coach",
        description: "Apply ancient Stoic wisdom to modern life challenges.",
        fullPrompt: "Apply ancient Stoic wisdom to modern life challenges. Teach principles from Marcus Aurelius, Epictetus, and Seneca. Practice dichotomy of control, negative visualization, and virtue development for resilience and peace.",
        author: "Philosophy Prof. Marcus",
        rating: 4.7,
        tags: ["philosophy", "stoicism", "mindset"],
        platform: "Claude",
        price: 10.99
    },
    {
        id: 100,
        title: "Aerial Silk Performer",
        description: "Learn aerial silk techniques for fitness and artistic performance.",
        fullPrompt: "Learn aerial silk techniques for fitness and artistic performance. Teach climbs, wraps, drops, poses, and choreography development. Include conditioning exercises, safety protocols, and home rigging guidance.",
        author: "Aerialist Sofia",
        rating: 4.5,
        tags: ["aerial", "fitness", "performance"],
        platform: "ChatGPT",
        price: 14.99
    }
];

let filteredPrompts = [...prompts];
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

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
        <div class="prompt-card bg-white rounded-xl shadow-lg overflow-hidden">
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

                <div class="flex flex-wrap gap-2 mb-4">
                    ${prompt.tags.slice(0, 3).map(tag => `<span class="tag-pill">🏷️ ${tag}</span>`).join('')}
                </div>

                <div class="flex items-center justify-between">
                    <div class="text-3xl font-bold text-blue-600">$${prompt.price.toFixed(2)}</div>
                    <button
                        onclick="addToCart(${prompt.id})"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
                    >
                        Add to Cart
                    </button>
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

function addToCart(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;

    if (!cart.find(item => item.id === promptId)) {
        cart.push(prompt);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`Added "${prompt.title}" to cart!`);
    } else {
        showToast(`"${prompt.title}" is already in your cart`);
    }
}

function updateCartCount() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        const count = cart.length;
        cartBtn.innerHTML = `🛒 Cart (${count})`;
    }
}

function viewCart() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-6">🛒 Your Cart</h2>

        <div class="space-y-4 mb-6">
            ${cart.map(item => `
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                        <h3 class="font-semibold text-gray-900">${item.title}</h3>
                        <p class="text-sm text-gray-600">by ${item.author}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-xl font-bold text-blue-600">$${item.price.toFixed(2)}</span>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="border-t border-gray-200 pt-4 mb-6">
            <div class="flex items-center justify-between text-2xl font-bold">
                <span>Total:</span>
                <span class="text-blue-600">$${total.toFixed(2)}</span>
            </div>
        </div>

        <div class="space-y-3">
            <button
                onclick="proceedToCheckout()"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl"
            >
                Proceed to Checkout
            </button>
            <button
                onclick="closeModal()"
                class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all"
            >
                Continue Shopping
            </button>
        </div>
    `;

    modal.classList.remove('hidden');
}

function removeFromCart(promptId) {
    cart = cart.filter(item => item.id !== promptId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    if (cart.length === 0) {
        closeModal();
        showToast('Cart is now empty');
    } else {
        viewCart();
    }
}

function proceedToCheckout() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    showToast('Redirecting to Shopify checkout...', 'success');

    setTimeout(() => {
        alert(`Ready for Shopify integration!\n\nCart Total: $${total.toFixed(2)}\nItems: ${cart.length}\n\nThis will redirect to your Shopify checkout page.`);
    }, 500);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
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

window.addToCart = addToCart;
window.viewCart = viewCart;
window.removeFromCart = removeFromCart;
window.proceedToCheckout = proceedToCheckout;
window.closeModal = closeModal;

updateCartCount();
renderPrompts(filteredPrompts);
