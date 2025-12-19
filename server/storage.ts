import { SprintAssessment } from "@shared/schema";

export interface IStorage {
  createSprintAssessment(assessment: SprintAssessment): Promise<void>;
}

export class GoogleSheetsStorage implements IStorage {
  private sheetsUrl: string;

  constructor() {
    this.sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  }

  async createSprintAssessment(assessment: SprintAssessment): Promise<void> {
    if (!this.sheetsUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
      throw new Error("Sheet integration not configured");
    }

    try {
      const payload = {
        timestamp: new Date().toISOString(),
        ...assessment,
      };

      console.log("Sending to Google Sheets:", this.sheetsUrl);
      console.log("Payload:", JSON.stringify(payload));

      const response = await fetch(this.sheetsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Google Sheets response status:", response.status);
      
      if (!response.ok) {
        const text = await response.text();
        console.error("Google Sheets error response:", text);
        throw new Error(`Google Sheets error: ${response.statusText}`);
      }
      
      console.log("Assessment saved to Google Sheets successfully");
    } catch (error) {
      console.error("Failed to save assessment to Google Sheets:", error);
      throw error;
    }
  }
}

export const storage = new GoogleSheetsStorage();
