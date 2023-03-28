import Router from "express";
import { getAllCategories } from "./controllers.js";

const router = new Router()

router.get('/categories', getAllCategories)




export default router;