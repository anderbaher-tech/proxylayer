import exp from "constants";
import { Router } from "express";

interface Controller {
  path: string;
  router: Router;
}

export default Controller;
