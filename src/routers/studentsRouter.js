import express from "express";

import * as studentsController from "../controllers/studentsController.js";

export const router = express.Router();

router.post("/:ra", studentsController.controller)
router.get("/list", studentsController.getStudents)
