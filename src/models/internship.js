const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    stipend: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    postedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.models.Internship || mongoose.model('Internship', InternshipSchema);
