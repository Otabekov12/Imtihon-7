import { Router } from "express";
import checkToken from "../middlewares/checkToken.js";
import controller from "../controller/products.js";

const router = Router();

router.get("/products", controller.GET);
router.get("/products/:productId", controller.GET);

// router.post("/admin/products", checkToken, controller.POST);
// router.put("/admin/products/:categoryId", checkToken, controller.PUT);
// router.delete("/admin/products/:categoryId", checkToken, controller.DELETE);

export default router;