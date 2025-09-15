// Simplified AI Career Guide PDF Generator
// This version focuses on working functionality over complex formatting

class SimpleAIGuideGenerator {
    constructor() {
        this.doc = null;
        this.currentY = 20;
        this.leftMargin = 20;
        this.pageHeight = 280;
    }

    async generateGuide(userProfile) {
        try {
            // Initialize PDF
            if (typeof window.jspdf === 'undefined') {
                throw new Error('jsPDF library not loaded');
            }
            
            const { jsPDF } = window.jspdf;
            this.doc = new jsPDF();
            this.currentY = 20;
            
            console.log('✅ PDF initialized');
            
            // Generate content
            this.createCoverPage(userProfile);
            this.createChapter1();
            this.createChapter2(userProfile);
            this.createChapter3(userProfile);
            this.createResources();
            
            // Save the PDF
            const filename = `AI_Career_Guide_${userProfile.name.replace(/\s+/g, '_')}.pdf`;
            this.doc.save(filename);
            
            console.log('✅ PDF saved as:', filename);
            return true;
            
        } catch (error) {
            console.error('❌ PDF Generation Error:', error);
            return false;
        }
    }

    checkPageBreak(spaceNeeded = 20) {
        if (this.currentY + spaceNeeded > this.pageHeight) {
            this.doc.addPage();
            this.currentY = 20;
        }
    }

    addTitle(text, fontSize = 16) {
        this.checkPageBreak(30);
        this.doc.setFontSize(fontSize);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(text, this.leftMargin, this.currentY);
        this.currentY += fontSize + 5;
    }

    addSubtitle(text, fontSize = 12) {
        this.checkPageBreak(20);
        this.doc.setFontSize(fontSize);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(text, this.leftMargin, this.currentY);
        this.currentY += fontSize + 3;
    }

    addText(text, fontSize = 10) {
        this.checkPageBreak(15);
        this.doc.setFontSize(fontSize);
        this.doc.setFont('helvetica', 'normal');
        
        // Simple text wrapping - split long lines manually
        const maxWidth = 170;
        const words = text.split(' ');
        let line = '';
        
        for (let word of words) {
            const testLine = line + (line ? ' ' : '') + word;
            const textWidth = this.doc.getTextWidth(testLine);
            
            if (textWidth > maxWidth && line) {
                this.doc.text(line, this.leftMargin, this.currentY);
                this.currentY += fontSize * 1.2;
                line = word;
                this.checkPageBreak(15);
            } else {
                line = testLine;
            }
        }
        
        if (line) {
            this.doc.text(line, this.leftMargin, this.currentY);
            this.currentY += fontSize * 1.2;
        }
        
        this.currentY += 3; // Extra spacing
    }

    addBullet(text) {
        this.checkPageBreak(15);
        this.doc.setFontSize(10);
        this.doc.setFont('helvetica', 'normal');
        this.doc.text('• ' + text, this.leftMargin + 5, this.currentY);
        this.currentY += 12;
    }

    createCoverPage(userProfile) {
        // Title
        this.doc.setFontSize(24);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('AI CAREER SURVIVAL GUIDE', this.leftMargin, 40);
        
        // Subtitle
        this.doc.setFontSize(16);
        this.doc.text(`Personalized for ${userProfile.name}`, this.leftMargin, 60);
        
        // Industry
        this.doc.setFontSize(14);
        this.doc.text(`${userProfile.industry} Professional`, this.leftMargin, 80);
        
        // Date
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'normal');
        this.doc.text(`Generated: ${new Date().toLocaleDateString()}`, this.leftMargin, 100);
        
        // Key info
        this.doc.setFontSize(10);
        this.doc.text(`Experience Level: ${userProfile.experience}`, this.leftMargin, 120);
        this.doc.text(`Primary Goal: ${userProfile.goal}`, this.leftMargin, 135);
        this.doc.text(`AI Knowledge: ${userProfile.aiKnowledge}`, this.leftMargin, 150);
        this.doc.text(`Urgency: ${userProfile.urgency}`, this.leftMargin, 165);
        
        // Warning box
        this.doc.setFillColor(255, 240, 240);
        this.doc.rect(this.leftMargin, 180, 170, 40, 'F');
        this.doc.setDrawColor(255, 0, 0);
        this.doc.rect(this.leftMargin, 180, 170, 40);
        
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('⚠️  URGENT ACTION REQUIRED', this.leftMargin + 5, 195);
        this.doc.setFontSize(10);
        this.doc.setFont('helvetica', 'normal');
        this.doc.text('AI is transforming your industry NOW.', this.leftMargin + 5, 210);
        this.doc.text('Follow this guide to secure your career.', this.leftMargin + 5, 225);
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter1() {
        this.addTitle('CHAPTER 1: THE AI EMERGENCY', 18);
        
        this.addSubtitle('Why You Need to Act NOW');
        this.addText('Artificial Intelligence is not coming in the future - it\'s here today, transforming every industry at breakneck speed. Companies are already implementing AI solutions that can automate tasks, enhance productivity, and replace entire job functions.');
        
        this.addText('The professionals who thrive in this new economy will be those who learn to work WITH AI, not against it. This guide will show you exactly how to position yourself as an AI-enhanced professional in your field.');
        
        this.addSubtitle('The AI Transformation Timeline');
        this.addBullet('2024-2025: Early AI adoption in most industries (WE ARE HERE)');
        this.addBullet('2025-2027: Widespread AI integration and job displacement');
        this.addBullet('2027-2030: AI-enhanced roles become the standard');
        this.addBullet('2030+: AI-native professionals dominate leadership');
        
        this.addSubtitle('Industries Being Transformed RIGHT NOW');
        this.addBullet('Healthcare: AI diagnostics and treatment planning');
        this.addBullet('Finance: Algorithmic trading and risk assessment');
        this.addBullet('Manufacturing: Smart factories and predictive maintenance');
        this.addBullet('Education: Personalized learning and automated grading');
        this.addBullet('Legal: Document review and case analysis');
        this.addBullet('Marketing: Content generation and customer insights');
    }

    createChapter2(userProfile) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 2: YOUR ${userProfile.industry.toUpperCase()} SURVIVAL STRATEGY`, 18);
        
        this.addSubtitle(`AI Impact on ${userProfile.industry}`);
        
        if (userProfile.industry === 'Technology') {
            this.addText('As a technology professional, you\'re in the best position to leverage AI. The demand for AI-skilled tech workers is exploding, with salaries reaching $200K-$500K for experienced AI engineers.');
            this.addBullet('Learn machine learning frameworks (TensorFlow, PyTorch)');
            this.addBullet('Master cloud AI platforms (AWS, Azure, GCP)');
            this.addBullet('Develop expertise in prompt engineering');
            this.addBullet('Build AI-powered applications');
        } else if (userProfile.industry === 'Healthcare') {
            this.addText('Healthcare is experiencing rapid AI adoption in diagnostics, treatment planning, and patient care. Medical professionals who embrace AI are seeing dramatic improvements in outcomes and career advancement.');
            this.addBullet('Learn to interpret AI diagnostic tools');
            this.addBullet('Understand AI ethics in healthcare');
            this.addBullet('Master AI-enhanced patient management systems');
            this.addBullet('Develop expertise in medical AI validation');
        } else if (userProfile.industry === 'Finance') {
            this.addText('Financial services are being revolutionized by AI-powered trading, risk assessment, and customer service. Finance professionals with AI skills command premium salaries.');
            this.addBullet('Master algorithmic trading concepts');
            this.addBullet('Learn AI risk modeling techniques');
            this.addBullet('Understand AI in fraud detection');
            this.addBullet('Develop robo-advisor expertise');
        } else {
            this.addText(`Your ${userProfile.industry} industry is being transformed by AI in unprecedented ways. The key is to position yourself as an AI adoption leader within your field.`);
            this.addBullet('Research AI applications in your specific industry');
            this.addBullet('Learn industry-relevant AI tools');
            this.addBullet('Develop AI implementation strategies');
            this.addBullet('Build expertise in AI-human collaboration');
        }
        
        this.addSubtitle('Your 30-Day Action Plan');
        this.addText('Based on your profile, here\'s your personalized roadmap:');
        
        if (userProfile.urgency === 'Critical') {
            this.addBullet('Week 1: Master ChatGPT and Claude for daily work');
            this.addBullet('Week 2: Identify 3 AI tools specific to your role');
            this.addBullet('Week 3: Create AI-enhanced project portfolio');
            this.addBullet('Week 4: Propose AI initiative to your leadership');
        } else {
            this.addBullet('Week 1-2: Explore AI tools and understand capabilities');
            this.addBullet('Week 3-4: Begin integrating AI into current workflows');
            this.addBullet('Month 2: Develop AI expertise in your specialty area');
            this.addBullet('Month 3: Position yourself as AI champion in organization');
        }
    }

    createChapter3(userProfile) {
        this.checkPageBreak(50);
        this.addTitle('CHAPTER 3: ESSENTIAL AI TOOLS FOR YOUR SUCCESS', 18);
        
        this.addSubtitle('Universal AI Tools (Everyone Should Master)');
        this.addBullet('ChatGPT Plus: Advanced reasoning and analysis');
        this.addBullet('Claude AI: Complex document analysis');
        this.addBullet('Perplexity: AI-powered research');
        this.addBullet('Notion AI: Enhanced productivity');
        this.addBullet('Grammarly AI: Professional communication');
        
        this.addSubtitle(`${userProfile.industry}-Specific AI Tools`);
        
        if (userProfile.industry === 'Technology') {
            this.addBullet('GitHub Copilot: AI-powered coding');
            this.addBullet('TensorFlow: Machine learning framework');
            this.addBullet('Hugging Face: Pre-trained AI models');
            this.addBullet('OpenAI API: Build AI applications');
        } else if (userProfile.industry === 'Healthcare') {
            this.addBullet('IBM Watson Health: Medical AI platform');
            this.addBullet('Google Health AI: Medical imaging');
            this.addBullet('Tempus: Cancer care AI');
            this.addBullet('Ada Health: Symptom assessment');
        } else if (userProfile.industry === 'Finance') {
            this.addBullet('Bloomberg AI: Financial analysis');
            this.addBullet('Alpaca: Algorithmic trading');
            this.addBullet('DataRobot: Automated ML for finance');
            this.addBullet('H2O.ai: Financial risk modeling');
        } else {
            this.addBullet('Industry-specific AI platforms');
            this.addBullet('Business intelligence with AI');
            this.addBullet('Automation tools for your field');
            this.addBullet('Data analytics software');
        }
        
        this.addSubtitle('Learning Resources');
        this.addBullet('Coursera: AI for Everyone (Free)');
        this.addBullet('edX: MIT Introduction to AI');
        this.addBullet('YouTube: Machine Learning Explained');
        this.addBullet('Kaggle Learn: Free AI courses');
        this.addBullet('LinkedIn Learning: AI for Business');
    }

    createResources() {
        this.checkPageBreak(50);
        this.addTitle('RESOURCES & NEXT STEPS', 18);
        
        this.addSubtitle('Immediate Actions');
        this.addBullet('Complete the full AI Career Assessment');
        this.addBullet('Join AI professional communities');
        this.addBullet('Start using AI tools in your daily work');
        this.addBullet('Build your AI-enhanced portfolio');
        
        this.addSubtitle('Professional Development');
        this.addBullet('Attend AI conferences and webinars');
        this.addBullet('Get AI certifications relevant to your field');
        this.addBullet('Network with AI professionals');
        this.addBullet('Follow AI thought leaders');
        
        this.addSubtitle('Stay Updated');
        this.addText('AI is evolving rapidly. Stay current with:');
        this.addBullet('AI news websites and newsletters');
        this.addBullet('Professional AI communities');
        this.addBullet('Industry-specific AI forums');
        this.addBullet('Continuous learning platforms');
        
        this.addSubtitle('Contact & Support');
        this.addText('For additional support and resources:');
        this.addText('Website: https://ai-career-transformation.surge.sh');
        this.addText('Assessment: Complete your full career assessment');
        this.addText('Roadmaps: Explore detailed career roadmaps');
        
        // Add footer
        this.currentY = 270;
        this.doc.setFontSize(8);
        this.doc.text('© 2025 AI Career Transformation - Your Success Starts Now', this.leftMargin, this.currentY);
    }
}

// Make it globally available
window.SimpleAIGuideGenerator = SimpleAIGuideGenerator;