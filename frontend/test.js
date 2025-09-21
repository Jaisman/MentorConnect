import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function testGeminiAPI() {
  try {
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API key not found in environment variables');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    // Test API connectivity with a simple prompt
    const prompt = "Hello, can you confirm if you're working?";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log('API Test Response:', response.text());
    
    console.log('\nAvailable Models:');
    console.log('- gemini-pro: Text generation');
    console.log('- gemini-pro-vision: Text and image understanding');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testGeminiAPI();