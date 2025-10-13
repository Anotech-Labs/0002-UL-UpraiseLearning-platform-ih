import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    GOOGLE_CLIENT_EMAIL: z.string(),
    GOOGLE_PRIVATE_KEY: z.string(),
    GOOGLE_SHEET_ID: z.string(),
  },

  /**
   * Client-side environment variables schema
   * (must start with NEXT_PUBLIC_ if you need them in the browser)
   */
  client: {},

  /**
   * Map actual runtime environment variables
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,

    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  },

  /**
   * Skip validation if needed (e.g. in Docker)
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Treat empty strings as undefined
   */
  emptyStringAsUndefined: true,
});