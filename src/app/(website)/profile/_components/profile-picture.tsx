"use client"

import { CircleArrowUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { User } from "./user-data-type"

const ProfilePicture = ({ user }: { user?: User }) => {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken
  const queryClient = useQueryClient()

  const [profileImage, setProfileImage] = useState("/assets/images/no-user.jpg")
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (user?.profileImage) {
      setProfileImage(user.profileImage)
    }
  }, [user?.profileImage])

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      )
      return res.json()
    },
    onSuccess: () => {
      toast.success("Profile image updated")
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
    },
    onError: () => toast.error("Upload failed"),
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () =>
      setProfileImage(reader.result as string)
    reader.readAsDataURL(file)

    const formData = new FormData()
    formData.append("profileImage", file)
    mutate(formData)
  }

  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border">
          <Image
            src={profileImage}
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full absolute flex justify-center mt-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />

         <div>
             <button
            className="w-[200px] flex items-center justify-center gap-2 rounded-[8px] border-[2px] border-primary text-primary py-3 px-3"
            onClick={() => fileInputRef.current?.click()}
            disabled={isPending}
          >
            <CircleArrowUp />
            Upload Image
          </button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePicture













// "use client";

// import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
// import { CircleArrowUp } from "lucide-react";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { toast } from "sonner";
// import { UserProfileApiResponse } from "./user-data-type";


// const ProfilePicture = () => {
//     const session = useSession();
//     const token = (session?.data?.user as { accessToken: string })?.accessToken;
//     const queryClient = new QueryClient();

//     const [profileImage, setProfileImage] = useState("/assets/images/no-user.jpg");
//     const fileInputRef = useRef<HTMLInputElement>(null);

//     // console.log(setProfileImage)

//     // get api
//     const { data } = useQuery<UserProfileApiResponse>({
//         queryKey: ["profile-img"],
//         queryFn: () =>
//             fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }).then((res) => res.json()),
//         enabled: !!token
//     });

//     // update api
//     const { mutate, isPending } = useMutation({
//         mutationKey: ["update-profile-image"],
//         mutationFn: async (formData: FormData) => {
//             const res = await fetch(
//                 `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//                 {
//                     method: "PUT",
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                     body: formData,
//                 }
//             );
//             if (!res.ok) throw new Error("Upload failed");
//             return res.json();
//         },
//         onSuccess: (data) => {
//             toast.success(data?.message || "Profile image updated successfully!");
//             queryClient.invalidateQueries({
//                 queryKey: ["profile-img"],
//             });
//             console.log("Response:", data);
//         },
//         onError: (error) => {
//             toast.error("Upload failed");
//             console.error(error);
//         },
//     });

//     useEffect(() => {
//         const image = data?.data?.user?.profileImage;
//         if (image) {
//             setProfileImage(image);
//         }
//     }, [data?.data?.user?.profileImage]);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (!file) return;

//         // Show preview
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setProfileImage(reader.result as string);
//         };
//         reader.readAsDataURL(file);

//         // Upload file to backend
//         const formData = new FormData();
//         formData.append("profileImage", file, file.name);
//         mutate(formData);
//     };

//     return (
//           <div className="w-full relative flex justify-center items-center ">
//                 <div className="relative ">
//                     <div className="w-32 h-32 rounded-full overflow-hidden border">
//                         <Image
//                             src={profileImage}
//                             alt="Profile"
//                             width={128}
//                             height={128}
//                             className="w-full h-full object-cover "
//                         />
//                     </div>

//                     <div className="w-full absolute flex justify-center mt-4">
//                         <input
//                             ref={fileInputRef}
//                             type="file"
//                             accept="image/*"
//                             hidden
//                             onChange={handleFileChange}
//                         />

//                         {/* Camera Icon (Choose & Upload Image) */}
//                         <div>
//                             <button
//                                 className="w-[170px] flex items-center justify-center gap-2 rounded-[8px] border-[2px] border-primary text-primary py-3"
//                                 title="Upload new image"
//                                 onClick={() => fileInputRef.current?.click()}
//                                 disabled={isPending}
//                             >
//                                 <CircleArrowUp />
//                                 Upload Image
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//     );
// };

// export default ProfilePicture;
