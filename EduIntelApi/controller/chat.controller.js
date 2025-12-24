import { v4 as uuidv4 } from "uuid";
import { ChatSession } from "../model/chat.model.js";
import axios from "axios";


export const newChat = async (req, res) => {
  try {
    const { userId } = req.body;
    const sessionId = uuidv4();

    const newSession = await ChatSession.create({
      sessionId,
      userId,
      messages: [],
    });

    if (newSession) {
      console.log("Session created successfully");
    }

    return res.status(200).json({ sessionId, messages: [] });
  } catch (err) {
    return res.status(500).json({ message: "New Chat creation failed!" });
  }
};

export const Chat = async(req, res) => {
    try
    {
        const { message, sessionId, userId } = req.body;
        console.log(message, sessionId, userId)
        let session = await ChatSession.findOne({ sessionId });

        if (!session) {
            return res.status(404).json({ error: "Session not found" });
        }

        if(!session.title)
        {
            // Set the title based on the first few words of the message
            const titleWords = message.trim().split(/\s+/).slice(0, 5).join(" ");
            session.title = titleWords;
        }

        // 1. Add User message to session
        session.messages.push({ role: "user", content: message });
        await session.save(); // Save before calling RAG, in case RAG fails

        // 2. Call FastAPI RAG backend (http://127.0.0.1:8000/query)
        console.log("hitting the url")
        const FASTAPI_URL = 'http://127.0.0.1:8000/query';
        console.log("response got ")
        // FastAPI expects a JSON body: {"query": "..."}
        const ragRequestData = {
            query: message
        };

        const ragResponse = await axios.post(FASTAPI_URL, ragRequestData);
        console.log(ragResponse.data.result)
        // 3. Extract data from FastAPI response
        // FastAPI response structure: { result: "...", source_documents: [...] }
        const botMessage = ragResponse.data.result;
        const sourceDocs = ragResponse.data.source_documents; 
        
        // Optional: Append source docs to the bot message for the user to see
        let fullBotContent = botMessage;
        if (sourceDocs && sourceDocs.length > 0) {
            const docTitles = sourceDocs.map(doc => doc.metadata.source || "Unknown Document").join(", ");
            fullBotContent += `\n\n(Source: ${docTitles})`;
        }


        // 4. Add Bot message to session
        session.messages.push({ role: "bot", content: fullBotContent, source_documents: sourceDocs });
        await session.save();

        // 5. Send final response to client
        res.json({ sessionId, messages: session.messages });
    }
    catch (err)
    {
        console.error("Error during chat processing:", err.message);
        // Better error handling for API call failure
        if (err.response) {
            // The request was made and the server responded with a status code 
            // that falls out of the range of 2xx
            return res.status(err.response.status).json({ message: "RAG API Error: " + (err.response.data.detail || "Check FastAPI server log.") });
        }
        return res.status(500).json({message : "Internal Server Error!!"})
    }
}

export const chatHistory = async (req, res) =>{
    try
    {
        const { userId } = req.params;
        const sessions = await ChatSession.find({ userId }).sort({ createdAt: -1 });
        res.json(sessions);
    }
    catch(err)
    {
        res.send(500).json({message : "Internal Server Error!!"})
    }
}