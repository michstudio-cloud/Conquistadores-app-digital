import { GoogleGenAI } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";

// Ensure the API key is available in the environment variables
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = (base64: string, mimeType: string) => {
  return {
    inlineData: {
      data: base64,
      mimeType,
    },
  };
};

export const getAIFeedbackForEvidence = async (
  requirementTitle: string,
  requirementDescription: string,
  userDescription: string,
  image?: { base64: string; type: string }
): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const prompt = `
    Eres un instructor experimentado y amigable de Conquistadores y Guías Mayores. Tu tarea es proporcionar retroalimentación constructiva y alentadora a un miembro que ha enviado evidencia para un requisito de una especialidad.

    **Especialidad:** No especificada
    **Título del Requisito:** ${requirementTitle}
    **Descripción del Requisito:** "${requirementDescription}"

    **Evidencia Enviada por el Miembro:**
    *   **Descripción del miembro:** "${userDescription}"
    *   **Imagen adjunta:** ${image ? 'Sí' : 'No'}

    **Tu Tarea:**
    1.  Analiza la descripción del miembro y la imagen (si la hay) en el contexto de la descripción del requisito.
    2.  Proporciona una evaluación clara y concisa.
    3.  Si la evidencia parece cumplir con el requisito, felicita al miembro y resalta lo que hizo bien.
    4.  Si la evidencia es insuficiente o incorrecta, explica amablemente qué falta o qué se puede mejorar. Ofrece sugerencias específicas y prácticas.
    5.  Mantén un tono positivo, de apoyo y educativo. El objetivo es guiar, no criticar.
    6.  Formatea tu respuesta usando Markdown para una fácil lectura (ej. usa negritas y listas).
    
    **Ejemplo de respuesta positiva:**
    "¡Excelente trabajo, Juan! La foto muestra claramente que has dominado el nudo As de Guía. Se ve firme y bien hecho. ¡Sigue así! Este es un gran paso para completar tu especialidad."

    **Ejemplo de respuesta con sugerencias:**
    "¡Hola, María! Gracias por tu envío. Es un buen comienzo. La foto muestra la posición de recuperación, pero para cumplir completamente el requisito, ¿podrías también incluir en tu descripción qué significa cada letra del ABC de la reanimación? ¡Casi lo tienes! Un pequeño ajuste y estará perfecto."

    **Empieza tu retroalimentación ahora:**
  `;

  try {
    const parts = [
      { text: prompt },
      ...(image ? [fileToGenerativePart(image.base64, image.type)] : [])
    ];

    // FIX: The 'contents' property expects an array of Content objects.
    // The constructed parts array is a single Content payload, so it should be wrapped in an array.
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: model,
        contents: [{ parts: parts }],
    });
    
    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.";
  }
};
