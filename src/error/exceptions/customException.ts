import { ERROR_TYPE } from "@/utils/constants";
import Exception from "./exception";

export default {
  internalServerError(msg?: string, err?: Error) {
    return new Exception(
      ERROR_TYPE.INTERNAL_SERVER_ERROR,
      msg || "Internal server error, Please try after some time.",
      err
    );
  },
  badRequestError(msg?: string, err?: Error) {
    return new Exception(ERROR_TYPE.BAD_REQUEST, msg || "Bad request", err);
  },
  unAuthenticatedAccess(msg?: string, err?: Error) {
    return new Exception(
      ERROR_TYPE.UNAUTHORIZED,
      msg || "Unauthorized access",
      err
    );
  },
  forbiddenAccess(msg?: string, err?: Error) {
    return new Exception(ERROR_TYPE.FORBIDDEN, msg || "Forbidden access", err);
  },
  notFoundError(msg?: string, err?: Error) {
    return new Exception(ERROR_TYPE.NOT_FOUND, msg || "No route found", err);
  },
  notAllowedError(msg?: string, err?: Error) {
    return new Exception(
      ERROR_TYPE.NOT_ALLOWED,
      msg || "Method not allowed",
      err
    );
  },
  alreadyExistError(msg?: string, err?: Error) {
    return new Exception(
      ERROR_TYPE.ALREADY_EXISTS,
      msg || "Already Exists",
      err
    );
  },
};
