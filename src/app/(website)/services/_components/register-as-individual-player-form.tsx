

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LockKeyhole } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Player Name must be at least 2 characters.",
  }),
   teamName: z.string().min(2, {
    message: "Team Name must be at least 2 characters.",
  }),
   league: z.string().min(1, {
        message: "League is required.",
    }),
   category: z.string().min(1, {
        message: "Category is required.",
    }),
})
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { useSession } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

interface RegisterAsIndividualPlayerFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  subscriptionId?: string
}

const RegisterAsIndividualPlayerForm = ({
  open,
  onOpenChange,
  subscriptionId,
}: RegisterAsIndividualPlayerFormProps) => {
  const session = useSession();
    const token = (session?.data?.user as { accessToken: string })?.accessToken;


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      teamName: "",
      league: "",
      category: "",
    },
  })

  //  const { mutate, isPending } = useMutation({
  //       mutationKey: ["update-profile"],
  //       mutationFn: async (values: z.infer<typeof formSchema>) => {
  //           const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
  //               method: "PUT",
  //               headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  //               body: JSON.stringify(values)
  //           })
  //           return res.json()
  //       },
  //       onSuccess: async (data) => {
  //           if (!data?.success) {
  //               toast.error(data?.message || "Something went wrong")
  //               return
  //           }
  //           toast.success(data?.message || "Profile updated successfully")
  //           form.reset()
  //       },
  //       onError: () => toast.error("Update failed"),
  //   })


    const { mutate, isPending } = useMutation({
    mutationKey: ["profile-payment"],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      /* 1️⃣ PROFILE UPDATE */
      const profileRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      )

      const profileData = await profileRes.json()
      if (!profileData?.success) {
        throw new Error(profileData?.message || "Profile update failed")
      }

      /* 2️⃣ STRIPE PAYMENT */
      const paymentRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/pay/${subscriptionId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const paymentData = await paymentRes.json()
      if (!paymentData?.success) {
        throw new Error("Payment creation failed")
      }

      return paymentData
    },

    onSuccess: (data) => {
      toast.success("Redirecting to payment...")
      window.location.href = data.data.url
    },

    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong")
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    mutate(values)
  }
  return (
    <div>

      <Dialog open={open} onOpenChange={onOpenChange}>

        <DialogContent className="max-w-3xl">
             {/* Logo */}
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[289px] h-[80px] object-cover"
              />
            </Link>
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-[#131313] leading-[120%] font-normal text-center pb-10">Register As Individual Player</h4>
          <div className="bg-white border-[2px] border-[#E7E7E7] shadow-[0px_0px_32px_0px_#0000001F] p-6 rounded-[16px]">
            <h4 className="text-xl md:text-2xl lg:text-3xl text-[#131313] leading-[120%] font-normal text-center pb-6">Personal Information</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">Player Name *</FormLabel>
                      <FormControl>
                        <Input className="h-[48px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] " placeholder="Enter Player Name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">Team Name *</FormLabel>
                      <FormControl>
                        <Input className="h-[48px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] " placeholder="Enter Player Name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                      <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                                            Category *
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select Category" />
                                                </SelectTrigger>
                                                <SelectContent className="h-[200px] overflow-y-auto">
                                                    <SelectItem value="semi-professional">Semi Professional</SelectItem>
                                                    <SelectItem value="professional">Professional</SelectItem>
                                                    <SelectItem value="adult">Adult</SelectItem>
                                                    <SelectItem value="U9">U9</SelectItem>
                                                    <SelectItem value="U10">U10</SelectItem>
                                                    <SelectItem value="U11">U11</SelectItem>
                                                    <SelectItem value="U12">U12</SelectItem>
                                                    <SelectItem value="U13">U13</SelectItem>
                                                    <SelectItem value="U14">U14</SelectItem>
                                                    <SelectItem value="U15">U15</SelectItem>
                                                    <SelectItem value="U16">U16</SelectItem>
                                                    <SelectItem value="U17">U17</SelectItem>
                                                    <SelectItem value="U18">U18</SelectItem>
                                                    <SelectItem value="U19">U19</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
              <FormField
                                control={form.control}
                                name="league"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                                            Which league do you play?
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select League" />
                                                </SelectTrigger>
                                                <SelectContent className="h-[200px] overflow-y-auto">
                                                    <SelectItem value="nwsl">NWSL</SelectItem>
                                                    <SelectItem value="ecnl">ECNL</SelectItem>
                                                    <SelectItem value="usl super league">USL Super League</SelectItem>
                                                    <SelectItem value="travel">Travel</SelectItem>
                                                    <SelectItem value="ecnl rl">ECNL RL</SelectItem>
                                                    <SelectItem value="mls next">MLS NEXT</SelectItem>
                                                    <SelectItem value="npl">NPL</SelectItem>
                                                    <SelectItem value="pdl">PDL</SelectItem>
                                                    <SelectItem value="upsl">UPSL</SelectItem>
                                                    <SelectItem value="usl academy">USL Academy</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                <Button disabled={isPending} className="w-full h-[47px] rounded-[8px] text-[#F2F2F2] text-base " type="submit"><LockKeyhole /> {isPending ? "Updating..." : "Make Your Payment"}</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RegisterAsIndividualPlayerForm