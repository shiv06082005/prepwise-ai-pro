# 📚 PrepWise AI Pro

An AI-powered study planning and quiz generation platform built using Next.js, TypeScript, Tailwind CSS, and Groq AI.

## 🚀 Features

### 🤖 AI Study Planner

* Generate personalized study schedules using AI
* Enter subjects and exam dates
* Receive a detailed day-wise preparation plan
* Includes revision, practice, and mock-test suggestions

### 📝 AI Quiz Generator

* Generate subject-wise MCQs instantly
* AI-powered question creation
* Useful for self-assessment and exam preparation

### 📊 Progress Dashboard

* View study statistics
* Readiness score tracking
* Study plan overview

### 🔐 Login Interface

* Modern login page UI
* Ready for future authentication integration

---

## 🛠️ Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Groq API
* Vercel

---

## 📂 Project Structure

app/
├── api/
│ ├── study-plan/
│ └── quiz/
├── dashboard/
├── login/
├── plans/
├── quiz/
└── page.tsx

components/
└── FeatureCard.tsx

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shiv06082005/prepwise-ai-pro.git
```

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
GROQ_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌐 Live Demo

https://prepwise-ai-pro.vercel.app

---

## 👨‍💻 Author

Shivang Vijay

---

## 📌 Future Enhancements

* User Authentication
* MongoDB Integration
* Save Study Plans
* PDF Export
* Advanced Progress Analytics
