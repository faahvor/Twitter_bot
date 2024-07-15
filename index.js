import express from "express";
import "dotenv/config.js";
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";

const app = express();
const PORT = 8888;

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
