import express from "express";
import {
  getTrophies,
  getTrophiesById,
} from "../controllers/trophiesController.js";

const router = express.Router();

router.get("/trophies", getTrophies);
router.get("/trophies/:id", getTrophiesById);

export default router;
