from typing import Union 
from fastapi import FastAPI
import os
from fastapi import HTTPException
from pydantic import BaseModel 
from chatbot import chatbot_response  
from decouple import config
import sys
from dotenv import load_dotenv, find_dotenv

dotenv_path = find_dotenv()

if not dotenv_path:
    print("⚠️ .env file not found! Ensure it's in the same directory as main.py.")

# Load the .env file explicitly

load_dotenv(dotenv_path)


#  Read the API Key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise RuntimeError("GROQ_API_KEY is not set! Please set it in the environment.")


print(f"✅ GROQ_API_KEY is loaded: {bool(GROQ_API_KEY)}")
# app = FastAPI()
app = FastAPI(title="Chatbot API", description="A chatbot for Sathya's portfolio")

class ChatRequest(BaseModel):
    message:str
    thread_id: str = "default_thread"

@app.post("/chat")
async def chat_with_bot(request: ChatRequest):
    """Endpoint to interact with the chatbot"""
    try:
        user_message = request.message
        thread_id = request.thread_id
        bot_reply = chatbot_response(user_message)  # Calling the chatbot logic
        return {"response": bot_reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def health_check():
    """Health check endpoint"""
    return {"message": "Chatbot API is running successfully!"}

