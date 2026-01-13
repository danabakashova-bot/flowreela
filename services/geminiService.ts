
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "FlowReels AI Consultant". Your goal is to help potential clients understand how video marketing can grow their business.
Be professional, encouraging, and data-driven. 
Key offerings of FlowReels:
1. Video Production: Reels, TikTok, Shorts, UGC, 3D/2D animation.
2. Targeted Ads: FB, IG, TikTok ads optimization.
3. Complex Growth: Full-funnel strategy and scaling.

If users ask for estimates, explain that pricing depends on complexity but typically starts at $1000/mo for basic management or $500 per high-end creative.
Always encourage them to book a consultation via the form on the page.
Keep responses concise and formatted in Markdown.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: string, content: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try again or contact us directly!";
  }
};
