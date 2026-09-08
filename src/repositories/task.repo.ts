import { prisma } from "../config/prisma.js";
import type { taskSchemaTod } from "../models/task.schema.js";
import { logger } from "../utils/logger.js";
import type { repoInterface } from "./repo.interface.js";
import type { Task, Prisma } from "@prisma/client";
import type { UUID } from "node:crypto";
import type { TaskPriority } from "../models/task.models.js";
import { AppError } from "../utils/task.error.js";
import { NotFoundError } from "../error/mainError.js";

export class TaskRepository implements repoInterface {
  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    logger.info("Persisting task to database");

    const createdTask = await prisma.task.create({
      data,
    });
    logger.info("Task persisted successfully");

    return createdTask;
  }

  async listTask(): Promise<Task[]> {
    logger.info("Querying database for all tasks");

    const value = await prisma.task.findMany();
    return value;
  }
  //////////////////////////////////////////////
  async listByName(name: string): Promise<Task[]> {
    // name = "first"
    logger.info("Query database for a task");

    const value = await prisma.task.findMany({
      where: {
        title: {
          contains: name,
        },
      },
    });
    return value;
  }

  async deleteById(id: string): Promise<Task> {
    logger.info("Deleting task Using ID ...");
    const value = prisma.task.delete({ where: { id: id } });
    return value;
  }

  async updateById(id: string, task: taskSchemaTod): Promise<Task> {
    logger.info("Updating task Data ...");
    console.log("Full Task Object:", JSON.stringify(task));

      const cleanData = Object.fromEntries(
        Object.entries(task).filter(([_, value]) => value !== undefined),
      );
      if (cleanData.priority) {
        cleanData.priority = cleanData.priority.toUpperCase();
        console.log(`fixing data ${cleanData.priority}`);

      }
      try {
        const value = await prisma.task.update({
          where: { id },
          data: cleanData,
        });
        logger.info("Task is updated.")
        return value;
      } catch (error) {
        throw new NotFoundError("Not Found");
      }
       

    
  }
}
