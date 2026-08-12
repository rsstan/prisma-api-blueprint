import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "This is an example of node.js + express + typescript + prisma application",
    });
});

export default app;