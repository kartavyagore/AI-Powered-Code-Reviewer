🚀 AI-Powered Code Reviewer
An Intelligent Code Reviewer Powered by AI (Google Gemini API) 🚀

Frontend deployed at : https://ai-powered-code-reviewer-teal.vercel.app/

Backend deployed at : https://ai-powered-code-reviewer-qgko.onrender.com/

📌 Overview
AI-Powered Code Reviewer is a MERN Stack-based web application that uses Google Gemini AI API to analyze, review, and improve code. It detects syntax errors, optimizes performance, enhances security, and provides copy-paste-ready corrected code.

✨ Features
✅ AI-Powered Code Review – Analyzes and improves JavaScript, Python, and other languages.
✅ Error Detection & Debugging – Identifies syntax errors, logical mistakes, and bad API designs.
✅ Performance Optimization – Suggests better algorithms and refactors inefficient code.
✅ Security Enhancements – Detects vulnerabilities like SQL injection, XSS, and CSRF attacks.
✅ Copy-Paste Ready Fixes – Provides fully corrected and optimized code snippets.
✅ User-Friendly Interface – Clean UI with a live code editor.
✅ Deployed & Scalable – Hosted on Render, Vercel, and MongoDB Atlas.

🛠️ Tech Stack
Frontend (React.js)
React.js (with hooks)
React Simple Code Editor
Prism.js (for syntax highlighting)
Backend (Node.js & Express.js)
Node.js & Express.js
Google Gemini AI API (for code analysis)
CORS & dotenv (for secure API requests)

Deployment
Frontend: Vercel
Backend: Render

🚀 Getting Started
1️⃣ Clone the Repository
bash
Copy code
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
2️⃣ Backend Setup (Node.js + Express)
bash
Copy code
cd backend
npm install

🔹 Create a .env file and add:
env
Copy code
PORT=3000
GEMINI_API_KEY=your_google_gemini_api_key

🔹 Start the Backend Server
bash
Copy code
npm run dev

3️⃣ Frontend Setup (React.js)
bash
Copy code
cd ../frontend
npm install
🔹 Update API URL in frontend/src/config.js
js
Copy code
export const API_BASE_URL = "https://your-backend-url.onrender.com";

🔹 Start the Frontend Server
bash
Copy code
npm start

🚀 Deployment Guide :
✅ Deploying Backend (Render)
Push your code to GitHub
Go to Render.com → Create a new Web Service
Connect GitHub Repo → Select backend folder
Set Environment Variables (PORT, MONGODB_URI, GEMINI_API_KEY)
Deploy → Your API is now live!

✅ Deploying Frontend (Vercel)
Push your frontend code to GitHub
Go to Vercel → Click "New Project"
Connect GitHub Repo → Select frontend folder
Set Environment Variable REACT_APP_API_URL = your_backend_url
Deploy → Your frontend is now live!

🛠️ API Endpoints

POST  /ai/get-review  Reviews code and provides suggestions

📌 Future Enhancements
🚀 Multi-language support (Python, Java, etc.)
🚀 AI-powered code refactoring suggestions
🚀 Real-time collaborative code reviews

🤝 Contributing
Want to improve this project? Fork the repo, make your changes, and submit a PR!

bash
Copy code
git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch
📜 License
This project is open-source and available under the MIT License.

📢 Contact & Support
💬 GitHub Issues – Report bugs or request features.
📧 Email: kartavyagore0@gmail.com
🌎 Live Demo: https://ai-powered-code-reviewer-teal.vercel.app/
