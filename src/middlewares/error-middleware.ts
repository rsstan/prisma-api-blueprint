import { Request, Response, NextFunction } from "express";

function errorMiddleware(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(error);

    return res.status(500).json({
        message: error.message || "Internal service error",
    });
}

export default errorMiddleware;