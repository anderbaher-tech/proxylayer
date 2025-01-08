import axios, { AxiosRequestConfig, Method } from "axios";
import { StatusCodes } from "http-status-codes";
import CustomError from "@/utils/Error/coustomError";
import { logger } from "@/utils/logger/logger";

interface HttpRequestConfig {
  method: Method;
  url: string;
  authKey?: string;
  body?: any;
  headers?: Record<string, string>;
}

class HttpService {
  public async makeRequest({
    method,
    url,
    authKey,
    body,
    headers = {},
  }: HttpRequestConfig): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        headers: {
          "Content-Type": "application/json",
          Authorization: authKey ? `${authKey}` : undefined,
          ...headers, // Add any additional custom headers
        },
        data: body, // Request body for POST/PUT
      };

      logger.info(`Making ${method} request to ${url}`);
      const response = await axios(config);
      logger.info(`Request successful: ${response.status}`);
      console.log(response.data);
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      logger.error(`Error during request: ${error.message}`);
      if (error.response) {
        // Return a structured custom error
        throw new CustomError(
          error.response.data?.message || "API request failed",
          error.response.status || StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
      throw new CustomError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default HttpService;
