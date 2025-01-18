import { Router, Request, Response } from "express";
import ProxyController from "../controllers/proxy.controllers";

class ProxyRoutes {
  public path = "/proxyJira";
  public router = Router();
  private assignment = new ProxyController();
  constructor() {
    this.initialiseRoutes();
  }
  private initialiseRoutes(): void {
    this.router.post(`${this.path}`, this.assignment.proxyRequest);
  }
}
export default ProxyRoutes;
