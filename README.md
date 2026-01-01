# BeyondChats – Article Enrichment System

This project is a multi-phase full-stack application that scrapes blog articles, enriches them using an automated content pipeline, and displays both original and updated articles in a responsive React frontend.

---

## 🧩 Project Overview

The system is divided into three phases:

- **Phase 1 (Backend)**: Scrapes and stores articles, exposes CRUD APIs
- **Phase 2 (Automation)**: Enriches articles using Google search, web scraping, and LLM logic
- **Phase 3 (Frontend)**: Displays original and updated articles in a clean UI

---

## ⚙️ Local Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

---

## 🛠️ Phase 1 – Backend (Node.js + Express + MongoDB)

```bash
cd phase1-backend
npm install
npm run dev 
```

Backend runs at:
**http://127.0.0.1:5000**



## 🔁 Phase 2 – Automation Pipeline (Node.js)

Phase 2 is a Node.js–based automation script that enriches articles stored in the backend.

### What Phase 2 Does
- Fetches articles from the Phase 1 backend APIs
- Searches article titles on Google
- Fetches top-ranking external articles
- Scrapes content from those articles (best-effort)
- Rewrites the original article using LLM logic
- Updates enriched articles back via PUT APIs

### How to Run Phase 2 Locally

```bash
cd phase2-automation
npm install
npm run dev
```

### Environment Variables (Phase 2)
```env
ARTICLES_API=http://127.0.0.1:5000/api/articles
```

## 🎨 Phase 3 – Frontend (React)

Phase 3 is a lightweight React application that consumes backend APIs and displays articles in a clean, responsive UI.

### Features
- Fetches articles from backend APIs
- Displays original article links
- Displays updated (rewritten) article content
- Responsive and professional layout

### How to Run Phase 3 Locally

```bash
cd phase3-frontend
npm install
npm run dev
```

Frontend runs at
**http://localhost:5173**


## 🏗️ Architecture & Data Flow Diagram

```
BeyondChats Blog Website
↓
Backend Repository (Node.js + Express + MongoDB)
├── Phase 1: Scraper & APIs
│ - Scrapes the oldest blog articles
│ - Stores articles in MongoDB
│ - Exposes REST APIs
│
├── Phase 2: Automation Pipeline (phase2-automation/)
│ - Fetches articles from internal APIs
│ - Searches article titles on Google
│ - Scrapes external reference articles
│ - Rewrites content using LLM logic
│ - Updates articles back into MongoDB
│
└── Phase 3: Frontend (phase3-frontend/)
- React UI served separately
- Fetches articles via backend APIs
- Displays original and updated articles
```


