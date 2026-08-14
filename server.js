import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing in .env file");
} else {
  console.log("✅ Gemini API key loaded");
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

app.get("/", (req, res) => {
  res.send("TheSkillNest AI Backend is running successfully 🚀");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    console.log("User Question:", message);

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
    });

    const reply = response.text;

    console.log("AI Response received successfully ✅");

    res.json({
      reply: reply,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: "Gemini AI request failed.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🤖 AI Server running on http://localhost:${PORT}`);
});