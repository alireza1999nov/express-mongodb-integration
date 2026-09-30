const express = require('express');
const app = express();
const port = 3000;

const connectToDb = require('./config/db');
connectToDb();

const User = require("./models/User");

app.use(express.json());

app.get("/users", async(req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.error("Create user error:", err);

        if (err.name === "ValidationError" || err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid user data"
        });
        }
        return res.status(500).json({
        message: "Internal server error"
        });
    }
});


app.listen(port, () => {
    console.log(`running on port ${port}`)
})
