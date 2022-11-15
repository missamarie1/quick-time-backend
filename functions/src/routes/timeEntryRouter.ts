import express from "express";
import { getClient } from "../db";
import User from "../models/User";

const shoutoutRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

shoutoutRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<User>("users").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default shoutoutRouter;
