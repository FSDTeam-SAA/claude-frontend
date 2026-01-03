"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
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
import { useSession } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"

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
    const session = useSession();
    const token = (session?.data?.user as {accessToken:string})?.accessToken;
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
    })

    

      const { mutate, isPending } = useMutation({
        mutationKey: ["change-password"],
        mutationFn: async (payload: { oldPassword: string, newPassword: string }) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/change-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            })
            return res.json()
        },
        onSuccess: (data) => {
            if (!data?.success) {
                toast.error(data?.message || "Something went wrong!");
                return;
            }
            toast.success(data?.message || "password changed Successfully");
            form.reset()
        }
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        if (!token) {
            toast.error("Invalid or expired token")
            return
        }

        mutate({
            oldPassword: values.currentPassword,
            newPassword: values.newPassword
        })
    }
    return (
        <div className="container flex items-center justify-center">
           <div className=" w-full md:w-2/3">
             <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold text-[#333333] leading-[120%]">Current Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={showOldPassword ? "text" : "password"} className="w-full h-[52px] rounded-[10px] border border-[#C0C3C1] text-[#333333] placeholder:text-[#8E938F] font-medium leading-[120%] text-base" placeholder="Enter Password" {...field} />
                                        <button type="button" className="absolute right-4 top-3">{showOldPassword ? <Eye onClick={() => setShowOldPassword(!showOldPassword)} /> : <EyeOff onClick={() => setShowOldPassword(!showOldPassword)} />}</button>
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
                                        <Input type={showNewPassword ? "text" : "password"} className="w-full h-[52px] rounded-[10px] border border-[#C0C3C1] text-[#333333] placeholder:text-[#8E938F] font-medium leading-[120%] text-base" placeholder="Enter Password" {...field} />
                                        <button type="button" className="absolute right-4 top-3">{showNewPassword ? <Eye onClick={() => setShowNewPassword(!showNewPassword)} /> : <EyeOff onClick={() => setShowNewPassword(!showNewPassword)} />}</button>
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
                    <div className="w-full flex items-center justify-end">
                            <Button className="h-[48px] px-10 py-2 rounded-[10px] text-base font-semibold text-white leading-[120%]" disabled={isPending} type="submit">{isPending ? "changing..." : "Change Password"}</Button>
                        </div>
                </form>
            </Form>
           </div>
        </div>
    )
}

export default PasswordChangeForm