import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyA5Oju5OANGyeIU1DZ7FGc-AHwi5GMzZXE";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    console.log("Starting chat session...");
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    console.log("Sending prompt:", prompt);
    const result = await chatSession.sendMessage(prompt);
    console.log("Received response:", result.response.text());
    return result.response.text(); // Return the response text
  } catch (error) {
    console.error("Error during API call:", error);
  }
}

export default run;
