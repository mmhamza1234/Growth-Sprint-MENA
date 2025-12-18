import { z } from "zod";

export const sprintAssessmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  employees: z.string().min(1, "Please select employee count"),
  bottleneck: z.string().min(10, "Please describe your bottleneck"),
});

export type SprintAssessment = z.infer<typeof sprintAssessmentSchema>;
