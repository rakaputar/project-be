import express from "express";
import {
  getBrands,
  createBrand,
  deleteBrand,
} from "../controllers/brandController.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getBrands);
router.post("/", authenticateToken, createBrand);
router.delete("/:id", authenticateToken, deleteBrand);

export default router;
