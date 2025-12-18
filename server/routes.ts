import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sprintAssessmentSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/sprint-assessment", async (req, res) => {
    try {
      const validation = sprintAssessmentSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json({
          message: "Invalid request data",
          errors: validation.error.flatten(),
        });
      }

      await storage.createSprintAssessment(validation.data);

      res.status(201).json({
        message: "Assessment submitted successfully. We'll be in touch soon!",
      });
    } catch (error) {
      console.error("Error creating assessment:", error);
      res.status(500).json({
        message: "Failed to submit assessment. Please try again.",
      });
    }
  });

  return httpServer;
}
