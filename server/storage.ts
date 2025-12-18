import { SprintAssessment } from "@shared/schema";

export interface IStorage {
  createSprintAssessment(assessment: SprintAssessment): Promise<void>;
}

export class GoogleSheetsStorage implements IStorage {
  private sheetsUrl: string;

  constructor() {
    // Uses Google Forms or direct Apps Script deployment
    // Set GOOGLE_SHEETS_WEBHOOK_URL environment variable
    this.sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  }

  async createSprintAssessment(assessment: SprintAssessment): Promise<void> {
    if (!this.sheetsUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
      throw new Error("Sheet integration not configured");
    }

    try {
      const response = await fetch(this.sheetsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...assessment,
        }),
      });

      if (!response.ok) {
        throw new Error(`Google Sheets error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to save assessment:", error);
      throw error;
    }
  }
}

export const storage = new GoogleSheetsStorage();
