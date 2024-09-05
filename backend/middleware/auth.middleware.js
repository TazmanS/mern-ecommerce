import jwt from "jsonwebtoken";
import User from "../models/user.module.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookie.accessToken;

    if (!accessToken) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.REFRESH_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(401).send({ message: "User not found" });
      }

      req.user = user;

      next();
    } catch (e) {
      throw e;
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).send({ message: "Access denied" });
  }
};
