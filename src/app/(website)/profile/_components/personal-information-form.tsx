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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    hight: z.string().min(2, {
        message: "Hight must be at least 2 characters.",
    }),
    weight: z.string().min(2, {
        message: "Weight must be at least 2 characters.",
    }),
    agencyName: z.string().min(2, {
        message: "Agency Name must be at least 2 characters.",
    }),
    social_media: z.string().min(2, {
        message: "Social Media must be at least 2 characters.",
    }),
    citizenship: z.string().min(2, {
        message: "citizenship must be at least 2 characters.",
    }),
    currentClub: z.string().min(2, {
        message: "Current Club must be at least 2 characters.",
    }),
    dateOfBirth: z.string().min(2, {
        message: "Date Of Birth must be at least 2 characters.",
    }),
    placeOfBirth: z.string().min(2, {
        message: "Place Of Birth must be at least 2 characters.",
    }),
    gender: z.string().min(2, {
        message: "Gender Of Birth must be at least 2 characters.",
    }),
    // inSchool: z.enum(["yes", "no"], { message: "Please select an option." }),
    inSchool: z.enum(["yes", "no"], { message: "Please select if you are in school/college." }),

    // These will be required only if inSchool === "yes"
    instituteName: z.string().optional(),
    gpa: z.string().optional(),
}).refine((data) => {
    if (data.inSchool === "yes") {
        if (!data.instituteName || data.instituteName.trim().length < 2) return false;
        if (!data.gpa || data.gpa.trim().length === 0) return false;
    }
    return true;
}, {
    message: "Institute Name and GPA are required if you are in school/college.",
    path: ["instituteName"], // Shows error under Institute Name field
}).refine((data) => {
    if (data.inSchool === "yes") {
        if (!data.gpa || data.gpa.trim().length === 0) return false;
    }
    return true;
}, {
    message: "GPA is required if you are in school/college.",
    path: ["gpa"], // Ensures error also appears under GPA if needed
})

// .refine((data) => {
//     if (data.inSchool === "yes") {
//         return data.instituteName && data.instituteName.length >= 2 && data.gpa && data.gpa.length >= 1
//     }
//     return true
// }, {
//     message: "Institute Name and GPA are required if you are in school/college.",
//     path: ["instituteName"], // error will show under instituteName field
// })

const PersonalInformationForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            hight: "",
            dateOfBirth: "",
            placeOfBirth: "",
            gender: "",
            weight: "",
            inSchool: undefined,
            instituteName: "",
            gpa: "",
            agencyName: "",
            social_media: "",
            citizenship: "",
            currentClub: "",
        },
    })

    const inSchool = form.watch("inSchool")

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div>
            <div className="pt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">First Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Bessie" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Last Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Jackson" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                        Gender (boy - girl)
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Email Address</FormLabel>
                                    <FormControl>
                                        <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="alma.lawson@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="hight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Hight</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="00" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Weight</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="00" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Date of birth / age</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="00/00/0000" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="placeOfBirth"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Place of birth</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="citizenship"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Citizenship</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentClub"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Current Club</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="agencyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Agent/Agency Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Bessie" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="social_media"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Social media Link</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <FormField
                            control={form.control}
                            name="inSchool"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                        Are you in high school or college/university?
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-row items-center space-x-8"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="yes" id="yes" />
                                                <label htmlFor="yes" className="cursor-pointer text-base font-medium text-[#131313]">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="no" id="no" />
                                                <label htmlFor="no" className="cursor-pointer text-base font-medium text-[#131313]">
                                                    No
                                                </label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Conditional Education Fields */}
                        {inSchool === "yes" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                <FormField
                                    control={form.control}
                                    name="instituteName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                                Institute Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Write here"
                                                    {...field}
                                                    className="w-full h-[47px] border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292]"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="gpa"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                                GPA
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Write here"
                                                    {...field}
                                                    className="w-full h-[47px] border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292]"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        )}



                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PersonalInformationForm