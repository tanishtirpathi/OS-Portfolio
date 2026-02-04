import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("VITE_GEMINI_API_KEY is missing in .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function sendToGemini(message) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(message);

    const reply = result?.response?.text()?.trim();

    return reply || "Sorry, I couldn't generate a reply.";
  } catch (err) {
    console.error("Gemini Error:", err);
    return "BKL ne api key Use kar li sari ";
  }
}
