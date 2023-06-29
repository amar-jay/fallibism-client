"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/auth-form"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React from "react"
import { emailSchema } from "@/lib/validations/auth"
import { useForm } from "@/components/hooks/use-form"
import { Metadata } from "next/types"
import { toast } from "@/components/hooks/use-toast"
import { share } from "@/lib/share"
import { email } from "@/lib/email"


export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(emailSchema)
	const onSubmit = async (data: any) => {
		    setIsLoading(true)

    const res = await email({
		to: data.email.toLoweCase(),
		title: "Welcome to the newsletter",
		body: "You have been added to the newsletter",
    })

    setIsLoading(false)

	
	return res.ok ? toast({
		title: "Check your email",
		description: "We sent you a login link. Be sure to check your spam too.",
	}) : toast({
		title: "Something went wrong.",
		description: "Your sign in request failed. Please try again.",
		variant: "destructive",
	})
	}
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Newsletter
          </h1>
        	<p className="text-sm text-muted-foreground">
        	    Enter your email to subscribe to our newsletter
			</p>
        </div>

		<form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}

			<button className={cn(buttonVariants())} disabled={isLoading}>
				{isLoading && (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin rounded-md" />
				)}
				Add to waitlist
			</button>

		<div className="relative">
			<div className="absolute inset-0 flex items-center">
			<span className="w-full border-t" />
			</div>
			<div className="relative flex justify-center text-xs uppercase">
			<span className="bg-background px-2 text-muted-foreground">
				Or 
			</span>
			</div>
			</div>
		</div>

		      <button
        type="button"
        className={cn(buttonVariants({ variant: "secondary",className:"rounded-md w-full" }))}
        onClick={() => {
          share({
			title: "Newsletter",
			text: "Subscribe to our newsletter",
		  })
        }}
        disabled={isLoading}
      >
          <Icons.share className="mr-2 h-4 w-4" />
		  Share
      </button>
	</form>
      </div>
    </div>
  )
}