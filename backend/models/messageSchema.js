import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [5, "Name must contain at least 5 characters!"],
    },
    email: {
        type: String,
        required: [true, "E-mail Required!"],
        validate: [validator.isEmail, "Please provide valid E-mail ID!"],
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [15, "Subject must contain at least 15 characters!"],
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [15, "Message must contain at least 15 characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);