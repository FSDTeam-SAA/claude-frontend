"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from 'next/image'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ForgotPasswordForm = () => {
  const isPending = false;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
   console.log(values);
  }
  return (
    <div>
      <div className="w-full md:w-[570px] bg-white rounded-[16px] border-[2px] border-[#E7E7E7] shadow-[0px_0px_32px_0px_#0000001F] p-8">
        <div className="w-full flex items-center justify-center pb-4">
          <Link href="/">
          <Image src="/assets/images/auth-logo.png" alt="auth logo" width={500} height={500} className="w-[290px] h-[80px] object-contain"/>
          </Link>
        </div>

        <h3 className="text-2xl md:text-[32px] lg:text-[40px] font-normal text-[#131313] text-center leading-[120%] ">
          Forget Password
        </h3>
        <p className="text-basefont-normal text-[#616161] leading-[150%] text-center pt-2">
          Please enter the email address linked to your <br/> account. We&apos;ll send a one-time password (OTP) to <br/> your email for verification.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 pt-5 md:pt- lg:pt-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium leading-[150%] text-[#424242]">
                    Email <sup className="text-[#8C311E]">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full h-[48px] text-base font-medium leading-[120%] text-black rounded-[8px] outline-none p-4 border border-[#6C6C6C] placeholder:text-[#929292]"
                      placeholder="Enter your email address..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <div className="pt-2">
              <Button
                disabled={isPending}
                className={`text-base font-medium text-white cursor-pointer leading-[120%] rounded-[8px] py-4 w-full h-[51px] ${
                  isPending ? "opacity-50 cursor-not-allowed" : "bg-primary"
                }`}
                type="submit"
              >
                {isPending ? "Sending..." : "Send OTP"}
              </Button>
            </div>
            <div>
              
              <p className="text-sm font-normal leading-[150%] text-[#616161] text-center">Back to <Link href="/login" className="text-primary hover:underline">Log In</Link></p>
              </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
