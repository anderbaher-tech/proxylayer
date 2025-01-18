import { createLogger, format, transports } from "winston";
import { Request, Response, NextFunction } from "express";
const { combine, colorize, timestamp, printf, errors } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [new transports.Console()],
});

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  logger.info(`${req.method} ${req.url}`);
  next();
  res.on("finish", () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    if (res.statusCode >= 200 && res.statusCode < 300) {
      logger.info(
        `${req.method} ${req.url} - ${res.statusCode} ${res.statusMessage}; ${res.get("Content-Length") || 0}b sent in ${responseTime}ms`
      );
    } else {
      logger.error(
        `${req.method} ${req.url} - ${res.statusCode} ${res.statusMessage}; ${res.get("Content-Length") || 0}b sent in ${responseTime}ms`
      );
    }
  });
}

export { logger, requestLogger };
