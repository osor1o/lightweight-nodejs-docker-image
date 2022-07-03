import express from "express";
import sourceMapSupport from 'source-map-support'
import {Database} from './database'

sourceMapSupport.install();
const [PORT, HOST] = [3000, "0.0.0.0"];

const app = express();
const db = new Database();

app.get("/", async (_, res) => {
  await db.add();
  res.json({ success: true });
});

app.listen(PORT, HOST, () => {
  console.log(`server listening at http://${HOST}:${PORT}`);
});
