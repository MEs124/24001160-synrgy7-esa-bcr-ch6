import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; role: string };
    }
  }
}

export const Authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        message: "User Unauthorized",
      });
    }

    const token = authorization.split("Bearer ")[1];

    const decoded = jwt.verify(token, process.env.JWTSEC || "Rahasia");
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (err) {
    return res.status(500).json({
      message: "Error verifying token",
      error: err.message,
    });
  }
};

export const restrictUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    if (user.role !== "superadmin") {
      return res.status(403).json({
        message: "Forbidden: Access denied",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      message: "Error processing request",
      error: err.message,
    });
  }
};

export const restrictMember = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    if (user.role === "member") {
      return res.status(403).json({
        message: "Forbidden: Access denied",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      message: "Error processing request",
      error: err.message,
    });
  }
};
