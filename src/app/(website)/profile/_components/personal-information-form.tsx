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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { UserProfile } from "./user-data-type"
import { useEffect } from "react"
import { toast } from "sonner"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

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
    dob: z.date().nullable(),
    placeOfBirth: z.string().min(2, {
        message: "Place Of Birth must be at least 2 characters.",
    }),
    gender: z.string().min(1, {
        message: "Gender is required.",
    }),
    league: z.string().min(1, {
        message: "League is required.",
    }),
    category: z.string().min(1, {
        message: "Category is required.",
    }),
    foot: z.string().min(1, {
        message: "Foot is required.",
    }),

    position: z.string().min(1, {
        message: "Position is required.",
    }),

    // inSchoolOrCollege: z.enum(["yes", "no"], { message: "Please select an option." }),
    inSchoolOrCollege: z.enum(["yes", "no"], { message: "Please select if you are in school/college." }),

    // These will be required only if inSchoolOrCollege === "yes"
    instituteName: z.string().optional(),
    gpa: z.string().optional(),
}).refine((data) => {
    if (data.inSchoolOrCollege === "yes") {
        if (!data.instituteName || data.instituteName.trim().length < 2) return false;
        if (!data.gpa || data.gpa.trim().length === 0) return false;
    }
    return true;
}, {
    message: "Institute Name and GPA are required if you are in school/college.",
    path: ["instituteName"], // Shows error under Institute Name field
}).refine((data) => {
    if (data.inSchoolOrCollege === "yes") {
        if (!data.gpa || data.gpa.trim().length === 0) return false;
    }
    return true;
}, {
    message: "GPA is required if you are in school/college.",
    path: ["gpa"], // Ensures error also appears under GPA if needed
})

const PersonalInformationForm = () => {
    const session = useSession();
    const token = (session?.data?.user as { accessToken: string })?.accessToken;
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            hight: "",
            dob: null,
            placeOfBirth: "",
            gender: "",
            weight: "",
            inSchoolOrCollege: undefined,
            instituteName: "",
            gpa: "",
            agencyName: "",
            social_media: "",
            citizenship: "",
            currentClub: "",
            league: "",
            category: "",
            foot: "",
            position: "",
        },
    })

    const inSchoolOrCollege = form.watch("inSchoolOrCollege")

    const { data } = useQuery<UserProfile>({
        queryKey: ['user-profile'],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                method: 'GET',
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            return res.json();
        },
        enabled: !!token,
    })

    console.log("User Profile Data:", data);


    useEffect(() => {
        if (data) {

            form.reset({
                firstName: data?.firstName || "",
                lastName: data?.lastName || "",
                email: data?.email || "",
                gender: data?.gender || "",
                hight: data?.hight || "",
                weight: data?.weight || "",
                agencyName: data?.agent || "",
                social_media: Array.isArray(data?.socialMedia)
                    ? data?.socialMedia.join(", ")
                    : "",
                citizenship: data?.citizenship || "",
                currentClub: data?.currentClub || "",
                league: data?.league || "",
                category: data?.category || "",
                foot: data?.foot || "",
                position: data?.position || "",
                placeOfBirth: data?.birthdayPlace || "",
                dob: data?.dob ? new Date(data?.dob) : null,

                // Education fields
                inSchoolOrCollege:
                    data?.inSchoolOrCollege === true
                        ? "yes"
                        : data?.inSchoolOrCollege === false
                            ? "no"
                            : undefined,

                instituteName: data?.instituteName || "",
                gpa: data?.gpa || "",
            });
        }
    }, [form, data]);


    const { mutate, isPending } = useMutation({
        mutationKey: ["update-profile"],
        mutationFn: async (values: z.infer<typeof formSchema>) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
            })
            return res.json()
        },
        onSuccess: (data) => {
            if (!data?.success) {
                toast.error(data?.message || "Something went wrong");
                return;
            }
            toast.success(data?.message || "User Profile updated successfully")
            queryClient.invalidateQueries({ queryKey: ["user-profile"] })
            form.reset();
        },
    })



    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)

        mutate(values)
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
                                            value={field.value}
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
                                name="dob"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-semibold text-black leading-[120%]">
                                            Date Of Birth
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        className={`w-full justify-start text-left h-12 ${!field.value && "text-muted-foreground"
                                                            }`}
                                                    >
                                                        {field.value instanceof Date && !isNaN(field.value.getTime())
                                                            ? format(field.value, "MMM dd, yyyy")
                                                            : "mm/dd/yyyy"}

                                                        <CalendarIcon className="ml-auto h-4 w-4" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ?? undefined}
                                                    onSelect={(date) => field.onChange(date ?? null)}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
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
                                name="league"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            League (Select One)
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
                                                    <SelectItem value="ecnl">ECNL</SelectItem>
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
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Category
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
                                                    <SelectItem value="amateur">Amateur</SelectItem>
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                            <FormField
                                control={form.control}
                                name="foot"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Foot (select: left - right - both)
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="left">Left</SelectItem>
                                                    <SelectItem value="right">Right</SelectItem>
                                                    <SelectItem value="both">Both</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Position (select 2 positions)
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent className="overflow-y-auto h-[200px]">
                                                    <SelectItem value="gk">GK</SelectItem>
                                                    <SelectItem value="rb">RB</SelectItem>
                                                    <SelectItem value="lb">LB</SelectItem>
                                                    <SelectItem value="cb">CB</SelectItem>
                                                    <SelectItem value="defensive midfielder">Defensive Midfielder</SelectItem>
                                                    <SelectItem value="offensive midfielder">Offensive Midfielder</SelectItem>
                                                    <SelectItem value="right winger">Right Winger</SelectItem>
                                                    <SelectItem value="left winger">Left Winger</SelectItem>
                                                    <SelectItem value="striker">Striker</SelectItem>
                                                </SelectContent>
                                            </Select>
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
                            name="inSchoolOrCollege"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                        Are you in high school or college/university?
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
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
                        {inSchoolOrCollege === "yes" && (
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



                        <Button disabled={isPending} type="submit">{isPending ? "sending..." : "Submit"}</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PersonalInformationForm