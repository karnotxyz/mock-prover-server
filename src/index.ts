import express, { json, Request, Response } from "express";
import { PORT } from "./constants";
import proverRoutes from "./routes/proverRoutes";
import updateStateRoutes from "./routes/updateStateRoutes";

const app = express();
app.use(json());

app.use("/", proverRoutes);
app.use("/txn", updateStateRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 🔗 : ", PORT);
});
