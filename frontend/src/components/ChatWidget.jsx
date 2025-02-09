
import React, { useState, useEffect } from "react";
import "./ChatWidget.css"; // Updated styles

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false); // Initially closed
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Sathya's AI portfolio assistant, built by Sathya from scratch using FastAPI, Groq, and Meta AI, hosted on AWS Lambda! How can I help?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  // ⏳ Open chatbox after 5s delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Handle user message submission
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]); // Add user message to chat UI

    try {
        const response = await fetch("https://9jkek7qym5.execute-api.us-east-1.amazonaws.com/chat/", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, thread_id: "default_thread" }),
      });

      const data = await response.json();
      const botMessage = { text: data.response, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot response
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, { text: "Error connecting to AI.", sender: "bot" }]);
    }

    setInput(""); // Clear input field
  };

  return (
    <div className="chat-widget">
      {/* Floating Bubble */}
      <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>💡 AI Portfolio Assistant</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
