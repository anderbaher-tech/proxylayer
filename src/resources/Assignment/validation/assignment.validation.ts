import { z } from "zod";

const getContactDataSchema = z.object({
  emailId: z
    .string()
    .refine((value) => !value || value.trim() !== "", {
      message: "if emailId is present then cannot be an empty string",
    })
    .optional(),
  phoneNumber: z
    .number()
    .refine((value) => !isNaN(value) && value > 0, {
      message:
        "if emailId is present then cannot be an empty string and must be greater then 0",
    })
    .optional(),
});

export default getContactDataSchema;
