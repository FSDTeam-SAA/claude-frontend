"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const formSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, {
        message: "Current Password must be at least 6 characters",
      }),
      newPassword: z
      .string()
      .min(6, {
        message: "New Password must be at least 6 characters",
      }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Confirm password is required",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
  })


const PasswordChangeForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
    })

    

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className="container">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full md:w-2/3">
                     <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold text-[#333333] leading-[120%]">Current Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={showPassword ? "text" : "password"} className="w-full h-[52px] rounded-[10px] border border-[#C0C3C1] text-[#333333] placeholder:text-[#8E938F] font-medium leading-[120%] text-base" placeholder="Enter Password" {...field} />
                                        <button type="button" className="absolute right-4 top-3">{showPassword ? <Eye onClick={() => setShowPassword(!showPassword)} /> : <EyeOff onClick={() => setShowPassword(!showPassword)} />}</button>
                                    </div>
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold text-[#333333] leading-[120%]">New Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={showPassword ? "text" : "password"} className="w-full h-[52px] rounded-[10px] border border-[#C0C3C1] text-[#333333] placeholder:text-[#8E938F] font-medium leading-[120%] text-base" placeholder="Enter Password" {...field} />
                                        <button type="button" className="absolute right-4 top-3">{showPassword ? <Eye onClick={() => setShowPassword(!showPassword)} /> : <EyeOff onClick={() => setShowPassword(!showPassword)} />}</button>
                                    </div>
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold text-[#333333] leading-[120%]">Confirm New Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={showConfirmPassword ? "text" : "password"} className="w-full h-[52px] rounded-[10px] border border-[#C0C3C1] text-[#333333] placeholder:text-[#8E938F] font-medium leading-[120%] text-base" placeholder="Enter Password" {...field} />
                                        <button type="button" className="absolute right-4 top-3">{showConfirmPassword ? <Eye onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <EyeOff onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}</button>
                                    </div>

                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />
                  </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default PasswordChangeForm