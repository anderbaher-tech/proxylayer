import { cleanEnv, str, port } from "envalid";
import { CODE_CONSTANTS } from "./interfaces/constants";

function validateEnv(): void {
  cleanEnv(process.env, {
    STAGE: str({
      choices: ["tst", "prd"],
    }),
    PORT: port({ default: CODE_CONSTANTS.DEFAULT_PORT }),
  });
}

export default validateEnv;
