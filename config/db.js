const mongoose = require("mongoose");

const connectDB = async () => {
    try {await mongoose.connect("mongodb://localhost:27017/blog");
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

module.exports = connectDB;
