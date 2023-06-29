import * as z from "zod"

// User auth schema
export const userAuthSchema = z.object({
  email: z.string().email(),
})