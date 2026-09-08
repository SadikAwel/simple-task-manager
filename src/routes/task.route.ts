import{ Router } from "express"
import { container } from "../config/container.js"
import {AsyncHandler} from "../error/asyncHandler.js"
import { validate } from "../middlewares/validate.middleware.js";
import { taskSchema, taskTitleSchema, taskIdSchema, type taskSchemaTod } from "../models/task.schema.js"

const router = Router();
const controller = container.taskController;

router.post("/task",validate(taskSchema, "body"), AsyncHandler( controller.createTask));
router.get("/task", AsyncHandler(controller.listTask))
router.get("/task/search/:title",validate(taskTitleSchema, "params"), AsyncHandler(controller.listByName))
router.delete("/task/:id", validate(taskIdSchema, "params"),AsyncHandler(controller.deleteById))
router.patch("/task/:id",validate(taskIdSchema, "params"), validate(taskSchema, "body"), AsyncHandler( controller.updateByID))

export default router;  