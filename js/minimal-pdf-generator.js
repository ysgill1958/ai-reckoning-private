// Minimal PDF Generator for Testing
class MinimalPDFGenerator {
    constructor() {
        console.log('📋 Minimal PDF Generator initialized');
    }
    
    async generateSimplePDF(userProfile) {
        try {
            console.log('🔧 Starting minimal PDF generation...');
            
            // Check jsPDF
            if (typeof window.jspdf === 'undefined') {
                console.error('❌ jsPDF not loaded');
                return false;
            }
            
            console.log('✅ jsPDF is available');
            
            // Create PDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            console.log('✅ PDF document created');
            
            // Add simple content
            doc.text('AI Career Assessment Results', 20, 20);
            doc.text(`Name: ${userProfile.name}`, 20, 40);
            doc.text(`Industry: ${userProfile.industry}`, 20, 60);
            doc.text(`Technical Score: ${userProfile.actualTechnicalScore}/100`, 20, 80);
            
            console.log('✅ Content added to PDF');
            
            // Generate output
            const pdfBase64 = doc.output('datauristring');
            console.log('✅ PDF output generated');
            
            // Save file
            const filename = `Simple_Assessment_${userProfile.name.replace(/\s+/g, '_')}.pdf`;
            doc.save(filename);
            console.log('✅ PDF saved:', filename);
            
            return {
                success: true,
                filename: filename,
                pdfBase64: pdfBase64,
                analysis: { readinessScore: userProfile.actualTechnicalScore }
            };
            
        } catch (error) {
            console.error('❌ Minimal PDF Error:', error);
            console.error('❌ Error stack:', error.stack);
            return false;
        }
    }
}

console.log('📄 Minimal PDF Generator class loaded successfully');