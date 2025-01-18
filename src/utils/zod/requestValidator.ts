import { z } from "zod";
export function requestValidateQueryParams(
  queryParams: any,
  queryParamsSchema: z.AnyZodObject
): {
  success: boolean;
  object?: any;
  errors?: any;
} {
  try {
    // Attempt to parse and validate the query parameters
    const parsedParams: any = queryParamsSchema.parse(queryParams);
    return { success: true, object: parsedParams };
  } catch (error: any) {
    // If validation fails, return errors
    return { success: false, errors: error.errors };
  }
}

export function requestValidateBodyParams(
  bodyParams: any,
  bodyParamsSchema: z.AnyZodObject
): {
  success: boolean;
  object?: any;
  errors?: any;
} {
  try {
    // Attempt to parse and validate the query parameters
    const parsedParams: any = bodyParamsSchema.parse(bodyParams);
    return { success: true, object: parsedParams };
  } catch (error: any) {
    // If validation fails, return errors
    return { success: false, errors: error.errors };
  }
}
