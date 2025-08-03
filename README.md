# 🎙️ Prepwise – AI-Powered Interview Practice Platform

**PrepAce** is a smart and interactive job interview preparation platform that uses **Vapi AI voice agents**, **Google Gemini**, and **Firebase**, built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**. Designed for modern job seekers, it provides AI-conducted mock interviews and real-time feedback to help you grow confidently.

> Built step-by-step as part of a guided tutorial project to learn full-stack development with AI integration.

---

## 🚀 Tech Stack

- **Next.js** – Frontend & backend logic with server-side rendering
- **Tailwind CSS** – Utility-first styling framework
- **Firebase** – Authentication and data storage
- **Vapi AI** – Real-time AI voice agents
- **Google Gemini** – Interview question and feedback generation
- **shadcn/ui** – Modern and accessible UI components
- **Zod** – Schema-based form validation

---

## ✨ Features

✅ **User Authentication**  
Sign up and log in securely with Firebase Email/Password authentication.

✅ **AI-Conducted Interviews**  
Simulate real interview scenarios using Vapi’s voice AI, generating tailored questions.

✅ **Instant Feedback**  
Receive real-time, AI-generated feedback and transcripts after completing an interview session.

✅ **Dashboard**  
Track all your past interviews and view detailed reports to measure your progress.

✅ **Responsive UI**  
A clean, modern interface that looks great across desktop, tablet, and mobile.

✅ **Fully Configurable**  
Easily extend or modify workflows, UI components, or integrate additional AI services.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project structure

├── app/ # Main application routes
├── components/ # Reusable UI components
├── lib/ # Helper functions and actions
├── public/ # Static assets
├── styles/ # Global styles (Tailwind CSS)
└── .env.local # Environment variables
