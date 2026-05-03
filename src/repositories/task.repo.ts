import { prisma } from "../config/prisma.js";
import { logger } from "../utils/logger.js";
import type { repoInterface } from "./repo.interface.js";
import type { Task, Prisma } from "@prisma/client";


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

    const value =  await prisma.task.findMany();
    return value;
  }
//////////////////////////////////////////////
  async listByName(name: string):Promise<Task[]> {
    // name = "first"
    logger.info("Query database for a user")

    const value = await prisma.task.findMany({
        where:{
           title:{
            contains : name
           }
    }})
    return value;

  }}
