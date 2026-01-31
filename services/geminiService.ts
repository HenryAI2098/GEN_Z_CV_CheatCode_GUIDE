import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini AI client
// Note: In a real production app, you might want to proxy this through a backend
// to protect the API key, but for this client-side demo, we use env var.
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateResumeMetrics = async (role: string, duties: string): Promise<string[]> => {
  if (!ai) {
    console.warn("API Key not found. Returning mock data.");
    // Fallback if no API key is present for demo purposes
    return [
      "Reduced processing time by 20% by implementing a new filing system.",
      "Managed a budget of $50,000 with 100% accuracy.",
      "Increased customer satisfaction scores by 15% within 6 months.",
      "Led a team of 5 to complete the project 2 weeks ahead of schedule.",
      "Optimized workflow efficiency resulting in 10 hours saved weekly."
    ];
  }

  try {
    const prompt = `
      You are an expert resume writer with over 20 years of experience. 
      I'm writing a bullet point for the role of "${role}". 
      Here are my responsibilities: "${duties}". 
      
      List exactly five relevant, concise, and quantifiable metrics (KPIs) I can include to quantify the impact of my work. 
      Do not include introductory text. Just the 5 bullet points.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    const text = response.text || '';
    
    // Process text to extract bullet points
    const lines = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^[-*•]\s*/, '')) // Remove bullets
      .slice(0, 5);

    return lines;

  } catch (error) {
    console.error("Error generating metrics:", error);
    throw new Error("Failed to generate metrics. Please try again.");
  }
};