import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    original_url: { type: String, required: true },
    short_url: { type: String, required: true },
    short_code: { type: String, required: true}
}, { autoIndex: false, autoCreate: false, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export const Url = mongoose.model('Url', urlSchema)