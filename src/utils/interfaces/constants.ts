export const STATUS_CODE = {
  ERROR: 0,
  SUCCESS: 1,
  INVALID_TOKEN: 1000,
};

export const RESPONSE_STATUS = {
  SUCCESS: 200,
  SUCCESS_CREATED: 201,
  SUCCESS_NO_CONTENT: 204,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHERS: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  INTERNAL_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  ALREADY_EXISTS: 409,
  PCP_CONSTRAINT: 400,
};
export const ERROR_TYPE = {
  NOT_FOUND: "NotFoundError",
  UNAUTHORIZED: "UnauthorizeError",
  INTERNAL_SERVER_ERROR: "InternalServerError",
  BAD_REQUEST: "BadRequestError",
  FORBIDDEN: "ForbiddenError",
  NOT_IMPLEMENTED: "NotImplementedError",
  ALREADY_EXISTS: "AlreadyExistsError",
  NOT_ALLOWED: "MethodNotAllowedError",
  PCP_CONSTRAINT: "PcpConstraintError",
  INVALID_INPUT: "invalid input",
  TOKEN_NOT: "authorization token not found",
};

export const PAGINATORS = {
  PAGINATION_START_PAGE: "1",
  PAGINATION_START_MAX_LIMIT: "1000",
  PAGINATION_DEFAULT_ORDER: "ASC",
  ISENABLED_TRUE: "1",
  ISENABLED_FALSE: "0",
  ISACTIVE_TRUE: "1",
  ISACTIVE_FALSE: "0",
};

export enum CommonStrings {
  SUBJECTS = "One Time Password",
  HTML = "Your One Time Password Is",
  CREATED = "SuccessFully Created",
  UPDATED = "SuccessFully Updated",
  DELETED_SUCCESSFULLY = "Deleted Successfully",
  SUCCESS = "Success",
  SEND_OTP = "SuccessFully Send Otp",
  OTP_VERIFIED = "Otp Verified SuccessFully",
  GENERATE = "GENERATE",
  UPDATE_PASSWORD = "Updating User Password",
  AUTHERIZATION_DENIED = "Autherization Denied",
  PROFILE_UPDATE = "Profile Updated Successfulluy",
  FACEBOOK = "FACEBOOK",
  GOOGLE = "GOOGLE",
  DOCUMENT_UPLOADED = "Document Uploaded Successfully",
}
export const CODE_CONSTANTS = {
  JSON_CONTENT_LIMIT: "10mb",
  DEFAULT_PORT: 5000,
  ENTRY_QUIZ_PASSING_CRITERIA: 75,
  ENTRY_QUIZ_TOTAL_PERCENTAGE: 100,
  CONTENT_ENCODING: "base64",
};
