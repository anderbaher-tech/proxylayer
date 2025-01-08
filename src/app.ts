import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import * as Sentry from "@sentry/node";
import Controller from "@/utils/interfaces/controller.interface";
import { logger, requestLogger } from "@/utils/logger/logger";
import { CODE_CONSTANTS } from "./utils/interfaces/constants";

class App {
  public express: Application;
  public port: number;
  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;
    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
    this.setupSentry();
  }

  private initialiseMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(
      express.json({ limit: CODE_CONSTANTS.JSON_CONTENT_LIMIT })
    );
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(requestLogger);
  }

  private initialiseControllers(controllers: Controller[]): void {
    const stage = process.env.STAGE || "tst";
    console.log(stage);
    controllers.forEach((controller: Controller) => {
      this.express.use(`/${stage}`, controller.router);
    });
  }

  private setupSentry(): void {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app: this.express }),
      ],
      tracesSampleRate: 1.0,
    });

    // The request handler must be the first middleware on the app
    this.express.use(Sentry.Handlers.requestHandler());

    // TracingHandler creates a trace for every incoming request
    this.express.use(Sentry.Handlers.tracingHandler());

    // Optional fallthrough error handler
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`App listening on port ${this.port}`);
    });
  }
}

export default App;