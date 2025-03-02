Here’s a **clean, professional, and well-structured README** incorporating details about your **portfolio website and AI-powered chatbot** deployed on AWS Lambda.  

---

### 🚀 **Sathya’s Portfolio Website & AI Assistant**
A modern, **React-powered** portfolio website showcasing my **skills, experience, and projects**, now enhanced with an **AI chatbot assistant** deployed on **AWS Lambda**.

📌 **Live Demo:** [Sathya's Portfolio](https://sathyasportfolio.netlify.app)  
![Screenshot 2025-02-10 at 12 24 06 PM](https://github.com/user-attachments/assets/5c139a07-dc6e-4eb9-bc64-a03f535b8796)
![Screenshot 2025-02-10 at 12 25 14 PM](https://github.com/user-attachments/assets/f2ebe713-0229-4826-b0e6-29eddc36f717)

---

## 🛠 **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### **Installation**
1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/Sathyanarayanan-ops/Sathya_Portfolio.git
```

2️⃣ **Navigate to the Project Directory**  
```bash
cd Sathya_Portfolio
```

3️⃣ **Install Dependencies**  
```bash
npm install
```

4️⃣ **Start the Development Server**  
```bash
npm start
```

This will launch the site at `http://localhost:3000/`.

---

## 📂 **Project Structure**
```
Sathya_Portfolio/
├── public/
│   ├── index.html      # Main HTML file
│   ├── Resume.pdf      # Resume download link
│   └── ...
├── src/
│   ├── components/
│   │   ├── Appbar.jsx         # Navigation bar
│   │   ├── Contacts.jsx       # Contact information
│   │   ├── Homepage.jsx       # Main homepage section
│   │   ├── ProjectCards.jsx   # Individual project cards
│   │   ├── Projects.jsx       # Projects section
│   │   ├── ResumeButton.jsx   # Resume download button
│   │   ├── Skills.jsx         # Skills section
│   │   ├── WorkExperience.jsx # Work experience section
│   │   ├── ChatWidget.jsx     # AI chatbot widget
│   │   └── ...
│   ├── App.js           # Main App Component
│   ├── index.js         # Entry point for rendering React app
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

---

## 🤖 **AI Chatbot Assistant**
### **What it does?**
- This chatbot is **fine-tuned to my portfolio** to assist recruiters in understanding my **experience, skills, and projects**.
- Powered by **Meta LLaMA 3** on **Groq**, reducing **compute intensity by 90%**.
- Hosted **serverless on AWS Lambda**, reducing hosting costs by **99%**.
- Requests are forwarded **from the static frontend to Lambda**, ensuring a **cost-efficient** architecture.

### **Deployment Architecture**
🌐 **Frontend:** React (hosted on **Netlify**)  
⚡ **Backend:** FastAPI (deployed on **AWS Lambda via API Gateway**)  
🔗 **API Calls:** Requests are routed **from Netlify → AWS API Gateway → Lambda → Groq LLaMA 3**

### **How It Works**
1️⃣ **User clicks on chatbot widget**  
2️⃣ **Messages are sent via API Gateway to AWS Lambda**  
3️⃣ **Lambda processes requests using FastAPI & Groq’s AI model**  
4️⃣ **AI responds and sends back the output**  

---

## 🌍 **Live Chatbot Demo**
Visit my portfolio to interact with the AI chatbot:  
👉 **[Sathya’s Portfolio](https://sathyasportfolio.netlify.app)**

---

## 🚀 **Deployment Instructions**
### **Deploying to Netlify**
1️⃣ **Install Netlify CLI (if not installed)**  
```bash
npm install -g netlify-cli
```

2️⃣ **Login to Netlify**  
```bash
netlify login
```

3️⃣ **Deploy the site**  
```bash
netlify deploy --prod
```

---

### **Deploying AI Chatbot on AWS Lambda**
1️⃣ **Ensure AWS CLI is configured**  
```bash
aws configure
```

2️⃣ **Package & Upload to Lambda**
```bash
zip -r chatbot_lambda.zip .
aws lambda update-function-code --function-name ChatbotLambda --zip-file fileb://chatbot_lambda.zip
```

3️⃣ **Verify API Gateway Endpoint**
Ensure your Netlify frontend calls the correct **Lambda API URL**.

---

## 📜 **License**
This project is **open-source** under the MIT License.

---

## 📞 **Contact**
🔹 **Portfolio:** [sathyasportfolio.netlify.app](https://sathyasportfolio.netlify.app)  
🔹 **GitHub:** [Sathyanarayanan-ops](https://github.com/Sathyanarayanan-ops)  


---
