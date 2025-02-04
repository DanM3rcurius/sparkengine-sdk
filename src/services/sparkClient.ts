import { SparkClient } from '@spark/sdk'; // Replace with actual SDK import

export class SparkService {
  private client: SparkClient;
  
  constructor() {
    this.client = new SparkClient({
      apiKey: process.env.NEXT_PUBLIC_SPARK_API_KEY,
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.client.chat.sendMessage({
        message, projectId: process.env.SPARK_PROJECT_ID
        // Add any additional parameters required by your Spark project
      });
      
      return response;
    } catch (error) {
      console.error('Error sending message to Spark:', error);
      throw error;
    }
  }

  // Add any additional methods needed for your specific use case
}

// Create a singleton instance
export const sparkService = new SparkService(); 