import express from "express";
import cors from "cors";
import fs from "fs";
import { linearToTree } from "./utils/utils.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const linearData = JSON.parse(
  fs.readFileSync("./database/database.json", "utf8")
);

const treeData = linearToTree(linearData);

app.get("/getAll", (_req, res) => {
  console.log("[LOG]:api: GET all data");

  res.send(treeData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
