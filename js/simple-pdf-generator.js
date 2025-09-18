// Simplified AI Career Guide PDF Generator
// This version focuses on working functionality over complex formatting

class SimpleAIGuideGenerator {
    constructor() {
        this.doc = null;
        this.currentY = 20;
        this.leftMargin = 20;
        this.pageHeight = 280;
        this.userAnalysis = null;
    }

    // Comprehensive User Analysis System
    analyzeUser(userProfile) {
        const analysis = {
            readinessScore: this.calculateReadinessScore(userProfile),
            riskLevel: this.calculateAutomationRisk(userProfile),
            strengths: this.identifyStrengths(userProfile),
            weaknesses: this.identifyWeaknesses(userProfile),
            opportunities: this.identifyOpportunities(userProfile),
            threats: this.identifyThreats(userProfile),
            personalizedPlan: this.createPersonalizedPlan(userProfile),
            industryInsights: this.getIndustryInsights(userProfile.industry),
            skillGaps: this.analyzeSkillGaps(userProfile),
            careerPath: this.suggestCareerPath(userProfile)
        };
        
        this.userAnalysis = analysis;
        return analysis;
    }

    identifyStrengths(userProfile) {
        const strengths = [];
        
        // Experience-based strengths
        if (userProfile.experience.includes('15+')) {
            strengths.push('Extensive industry experience and leadership credentials');
            strengths.push('Deep understanding of business processes and stakeholder management');
            strengths.push('Proven track record of managing change and complex initiatives');
        } else if (userProfile.experience.includes('11-15')) {
            strengths.push('Strong senior-level experience with strategic thinking skills');
            strengths.push('Established professional network and industry relationships');
            strengths.push('Experience mentoring and developing junior staff');
        } else if (userProfile.experience.includes('6-10')) {
            strengths.push('Solid mid-level experience with project management skills');
            strengths.push('Good balance of technical expertise and business understanding');
            strengths.push('Proven ability to execute on initiatives and deliver results');
        } else {
            strengths.push('Fresh perspective and adaptability to new technologies');
            strengths.push('High learning agility and openness to innovation');
            strengths.push('Energy and enthusiasm for career development');
        }

        // AI Knowledge strengths
        if (userProfile.aiKnowledge === 'Advanced') {
            strengths.push('Advanced AI/ML technical expertise and implementation experience');
            strengths.push('Ability to architect and lead complex AI initiatives');
            strengths.push('Deep understanding of AI ethics, governance, and best practices');
        } else if (userProfile.aiKnowledge === 'Intermediate') {
            strengths.push('Solid foundation in AI concepts and practical application');
            strengths.push('Experience with AI tools and basic implementation');
            strengths.push('Understanding of AI business value and ROI measurement');
        } else if (userProfile.aiKnowledge === 'Basic') {
            strengths.push('Foundational AI awareness and eagerness to learn');
            strengths.push('Practical experience with consumer AI tools');
            strengths.push('Growing understanding of AI business applications');
        }

        // Industry-specific strengths
        this.addIndustryStrengths(strengths, userProfile.industry);

        return strengths;
    }

    identifyWeaknesses(userProfile) {
        const weaknesses = [];
        
        // AI Knowledge gaps
        if (userProfile.aiKnowledge === 'Beginner') {
            weaknesses.push('LIMITED AI KNOWLEDGE: Requires immediate foundational training');
            weaknesses.push('TECHNICAL SKILLS GAP: Need hands-on experience with AI tools');
            weaknesses.push('STRATEGIC UNDERSTANDING: Lack awareness of AI business impact');
        } else if (userProfile.aiKnowledge === 'Basic') {
            weaknesses.push('TECHNICAL DEPTH: Need advanced AI implementation skills');
            weaknesses.push('LEADERSHIP READINESS: Require experience leading AI initiatives');
            weaknesses.push('STRATEGIC PLANNING: Limited AI strategy development experience');
        } else if (userProfile.aiKnowledge === 'Intermediate') {
            weaknesses.push('CUTTING-EDGE EXPERTISE: Need exposure to latest AI developments');
            weaknesses.push('THOUGHT LEADERSHIP: Require platform to share AI insights');
            weaknesses.push('ENTERPRISE SCALE: Limited experience with large-scale AI deployment');
        }

        // Experience-based weaknesses
        if (userProfile.experience.includes('0-2')) {
            weaknesses.push('LIMITED EXPERIENCE: Need to build credibility and track record');
            weaknesses.push('NETWORK BUILDING: Require professional relationship development');
            weaknesses.push('STRATEGIC THINKING: Need development of long-term planning skills');
        }

        // Industry-specific weaknesses
        this.addIndustryWeaknesses(weaknesses, userProfile.industry);

        // Urgency-based weaknesses
        if (userProfile.urgency === 'Critical') {
            weaknesses.push('TIME PRESSURE: Limited time for comprehensive skill development');
            weaknesses.push('STRESS FACTORS: May compromise thorough learning approach');
        }

        return weaknesses;
    }

    identifyOpportunities(userProfile) {
        const opportunities = [];
        
        // Goal-specific opportunities
        if (userProfile.goal === 'Get Promoted') {
            opportunities.push('AI LEADERSHIP ROLES: Growing demand for AI-savvy managers');
            opportunities.push('STRATEGIC INITIATIVES: Lead digital transformation projects');
            opportunities.push('CROSS-FUNCTIONAL IMPACT: Influence multiple departments through AI');
        } else if (userProfile.goal === 'Change Careers') {
            opportunities.push('EMERGING AI ROLES: New positions being created across industries');
            opportunities.push('SKILL TRANSFER: Leverage existing expertise in AI context');
            opportunities.push('INDUSTRY PIVOT: Apply AI knowledge to new sectors');
        } else if (userProfile.goal === 'Start Business') {
            opportunities.push('AI CONSULTING: Growing market for AI implementation guidance');
            opportunities.push('INDUSTRY SOLUTIONS: Develop AI tools for specific sectors');
            opportunities.push('TRAINING SERVICES: Educate others on AI adoption');
        }

        // Industry opportunities
        opportunities.push(...this.getIndustryOpportunities(userProfile.industry));

        // Market timing opportunities
        opportunities.push('FIRST-MOVER ADVANTAGE: Early AI adoption provides competitive edge');
        opportunities.push('SKILLS SHORTAGE: High demand for AI-capable professionals');
        opportunities.push('INVESTMENT CLIMATE: Significant funding available for AI initiatives');

        return opportunities;
    }

    identifyThreats(userProfile) {
        const threats = [];
        
        // Automation threats based on industry and role
        const automationRisk = this.calculateAutomationRisk(userProfile);
        if (automationRisk === 'HIGH') {
            threats.push('AUTOMATION DISPLACEMENT: High risk of job automation within 2-5 years');
            threats.push('SKILL OBSOLESCENCE: Current skills may become irrelevant quickly');
            threats.push('COMPETITIVE PRESSURE: Colleagues adopting AI faster gaining advantage');
        } else if (automationRisk === 'MEDIUM') {
            threats.push('GRADUAL AUTOMATION: Partial job functions at risk over 5-10 years');
            threats.push('PRODUCTIVITY EXPECTATIONS: Pressure to increase output using AI');
            threats.push('ROLE EVOLUTION: Job requirements changing rapidly');
        }

        // Market threats
        threats.push('RAPID TECHNOLOGICAL CHANGE: AI advancement pace accelerating');
        threats.push('GENERATIONAL COMPETITION: Younger workers native to AI tools');
        threats.push('GLOBAL COMPETITION: AI enabling remote and offshore competition');

        // Personal threats based on urgency
        if (userProfile.urgency === 'Low') {
            threats.push('COMPLACENCY RISK: Delayed action may limit future options');
            threats.push('OPPORTUNITY COST: Missing current market advantages');
        }

        return threats;
    }

    addIndustryStrengths(strengths, industry) {
        const industryStrengths = {
            'Technology': [
                'Deep technical background ideal for AI implementation',
                'Understanding of software development and system architecture',
                'Familiarity with data structures and algorithmic thinking'
            ],
            'Finance': [
                'Strong analytical and quantitative skills',
                'Experience with data analysis and risk assessment',
                'Understanding of regulatory compliance and governance'
            ],
            'Healthcare': [
                'Domain expertise in complex, regulated environment',
                'Experience with evidence-based decision making',
                'Understanding of patient safety and ethical considerations'
            ],
            'Manufacturing': [
                'Process optimization and efficiency improvement experience',
                'Understanding of supply chain and operational complexity',
                'Quality control and continuous improvement mindset'
            ],
            'Education': [
                'Training and knowledge transfer expertise',
                'Understanding of learning processes and curriculum design',
                'Experience with diverse stakeholder management'
            ],
            'Legal': [
                'Critical thinking and analytical reasoning skills',
                'Experience with complex documentation and research',
                'Understanding of compliance and risk management'
            ],
            'Marketing': [
                'Understanding of customer behavior and segmentation',
                'Creative problem-solving and campaign development',
                'Data analysis and performance measurement experience'
            ]
        };
        
        const specific = industryStrengths[industry] || ['Industry expertise and domain knowledge'];
        strengths.push(...specific);
    }

    addIndustryWeaknesses(weaknesses, industry) {
        const industryWeaknesses = {
            'Technology': [
                'KEEPING PACE: Rapid technological change requires constant learning',
                'BUSINESS CONTEXT: Need stronger connection between tech and business value'
            ],
            'Finance': [
                'REGULATORY ADAPTATION: AI governance in heavily regulated environment',
                'CULTURAL CHANGE: Traditional industry slow to adopt new technologies'
            ],
            'Healthcare': [
                'REGULATORY HURDLES: Complex approval processes for AI implementation',
                'PRIVACY CONCERNS: Strict data protection and patient confidentiality requirements'
            ],
            'Manufacturing': [
                'INTEGRATION COMPLEXITY: Connecting AI with existing legacy systems',
                'WORKFORCE TRANSITION: Managing human-AI collaboration in traditional roles'
            ],
            'Education': [
                'BUDGET CONSTRAINTS: Limited funding for technology adoption',
                'RESISTANCE TO CHANGE: Traditional academic culture may resist AI integration'
            ],
            'Legal': [
                'ETHICAL CONCERNS: Professional responsibility and AI decision-making',
                'BILLABLE HOUR MODEL: Business model challenges with AI efficiency gains'
            ],
            'Marketing': [
                'DATA PRIVACY: Navigating consumer privacy regulations and AI',
                'CREATIVE BALANCE: Maintaining human creativity while leveraging AI efficiency'
            ]
        };
        
        const specific = industryWeaknesses[industry] || ['Industry-specific AI adoption challenges'];
        weaknesses.push(...specific);
    }

    getIndustryOpportunities(industry) {
        const opportunities = {
            'Technology': [
                'AI PRODUCT DEVELOPMENT: Create next-generation AI-powered solutions',
                'PLATFORM LEADERSHIP: Build AI infrastructure and tools for others',
                'TECHNICAL CONSULTING: Help other industries implement AI solutions'
            ],
            'Finance': [
                'FINTECH INNOVATION: Develop AI-powered financial services',
                'RISK MANAGEMENT: Advanced AI models for credit and investment risk',
                'REGULATORY COMPLIANCE: AI solutions for automated compliance monitoring'
            ],
            'Healthcare': [
                'DIGITAL HEALTH: AI-powered diagnostic and treatment tools',
                'PERSONALIZED MEDICINE: Custom treatment plans using AI analysis',
                'OPERATIONAL EFFICIENCY: AI optimization of healthcare delivery'
            ],
            'Manufacturing': [
                'SMART MANUFACTURING: AI-powered production optimization',
                'PREDICTIVE MAINTENANCE: AI systems to prevent equipment failure',
                'SUPPLY CHAIN OPTIMIZATION: AI-driven logistics and inventory management'
            ],
            'Education': [
                'PERSONALIZED LEARNING: AI-customized educational experiences',
                'ADMINISTRATIVE AUTOMATION: AI-powered student services and operations',
                'SKILL DEVELOPMENT: AI training programs for workforce development'
            ],
            'Legal': [
                'LEGAL TECH: AI-powered research and document analysis tools',
                'CONTRACT AUTOMATION: AI systems for contract review and generation',
                'COMPLIANCE MONITORING: Automated regulatory compliance tracking'
            ],
            'Marketing': [
                'PERSONALIZATION: AI-driven customer experience optimization',
                'PREDICTIVE ANALYTICS: AI forecasting for marketing campaign success',
                'CONTENT AUTOMATION: AI-powered content creation and optimization'
            ]
        };
        
        return opportunities[industry] || ['Industry-specific AI implementation opportunities'];
    }

    async generateGuide(userProfile) {
        try {
            console.log('🔧 Starting PDF generation...');
            
            // Initialize PDF
            if (typeof window.jspdf === 'undefined') {
                throw new Error('jsPDF library not loaded');
            }
            
            const { jsPDF } = window.jspdf;
            this.doc = new jsPDF();
            this.currentY = 20;
            
            console.log('✅ PDF initialized');
            
            // STEP 1: Comprehensive User Analysis
            console.log('🔍 Analyzing user profile and capabilities...');
            const userAnalysis = this.analyzeUser(userProfile);
            console.log('✅ User analysis complete - Score:', userAnalysis.readinessScore);
            
            // STEP 2: Generate Personalized Content
            console.log('📝 Generating personalized content...');
            
            try {
                this.createCoverPage(userProfile, userAnalysis);
                console.log('✅ Cover page created');
                
                this.createTableOfContents();
                console.log('✅ Table of contents created');
                
                this.createExecutiveSummary(userProfile, userAnalysis);
                console.log('✅ Executive summary created');
                
                // Stop here for now to test if basic generation works
                console.log('🎯 Basic PDF structure complete');
                
            } catch (contentError) {
                console.error('❌ Content generation error:', contentError);
                throw contentError;
            }
            
            // STEP 3: Return PDF for email or download
            const filename = `AI_Career_Guide_${userProfile.name.replace(/\s+/g, '_')}_Score_${userAnalysis.readinessScore}.pdf`;
            
            // Create base64 version for email
            const pdfBase64 = this.doc.output('datauristring');
            
            // Also save locally
            this.doc.save(filename);
            
            console.log('✅ Personalized PDF generated:', filename);
            return {
                success: true,
                filename: filename,
                pdfBase64: pdfBase64,
                analysis: userAnalysis
            };
            
        } catch (error) {
            console.error('❌ PDF Generation Error:', error);
            console.error('❌ Error stack:', error.stack);
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

    // ============= NEW PERSONALIZED CONTENT METHODS =============
    
    createPersonalizedAssessment(userProfile, analysis) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 1: YOUR PERSONALIZED AI READINESS ASSESSMENT`, 18);
        
        this.addSubtitle(`${userProfile.name}'s AI Career Readiness Score: ${analysis.readinessScore}/100`);
        this.addText(`Assessment Level: ${this.getReadinessAnalysis(analysis.readinessScore)}`);
        
        this.addSubtitle('Your Individual Assessment Results');
        this.addText('Based on your specific responses, here is your detailed analysis:');
        
        this.addText(`Industry Context: ${userProfile.industry}`);
        this.addText(`Experience Level: ${userProfile.experience}`);
        this.addText(`AI Knowledge: ${userProfile.aiKnowledge}`);
        this.addText(`Career Goal: ${userProfile.goal}`);
        this.addText(`Urgency Level: ${userProfile.urgency}`);
        
        this.addSubtitle('Personalized Risk Analysis');
        this.addText(`Automation Risk Level: ${analysis.riskLevel}`);
        if (analysis.riskLevel === 'HIGH') {
            this.addText('⚠️ URGENT ACTION REQUIRED: Your role faces significant automation threat within 2-5 years.');
            this.addText('Immediate AI skill development is critical for career protection.');
        } else if (analysis.riskLevel === 'MEDIUM') {
            this.addText('⚡ PROACTIVE APPROACH NEEDED: Some job functions may be automated in 5-10 years.');
            this.addText('Strategic AI skill building will position you for advancement.');
        } else {
            this.addText('✅ ENHANCEMENT OPPORTUNITY: Your role will likely be enhanced by AI.');
            this.addText('Focus on AI augmentation to maximize career potential.');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createStrengthsAnalysis(userProfile, analysis) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 2: YOUR UNIQUE STRENGTHS & ADVANTAGES`, 18);
        
        this.addSubtitle(`${userProfile.name}'s Core Strengths`);
        this.addText('These are your key assets for AI career transformation:');
        
        analysis.strengths.forEach((strength, index) => {
            this.addBullet(`STRENGTH ${index + 1}: ${strength}`);
        });
        
        this.addSubtitle('How to Leverage Your Strengths');
        this.addText('Strategic recommendations for maximizing your unique advantages:');
        
        if (userProfile.experience.includes('15+')) {
            this.addBullet('Position yourself as an AI transformation leader for your organization');
            this.addBullet('Mentor junior staff in AI adoption to build your legacy');
            this.addBullet('Speak at industry events about AI leadership and change management');
        } else if (userProfile.experience.includes('11-15')) {
            this.addBullet('Lead cross-functional AI initiatives to demonstrate strategic thinking');
            this.addBullet('Build bridges between technical teams and business stakeholders');
            this.addBullet('Develop AI training programs for your department');
        } else {
            this.addBullet('Become the go-to AI expert in your team through rapid skill development');
            this.addBullet('Document and share your AI learning journey to build thought leadership');
            this.addBullet('Network with AI professionals to accelerate career growth');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createWeaknessesAndGaps(userProfile, analysis) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 3: TECHNICAL SKILL GAPS & IMPROVEMENT ROADMAP`, 18);
        
        this.addSubtitle(`${userProfile.name}'s Detailed Skill Gap Analysis`);
        
        if (analysis.skillGaps && analysis.skillGaps.gaps.length > 0) {
            this.addText('Based on your comprehensive technical assessment, here are your specific skill gaps:');
            
            // Critical Gaps
            const criticalGaps = analysis.skillGaps.gaps.filter(gap => gap.includes('CRITICAL'));
            if (criticalGaps.length > 0) {
                this.addText('🚨 CRITICAL GAPS (Address Immediately):');
                criticalGaps.forEach(gap => {
                    this.addBullet(gap);
                });
            }
            
            // Important Gaps
            const importantGaps = analysis.skillGaps.gaps.filter(gap => gap.includes('IMPORTANT'));
            if (importantGaps.length > 0) {
                this.addText('⚡ IMPORTANT GAPS (Address Within 30 Days):');
                importantGaps.forEach(gap => {
                    this.addBullet(gap);
                });
            }
            
            // Advanced Gaps
            const advancedGaps = analysis.skillGaps.gaps.filter(gap => gap.includes('ADVANCED'));
            if (advancedGaps.length > 0) {
                this.addText('🎯 ADVANCED GAPS (Long-term Development):');
                advancedGaps.forEach(gap => {
                    this.addBullet(gap);
                });
            }
            
            // Practical Gaps
            const practicalGaps = analysis.skillGaps.gaps.filter(gap => gap.includes('PRACTICAL'));
            if (practicalGaps.length > 0) {
                this.addText('💻 PRACTICAL GAPS (Hands-on Experience Needed):');
                practicalGaps.forEach(gap => {
                    this.addBullet(gap);
                });
            }
            
        } else {
            // Fallback for basic assessment
            this.addText('General development areas based on your profile:');
            analysis.weaknesses.forEach((weakness, index) => {
                this.addBullet(`GAP ${index + 1}: ${weakness}`);
            });
        }
        
        this.addSubtitle('Prioritized Learning Roadmap');
        
        if (analysis.skillGaps && analysis.skillGaps.recommendations.length > 0) {
            this.addText('Your personalized study plan with specific resources:');
            
            // Priority 0 (Most Critical)
            const priority0 = analysis.skillGaps.recommendations.filter(rec => rec.includes('PRIORITY 0'));
            if (priority0.length > 0) {
                this.addText('🔥 IMMEDIATE ACTION (Start Today):');
                priority0.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // Priority 1
            const priority1 = analysis.skillGaps.recommendations.filter(rec => rec.includes('PRIORITY 1'));
            if (priority1.length > 0) {
                this.addText('📚 PRIORITY 1 (Week 1-2):');
                priority1.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // Priority 2
            const priority2 = analysis.skillGaps.recommendations.filter(rec => rec.includes('PRIORITY 2'));
            if (priority2.length > 0) {
                this.addText('📚 PRIORITY 2 (Week 3-4):');
                priority2.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // Priority 3
            const priority3 = analysis.skillGaps.recommendations.filter(rec => rec.includes('PRIORITY 3'));
            if (priority3.length > 0) {
                this.addText('💻 PRIORITY 3 (Month 2):');
                priority3.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // Hands-on Projects
            const projects = analysis.skillGaps.recommendations.filter(rec => rec.includes('PROJECT:'));
            if (projects.length > 0) {
                this.addText('🚀 HANDS-ON PROJECTS (Month 2-3):');
                projects.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // Actions
            const actions = analysis.skillGaps.recommendations.filter(rec => rec.includes('ACTION:'));
            if (actions.length > 0) {
                this.addText('💪 ACTION ITEMS:');
                actions.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
            // General recommendations
            const general = analysis.skillGaps.recommendations.filter(rec => 
                !rec.includes('PRIORITY') && !rec.includes('PROJECT:') && !rec.includes('ACTION:')
            );
            if (general.length > 0) {
                this.addText('📖 ADDITIONAL LEARNING:');
                general.forEach(rec => {
                    this.addBullet(rec);
                });
            }
            
        } else {
            // Fallback recommendations
            this.addText('Start with these foundational steps:');
            this.addBullet('📚 Complete comprehensive AI fundamentals course');
            this.addBullet('💻 Practice with AI tools daily');
            this.addBullet('🚀 Build your first AI project');
            this.addBullet('👥 Join AI communities and networking groups');
        }
        
        this.addSubtitle('Success Metrics');
        this.addText('Track your progress with these specific milestones:');
        this.addBullet('✅ Complete 90% of correct answers on technical assessment retake');
        this.addBullet('🏗️ Build and deploy 2-3 AI projects with documented results');
        this.addBullet('📊 Demonstrate measurable productivity improvements using AI');
        this.addBullet('👨‍🏫 Successfully teach AI concepts to a colleague');
        this.addBullet('🗣️ Present AI project results to management');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createOpportunitiesAndThreats(userProfile, analysis) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 4: YOUR MARKET OPPORTUNITIES & THREATS`, 18);
        
        this.addSubtitle(`${userProfile.name}'s Career Opportunities`);
        this.addText('These opportunities align with your profile and goals:');
        
        analysis.opportunities.forEach((opportunity, index) => {
            this.addBullet(`OPPORTUNITY ${index + 1}: ${opportunity}`);
        });
        
        this.addSubtitle('Potential Threats to Address');
        this.addText('Proactive strategies to mitigate career risks:');
        
        analysis.threats.forEach((threat, index) => {
            this.addBullet(`THREAT ${index + 1}: ${threat}`);
        });
        
        this.addSubtitle('Strategic Response Plan');
        this.addText('How to capitalize on opportunities while mitigating threats:');
        
        if (userProfile.goal === 'Get Promoted') {
            this.addText('🚀 PROMOTION STRATEGY:');
            this.addBullet('Lead visible AI initiatives with measurable business impact');
            this.addBullet('Build reputation as AI innovator within your organization');
            this.addBullet('Develop AI skills that complement your existing expertise');
            this.addBullet('Network with decision-makers who value AI transformation');
        } else if (userProfile.goal === 'Change Careers') {
            this.addText('🔄 CAREER PIVOT STRATEGY:');
            this.addBullet('Build portfolio of AI projects in target industry');
            this.addBullet('Obtain relevant AI certifications and credentials');
            this.addBullet('Network with professionals in desired AI roles');
            this.addBullet('Gain experience through consulting or volunteer projects');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createTableOfContents() {
        this.checkPageBreak(50);
        this.addTitle('TABLE OF CONTENTS', 18);
        
        this.doc.setFontSize(12);
        this.doc.setFont('helvetica', 'normal');
        
        const contents = [
            'Executive Summary ................................. Page 3',
            'Chapter 1: The AI Emergency ....................... Page 4', 
            'Chapter 2: Your Industry Strategy ................ Page 7',
            'Chapter 3: Essential AI Tools .................... Page 10',
            'Chapter 4: Industry Playbook ..................... Page 13',
            'Chapter 5: Resources & Learning .................. Page 16',
            'Chapter 6: 90-Day Action Plan .................... Page 19',
            'Worksheets & Templates ........................... Page 22',
            'Appendices ....................................... Page 25'
        ];
        
        this.currentY += 10;
        
        contents.forEach(item => {
            this.checkPageBreak(15);
            this.doc.text(item, this.leftMargin + 10, this.currentY);
            this.currentY += 12;
        });
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createExecutiveSummary(userProfile) {
        this.addTitle('EXECUTIVE SUMMARY', 18);
        
        this.addSubtitle('Your AI Career Transformation Profile');
        this.addText(`Name: ${userProfile.name}`);
        this.addText(`Industry: ${userProfile.industry}`);
        this.addText(`Experience Level: ${userProfile.experience}`);
        this.addText(`Primary Goal: ${userProfile.goal}`);
        this.addText(`Current AI Knowledge: ${userProfile.aiKnowledge}`);
        this.addText(`Urgency Level: ${userProfile.urgency}`);
        
        this.addSubtitle('Key Findings & Recommendations');
        
        let riskLevel = 'MODERATE';
        let recommendation = 'You have time to prepare strategically';
        
        if (userProfile.urgency === 'Critical') {
            riskLevel = 'HIGH';
            recommendation = 'Immediate action required - begin AI integration within 30 days';
        } else if (userProfile.urgency === 'High') {
            riskLevel = 'ELEVATED';
            recommendation = 'Act quickly - begin AI upskilling within 60 days';
        }
        
        this.addText(`AUTOMATION RISK ASSESSMENT: ${riskLevel}`);
        this.addText(`PRIMARY RECOMMENDATION: ${recommendation}`);
        
        this.addSubtitle('Your Personalized Strategy Overview');
        
        if (userProfile.industry === 'Technology') {
            this.addText('As a technology professional, you have the highest potential for AI career advancement. Focus on becoming an AI implementation leader and consider specializing in machine learning engineering or AI product management.');
            this.addBullet('Immediate Focus: Master AI development frameworks');
            this.addBullet('6-Month Goal: Lead AI projects at your organization');
            this.addBullet('12-Month Goal: Transition to AI-specialized role');
        } else if (userProfile.industry === 'Healthcare') {
            this.addText('Healthcare AI adoption is accelerating rapidly. Position yourself as a bridge between technology and clinical practice to maximize career security and growth potential.');
            this.addBullet('Immediate Focus: Learn AI diagnostic interpretation');
            this.addBullet('6-Month Goal: Integrate AI tools into patient care');
            this.addBullet('12-Month Goal: Lead AI implementation initiatives');
        } else if (userProfile.industry === 'Finance') {
            this.addText('Financial services are experiencing massive AI disruption. Focus on algorithmic trading, risk modeling, and robo-advisory services to stay ahead of automation.');
            this.addBullet('Immediate Focus: Master financial AI platforms');
            this.addBullet('6-Month Goal: Develop AI-enhanced analysis skills');
            this.addBullet('12-Month Goal: Lead quantitative AI strategies');
        } else {
            this.addText(`Your ${userProfile.industry} industry is undergoing significant AI transformation. Focus on becoming the AI adoption champion in your organization to secure your career future.`);
            this.addBullet('Immediate Focus: Identify AI applications in your field');
            this.addBullet('6-Month Goal: Implement AI tools in daily work');
            this.addBullet('12-Month Goal: Lead industry AI transformation');
        }
        
        this.addSubtitle('Success Metrics');
        this.addText('Track your progress with these key indicators:');
        this.addBullet('Weekly: Hours spent learning AI tools and concepts');
        this.addBullet('Monthly: AI-enhanced projects completed');
        this.addBullet('Quarterly: Recognition as AI leader in organization');
        this.addBullet('Annually: Salary increase and career advancement');
        
        this.doc.addPage();
        this.currentY = 20;
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

    createChapter4IndustryPlaybook(userProfile) {
        this.checkPageBreak(50);
        this.addTitle(`CHAPTER 4: ${userProfile.industry.toUpperCase()} INDUSTRY PLAYBOOK`, 18);
        
        this.addSubtitle('Industry-Specific AI Transformation Strategies');
        
        if (userProfile.industry === 'Technology') {
            this.addText('The technology sector leads AI adoption globally. Tech professionals have unprecedented opportunities to shape the AI revolution and command premium salaries.');
            
            this.addSubtitle('High-Value AI Roles in Technology');
            this.addBullet('AI/ML Engineer: $200K-$400K annually');
            this.addBullet('AI Product Manager: $250K-$450K annually');
            this.addBullet('AI Research Scientist: $300K-$600K annually');
            this.addBullet('AI Solutions Architect: $220K-$380K annually');
            this.addBullet('AI Ethics Officer: $180K-$320K annually');
            
            this.addSubtitle('Essential Technology Skills');
            this.addBullet('Programming: Python, R, JavaScript for AI applications');
            this.addBullet('Frameworks: TensorFlow, PyTorch, Scikit-learn');
            this.addBullet('Cloud Platforms: AWS SageMaker, Azure ML, Google AI Platform');
            this.addBullet('MLOps: Model deployment, monitoring, and lifecycle management');
            this.addBullet('Data Engineering: ETL pipelines, data warehousing, real-time processing');
            
            this.addSubtitle('30-Day Tech Professional Action Plan');
            this.addBullet('Week 1: Set up development environment with AI frameworks');
            this.addBullet('Week 2: Complete online ML course and build first model');
            this.addBullet('Week 3: Deploy AI model to cloud platform');
            this.addBullet('Week 4: Present AI project proposal to leadership');
            
        } else if (userProfile.industry === 'Healthcare') {
            this.addText('Healthcare AI is revolutionizing patient care, diagnostics, and treatment planning. Medical professionals who embrace AI technology see dramatic improvements in patient outcomes and career advancement.');
            
            this.addSubtitle('AI Applications Transforming Healthcare');
            this.addBullet('Medical Imaging: AI-enhanced radiology and pathology');
            this.addBullet('Diagnostic Support: AI-powered symptom analysis');
            this.addBullet('Drug Discovery: AI-accelerated pharmaceutical research');
            this.addBullet('Personalized Medicine: Treatment optimization using AI');
            this.addBullet('Robotic Surgery: AI-assisted surgical procedures');
            
            this.addSubtitle('Career Opportunities in Healthcare AI');
            this.addBullet('AI-Enhanced Physician: $350K-$500K annually');
            this.addBullet('Healthcare AI Specialist: $180K-$250K annually');
            this.addBullet('Medical AI Data Scientist: $200K-$300K annually');
            this.addBullet('Clinical AI Researcher: $160K-$240K annually');
            
            this.addSubtitle('Healthcare AI Implementation Strategy');
            this.addBullet('Learn medical AI interpretation and validation');
            this.addBullet('Understand AI ethics and regulatory compliance');
            this.addBullet('Master AI-enhanced diagnostic workflows');
            this.addBullet('Develop expertise in patient data privacy');
            
        } else if (userProfile.industry === 'Finance') {
            this.addText('Financial services are experiencing rapid AI adoption in trading, risk management, fraud detection, and customer service. Finance professionals with AI skills command significant salary premiums.');
            
            this.addSubtitle('AI Applications in Finance');
            this.addBullet('Algorithmic Trading: AI-powered market analysis and execution');
            this.addBullet('Risk Assessment: Predictive modeling for credit and market risk');
            this.addBullet('Fraud Detection: Real-time transaction monitoring');
            this.addBullet('Robo-Advisors: Automated wealth management');
            this.addBullet('Regulatory Compliance: Automated reporting and monitoring');
            
            this.addSubtitle('High-Value Finance AI Roles');
            this.addBullet('Quantitative AI Analyst: $250K-$400K annually');
            this.addBullet('AI Risk Manager: $200K-$300K annually');
            this.addBullet('Algorithmic Trading Developer: $300K-$500K annually');
            this.addBullet('Financial AI Product Manager: $220K-$350K annually');
            
            this.addSubtitle('Finance AI Mastery Path');
            this.addBullet('Master quantitative analysis and statistical modeling');
            this.addBullet('Learn algorithmic trading strategies and backtesting');
            this.addBullet('Understand regulatory requirements for AI in finance');
            this.addBullet('Develop expertise in risk modeling and stress testing');
            
        } else {
            this.addText(`The ${userProfile.industry} industry is undergoing significant AI transformation. Position yourself as an AI adoption leader to secure your career future and unlock new opportunities.`);
            
            this.addSubtitle(`AI Impact on ${userProfile.industry}`);
            this.addBullet('Automation of routine tasks and processes');
            this.addBullet('Enhanced decision-making through data analytics');
            this.addBullet('Improved customer experience and personalization');
            this.addBullet('New AI-enhanced roles and career paths');
            
            this.addSubtitle('Universal AI Implementation Strategy');
            this.addBullet('Research AI applications specific to your industry');
            this.addBullet('Identify processes that can be AI-enhanced');
            this.addBullet('Develop pilot projects to demonstrate value');
            this.addBullet('Build internal expertise and training programs');
        }
        
        this.addSubtitle('Industry Success Stories');
        this.addText('Real professionals who transformed their careers with AI:');
        
        if (userProfile.industry === 'Technology') {
            this.addBullet('Sarah Kim: Software Engineer → AI Research Lead (+$180K salary)');
            this.addBullet('Marcus Chen: Web Developer → ML Engineer (+$150K salary)');
        } else if (userProfile.industry === 'Healthcare') {
            this.addBullet('Dr. Jennifer Walsh: Radiologist → AI Diagnostic Specialist (+$200K)');
            this.addBullet('Maria Rodriguez: Nurse → Healthcare AI Coordinator (+$80K)');
        } else if (userProfile.industry === 'Finance') {
            this.addBullet('David Thompson: Financial Analyst → Quant AI Developer (+$250K)');
            this.addBullet('Lisa Park: Risk Manager → AI Risk Strategist (+$120K)');
        } else {
            this.addBullet('Professional in your industry increased income by 40-60% with AI skills');
            this.addBullet('Career advancement typically occurs within 18-24 months');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter5ToolsAndResources(userProfile) {
        this.addTitle('CHAPTER 5: COMPREHENSIVE AI TOOLS & RESOURCES', 18);
        
        this.addSubtitle('Universal AI Productivity Tools');
        this.addText('Every professional should master these essential AI tools:');
        
        this.addBullet('ChatGPT Plus ($20/month): Advanced reasoning, code generation, analysis');
        this.addBullet('Claude AI (Free/Pro): Superior document analysis and complex reasoning');
        this.addBullet('Perplexity AI ($20/month): AI-powered research and fact-checking');
        this.addBullet('Notion AI ($10/month): Enhanced note-taking and project management');
        this.addBullet('Grammarly AI ($12/month): Professional writing and communication');
        this.addBullet('Canva AI ($15/month): AI-powered design and content creation');
        
        this.addSubtitle(`${userProfile.industry}-Specific AI Platforms`);
        
        if (userProfile.industry === 'Technology') {
            this.addBullet('GitHub Copilot ($10/month): AI pair programming');
            this.addBullet('Cursor AI: AI-powered code editor');
            this.addBullet('Replit AI: Cloud-based AI development environment');
            this.addBullet('Hugging Face: Pre-trained models and datasets');
            this.addBullet('Weights & Biases: ML experiment tracking');
            this.addBullet('DataRobot: Automated machine learning platform');
        } else if (userProfile.industry === 'Healthcare') {
            this.addBullet('IBM Watson Health: Medical AI and analytics platform');
            this.addBullet('Google Health AI: Medical imaging and diagnostic tools');
            this.addBullet('Tempus: AI-powered cancer care platform');
            this.addBullet('Ada Health: AI symptom checker and triage');
            this.addBullet('Zebra Medical Vision: AI medical imaging analysis');
        } else if (userProfile.industry === 'Finance') {
            this.addBullet('Bloomberg Terminal AI features: Financial analysis');
            this.addBullet('Alpaca Trading API: Algorithmic trading platform');
            this.addBullet('QuantConnect: Quantitative trading algorithms');
            this.addBullet('Kensho: Financial analytics and research');
            this.addBullet('H2O.ai: Machine learning for financial services');
        } else {
            this.addBullet('Industry-specific AI platforms and tools');
            this.addBullet('Business intelligence software with AI features');
            this.addBullet('Automation platforms for your workflow');
            this.addBullet('Data analytics tools with machine learning');
        }
        
        this.addSubtitle('Learning Resources by Skill Level');
        
        this.addText('BEGINNER LEVEL (0-6 months):');
        this.addBullet('Coursera: "AI for Everyone" by Andrew Ng (Free)');
        this.addBullet('edX: "Introduction to Artificial Intelligence" (Free)');
        this.addBullet('YouTube: "Machine Learning Explained" series');
        this.addBullet('Kaggle Learn: Free micro-courses on AI/ML');
        this.addBullet('MIT OpenCourseWare: Introduction to AI');
        
        this.addText('INTERMEDIATE LEVEL (6-18 months):');
        this.addBullet('Stanford CS229: Machine Learning Course');
        this.addBullet('Fast.ai: Practical Deep Learning for Coders');
        this.addBullet('Udacity AI Programming Nanodegree');
        this.addBullet('Google AI Education: TensorFlow courses');
        this.addBullet('DeepLearning.ai Specialization');
        
        this.addText('ADVANCED LEVEL (18+ months):');
        this.addBullet('Stanford CS231n: Convolutional Neural Networks');
        this.addBullet('Berkeley CS294: Deep Reinforcement Learning');
        this.addBullet('MIT 6.034: Artificial Intelligence');
        this.addBullet('Research papers on arXiv.org');
        this.addBullet('Industry conferences and workshops');
        
        this.addSubtitle('Professional Certifications');
        this.addBullet('Google AI/ML Professional Certificates');
        this.addBullet('AWS Machine Learning Specialty Certification');
        this.addBullet('Microsoft Azure AI Engineer Associate');
        this.addBullet('IBM AI Engineering Professional Certificate');
        this.addBullet('Stanford AI Graduate Certificate Program');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter6ActionPlan(userProfile) {
        this.addTitle('CHAPTER 6: YOUR 90-DAY AI TRANSFORMATION PLAN', 18);
        
        this.addSubtitle('Phase 1: Foundation (Days 1-30)');
        this.addText('Establish your AI knowledge base and begin practical application.');
        
        this.addText('Week 1: AI Literacy');
        this.addBullet('Complete "AI for Everyone" course');
        this.addBullet('Set up ChatGPT Plus and Claude AI accounts');
        this.addBullet('Practice basic prompt engineering');
        this.addBullet('Document 5 ways AI could improve your current work');
        
        this.addText('Week 2: Tool Mastery');
        this.addBullet('Master 3 universal AI tools for daily productivity');
        this.addBullet('Identify 2 industry-specific AI platforms');
        this.addBullet('Complete first AI-enhanced project');
        this.addBullet('Join AI professional communities');
        
        this.addText('Week 3: Practical Application');
        this.addBullet('Implement AI tools in daily workflow');
        this.addBullet('Measure productivity improvements');
        this.addBullet('Share AI insights with colleagues');
        this.addBullet('Research AI trends in your industry');
        
        this.addText('Week 4: Strategic Planning');
        this.addBullet('Develop 6-month AI learning roadmap');
        this.addBullet('Identify AI mentors and networking opportunities');
        this.addBullet('Propose AI pilot project to leadership');
        this.addBullet('Begin building AI-enhanced portfolio');
        
        this.addSubtitle('Phase 2: Development (Days 31-60)');
        this.addText('Deepen your expertise and begin leading AI initiatives.');
        
        if (userProfile.urgency === 'Critical') {
            this.addBullet('Accelerated learning: 2+ hours daily AI study');
            this.addBullet('Complete online specialization course');
            this.addBullet('Launch AI transformation project at work');
            this.addBullet('Network with AI professionals weekly');
        } else {
            this.addBullet('Structured learning: 1 hour daily AI study');
            this.addBullet('Complete intermediate AI course');
            this.addBullet('Implement AI solutions in current role');
            this.addBullet('Attend AI meetups and webinars');
        }
        
        this.addSubtitle('Phase 3: Leadership (Days 61-90)');
        this.addText('Position yourself as an AI leader and explore advanced opportunities.');
        
        this.addBullet('Lead AI adoption initiatives in your organization');
        this.addBullet('Mentor colleagues on AI tools and strategies');
        this.addBullet('Speak at industry events about AI transformation');
        this.addBullet('Explore AI-specialized role opportunities');
        
        this.addSubtitle('Success Metrics and KPIs');
        this.addText('Track your progress with these measurable outcomes:');
        
        this.addBullet('30 Days: 50% productivity increase using AI tools');
        this.addBullet('60 Days: Recognition as AI champion in organization');
        this.addBullet('90 Days: Leadership opportunity or salary increase');
        this.addBullet('6 Months: AI-specialized role or consulting opportunities');
        this.addBullet('12 Months: 30-50% career advancement or income increase');
        
        this.addSubtitle('Contingency Planning');
        this.addText('Prepare for potential challenges and setbacks:');
        
        if (userProfile.urgency === 'Critical') {
            this.addBullet('Backup Plan: If role is threatened, immediately pivot to freelance AI consulting');
            this.addBullet('Network Safety Net: Maintain relationships with 10+ AI professionals');
            this.addBullet('Skill Insurance: Master 5+ AI tools that transfer across industries');
        } else {
            this.addBullet('Career Insurance: Build AI skills while maintaining current performance');
            this.addBullet('Gradual Transition: Slowly increase AI responsibilities');
            this.addBullet('Risk Management: Keep multiple AI career paths open');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createWorksheets(userProfile) {
        this.addTitle('WORKSHEETS & PRACTICAL TEMPLATES', 18);
        
        this.addSubtitle('AI Skills Assessment Worksheet');
        this.addText('Rate yourself (1-10) and set target levels:');
        
        // Create a simple table-like structure
        this.doc.setFontSize(9);
        this.currentY += 10;
        this.doc.text('Skill Area', this.leftMargin, this.currentY);
        this.doc.text('Current Level', this.leftMargin + 80, this.currentY);
        this.doc.text('Target Level', this.leftMargin + 130, this.currentY);
        this.currentY += 8;
        
        const skills = [
            'AI Tool Proficiency',
            'Prompt Engineering', 
            'Data Analysis',
            'Strategic AI Planning',
            'Human-AI Collaboration',
            'Industry AI Knowledge',
            'Technical Implementation',
            'AI Ethics Understanding'
        ];
        
        skills.forEach(skill => {
            this.checkPageBreak(12);
            this.doc.text(skill, this.leftMargin, this.currentY);
            this.doc.text('____', this.leftMargin + 80, this.currentY);
            this.doc.text('____', this.leftMargin + 130, this.currentY);
            this.currentY += 12;
        });
        
        this.currentY += 15;
        this.addSubtitle('Weekly AI Learning Tracker');
        this.addText('Track your weekly AI learning activities:');
        
        for (let week = 1; week <= 12; week++) {
            this.checkPageBreak(40);
            this.addText(`Week ${week} Goals:`, 10);
            this.currentY += 5;
            for (let i = 0; i < 3; i++) {
                this.doc.setFontSize(9);
                this.doc.text('□ _________________________________', this.leftMargin + 5, this.currentY);
                this.currentY += 10;
            }
            this.currentY += 5;
        }
        
        this.doc.addPage();
        this.currentY = 20;
        
        this.addSubtitle('AI Project Planning Template');
        this.addText('Use this template to plan AI implementation projects:');
        
        this.addText('Project Name: _________________________');
        this.currentY += 15;
        this.addText('Business Objective: ____________________');
        this.currentY += 15;
        this.addText('AI Tools Required: ______________________');
        this.currentY += 15;
        this.addText('Timeline: ______________________________');
        this.currentY += 15;
        this.addText('Success Metrics: _______________________');
        this.currentY += 15;
        this.addText('Potential Challenges: ___________________');
        this.currentY += 15;
        this.addText('Mitigation Strategies: __________________');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createAppendices() {
        this.addTitle('APPENDICES', 18);
        
        this.addSubtitle('Appendix A: AI Terminology Glossary');
        
        const glossary = [
            'Artificial Intelligence (AI): Technology that enables machines to perform tasks requiring human intelligence',
            'Machine Learning (ML): Subset of AI that learns patterns from data without explicit programming',
            'Deep Learning: Advanced ML using neural networks with multiple layers',
            'Natural Language Processing (NLP): AI that understands and generates human language',
            'Computer Vision: AI that interprets and analyzes visual information',
            'Prompt Engineering: The skill of crafting effective instructions for AI systems',
            'Large Language Model (LLM): AI trained on vast text data to understand and generate language',
            'API: Application Programming Interface for connecting to AI services',
            'Algorithm: Set of rules or instructions for solving problems',
            'Neural Network: Computing system inspired by biological neural networks',
            'Training Data: Information used to teach AI systems',
            'Inference: Process of AI making predictions or decisions',
            'Automation: Using technology to perform tasks without human intervention',
            'Chatbot: AI program designed to simulate conversation',
            'Data Science: Field combining statistics, analysis, and ML to extract insights'
        ];
        
        glossary.forEach(term => {
            this.checkPageBreak(15);
            this.addText(term, 9);
        });
        
        this.addSubtitle('Appendix B: Emergency Action Checklist');
        this.addText('If your job is immediately threatened by AI:');
        
        this.addBullet('Day 1: Master ChatGPT and Claude for immediate productivity boost');
        this.addBullet('Week 1: Identify 3 AI tools that enhance your current role');
        this.addBullet('Week 2: Propose AI integration project to demonstrate value');
        this.addBullet('Week 3: Network with AI professionals in your industry');
        this.addBullet('Month 1: Apply for AI-enhanced roles or internal transfers');
        this.addBullet('Month 2: Consider AI consulting or freelance opportunities');
        
        this.addSubtitle('Appendix C: Resources and Support');
        this.addText('For ongoing support and updates:');
        this.addText('• Website: https://ai-career-transformation.surge.sh');
        this.addText('• Complete Assessment: Get detailed career analysis');
        this.addText('• Career Roadmaps: Explore industry-specific paths');
        this.addText('• Community: Join our professional network');
        
        this.addSubtitle('Appendix D: Contact Information');
        this.addText('Need personalized guidance? Contact our team:');
        this.addText('• Career Coaching: AI transformation specialists');
        this.addText('• Technical Support: Implementation assistance');
        this.addText('• Community Access: Professional networking');
        
        // Final page footer
        this.currentY = 270;
        this.doc.setFontSize(8);
        this.doc.text('© 2025 AI Career Transformation Platform - Your Success Starts Now', this.leftMargin, this.currentY);
    }

    createTableOfContents() {
        this.addTitle('TABLE OF CONTENTS', 18);
        this.addText('');
        this.addText('Executive Summary ........................... 3');
        this.addText('Chapter 1: AI Career Assessment ............. 4');
        this.addText('Chapter 2: Strategic Planning ............... 7');
        this.addText('Chapter 3: Implementation Guide ............. 10');
        this.addText('Chapter 4: Industry Playbook ................ 13');
        this.addText('Chapter 5: Tools & Resources ................ 16');
        this.addText('Chapter 6: Action Plans ..................... 19');
        this.addText('Worksheets & Templates ....................... 22');
        this.addText('Appendices ................................... 25');
        this.addText('');
        this.doc.addPage();
        this.currentY = 20;
    }

    createExecutiveSummary(userProfile) {
        this.addTitle('EXECUTIVE SUMMARY', 18);
        this.addSubtitle(`Personalized for ${userProfile.name}`);
        
        this.addText(`Based on your profile as a ${userProfile.industry} professional with ${userProfile.experience} of experience, this guide provides a comprehensive roadmap for AI career transformation.`);
        
        this.addSubtitle('Key Findings:');
        this.addBullet(`Your industry (${userProfile.industry}) is experiencing ${this.getIndustryUrgency(userProfile.industry)} AI adoption`);
        this.addBullet(`Your experience level positions you for ${this.getCareerOpportunity(userProfile.experience)}`);
        this.addBullet(`Your goal of "${userProfile.goal}" requires ${this.getTimeframe(userProfile.urgency)} action`);
        
        this.addSubtitle('Strategic Recommendations:');
        if (userProfile.urgency === 'Critical') {
            this.addBullet('IMMEDIATE ACTION REQUIRED: Begin AI skill development within 7 days');
            this.addBullet('Focus on emergency upskilling in core AI tools');
            this.addBullet('Implement AI solutions in current role within 30 days');
        } else if (userProfile.urgency === 'High') {
            this.addBullet('Accelerated learning path recommended');
            this.addBullet('Target AI implementation within 90 days');
            this.addBullet('Build portfolio of AI-enhanced projects');
        } else {
            this.addBullet('Systematic skill development approach');
            this.addBullet('Long-term strategic positioning');
            this.addBullet('Leadership development in AI adoption');
        }
        
        this.addSubtitle('Expected Outcomes:');
        this.addText('Following this guide will help you:');
        this.addBullet('Increase your market value by 25-50% within 12 months');
        this.addBullet('Position yourself as an AI leader in your organization');
        this.addBullet('Build recession-proof skills for the AI economy');
        this.addBullet('Access high-growth career opportunities');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter1Assessment(userProfile) {
        this.addTitle('CHAPTER 1: AI CAREER ASSESSMENT', 18);
        
        this.addSubtitle('Your Current Position Analysis');
        this.addText(`As a ${userProfile.industry} professional with ${userProfile.experience} of experience, you are positioned in a sector experiencing significant AI transformation.`);
        
        this.addSubtitle('Industry AI Readiness Score');
        const readinessScore = this.calculateReadinessScore(userProfile);
        this.addText(`Your industry readiness score: ${readinessScore}/100`);
        this.addText(this.getReadinessAnalysis(readinessScore));
        
        this.addSubtitle('Skill Gap Analysis');
        this.addText('Based on your current AI knowledge level and industry requirements:');
        
        if (userProfile.aiKnowledge === 'Beginner') {
            this.addBullet('Technical Skills Gap: HIGH - Requires immediate attention');
            this.addBullet('Strategic Understanding: MEDIUM - Foundational knowledge needed');
            this.addBullet('Implementation Experience: HIGH - Practical application required');
            this.addText('Recommendation: Intensive 90-day foundational program');
        } else if (userProfile.aiKnowledge === 'Basic') {
            this.addBullet('Technical Skills Gap: MEDIUM - Targeted skill development');
            this.addBullet('Strategic Understanding: LOW - Good foundation exists');
            this.addBullet('Implementation Experience: MEDIUM - Some practical application');
            this.addText('Recommendation: Accelerated 60-day advancement program');
        } else if (userProfile.aiKnowledge === 'Intermediate') {
            this.addBullet('Technical Skills Gap: LOW - Refinement and specialization');
            this.addBullet('Strategic Understanding: VERY LOW - Strong foundation');
            this.addBullet('Implementation Experience: LOW - Good practical experience');
            this.addText('Recommendation: 30-day leadership positioning program');
        } else {
            this.addBullet('Technical Skills Gap: MINIMAL - Focus on cutting-edge developments');
            this.addBullet('Strategic Understanding: MINIMAL - Expert level knowledge');
            this.addBullet('Implementation Experience: MINIMAL - Extensive experience');
            this.addText('Recommendation: Thought leadership and mentoring focus');
        }
        
        this.addSubtitle('Career Risk Assessment');
        this.addText('Analysis of automation risk and opportunity in your role:');
        
        const riskLevel = this.calculateAutomationRisk(userProfile);
        this.addText(`Automation Risk Level: ${riskLevel}`);
        
        if (riskLevel === 'HIGH') {
            this.addBullet('CRITICAL: Your role faces significant automation threat');
            this.addBullet('Timeline: 2-5 years for major disruption');
            this.addBullet('Action Required: Immediate skill pivot necessary');
        } else if (riskLevel === 'MEDIUM') {
            this.addBullet('MODERATE: Some functions may be automated');
            this.addBullet('Timeline: 5-10 years for partial disruption');
            this.addBullet('Action Required: Proactive skill enhancement');
        } else {
            this.addBullet('LOW: Role likely to be enhanced, not replaced');
            this.addBullet('Timeline: 10+ years for significant changes');
            this.addBullet('Action Required: Focus on AI augmentation');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter2Strategy(userProfile) {
        this.addTitle('CHAPTER 2: STRATEGIC CAREER PLANNING', 18);
        
        this.addSubtitle('Your Personalized Career Strategy');
        this.addText(`Based on your goal to "${userProfile.goal}" and your ${userProfile.urgency} urgency level, here's your strategic approach:`);
        
        if (userProfile.goal === 'Protect Current Job') {
            this.addSubtitle('Job Protection Strategy');
            this.addText('Focus on becoming indispensable through AI augmentation:');
            this.addBullet('Make yourself the AI expert in your team');
            this.addBullet('Automate routine tasks to focus on high-value work');
            this.addBullet('Train colleagues on AI tools to become the go-to person');
            this.addBullet('Document and share AI implementation successes');
            
        } else if (userProfile.goal === 'Get Promoted') {
            this.addSubtitle('Career Advancement Strategy');
            this.addText('Position yourself as an AI leader for rapid promotion:');
            this.addBullet('Lead AI adoption initiatives in your department');
            this.addBullet('Develop AI strategies for senior management');
            this.addBullet('Mentor others in AI implementation');
            this.addBullet('Quantify business impact of AI solutions');
            
        } else if (userProfile.goal === 'Change Careers') {
            this.addSubtitle('Career Transition Strategy');
            this.addText('Leverage AI skills for successful career pivoting:');
            this.addBullet('Identify transferable skills in AI context');
            this.addBullet('Build portfolio of AI projects in target industry');
            this.addBullet('Network with AI professionals in desired field');
            this.addBullet('Obtain industry-specific AI certifications');
            
        } else if (userProfile.goal === 'Start Business') {
            this.addSubtitle('Entrepreneurship Strategy');
            this.addText('Build AI-powered business from your expertise:');
            this.addBullet('Identify AI solution gaps in your industry');
            this.addBullet('Develop minimum viable AI product');
            this.addBullet('Build network of AI advisors and partners');
            this.addBullet('Secure funding for AI startup venture');
            
        } else {
            this.addSubtitle('AI Leadership Strategy');
            this.addText('Establish yourself as an AI thought leader:');
            this.addBullet('Speak at industry conferences about AI');
            this.addBullet('Publish content on AI transformation');
            this.addBullet('Advise organizations on AI strategy');
            this.addBullet('Build personal brand as AI expert');
        }
        
        this.addSubtitle('Competitive Positioning');
        this.addText('How to differentiate yourself in the AI-driven market:');
        this.addBullet('Develop unique AI skill combinations');
        this.addBullet('Focus on AI ethics and responsible implementation');
        this.addBullet('Build expertise in human-AI collaboration');
        this.addBullet('Specialize in industry-specific AI applications');
        
        this.addSubtitle('Market Timing');
        this.addText('Optimal timing for your AI career moves:');
        if (userProfile.urgency === 'Critical') {
            this.addText('IMMEDIATE ACTION PHASE (Next 30 days):');
            this.addBullet('Week 1-2: Emergency AI skill acquisition');
            this.addBullet('Week 3-4: Implement AI tools in current role');
            this.addBullet('Month 2: Demonstrate measurable AI impact');
        } else {
            this.addText('STRATEGIC DEVELOPMENT PHASE (Next 90 days):');
            this.addBullet('Month 1: Foundation building and tool mastery');
            this.addBullet('Month 2: Advanced skill development');
            this.addBullet('Month 3: Leadership positioning and networking');
        }
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter3Implementation(userProfile) {
        this.addTitle('CHAPTER 3: IMPLEMENTATION GUIDE', 18);
        
        this.addSubtitle('Phase 1: Foundation (Days 1-30)');
        this.addText('Essential skills and tools for immediate implementation:');
        
        this.addText('Week 1: AI Literacy Development');
        this.addBullet('Complete "AI for Everyone" course (Coursera)');
        this.addBullet('Set up ChatGPT Plus and Claude subscriptions');
        this.addBullet('Practice daily AI prompt engineering');
        this.addBullet('Join 3 AI professional communities');
        
        this.addText('Week 2: Tool Mastery');
        this.addBullet('Master ChatGPT for your specific work tasks');
        this.addBullet('Learn Claude for document analysis');
        this.addBullet('Set up Perplexity for research');
        this.addBullet('Configure Notion AI for productivity');
        
        this.addText('Week 3: Industry Application');
        this.addBullet(`Research AI tools specific to ${userProfile.industry}`);
        this.addBullet('Identify 5 AI use cases in your current role');
        this.addBullet('Create your first AI-assisted project');
        this.addBullet('Document time savings and quality improvements');
        
        this.addText('Week 4: Integration & Sharing');
        this.addBullet('Present AI findings to your team');
        this.addBullet('Train one colleague on AI tools');
        this.addBullet('Propose AI pilot project to management');
        this.addBullet('Start building your AI portfolio');
        
        this.addSubtitle('Phase 2: Advancement (Days 31-60)');
        this.addText('Developing specialized expertise and leadership:');
        
        this.addText('Advanced Skill Development:');
        this.addBullet('Learn no-code AI platforms (Zapier, Make)');
        this.addBullet('Understand AI ethics and bias considerations');
        this.addBullet('Develop prompt engineering expertise');
        this.addBullet('Study AI ROI measurement techniques');
        
        this.addText('Project Leadership:');
        this.addBullet('Lead cross-functional AI implementation');
        this.addBullet('Measure and report AI impact metrics');
        this.addBullet('Mentor team members in AI adoption');
        this.addBullet('Present results to senior leadership');
        
        this.addSubtitle('Phase 3: Leadership (Days 61-90)');
        this.addText('Establishing yourself as an AI authority:');
        
        this.addText('Strategic Initiatives:');
        this.addBullet('Develop AI strategy for your department');
        this.addBullet('Create AI training programs');
        this.addBullet('Build AI vendor relationships');
        this.addBullet('Establish AI governance frameworks');
        
        this.addText('External Recognition:');
        this.addBullet('Publish article on AI in your industry');
        this.addBullet('Speak at industry events about AI');
        this.addBullet('Join AI advisory boards');
        this.addBullet('Mentor other professionals in AI');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    getIndustryUrgency(industry) {
        const urgencyMap = {
            'Technology': 'rapid',
            'Finance': 'accelerated', 
            'Healthcare': 'significant',
            'Manufacturing': 'substantial',
            'Education': 'growing',
            'Legal': 'emerging',
            'Marketing': 'widespread'
        };
        return urgencyMap[industry] || 'notable';
    }

    getCareerOpportunity(experience) {
        if (experience.includes('0-2')) return 'foundational AI skill building';
        if (experience.includes('3-5')) return 'AI specialization and leadership roles';
        if (experience.includes('6-10')) return 'senior AI strategy positions';
        if (experience.includes('11-15')) return 'executive AI transformation roles';
        return 'AI advisory and board positions';
    }

    getTimeframe(urgency) {
        const timeframes = {
            'Critical': 'immediate',
            'High': 'urgent',
            'Medium': 'strategic',
            'Low': 'planned'
        };
        return timeframes[urgency] || 'strategic';
    }

    calculateReadinessScore(userProfile) {
        // Use actual technical assessment score if available
        if (userProfile.actualTechnicalScore !== undefined) {
            console.log('✅ Using rigorous technical assessment score:', userProfile.actualTechnicalScore);
            return userProfile.actualTechnicalScore;
        }
        
        // Fallback to basic assessment for backward compatibility (but with realistic scoring)
        let score = 20; // Lower base score for more realistic assessment
        
        // Experience factor (more conservative)
        if (userProfile.experience.includes('15+')) score += 25;
        else if (userProfile.experience.includes('11-15')) score += 20;
        else if (userProfile.experience.includes('6-10')) score += 15;
        else if (userProfile.experience.includes('3-5')) score += 10;
        else score += 5; // 0-2 years
        
        // AI knowledge factor (stricter requirements)
        const knowledgeBonus = {
            'Advanced': 30,     // Requires demonstrated expertise
            'Intermediate': 20, // Solid foundation
            'Basic': 10,        // Some knowledge
            'Beginner': 0       // Starting point
        };
        score += knowledgeBonus[userProfile.aiKnowledge] || 0;
        
        // Industry factor (more realistic based on AI adoption maturity)
        const industryModifier = {
            'Technology': 15,      // High AI adoption
            'Finance': 10,         // Growing adoption
            'Healthcare': 8,       // Regulated but advancing
            'Marketing': 12,       // Good AI tools available
            'Manufacturing': 5,    // Traditional industry
            'Education': 3,        // Slow adoption
            'Legal': 2            // Very traditional
        };
        score += industryModifier[userProfile.industry] || 5;
        
        // Cap score more realistically (most people should score 30-70 range)
        return Math.min(75, Math.max(15, score));
    }

    getReadinessAnalysis(score) {
        // More realistic scoring bands
        if (score >= 70) return 'EXCELLENT - Strong AI technical foundation with practical experience';
        if (score >= 55) return 'GOOD - Solid AI knowledge with some practical gaps to fill';
        if (score >= 40) return 'DEVELOPING - Basic AI understanding, needs focused skill development';
        if (score >= 25) return 'BEGINNER - Limited AI knowledge, requires comprehensive training';
        return 'FOUNDATIONAL - Starting point, needs intensive AI education and practice';
    }

    analyzeSkillGaps(userProfile) {
        const gaps = [];
        const recommendations = [];
        
        if (!userProfile.technicalAssessment) {
            gaps.push('Complete technical assessment needed for detailed analysis');
            return { gaps, recommendations };
        }
        
        const assessment = userProfile.technicalAssessment;
        
        // AI Fundamentals Gaps
        if (assessment.mlDefinition < 10) {
            gaps.push('CRITICAL: Machine Learning fundamentals understanding');
            recommendations.push('📚 PRIORITY 1: Take "Machine Learning Course" by Andrew Ng (Coursera)');
        }
        if (assessment.learningTypes < 10) {
            gaps.push('CRITICAL: Supervised vs Unsupervised learning concepts');
            recommendations.push('📚 Study: "Pattern Recognition and Machine Learning" chapters 1-3');
        }
        if (assessment.overfitting < 10) {
            gaps.push('IMPORTANT: Model validation and overfitting prevention');
            recommendations.push('📚 Learn: Cross-validation techniques and regularization methods');
        }
        
        // LLM Knowledge Gaps
        if (assessment.transformer < 10) {
            gaps.push('CRITICAL: Transformer architecture understanding');
            recommendations.push('📚 PRIORITY 2: Study "Attention Is All You Need" paper');
            recommendations.push('🎥 Watch: "Transformer Neural Networks" by 3Blue1Brown');
        }
        if (assessment.fineTuning < 10) {
            gaps.push('IMPORTANT: Fine-tuning and transfer learning');
            recommendations.push('💻 HANDS-ON: Practice fine-tuning with Hugging Face Transformers');
        }
        if (assessment.rlhf < 10) {
            gaps.push('ADVANCED: RLHF and AI alignment concepts');
            recommendations.push('📚 Study: "Learning to Summarize from Human Feedback" paper');
        }
        
        // Prompt Engineering Gaps
        if (assessment.chainOfThought < 10) {
            gaps.push('PRACTICAL: Advanced prompting techniques');
            recommendations.push('💻 PRACTICE: Chain-of-Thought prompting with GPT-4');
        }
        if (assessment.fewShot < 10) {
            gaps.push('PRACTICAL: Few-shot learning and in-context learning');
            recommendations.push('💻 PRACTICE: Few-shot prompting exercises');
        }
        if (assessment.hallucinations < 10) {
            gaps.push('CRITICAL: AI safety and reliability');
            recommendations.push('📚 Study: "Constitutional AI" and fact-checking techniques');
        }
        
        // AI Agents Gaps
        if (assessment.aiAgent < 10) {
            gaps.push('ADVANCED: AI agent architecture and design');
            recommendations.push('📚 Study: "Artificial Intelligence: A Modern Approach" chapters on agents');
        }
        if (assessment.react < 10) {
            gaps.push('ADVANCED: Reasoning and Acting (ReAct) frameworks');
            recommendations.push('💻 HANDS-ON: Build ReAct agent with LangChain');
        }
        if (assessment.toolAgents < 10) {
            gaps.push('PRACTICAL: Tool-using AI systems');
            recommendations.push('💻 PROJECT: Create agent with API tool access');
        }
        
        // Technical Implementation Gaps
        if (assessment.frameworks < 10) {
            gaps.push('CRITICAL: AI development frameworks');
            recommendations.push('💻 PRIORITY 3: Learn LangChain or LlamaIndex');
        }
        if (assessment.rag < 10) {
            gaps.push('IMPORTANT: RAG (Retrieval-Augmented Generation)');
            recommendations.push('💻 PROJECT: Build RAG system with vector database');
        }
        if (assessment.vectorEmbedding < 10) {
            gaps.push('IMPORTANT: Vector embeddings and semantic search');
            recommendations.push('💻 HANDS-ON: Practice with OpenAI embeddings and Pinecone');
        }
        
        // Experience Gaps
        if (assessment.experiencePoints < 15) {
            gaps.push('CRITICAL: Lack of hands-on AI project experience');
            recommendations.push('💻 ACTION: Build 3 AI projects in next 90 days');
            recommendations.push('🚀 Start with: Simple chatbot, document Q&A, text classifier');
        }
        
        // Programming Gaps
        if (assessment.languagePoints < 10) {
            gaps.push('CRITICAL: Programming skills for AI development');
            recommendations.push('💻 PRIORITY 0: Learn Python fundamentals and libraries (pandas, numpy)');
            recommendations.push('📚 Complete: "Python for Data Science" course');
        }
        
        return { gaps, recommendations };
    }

    calculateAutomationRisk(userProfile) {
        // Simplified risk calculation
        const industryRisk = {
            'Technology': 'LOW',
            'Finance': 'MEDIUM', 
            'Healthcare': 'LOW',
            'Manufacturing': 'HIGH',
            'Education': 'MEDIUM',
            'Legal': 'MEDIUM',
            'Marketing': 'MEDIUM'
        };
        return industryRisk[userProfile.industry] || 'MEDIUM';
    }

    createChapter4IndustryPlaybook(userProfile) {
        this.addTitle('CHAPTER 4: INDUSTRY-SPECIFIC PLAYBOOK', 18);
        
        this.addSubtitle(`AI Transformation in ${userProfile.industry}`);
        this.addText(`Comprehensive guide for AI adoption in the ${userProfile.industry} sector:`);
        
        if (userProfile.industry === 'Technology') {
            this.addSubtitle('Tech Industry AI Landscape');
            this.addText('The technology sector is at the forefront of AI innovation:');
            this.addBullet('90% of tech companies are actively implementing AI solutions');
            this.addBullet('Average AI skill premium: 35-50% salary increase');
            this.addBullet('Key focus areas: MLOps, AI infrastructure, ethical AI');
            
            this.addSubtitle('Critical AI Skills for Tech Professionals');
            this.addBullet('Machine Learning Operations (MLOps)');
            this.addBullet('Large Language Model (LLM) integration');
            this.addBullet('AI/ML pipeline automation');
            this.addBullet('Model monitoring and governance');
            
        } else if (userProfile.industry === 'Finance') {
            this.addSubtitle('Financial Services AI Revolution');
            this.addText('Finance is experiencing rapid AI-driven transformation:');
            this.addBullet('AI fraud detection reducing losses by 40%');
            this.addBullet('Algorithmic trading accounts for 85% of market activity');
            this.addBullet('Regulatory compliance increasingly AI-dependent');
            
            this.addSubtitle('Essential AI Applications in Finance');
            this.addBullet('Risk assessment and management automation');
            this.addBullet('Customer service chatbots and virtual assistants');
            this.addBullet('Regulatory reporting and compliance monitoring');
            this.addBullet('Investment analysis and portfolio optimization');
            
        } else if (userProfile.industry === 'Healthcare') {
            this.addSubtitle('Healthcare AI Transformation');
            this.addText('AI is revolutionizing patient care and operations:');
            this.addBullet('Diagnostic accuracy improvements of 15-20%');
            this.addBullet('Administrative cost reductions of 30%');
            this.addBullet('Personalized treatment plans through AI analysis');
            
            this.addSubtitle('Key AI Applications in Healthcare');
            this.addBullet('Medical imaging and diagnostic assistance');
            this.addBullet('Electronic health record optimization');
            this.addBullet('Drug discovery and development acceleration');
            this.addBullet('Predictive analytics for patient outcomes');
            
        } else {
            this.addSubtitle(`AI Opportunities in ${userProfile.industry}`);
            this.addText('Industry-specific AI transformation strategies:');
            this.addBullet('Process automation and efficiency gains');
            this.addBullet('Customer experience enhancement through AI');
            this.addBullet('Data-driven decision making capabilities');
            this.addBullet('Competitive advantage through AI adoption');
        }
        
        this.addSubtitle('Case Studies and Success Stories');
        this.addText('Real-world examples of AI career transformations:');
        this.addBullet('Marketing Manager → AI Strategy Director (6 months)');
        this.addBullet('Financial Analyst → Machine Learning Engineer (9 months)');
        this.addBullet('Operations Manager → AI Implementation Lead (4 months)');
        this.addBullet('Sales Representative → AI Sales Specialist (7 months)');
        
        this.addSubtitle('Industry-Specific Action Items');
        this.addText('Immediate steps for your industry context:');
        this.addBullet('Join industry-specific AI communities and forums');
        this.addBullet('Attend AI conferences relevant to your sector');
        this.addBullet('Follow thought leaders in your industry\'s AI space');
        this.addBullet('Pilot AI solutions with industry-specific use cases');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter5ToolsAndResources(userProfile) {
        this.addTitle('CHAPTER 5: TOOLS & RESOURCES', 18);
        
        this.addSubtitle('Essential AI Tools for Immediate Use');
        this.addText('Curated list of tools to start your AI journey today:');
        
        this.addText('Conversational AI Platforms:');
        this.addBullet('ChatGPT Plus ($20/month) - Advanced reasoning and analysis');
        this.addBullet('Claude Pro ($20/month) - Document analysis and coding');
        this.addBullet('Perplexity Pro ($20/month) - Research and fact-checking');
        this.addBullet('Gemini Advanced ($20/month) - Google integration');
        
        this.addText('Productivity Enhancement:');
        this.addBullet('Notion AI - Smart note-taking and content creation');
        this.addBullet('Grammarly - AI-powered writing assistance');
        this.addBullet('Otter.ai - Meeting transcription and summarization');
        this.addBullet('Calendly AI - Intelligent scheduling');
        
        this.addText('Industry-Specific Tools:');
        if (userProfile.industry === 'Technology') {
            this.addBullet('GitHub Copilot - AI-powered code completion');
            this.addBullet('Cursor - AI-first code editor');
            this.addBullet('Replit AI - Collaborative AI coding');
            this.addBullet('Tabnine - AI code assistant');
        } else if (userProfile.industry === 'Marketing') {
            this.addBullet('Jasper - AI content creation');
            this.addBullet('Midjourney - AI image generation');
            this.addBullet('Copy.ai - Marketing copy generation');
            this.addBullet('Canva AI - Design automation');
        } else if (userProfile.industry === 'Finance') {
            this.addBullet('DataRobot - Automated machine learning');
            this.addBullet('Kensho - Financial analytics AI');
            this.addBullet('AlphaSense - AI-powered market research');
            this.addBullet('Ayasdi - AI for risk management');
        } else {
            this.addBullet('Industry-specific AI tools research required');
            this.addBullet('Consult with AI vendors in your sector');
            this.addBullet('Test emerging tools in your field');
            this.addBullet('Network with AI practitioners in your industry');
        }
        
        this.addSubtitle('Learning Resources');
        this.addText('Structured learning paths for AI skill development:');
        
        this.addText('Foundational Courses:');
        this.addBullet('Coursera: AI for Everyone by Andrew Ng (4 weeks)');
        this.addBullet('edX: Introduction to Artificial Intelligence (MIT)');
        this.addBullet('Udacity: AI for Leaders Nanodegree');
        this.addBullet('LinkedIn Learning: AI Foundations series');
        
        this.addText('Advanced Specializations:');
        this.addBullet('Stanford CS229: Machine Learning Course');
        this.addBullet('Fast.ai: Practical Deep Learning for Coders');
        this.addBullet('Google AI Education: Machine Learning Crash Course');
        this.addBullet('Microsoft AI School: AI Business School');
        
        this.addSubtitle('Professional Networks and Communities');
        this.addText('Connect with AI professionals and stay updated:');
        this.addBullet('LinkedIn AI groups and thought leaders');
        this.addBullet('AI conferences: NeurIPS, ICML, AI Summit');
        this.addBullet('Local AI meetups and networking events');
        this.addBullet('Professional associations: Partnership on AI, AI Ethics');
        
        this.addSubtitle('Budget Planning');
        this.addText('Investment planning for your AI career development:');
        this.addText('Monthly AI Tool Budget: $60-100');
        this.addBullet('Core AI platforms: $60/month');
        this.addBullet('Specialized tools: $40/month');
        this.addBullet('Learning platforms: $30/month');
        
        this.addText('Annual Learning Investment: $2,000-5,000');
        this.addBullet('Online courses and certifications: $1,000');
        this.addBullet('Conference attendance: $2,000');
        this.addBullet('Books and resources: $500');
        this.addBullet('Mentoring and coaching: $1,500');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createChapter6ActionPlan(userProfile) {
        this.addTitle('CHAPTER 6: 90-DAY ACTION PLAN', 18);
        
        this.addSubtitle(`Personalized Plan for ${userProfile.name}`);
        this.addText(`Based on your ${userProfile.urgency} urgency level and goal to "${userProfile.goal}"`);
        
        if (userProfile.urgency === 'Critical') {
            this.addSubtitle('EMERGENCY 30-DAY PLAN');
            this.addText('Immediate action required for career protection:');
            
            this.addText('Week 1: Crisis Response');
            this.addBullet('Day 1-2: Set up ChatGPT Plus and Claude');
            this.addBullet('Day 3-4: Complete AI literacy crash course');
            this.addBullet('Day 5-7: Implement AI in 3 daily work tasks');
            
            this.addText('Week 2: Skill Acceleration');
            this.addBullet('Day 8-10: Master prompt engineering basics');
            this.addBullet('Day 11-12: Create first AI-enhanced project');
            this.addBullet('Day 13-14: Document and share results');
            
            this.addText('Week 3: Visibility Building');
            this.addBullet('Day 15-17: Present AI findings to manager');
            this.addBullet('Day 18-19: Train colleagues on AI tools');
            this.addBullet('Day 20-21: Propose AI pilot project');
            
            this.addText('Week 4: Strategic Positioning');
            this.addBullet('Day 22-24: Create AI implementation proposal');
            this.addBullet('Day 25-26: Network with AI professionals');
            this.addBullet('Day 27-30: Secure AI project leadership role');
            
        } else {
            this.addSubtitle('STRATEGIC 90-DAY PLAN');
            this.addText('Comprehensive approach for systematic advancement:');
            
            this.addText('Days 1-30: Foundation Phase');
            this.addBullet('Week 1: AI literacy and tool setup');
            this.addBullet('Week 2: Prompt engineering mastery');
            this.addBullet('Week 3: Industry-specific AI research');
            this.addBullet('Week 4: First AI project implementation');
            
            this.addText('Days 31-60: Development Phase');
            this.addBullet('Week 5-6: Advanced AI tool training');
            this.addBullet('Week 7-8: AI project leadership');
            this.addBullet('Week 9-10: Cross-functional collaboration');
            this.addBullet('Week 11-12: Results measurement and reporting');
            
            this.addText('Days 61-90: Leadership Phase');
            this.addBullet('Week 13-14: AI strategy development');
            this.addBullet('Week 15-16: Team training and mentoring');
            this.addBullet('Week 17-18: External networking and speaking');
            this.addBullet('Week 19-20: Long-term planning and positioning');
        }
        
        this.addSubtitle('Weekly Milestones and Checkpoints');
        this.addText('Track your progress with these key indicators:');
        
        this.addText('Week 1 Success Metrics:');
        this.addBullet('AI tools properly configured and tested');
        this.addBullet('First successful AI-assisted task completed');
        this.addBullet('Basic prompt engineering skills demonstrated');
        
        this.addText('Week 4 Success Metrics:');
        this.addBullet('Measurable productivity improvement documented');
        this.addBullet('Colleagues aware of your AI capabilities');
        this.addBullet('Manager recognizes your AI initiative');
        
        this.addText('Week 8 Success Metrics:');
        this.addBullet('Leading AI project with clear ROI');
        this.addBullet('Training others in AI implementation');
        this.addBullet('Recognized as team AI expert');
        
        this.addText('Week 12 Success Metrics:');
        this.addBullet('Promoted or assigned AI leadership role');
        this.addBullet('External recognition in AI community');
        this.addBullet('Clear path to next career milestone');
        
        this.addSubtitle('Risk Mitigation Strategies');
        this.addText('Common challenges and how to overcome them:');
        this.addBullet('Resistance from colleagues: Lead by example, share wins');
        this.addBullet('Technical difficulties: Join AI communities for support');
        this.addBullet('Time constraints: Start with 15-minute daily practice');
        this.addBullet('Imposter syndrome: Focus on continuous learning mindset');
        
        this.doc.addPage();
        this.currentY = 20;
    }

    createWorksheets(userProfile) {
        this.addTitle('WORKSHEETS & TEMPLATES', 18);
        
        this.addSubtitle('AI Skills Assessment Worksheet');
        this.addText('Rate yourself on a scale of 1-10 for each skill area:');
        
        this.addText('Technical Skills:');
        this.addBullet('Prompt Engineering: ___/10');
        this.addBullet('AI Tool Proficiency: ___/10');
        this.addBullet('Data Analysis: ___/10');
        this.addBullet('Automation Setup: ___/10');
        
        this.addText('Strategic Skills:');
        this.addBullet('AI Strategy Development: ___/10');
        this.addBullet('ROI Measurement: ___/10');
        this.addBullet('Change Management: ___/10');
        this.addBullet('Team Leadership: ___/10');
        
        this.addSubtitle('Daily AI Practice Log');
        this.addText('Track your daily AI learning and implementation:');
        this.addText('');
        this.addText('Date: _____________');
        this.addText('AI Tool Used: ____________________');
        this.addText('Task Completed: __________________');
        this.addText('Time Saved: _____________________');
        this.addText('Quality Improvement: _____________');
        this.addText('Key Learning: ___________________');
        this.addText('Tomorrow\'s Goal: ________________');
        
        this.addSubtitle('Project Planning Template');
        this.addText('Use this template for your AI implementation projects:');
        this.addText('');
        this.addText('Project Name: ___________________');
        this.addText('Business Problem: _______________');
        this.addText('AI Solution: ____________________');
        this.addText('Expected ROI: ___________________');
        this.addText('Timeline: _______________________');
        this.addText('Resources Needed: _______________');
        this.addText('Success Metrics: ________________');
        this.addText('Risk Factors: ___________________');
        
        this.addSubtitle('Weekly Progress Review');
        this.addText('Complete this review every Friday:');
        this.addText('');
        this.addText('Week of: _______________________');
        this.addText('Goals Achieved: ________________');
        this.addText('Challenges Faced: ______________');
        this.addText('Key Insights: __________________');
        this.addText('Skills Developed: ______________');
        this.addText('Next Week\'s Focus: _____________');
        
        this.addSubtitle('Network Building Tracker');
        this.addText('Track your AI professional network growth:');
        this.addText('');
        this.addText('Contact Name: ___________________');
        this.addText('Company/Role: ___________________');
        this.addText('Expertise Area: _________________');
        this.addText('Connection Source: ______________');
        this.addText('Last Contact: ___________________');
        this.addText('Next Follow-up: _________________');
        this.addText('Potential Collaboration: ________');
        
        this.doc.addPage();
        this.currentY = 20;
    }
}

// Make it globally available
window.SimpleAIGuideGenerator = SimpleAIGuideGenerator;