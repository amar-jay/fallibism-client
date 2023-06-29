import * as z from "zod"

// User auth schema
export const userAuthSchema = z.object({
  email: z.string().email(),
})


// email schema
export const emailSchema = z.object({
  email: z.string().email(),
})