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
  playerName: z.string().min(2, {
    message: "Player Name must be at least 2 characters.",
  }),
   teamName: z.string().min(2, {
    message: "Team Name must be at least 2 characters.",
  }),
   league: z.string().min(2, {
    message: "League Name must be at least 2 characters.",
  }),
   category: z.string().min(1, {
        message: "Category is required.",
    }),
})
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface RegisterAsIndividualPlayerFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const RegisterAsIndividualPlayerForm = ({
  open,
  onOpenChange,
}: RegisterAsIndividualPlayerFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: "",
      teamName: "",
      league: "",
      category: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
                  name="playerName"
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
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent className="h-[200px] overflow-y-auto">
                                                    <SelectItem value="semi-professional">Semi Professional</SelectItem>
                                                    <SelectItem value="semi-professional">Professional</SelectItem>
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
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">Which league do you play? *</FormLabel>
                      <FormControl>
                        <Input className="h-[48px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] " placeholder="Enter Player Name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full h-[47px] rounded-[8px] text-[#F2F2F2] text-base " type="submit"><LockKeyhole /> Make Your Payment</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RegisterAsIndividualPlayerForm