import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    role:
    {
        type: String, 
        enum: ["user", "bot"], 
        required: true,
    },
    content: {
        type: String,
        required: true
    },
},{timestamps : true});

const chatSessionSchema = new mongoose.Schema({
    sessionId: { 
        type: String,
        required: true, 
        unique: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: false
    },
    messages: [messageSchema],
    title : {
        type : String,
    }
}, { timestamps : true});

export const ChatSession = mongoose.model("ChatSession", chatSessionSchema);
