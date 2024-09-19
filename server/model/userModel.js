import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    stockEntry: {
        type: String,
        required: true
    },
    stockEntryDate: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number, // Changed from String to Number
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    location: { // Corrected typo
        type: String,
        required: true
    }
})


export default mongoose.model("User", userSchema);