

import express from "express";
import cors from "cors";

import * as studentsRouter from "./routers/studentsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", studentsRouter.router)


export default app;