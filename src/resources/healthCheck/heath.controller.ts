import Controller from "@/utils/interfaces/controller.interface";
import { Router, Request, Response } from "express";
import { logger } from "@/utils/logger/logger";

class HealthController implements Controller {
  public path = "/health";
  public router = Router();
  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.get(`${this.path}`, this.liveCheck);
  }

  public liveCheck = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      return res
        .status(200)
        .json({ message: "Health Status is Up and Running ✅" });
    } catch (error) {
      logger.error("Internal server error");
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default HealthController;
