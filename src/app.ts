import express from "express";
import userRouter from "./routes/user-routes.js"
import errorMiddleware from "./middlewares/error-middleware.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "This is an example of node.js + express + typescript + prisma application",
    });
});

app.use("/users", userRouter);

app.use(errorMiddleware);

export default app;