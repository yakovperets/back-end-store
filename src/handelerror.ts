import express from "express";
import { Response } from "express";

export const handleError = (
  res: Response,
  error: any,
  status: number = 400
) => {
  if (error && error instanceof Error) {
    return res.status(status).send(error.message);
  }
};
