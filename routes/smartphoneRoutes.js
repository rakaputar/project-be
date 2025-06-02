import express from "express";
import {
  getAllSmartphones,
  getSmartphoneById,
  createSmartphone,
  updateSmartphone,
  deleteSmartphone,
} from "../controllers/smartphoneController.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllSmartphones);
router.get("/:id", getSmartphoneById);
router.post("/", authenticateToken, createSmartphone);
router.put("/:id", authenticateToken, updateSmartphone);
router.delete("/:id", authenticateToken, deleteSmartphone);

export default router;
