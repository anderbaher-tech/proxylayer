import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/utils/logger/logger";
import HttpService from "../services/proxy.service";// Import the HTTP service
import z from "zod";

// Define schema for request validation
const requestSchema = z.object({
  url: z.string().url({ message: "Invalid URL format" }),
  method: z.enum(["GET", "POST", "PUT", "DELETE"], { invalid_type_error: "Invalid HTTP method" }),
  body: z.record(z.any()).nullable().optional(), // Body can be optional
  headers: z.record(z.string()).optional(),
});

class ProxyController  {
  private httpService: HttpService; // Service instance for handling HTTP requests

  constructor() {
    this.httpService = new HttpService(); // Initialize HTTP service
    this.proxyRequest = this.proxyRequest.bind(this); // Ensure correct `this` binding
  }

  /**
   * Handles proxy requests by making HTTP requests using the HttpService
   */


  public async proxyRequest(req: Request, res: Response): Promise<Response> { 
    const validationResult = requestSchema.safeParse(req.body);
  
    if (!validationResult.success) {
      logger.error(`Validation Error: ${validationResult.error.message}`);
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid request",
        errors: validationResult.error.issues,
      });
    }
  
    const { url, method, body, headers } = validationResult.data; 
    console.log(body);
    // const proxyAuthorization = req.headers["proxy-authorization"] as string;
    const proxyAuthorization = "cHJvamVjdG9wc0BhbmRlcmJhaGVyLmNvbTpBVEFUVDN4RmZHRjAzSXpfSG5BTnpRVXhCTHhQRjFxeXFzNTl0LUNzdWEyYUNnQmUwcldjTklXVktjNkZRNTNDWWg0Z2stQmsxWk03eTNJVGo1bUJmanZIeDdmN0g5RlpUdFNxSEE1c3p3N2NacW1ySmI0SEF0eVpieV9od1Z6dEpmWmE2bGN6bF9tVExDY0p5OXM2TDR5U05zd3h5WHhMZE5aNERFTGFJTnBNeThtWHRvMlFhTmM9RTYzODFBODI=";
    if (!proxyAuthorization) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Missing proxy-authorization in request",
      });
    } 


    
  
    const requestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Basic ${proxyAuthorization}`, // Atlassian API requires Basic Auth
      ...headers,
    };
    



    console.log(method);
    console.log(url);
    // console.log(body);
    console.log(requestHeaders);


    try {
      const response = await this.httpService.makeRequest({
        method,
        url,
        headers: requestHeaders, 
        body: body ? JSON.stringify(body) : undefined,
      });
      res.status(response.status).set(response.headers).send(response.data);
      return res;
    } catch (error: any) {
      logger.error(`Error: ${error.message}`);
      return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message || "Internal Server Error",
      });
    }
  }  


}

export default ProxyController;
