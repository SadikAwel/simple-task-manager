import{ Router } from "express"
import { container } from "../config/container.js"
import {AsyncHandler} from "../error/asyncHandler.js"

const router = Router();
const controller = container.taskController;

router.post("/git", AsyncHandler( controller.createTask));
router.get("/git", AsyncHandler(controller.listTask))
router.get("/find/:name", AsyncHandler(controller.listByName))
router.delete("/delete", controller.deleteById)
router.patch("/gits/:id",AsyncHandler( controller.updateByID))

export default router;