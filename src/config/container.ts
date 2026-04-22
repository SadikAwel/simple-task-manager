import {TaskRepository} from "../repositories/task.repo.js"
import {TaskService} from "../services/task.service.js"
import {Controller} from "../controllers/task.controller.js"
import {errorHandlerMiddleware} from "../middlewares/errorMiddleware.js"


const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new Controller(taskService);

export const container = {taskController}
export const errorMiddleware  = errorHandlerMiddleware();
