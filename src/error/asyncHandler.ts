import type { Request, Response, NextFunction } from "express";

// This version allows you to pass custom types into your controllers
export const AsyncHandler = <T>(
  fn: (req: Request | any, res: Response, next: NextFunction) => Promise<T> | any
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};