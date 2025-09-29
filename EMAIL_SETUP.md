# Email Setup Instructions for Authify Labs Contact Form

The contact form now uses **Resend** to send emails to `admin@authify.tech`. Follow these steps to set it up:

## 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get Your API Key

1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name like "Authify Labs Website"
4. Copy the API key (it starts with `re_`)

## 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Resend API Key for sending emails
RESEND_API_KEY=re_your_actual_api_key_here

# Email configuration
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=admin@authify.tech
```

**Important:** Replace `re_your_actual_api_key_here` with your actual Resend API key.

## 4. Domain Verification (Optional but Recommended)

For better email deliverability:

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Add your domain (e.g., `authify.tech`)
3. Follow the DNS setup instructions
4. Once verified, update `FROM_EMAIL` to something like `contact@authify.tech`

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
3. Fill out and submit the contact form
4. Check your `admin@authify.tech` email inbox

## Email Features

✅ **Professional HTML Email Template** with Authify Labs branding  
✅ **All Form Fields** included (name, email, phone, company, message)  
✅ **Clickable Links** for email and phone  
✅ **Timestamp** and source tracking  
✅ **Reply-To** set to the sender's email  
✅ **Error Handling** - form always appears to work for users  

## Troubleshooting

### No emails received?
1. Check your spam/junk folder
2. Verify your API key is correct in `.env.local`
3. Check the server console for error messages
4. Make sure `.env.local` is in the root directory (same level as `package.json`)

### Domain not verified?
- You can still send emails using `onboarding@resend.dev` as the from address
- For production, set up domain verification for better deliverability

### Free tier limits:
- Resend free tier: 3,000 emails/month, 100 emails/day
- Perfect for a business contact form

## Production Deployment

When deploying to Vercel/Netlify/etc:
1. Add the `RESEND_API_KEY` environment variable in your hosting platform
2. Set `FROM_EMAIL` and `TO_EMAIL` environment variables
3. The email service will work automatically

---

**Need help?** Contact the development team or check [Resend Documentation](https://resend.com/docs)
