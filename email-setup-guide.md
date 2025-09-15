# EmailJS Setup Guide for AI Career Transformation

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email (free plan allows 200 emails/month)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose "Gmail" (or your preferred email provider)
3. Connect your Gmail account (or other email)
4. Note your SERVICE_ID (e.g., service_gmail)

### Step 3: Create Email Templates
Create these 3 templates in EmailJS:

#### Template 1: Basic Subscriber (template_subscriber)
**Subject:** Welcome to AI Career Transformation!
**Content:**
```
Hello {{user_name}},

Thank you for joining the AI Career Transformation community!

Your email: {{user_email}}
Subscription Date: {{timestamp}}
Source: {{source}}

You'll receive:
✅ Weekly AI career insights
✅ Industry transformation updates  
✅ Exclusive resources and tools
✅ Early access to premium content

Take your AI Career Assessment: {{assessment_link}}

Best regards,
AI Career Transformation Team
```

#### Template 2: Assessment Results (template_assessment)
**Subject:** Your AI Career Readiness Results - {{user_score}}/100
**Content:**
```
Hello {{user_name}},

Your AI Career Readiness Score: {{user_score}}/100
Assessment Date: {{timestamp}}

{{personalized_content}}

Your Next Steps:
{{next_steps}}

Need 1-on-1 guidance? Book a strategy session:
{{coaching_link}}

Best regards,
AI Career Transformation Team
```

#### Template 3: Basic Tips (template_basic_tips)
**Subject:** Your AI Career Survival Tips - Act Now!
**Content:**
```
Hello {{user_name}},

{{basic_tips}}

Ready for your complete personalized strategy?
Take our assessment: {{assessment_link}}

Best regards,
{{from_name}}
```

### Step 4: Get Your Keys
1. Go to "Account" → "API Keys"
2. Copy your PUBLIC_KEY
3. Note your SERVICE_ID from step 2

### Step 5: Update Website
Replace these values in your HTML files:

```javascript
// In your JavaScript files, replace:
emailjs.init("YOUR_PUBLIC_KEY_HERE");
window.emailjsConfigured = true;

// And replace service calls:
emailjs.send('YOUR_SERVICE_ID', 'template_name', templateParams)
```

## Testing
1. Fill out a form on your website
2. Check EmailJS dashboard for delivery status
3. Check your email inbox for the message

## Troubleshooting
- **No emails received**: Check spam folder
- **Service errors**: Verify service connection in EmailJS dashboard
- **Template errors**: Check template variable names match your code

## Alternative: Simple Form Backend
If EmailJS doesn't work, you can use:
- Formspree.io (free tier: 50 submissions/month)
- Netlify Forms (if hosting on Netlify)
- Simple PHP script on hosting server

Your current setup stores all form data in localStorage for backup.