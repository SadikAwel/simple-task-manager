import{ Router } from "express"
import { container } from "../config/container.js"

const router = Router();
const controller = container.taskController;

router.post("/git", controller.createTask);
router.get("/git", controller.listTask)
router.get("/admin", controller.admin)


export default router;