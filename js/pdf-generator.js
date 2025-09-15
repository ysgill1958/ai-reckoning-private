// AI Career Survival Guide - Dynamic PDF Generator
// Generates personalized 50-page survival guides based on assessment results

class AICareerSurvivalGuideGenerator {
    constructor() {
        this.doc = null;
        this.currentPage = 1;
        this.leftMargin = 20;
        this.rightMargin = 190;
        this.topMargin = 20;
        this.lineHeight = 6;
        this.currentY = this.topMargin;
    }

    // Simplified method for external calls
    async generateFullGuide(userProfile, assessmentResults = null) {
        return await this.generatePersonalizedGuide(userProfile, assessmentResults);
    }

    async generatePersonalizedGuide(userProfile, assessmentResults = null) {
        // Initialize jsPDF with correct API
        if (typeof window.jspdf === 'undefined') {
            throw new Error('jsPDF library not loaded');
        }
        
        const { jsPDF } = window.jspdf;
        this.doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        this.currentY = this.topMargin;

        try {
            // Generate complete guide
            await this.createCoverPage(userProfile);
            await this.createTableOfContents();
            await this.createExecutiveSummary(userProfile, assessmentResults);
            await this.createChapter1TheAIEmergency();
            await this.createChapter2AIProofYourCareer(userProfile);
            await this.createChapter3ThirtyDayActionPlan(userProfile, assessmentResults);
            await this.createChapter4IndustryPlaybook(userProfile);
            await this.createChapter5ResourcesAndTools(userProfile);
            await this.createPersonalizedRoadmap(userProfile, assessmentResults);
            await this.createWorksheets(userProfile);
            await this.createAppendices();

            // Download the PDF
            const filename = `AI_Career_Survival_Guide_${userProfile.industry || 'Professional'}_${new Date().getFullYear()}.pdf`;
            this.doc.save(filename);
            
            return true;
        } catch (error) {
            console.error('PDF Generation Error:', error);
            return false;
        }
    }

    addNewPage() {
        this.doc.addPage();
        this.currentPage++;
        this.currentY = this.topMargin;
        this.addPageNumber();
    }

    addPageNumber() {
        this.doc.setFontSize(8);
        this.doc.setTextColor(128, 128, 128);
        this.doc.text(`Page ${this.currentPage}`, 105, 290, { align: 'center' });
    }

    checkPageBreak(neededSpace = 20) {
        if (this.currentY + neededSpace > 270) {
            this.addNewPage();
        }
    }

    addTitle(text, fontSize = 16, color = [0, 0, 0]) {
        this.checkPageBreak(15);
        this.doc.setFontSize(fontSize);
        this.doc.setTextColor(color[0], color[1], color[2]);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(text, this.leftMargin, this.currentY);
        this.currentY += fontSize * 0.5;
    }

    addSubtitle(text, fontSize = 12, color = [64, 64, 64]) {
        this.checkPageBreak(10);
        this.doc.setFontSize(fontSize);
        this.doc.setTextColor(color[0], color[1], color[2]);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(text, this.leftMargin, this.currentY);
        this.currentY += fontSize * 0.6;
    }

    addParagraph(text, fontSize = 10, color = [0, 0, 0]) {
        this.doc.setFontSize(fontSize);
        this.doc.setTextColor(color[0], color[1], color[2]);
        this.doc.setFont('helvetica', 'normal');
        
        const lines = this.doc.splitTextToSize(text, this.rightMargin - this.leftMargin);
        for (let line of lines) {
            this.checkPageBreak(8);
            this.doc.text(line, this.leftMargin, this.currentY);
            this.currentY += this.lineHeight;
        }
        this.currentY += 3; // Extra spacing after paragraph
    }

    addBulletPoint(text, fontSize = 10) {
        this.checkPageBreak(8);
        this.doc.setFontSize(fontSize);
        this.doc.setTextColor(0, 0, 0);
        this.doc.setFont('helvetica', 'normal');
        
        const bulletText = `• ${text}`;
        const lines = this.doc.splitTextToSize(bulletText, this.rightMargin - this.leftMargin - 5);
        for (let i = 0; i < lines.length; i++) {
            this.doc.text(lines[i], this.leftMargin + (i > 0 ? 5 : 0), this.currentY);
            this.currentY += this.lineHeight;
        }
    }

    addHighlightBox(title, content, backgroundColor = [240, 248, 255]) {
        this.checkPageBreak(30);
        
        // Calculate box height
        const titleLines = this.doc.splitTextToSize(title, this.rightMargin - this.leftMargin - 10);
        const contentLines = this.doc.splitTextToSize(content, this.rightMargin - this.leftMargin - 10);
        const boxHeight = (titleLines.length + contentLines.length) * this.lineHeight + 15;
        
        // Draw background
        this.doc.setFillColor(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
        this.doc.rect(this.leftMargin, this.currentY - 5, this.rightMargin - this.leftMargin, boxHeight, 'F');
        
        // Add border
        this.doc.setDrawColor(100, 150, 200);
        this.doc.rect(this.leftMargin, this.currentY - 5, this.rightMargin - this.leftMargin, boxHeight);
        
        this.currentY += 5;
        
        // Add title
        this.doc.setFontSize(11);
        this.doc.setTextColor(0, 100, 200);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(title, this.leftMargin + 5, this.currentY);
        this.currentY += 8;
        
        // Add content
        this.doc.setFontSize(9);
        this.doc.setTextColor(0, 0, 0);
        this.doc.setFont('helvetica', 'normal');
        for (let line of contentLines) {
            this.doc.text(line, this.leftMargin + 5, this.currentY);
            this.currentY += this.lineHeight;
        }
        
        this.currentY += 10;
    }

    async createCoverPage(userProfile) {
        // Background gradient effect (simplified)
        this.doc.setFillColor(15, 23, 42);
        this.doc.rect(0, 0, 210, 297, 'F');
        
        // Title
        this.doc.setTextColor(255, 255, 255);
        this.doc.setFontSize(28);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('AI CAREER', 105, 80, { align: 'center' });
        this.doc.text('SURVIVAL GUIDE', 105, 95, { align: 'center' });
        
        // Subtitle
        this.doc.setFontSize(16);
        this.doc.setTextColor(100, 200, 255);
        this.doc.text('Your Personalized Roadmap to AI-Future Success', 105, 115, { align: 'center' });
        
        // User personalization
        this.doc.setFontSize(14);
        this.doc.setTextColor(255, 255, 255);
        this.doc.text(`Customized for ${userProfile.industry || 'Professional'} Industry`, 105, 140, { align: 'center' });
        if (userProfile.experience) {
            this.doc.text(`${userProfile.experience} Experience Level`, 105, 155, { align: 'center' });
        }
        
        // Key highlights
        this.doc.setFontSize(12);
        this.doc.setTextColor(200, 255, 200);
        const highlights = [
            '📊 Based on Your AI Readiness Assessment',
            '🎯 Industry-Specific Strategies',
            '⚡ 30-Day Transformation Plan',
            '🛡️ Future-Proof Your Career',
            '📚 Actionable Resources & Tools'
        ];
        
        let startY = 180;
        highlights.forEach(highlight => {
            this.doc.text(highlight, 105, startY, { align: 'center' });
            startY += 15;
        });
        
        // Footer
        this.doc.setFontSize(10);
        this.doc.setTextColor(150, 150, 150);
        this.doc.text('© 2025 AI Career Transformation Platform', 105, 270, { align: 'center' });
        this.doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 280, { align: 'center' });
        
        this.addNewPage();
    }

    async createTableOfContents() {
        this.addTitle('TABLE OF CONTENTS', 18, [0, 100, 200]);
        this.currentY += 10;
        
        const contents = [
            { title: 'Executive Summary', page: 3 },
            { title: 'Chapter 1: The AI Emergency', page: 5 },
            { title: 'Chapter 2: AI-Proof Your Career', page: 12 },
            { title: 'Chapter 3: Your 30-Day Action Plan', page: 20 },
            { title: 'Chapter 4: Industry Playbook', page: 28 },
            { title: 'Chapter 5: Resources & Tools', page: 35 },
            { title: 'Your Personalized Roadmap', page: 42 },
            { title: 'Worksheets & Templates', page: 46 },
            { title: 'Appendices', page: 50 }
        ];
        
        this.doc.setFontSize(11);
        contents.forEach(item => {
            this.doc.setTextColor(0, 0, 0);
            this.doc.text(item.title, this.leftMargin, this.currentY);
            this.doc.text(`${item.page}`, this.rightMargin - 10, this.currentY);
            
            // Add dots
            this.doc.setTextColor(150, 150, 150);
            const dots = '.'.repeat(40);
            this.doc.text(dots, this.leftMargin + 70, this.currentY);
            
            this.currentY += 8;
        });
        
        this.addNewPage();
    }

    async createExecutiveSummary(userProfile, assessmentResults) {
        this.addTitle('EXECUTIVE SUMMARY', 18, [0, 100, 200]);
        this.currentY += 5;
        
        this.addParagraph(`Welcome to your personalized AI Career Survival Guide! This comprehensive roadmap has been specifically crafted for ${userProfile.industry || 'your industry'} professionals with ${userProfile.experience || 'your experience level'} of experience.`);
        
        if (assessmentResults) {
            this.addHighlightBox('Your AI Readiness Assessment Results', 
                `AI Readiness Score: ${assessmentResults.aiReadinessScore || 'N/A'}%\nAutomation Risk Level: ${assessmentResults.automationRisk || 'N/A'}%\nRecommended Action: ${this.getActionLevel(assessmentResults)}`);
        }
        
        this.addSubtitle('What You\'ll Learn in This Guide:');
        
        const learningOutcomes = [
            'How to identify and leverage AI opportunities in your specific industry',
            'The exact skills you need to develop to become AI-enhanced rather than AI-replaced',
            'A step-by-step 30-day action plan tailored to your current situation',
            'Industry-specific strategies and case studies',
            'Comprehensive resource library for continued learning',
            'Templates and worksheets for immediate implementation'
        ];
        
        learningOutcomes.forEach(outcome => {
            this.addBulletPoint(outcome);
        });
        
        this.addSubtitle('Your Transformation Journey Starts Now');
        this.addParagraph('The AI revolution isn\'t coming—it\'s here. Every day you delay is a day your competitors get ahead. This guide will transform that anxiety into action and uncertainty into opportunity.');
        
        this.addNewPage();
    }

    getActionLevel(assessmentResults) {
        const score = assessmentResults.aiReadinessScore || 0;
        if (score >= 80) return 'AI Leadership Track - Position yourself as an AI pioneer';
        if (score >= 60) return 'Rapid Integration - Fast-track your AI skills';
        if (score >= 40) return 'Essential Development - Build core AI competencies';
        return 'Emergency Transformation - Immediate action required';
    }

    async createChapter1TheAIEmergency() {
        this.addTitle('CHAPTER 1: THE AI EMERGENCY', 16, [200, 0, 0]);
        this.currentY += 5;
        
        this.addSubtitle('The Workforce Transformation That Changes Everything');
        
        this.addParagraph('We are living through the most significant workforce transformation in human history. Artificial Intelligence isn\'t just changing how we work—it\'s redefining what work means entirely.');
        
        this.addHighlightBox('⚠️ Critical Statistics', 
            '• 40% of jobs will be fundamentally transformed by 2030\n• 75% of companies plan to adopt AI within the next 2 years\n• AI productivity gains are creating $13 trillion in economic value\n• Workers who embrace AI see 37% higher productivity\n• 85% of jobs that will exist in 2030 haven\'t been invented yet');
        
        this.addSubtitle('The Three Categories of Workers');
        
        this.addParagraph('In this new landscape, workers fall into three distinct categories:');
        
        this.addBulletPoint('AI-Enhanced Professionals: Those who leverage AI to amplify their capabilities (+40-70% income increase)');
        this.addBulletPoint('AI-Resistant Workers: Those who ignore AI and become gradually obsolete (-20-40% income decrease)');
        this.addBulletPoint('AI-Replaced Workers: Those whose roles become fully automated (career displacement)');
        
        this.addSubtitle('Why This Transformation is Different');
        
        this.addParagraph('Unlike previous technological revolutions that primarily affected manual labor, AI targets cognitive work—the very foundation of white-collar professions. However, this creates unprecedented opportunities for those who position themselves correctly.');
        
        this.addSubtitle('The Opportunity Hidden in the Crisis');
        
        this.addParagraph('While many fear AI, smart professionals are using this transformation to leapfrog their careers. The key is understanding that AI doesn\'t replace humans—it replaces humans who don\'t use AI.');
        
        this.addNewPage();
    }

    async createChapter2AIProofYourCareer(userProfile) {
        this.addTitle('CHAPTER 2: AI-PROOF YOUR CAREER', 16, [0, 150, 0]);
        this.currentY += 5;
        
        this.addSubtitle('The Human + AI Advantage');
        
        this.addParagraph('The future belongs to professionals who can seamlessly blend human creativity, emotional intelligence, and strategic thinking with AI\'s computational power and efficiency.');
        
        this.addSubtitle('The Five Pillars of AI-Proof Careers');
        
        // Pillar 1
        this.addHighlightBox('Pillar 1: AI Collaboration Skills', 
            'Learn to work WITH AI tools as your intelligent assistant. This includes prompt engineering, AI tool selection, and human-AI workflow design.');
        
        // Pillar 2
        this.addHighlightBox('Pillar 2: Uniquely Human Skills', 
            'Develop skills that AI cannot replicate: emotional intelligence, creative problem-solving, ethical reasoning, and complex relationship management.');
        
        // Pillar 3
        this.addHighlightBox('Pillar 3: Strategic Thinking', 
            'Position yourself as the strategist who guides AI implementation rather than the executor who gets replaced by it.');
        
        // Pillar 4
        this.addHighlightBox('Pillar 4: Continuous Learning Mindset', 
            'Develop meta-learning skills to rapidly acquire new competencies as the AI landscape evolves.');
        
        // Pillar 5
        this.addHighlightBox('Pillar 5: AI Ethics and Governance', 
            'Become the expert who ensures responsible AI implementation in your organization.');
        
        this.addSubtitle(`AI-Proofing Strategies for ${userProfile.industry || 'Your Industry'}`);
        
        // Industry-specific content
        this.addParagraph(this.getIndustrySpecificContent(userProfile.industry));
        
        this.addNewPage();
    }

    getIndustrySpecificContent(industry) {
        const content = {
            'Healthcare': 'In healthcare, AI is revolutionizing diagnosis, treatment planning, and patient care. Position yourself as an AI-enhanced medical professional by mastering medical AI interpretation, developing skills in AI-assisted diagnosis, and learning to manage AI-human collaboration in patient care.',
            'Finance': 'Financial services are being transformed by algorithmic trading, risk assessment AI, and automated compliance. Become an AI-enhanced financial professional by mastering financial AI tools, developing expertise in AI risk modeling, and positioning yourself as an AI implementation strategist.',
            'Technology': 'The tech industry is leading AI adoption across all sectors. Position yourself by developing AI/ML engineering skills, learning AI system architecture, or becoming an AI product manager who guides AI product development.',
            'Education': 'Education is being personalized through AI-powered learning platforms. Become an AI-enhanced educator by mastering educational AI tools, developing skills in learning analytics, and creating AI-powered educational content.',
            'Manufacturing': 'Smart factories and predictive maintenance are transforming manufacturing. Position yourself by learning industrial AI systems, developing expertise in predictive maintenance, and mastering smart manufacturing processes.'
        };
        
        return content[industry] || 'Regardless of your industry, the key is to position yourself as the professional who guides AI implementation rather than the one who gets replaced by it. Focus on developing strategic oversight, creative problem-solving, and human-AI collaboration skills.';
    }

    async createChapter3ThirtyDayActionPlan(userProfile, assessmentResults) {
        this.addTitle('CHAPTER 3: YOUR 30-DAY ACTION PLAN', 16, [255, 140, 0]);
        this.currentY += 5;
        
        this.addParagraph('This chapter provides your personalized 30-day transformation roadmap based on your assessment results and career goals.');
        
        if (assessmentResults) {
            const actionLevel = this.getActionLevel(assessmentResults);
            this.addHighlightBox('Your Personalized Track', actionLevel);
        }
        
        // Week 1
        this.addSubtitle('Week 1: Foundation & Assessment');
        this.addBulletPoint('Day 1-2: Complete AI literacy assessment and identify skill gaps');
        this.addBulletPoint('Day 3-4: Research AI applications in your specific role');
        this.addBulletPoint('Day 5-7: Set up essential AI tools (ChatGPT, industry-specific platforms)');
        
        // Week 2
        this.addSubtitle('Week 2: Skill Development');
        this.addBulletPoint('Day 8-10: Master prompt engineering fundamentals');
        this.addBulletPoint('Day 11-12: Learn your industry\'s key AI tools');
        this.addBulletPoint('Day 13-14: Practice AI-human collaboration workflows');
        
        // Week 3
        this.addSubtitle('Week 3: Application & Networking');
        this.addBulletPoint('Day 15-17: Implement AI tools in daily work tasks');
        this.addBulletPoint('Day 18-19: Join AI professional communities');
        this.addBulletPoint('Day 20-21: Create AI-enhanced portfolio projects');
        
        // Week 4
        this.addSubtitle('Week 4: Strategic Positioning');
        this.addBulletPoint('Day 22-24: Develop AI strategy proposals for your role/company');
        this.addBulletPoint('Day 25-26: Update LinkedIn profile with AI skills');
        this.addBulletPoint('Day 27-28: Apply for AI-enhanced positions or propose AI initiatives');
        this.addBulletPoint('Day 29-30: Plan next 90-day development goals');
        
        this.addNewPage();
    }

    async createChapter4IndustryPlaybook(userProfile) {
        this.addTitle('CHAPTER 4: INDUSTRY PLAYBOOK', 16, [128, 0, 128]);
        this.currentY += 5;
        
        const industry = userProfile.industry || 'Professional';
        this.addSubtitle(`${industry} Industry Transformation Guide`);
        
        // Get detailed industry content
        const industryData = this.getDetailedIndustryPlaybook(industry);
        
        this.addSubtitle('Industry AI Impact Analysis');
        this.addParagraph(industryData.impact);
        
        this.addSubtitle('Key AI Technologies Transforming Your Industry');
        industryData.technologies.forEach(tech => {
            this.addBulletPoint(tech);
        });
        
        this.addSubtitle('High-Value AI Roles in Your Industry');
        industryData.roles.forEach(role => {
            this.addBulletPoint(role);
        });
        
        this.addSubtitle('Success Case Studies');
        industryData.caseStudies.forEach(study => {
            this.addHighlightBox(study.title, study.content);
        });
        
        this.addSubtitle('Your Industry Action Plan');
        industryData.actionPlan.forEach(action => {
            this.addBulletPoint(action);
        });
        
        this.addNewPage();
    }

    getDetailedIndustryPlaybook(industry) {
        const playbooks = {
            'Healthcare': {
                impact: 'Healthcare is experiencing rapid AI adoption in diagnostics, treatment planning, drug discovery, and patient care. AI is enabling precision medicine, reducing medical errors, and improving patient outcomes while creating new career opportunities.',
                technologies: [
                    'Medical Imaging AI (radiology, pathology analysis)',
                    'Predictive Analytics for Patient Outcomes',
                    'Natural Language Processing for Medical Records',
                    'Drug Discovery and Development AI',
                    'Robotic Surgery and AI-Assisted Procedures',
                    'AI-Powered Telemedicine Platforms'
                ],
                roles: [
                    'AI-Enhanced Physician (Diagnostic AI Specialist) - $350K-$500K',
                    'Healthcare AI Implementation Manager - $180K-$250K',
                    'Medical AI Data Scientist - $200K-$300K',
                    'AI Ethics Officer for Healthcare - $150K-$220K',
                    'Clinical AI Researcher - $160K-$240K'
                ],
                caseStudies: [
                    {
                        title: 'Dr. Sarah Chen - Radiology AI Pioneer',
                        content: 'Increased diagnostic accuracy by 40% and income by $150K by specializing in AI-enhanced radiology. Now leads AI implementation at major hospital system.'
                    },
                    {
                        title: 'Medical Center AI Transformation',
                        content: 'Regional medical center reduced diagnosis time by 60% and improved patient outcomes by 30% through comprehensive AI integration.'
                    }
                ],
                actionPlan: [
                    'Learn medical AI interpretation and validation',
                    'Get certified in healthcare AI ethics and compliance',
                    'Master AI-enhanced diagnostic workflows',
                    'Develop expertise in patient data privacy and AI',
                    'Lead AI pilot projects in your medical facility'
                ]
            },
            'Finance': {
                impact: 'Financial services are being revolutionized by algorithmic trading, risk assessment, fraud detection, and personalized financial advice. AI is creating more efficient markets while generating new high-value career paths.',
                technologies: [
                    'Algorithmic Trading and Market Analysis',
                    'AI-Powered Risk Assessment Models',
                    'Fraud Detection and Prevention Systems',
                    'Robo-Advisors and Wealth Management AI',
                    'Automated Compliance and Regulatory Reporting',
                    'Credit Scoring and Lending AI'
                ],
                roles: [
                    'Quantitative AI Analyst - $250K-$400K',
                    'AI Risk Management Specialist - $200K-$300K',
                    'Financial AI Product Manager - $220K-$350K',
                    'Algorithmic Trading Developer - $300K-$500K',
                    'AI Compliance Officer - $160K-$240K'
                ],
                caseStudies: [
                    {
                        title: 'Maria Rodriguez - AI Risk Analyst',
                        content: 'Transitioned from traditional risk analysis to AI-powered models, increasing accuracy by 45% and salary by $120K within 18 months.'
                    },
                    {
                        title: 'Investment Firm AI Integration',
                        content: 'Mid-size investment firm improved portfolio performance by 35% through AI-enhanced trading strategies and risk management.'
                    }
                ],
                actionPlan: [
                    'Master financial AI tools and platforms',
                    'Learn quantitative analysis and machine learning',
                    'Develop expertise in algorithmic trading strategies',
                    'Get certified in AI ethics for financial services',
                    'Build AI-enhanced financial models and analyses'
                ]
            },
            'Technology': {
                impact: 'The technology sector is leading AI adoption across all industries. Tech professionals have the greatest opportunity to become AI pioneers, with the highest salary potential and career advancement opportunities.',
                technologies: [
                    'Machine Learning and Deep Learning Frameworks',
                    'AI/ML Cloud Platforms (AWS, Azure, GCP)',
                    'Natural Language Processing and Computer Vision',
                    'AI Development and Deployment Tools',
                    'AI Ethics and Responsible AI Systems',
                    'Edge AI and IoT Integration'
                ],
                roles: [
                    'AI/ML Engineer - $200K-$400K',
                    'AI Product Manager - $250K-$450K',
                    'AI Research Scientist - $300K-$600K',
                    'AI Solutions Architect - $220K-$380K',
                    'AI Ethics and Safety Engineer - $180K-$320K'
                ],
                caseStudies: [
                    {
                        title: 'James Kim - Full Stack to AI Engineer',
                        content: 'Transitioned from web development to AI/ML engineering, tripling salary to $320K and joining a leading AI startup as a founding engineer.'
                    },
                    {
                        title: 'Tech Company AI Transformation',
                        content: 'Software company integrated AI across all products, increasing valuation by 300% and creating 200 new AI-specialized positions.'
                    }
                ],
                actionPlan: [
                    'Master Python and AI/ML frameworks (TensorFlow, PyTorch)',
                    'Build end-to-end AI projects and deploy them',
                    'Contribute to open-source AI projects',
                    'Get cloud AI certifications (AWS, Azure, GCP)',
                    'Specialize in a high-demand AI area (NLP, Computer Vision, etc.)'
                ]
            },
            'Education': {
                impact: 'Education is being transformed through personalized learning, automated assessment, and AI-powered curriculum development. Educators who embrace AI are creating more effective learning experiences.',
                technologies: [
                    'Adaptive Learning Platforms',
                    'AI-Powered Student Assessment',
                    'Personalized Curriculum Generation',
                    'Educational Chatbots and Virtual Tutors',
                    'Learning Analytics and Student Success Prediction',
                    'AI-Enhanced Content Creation'
                ],
                roles: [
                    'AI Learning Designer - $120K-$180K',
                    'Educational AI Specialist - $100K-$160K',
                    'AI-Enhanced Instructor - $80K-$140K',
                    'Learning Analytics Manager - $130K-$190K',
                    'Educational AI Researcher - $110K-$170K'
                ],
                caseStudies: [
                    {
                        title: 'Professor Jennifer Walsh - AI Learning Pioneer',
                        content: 'Redesigned courses using AI-powered personalization, improving student outcomes by 50% and becoming department AI integration lead.'
                    },
                    {
                        title: 'University AI Learning Initiative',
                        content: 'State university implemented AI-powered learning analytics, increasing graduation rates by 25% and student satisfaction by 40%.'
                    }
                ],
                actionPlan: [
                    'Learn educational AI tools and platforms',
                    'Develop AI-enhanced curriculum and assessments',
                    'Master learning analytics and data interpretation',
                    'Create AI-powered educational content',
                    'Lead AI adoption initiatives in your institution'
                ]
            },
            'Manufacturing': {
                impact: 'Manufacturing is being revolutionized by smart factories, predictive maintenance, and AI-driven quality control. Industry 4.0 is creating high-value technical and management opportunities.',
                technologies: [
                    'Industrial IoT and Smart Sensors',
                    'Predictive Maintenance AI',
                    'Quality Control Computer Vision',
                    'Supply Chain Optimization AI',
                    'Robotics and Automation Integration',
                    'Digital Twin Technology'
                ],
                roles: [
                    'AI Operations Manager - $140K-$200K',
                    'Predictive Maintenance Specialist - $120K-$180K',
                    'Smart Manufacturing Engineer - $130K-$190K',
                    'AI Quality Assurance Manager - $110K-$170K',
                    'Industrial AI Data Scientist - $150K-$220K'
                ],
                caseStudies: [
                    {
                        title: 'Mike Thompson - Plant AI Transformation',
                        content: 'Led smart factory implementation reducing downtime by 40% and costs by $2M annually, earning promotion to VP of Operations.'
                    },
                    {
                        title: 'Manufacturing Company AI Success',
                        content: 'Mid-size manufacturer increased efficiency by 35% through AI-powered predictive maintenance and quality control systems.'
                    }
                ],
                actionPlan: [
                    'Learn industrial AI and IoT systems',
                    'Master predictive maintenance technologies',
                    'Develop expertise in smart manufacturing processes',
                    'Get certified in Industry 4.0 technologies',
                    'Lead AI pilot projects in your facility'
                ]
            }
        };

        return playbooks[industry] || {
            impact: 'Every industry is being transformed by AI. The key is to position yourself as a leader in AI adoption within your specific field.',
            technologies: ['Industry-specific AI tools', 'Data analytics platforms', 'Automation systems', 'AI-enhanced workflows'],
            roles: ['AI Implementation Specialist', 'Data-Driven Professional', 'AI Strategy Consultant', 'Technology Integration Manager'],
            caseStudies: [
                {
                    title: 'Generic AI Success Story',
                    content: 'Professionals who embrace AI early typically see 30-50% career advancement and salary increases within 2 years.'
                }
            ],
            actionPlan: [
                'Research AI applications in your specific industry',
                'Learn industry-relevant AI tools and platforms',
                'Develop AI implementation strategies',
                'Build a portfolio of AI-enhanced work',
                'Position yourself as an AI adoption leader'
            ]
        };
    }

    async createChapter5ResourcesAndTools(userProfile) {
        this.addTitle('CHAPTER 5: RESOURCES & TOOLS', 16, [0, 128, 128]);
        this.currentY += 5;
        
        this.addSubtitle('Essential AI Tools for Your Career');
        
        this.addSubtitle('General AI Productivity Tools');
        const generalTools = [
            'ChatGPT Plus - Advanced conversational AI for research, writing, and analysis',
            'Claude AI - Anthropic\'s AI assistant for complex reasoning and analysis',
            'Perplexity AI - AI-powered search and research tool',
            'Notion AI - AI-enhanced note-taking and project management',
            'Canva AI - AI-powered design and content creation',
            'Grammarly AI - Advanced writing assistance and editing'
        ];
        generalTools.forEach(tool => this.addBulletPoint(tool));
        
        this.addSubtitle(`Industry-Specific AI Tools for ${userProfile.industry || 'Your Field'}`);
        const industryTools = this.getIndustrySpecificTools(userProfile.industry);
        industryTools.forEach(tool => this.addBulletPoint(tool));
        
        this.addSubtitle('Learning Resources');
        this.addSubtitle('Free Online Courses');
        const freeCourses = [
            'Coursera: "AI for Everyone" by Andrew Ng',
            'edX: "Introduction to Artificial Intelligence"',
            'MIT OpenCourseWare: Machine Learning courses',
            'YouTube: "Machine Learning Explained" by Zach Star',
            'Kaggle Learn: Free micro-courses on AI/ML'
        ];
        freeCourses.forEach(course => this.addBulletPoint(course));
        
        this.addSubtitle('Professional Certifications');
        const certifications = [
            'Google AI/ML Certificates',
            'AWS Machine Learning Specialty',
            'Microsoft Azure AI Engineer',
            'IBM AI Engineering Professional Certificate',
            'Stanford AI Graduate Certificate'
        ];
        certifications.forEach(cert => this.addBulletPoint(cert));
        
        this.addSubtitle('Professional Communities');
        const communities = [
            'LinkedIn AI Professionals Group',
            'Reddit: r/MachineLearning, r/artificial',
            'Discord: AI & ML Community servers',
            'Meetup: Local AI and Data Science groups',
            'Twitter: Follow @OpenAI, @DeepMind, @AnthropicAI'
        ];
        communities.forEach(community => this.addBulletPoint(community));
        
        this.addNewPage();
    }

    getIndustrySpecificTools(industry) {
        const tools = {
            'Healthcare': [
                'IBM Watson Health - Medical AI platform',
                'Google Health AI - Medical imaging and diagnostics',
                'Tempus - Cancer care AI platform',
                'Babylon Health - AI-powered healthcare app',
                'Ada Health - AI symptom checker'
            ],
            'Finance': [
                'Bloomberg Terminal AI features',
                'Alpaca Trading API - Algorithmic trading',
                'Quantconnect - Algorithmic trading platform',
                'H2O.ai - AI platform for financial services',
                'DataRobot - Automated machine learning'
            ],
            'Technology': [
                'TensorFlow - Google\'s ML framework',
                'PyTorch - Facebook\'s deep learning framework',
                'Hugging Face - NLP models and tools',
                'OpenAI API - GPT integration',
                'Weights & Biases - ML experiment tracking'
            ],
            'Education': [
                'Coursera for Business - AI-powered learning',
                'Khan Academy\'s AI tools',
                'Duolingo AI language learning',
                'Century Tech - AI-powered learning platform',
                'Squirrel AI - Adaptive learning system'
            ],
            'Manufacturing': [
                'Siemens MindSphere - Industrial IoT platform',
                'GE Predix - Industrial AI platform',
                'Rockwell FactoryTalk - Smart manufacturing',
                'Uptake - Predictive maintenance AI',
                'C3 AI - Enterprise AI applications'
            ]
        };
        
        return tools[industry] || [
            'Industry-specific AI platforms',
            'Business intelligence tools with AI',
            'Automation platforms',
            'Data analytics software'
        ];
    }

    async createPersonalizedRoadmap(userProfile, assessmentResults) {
        this.addTitle('YOUR PERSONALIZED ROADMAP', 16, [255, 69, 0]);
        this.currentY += 5;
        
        this.addParagraph('This section provides your customized career transformation roadmap based on your assessment results and profile.');
        
        if (assessmentResults) {
            this.addHighlightBox('Your Current Status', 
                `AI Readiness: ${assessmentResults.aiReadinessScore || 'N/A'}%\nAutomation Risk: ${assessmentResults.automationRisk || 'N/A'}%\nRecommended Track: ${this.getActionLevel(assessmentResults)}`);
        }
        
        this.addSubtitle('90-Day Milestone Goals');
        const milestones = this.getPersonalizedMilestones(userProfile, assessmentResults);
        milestones.forEach(milestone => this.addBulletPoint(milestone));
        
        this.addSubtitle('Success Metrics');
        const metrics = [
            'Increased AI tool proficiency (measured weekly)',
            'Enhanced productivity (20-40% improvement target)',
            'Expanded professional network in AI space',
            'Portfolio of AI-enhanced projects',
            'Recognition as AI adoption leader in your role'
        ];
        metrics.forEach(metric => this.addBulletPoint(metric));
        
        this.addNewPage();
    }

    getPersonalizedMilestones(userProfile, assessmentResults) {
        const baseMilestones = [
            'Month 1: Master 3 essential AI tools for your role',
            'Month 2: Complete first AI-enhanced project',
            'Month 3: Propose AI implementation strategy to leadership'
        ];
        
        if (assessmentResults && assessmentResults.aiReadinessScore >= 60) {
            return [
                'Month 1: Lead AI adoption initiatives in your team',
                'Month 2: Develop comprehensive AI strategy for your department',
                'Month 3: Secure AI leadership role or consulting opportunities'
            ];
        }
        
        return baseMilestones;
    }

    async createWorksheets(userProfile) {
        this.addTitle('WORKSHEETS & TEMPLATES', 16, [128, 128, 0]);
        this.currentY += 5;
        
        this.addSubtitle('AI Skills Assessment Worksheet');
        this.addParagraph('Use this worksheet to track your AI skill development:');
        
        // Create a simple table-like structure
        this.doc.setFontSize(9);
        this.doc.text('Skill Area', 25, this.currentY);
        this.doc.text('Current Level (1-10)', 100, this.currentY);
        this.doc.text('Target Level', 150, this.currentY);
        this.currentY += 8;
        
        const skills = [
            'AI Tool Proficiency',
            'Prompt Engineering',
            'Data Analysis',
            'Strategic AI Planning',
            'Human-AI Collaboration'
        ];
        
        skills.forEach(skill => {
            this.doc.text(skill, 25, this.currentY);
            this.doc.text('____', 100, this.currentY);
            this.doc.text('____', 150, this.currentY);
            this.currentY += 8;
        });
        
        this.currentY += 10;
        
        this.addSubtitle('30-Day Action Plan Template');
        this.addParagraph('Track your daily progress with this template:');
        
        for (let week = 1; week <= 4; week++) {
            this.checkPageBreak(40);
            this.addSubtitle(`Week ${week} Goals:`, 10);
            this.currentY += 5;
            for (let i = 0; i < 3; i++) {
                this.doc.text('□ _________________________________', 25, this.currentY);
                this.currentY += 8;
            }
            this.currentY += 5;
        }
        
        this.addNewPage();
    }

    async createAppendices() {
        this.addTitle('APPENDICES', 16, [64, 64, 64]);
        this.currentY += 5;
        
        this.addSubtitle('Appendix A: Glossary of AI Terms');
        const glossary = [
            'Artificial Intelligence (AI): Technology that enables machines to perform tasks typically requiring human intelligence',
            'Machine Learning (ML): Subset of AI that learns patterns from data without explicit programming',
            'Deep Learning: Advanced ML using neural networks with multiple layers',
            'Natural Language Processing (NLP): AI that understands and generates human language',
            'Computer Vision: AI that interprets and analyzes visual information',
            'Prompt Engineering: The skill of crafting effective instructions for AI systems'
        ];
        
        glossary.forEach(term => {
            this.addParagraph(term, 9);
        });
        
        this.addSubtitle('Appendix B: Additional Resources');
        this.addParagraph('Visit our website for updated resources: https://ai-career-transformation.surge.sh');
        
        this.addSubtitle('Appendix C: Contact Information');
        this.addParagraph('For questions or support, contact us through our website or social media channels.');
        
        // Add final page number
        this.addPageNumber();
    }
}

// Export for use in other files
window.AICareerSurvivalGuideGenerator = AICareerSurvivalGuideGenerator;