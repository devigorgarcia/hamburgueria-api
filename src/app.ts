import express, { Application } from "express";
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json());

app.use(handleErrors);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
