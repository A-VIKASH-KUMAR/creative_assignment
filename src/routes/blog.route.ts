import express from "express";
import {
  addBlogPost,
  getAllBlogPost,
  getBlogPostById,
  updateBlogPostById,
  deleteBlogPost,
} from "../controller/blog.controller";
import { validateCreate, validateGetBlogById, validateUpdateBlogById, validateDeleteBlogById } from "../middlewares/blog.validate";

const router = express.Router();

// blog routes
router.post("/blog", validateCreate,addBlogPost);
router.get("/blog",getAllBlogPost);
router.get("/blog/:id", validateGetBlogById, getBlogPostById);
router.put("/blog/:id", validateUpdateBlogById, updateBlogPostById);
router.delete("/blog/:id", validateDeleteBlogById, deleteBlogPost);

export default router;
