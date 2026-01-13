
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartRecommendation = async (mood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a gourmet burger name and a short mouth-watering description based on this mood: ${mood}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            burgerName: { type: Type.STRING },
            description: { type: Type.STRING },
            price: { type: Type.STRING }
          },
          required: ["burgerName", "description", "price"]
        }
      }
    });
    // Use .text property to get the generated content
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
