import{ Router } from "express"
import { Controller } from "../controllers/task.controller.js"

const router = Router();
const controller = new Controller();

router.post("/git", controller.createTask);
router.get("/git", controller.listTask)


export default router;