import { zodResolver } from "@hookform/resolvers/zod"
import { useForm  as useFormHook } from "react-hook-form"
import { ZodType, z } from "zod"
export function useForm<T extends ZodType<any, any, any>>(schema: T){

  return useFormHook<z.infer<T>>({
    resolver: zodResolver(schema),
  })
}