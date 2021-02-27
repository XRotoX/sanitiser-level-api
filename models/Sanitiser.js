const mongoose = require("mongoose");

const sanitiserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
            default: "sanitiser"
        },
        number: {
            type: Number,
            required: true
        },
        level: {
            type: Number,
            required: true,
            min: 0.0,
            max: 1.0
        },
        lastUpdated: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model("sanitiser", sanitiserSchema);