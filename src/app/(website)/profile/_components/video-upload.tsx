// "use client"

// import * as React from "react"
// import { Upload, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// type VideoFile = {
//   file: File
//   preview: string
// }

// const VideoUpload = () => {
//   const [videos, setVideos] = React.useState<VideoFile[]>([])

//   console.log(videos)

//   const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files) return

//     const selectedVideos = Array.from(files).map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }))

//     setVideos((prev) => [...prev, ...selectedVideos])
//   }

//   const removeVideo = (index: number) => {
//     setVideos((prev) => prev.filter((_, i) => i !== index))
//   }

//   return (
//     <Card className="w-full max-w-lg p-5 space-y-4 border rounded-xl mt-24">
//       {/* Title */}
//       <h3 className="text-base font-semibold text-gray-800">
//         Upload Your Playing Videos
//       </h3>

//       {/* Upload Area */}
//       <label
//         htmlFor="video-upload"
//         className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-8 cursor-pointer hover:border-primary transition"
//       >
//         <div className="w-14 h-14 rounded-md bg-gray-100 flex items-center justify-center">
//           <Upload className="w-6 h-6 text-gray-600" />
//         </div>

//         <span className="text-sm font-medium text-gray-700">
//           Upload Here
//         </span>

//         <span className="text-xs text-gray-500">
//           MP4, WebM • Multiple videos allowed
//         </span>

//         <input
//           id="video-upload"
//           type="file"
//           accept="video/*"
//           multiple
//           className="hidden"
//           onChange={handleVideoChange}
//         />
//       </label>

//       {/* Preview Thumbnails */}
//       {videos.length > 0 && (
//         <div className="grid grid-cols-3 gap-3">
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className="relative rounded-md overflow-hidden border bg-gray-100"
//             >
//               <video
//                 src={video.preview}
//                 className="h-20 w-full object-cover"
//               />

//               <Button
//                 size="icon"
//                 variant="destructive"
//                 className="absolute top-1 right-1 h-6 w-6"
//                 onClick={() => removeVideo(index)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}
//     </Card>
//   )
// }

// export default VideoUpload




"use client"

import React, { useEffect, useRef, useState } from "react"
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query"
import { Upload, X } from "lucide-react"
import { useSession } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

type VideoFile = {
  file: File
  preview: string
}

type UserProfile = {
  playingVideo: string[]
}

export default function VideoUpload() {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken: string })?.accessToken
  const inputRef = useRef<HTMLInputElement>(null)
    const queryClient = new QueryClient();

  const [existingVideos, setExistingVideos] = useState<string[]>([])
  const [newVideos, setNewVideos] = useState<VideoFile[]>([])

  // =========================
  // GET PROFILE (RUN ONCE)
  // =========================
  const { data: profile } = useQuery<UserProfile>({
    queryKey: ["user-profile"],
    enabled: !!token,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const json = await res.json()
      return json.data
    },
  })

  console.log(profile?.playingVideo)

  // set existing videos ONLY when profile arrives
  useEffect(() => {
    if (profile?.playingVideo) {
      setExistingVideos(profile.playingVideo)
    }
  }, [profile?.playingVideo])

  // =========================
  // PUT UPDATE PROFILE
  // =========================
  const { mutate, isPending } = useMutation({
    mutationKey: ["update-playing-videos"],
    mutationFn: async () => {
      const formData = new FormData()

      // append new video files
      newVideos.forEach((v) => {
        formData.append("playingVideo", v.file)
      })

      // send kept existing videos
      formData.append(
        "data",
        JSON.stringify({
          existingPlayingVideo: existingVideos,
        })
      )

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      if (!res.ok) throw new Error("Update failed")
      return res.json()
    },

    // ✅ IMPORTANT FIX
    onSuccess: (res) => {
      toast.success("Playing videos updated successfully")

      // update UI immediately
      setExistingVideos(res?.data?.playingVideo || [])
      setNewVideos([])

      // sync react-query cache
        queryClient.invalidateQueries({
                queryKey: ["user-profile"],
            });
    },

    onError: () => {
      toast.error("Update failed")
    },
  })

  // =========================
  // Handlers
  // =========================
  const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const selected = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))

    setNewVideos((prev) => [...prev, ...selected])
  }

  const removeExisting = (index: number) => {
    setExistingVideos((prev) => prev.filter((_, i) => i !== index))
  }

  const removeNew = (index: number) => {
    setNewVideos((prev) => prev.filter((_, i) => i !== index))
  }

  // =========================
  // UI
  // =========================
  return (
    <Card className="w-full max-w-xl p-5 space-y-4 rounded-xl mt-24">
      <h3 className="text-base font-semibold">
        Upload Your Playing Videos
      </h3>

      {/* Upload box */}
      <div
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg py-8 cursor-pointer hover:border-primary transition"
      >
        <Upload className="w-6 h-6" />
        <span className="text-sm font-medium">Upload Here</span>

        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          multiple
          hidden
          onChange={handleSelectVideos}
        />
      </div>

      {/* Existing videos */}
      {existingVideos.length > 0 && (
        <>
          <p className="text-sm font-medium">Existing Videos</p>
          <div className="grid grid-cols-3 gap-3">
            {existingVideos.map((url, index) => (
              <div key={url} className="relative">
                <video
                  src={url}
                  className="h-20 w-full rounded object-cover"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-1 right-1 h-6 w-6"
                  onClick={() => removeExisting(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* New videos */}
      {newVideos.length > 0 && (
        <>
          <p className="text-sm font-medium">New Videos</p>
          <div className="grid grid-cols-3 gap-3">
            {newVideos.map((v, index) => (
              <div key={index} className="relative">
                <video
                  src={v.preview}
                  className="h-20 w-full rounded object-cover"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-1 right-1 h-6 w-6"
                  onClick={() => removeNew(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Save */}
      <Button
        className="w-full"
        onClick={() => mutate()}
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save Videos"}
      </Button>
    </Card>
  )
}





// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
// import { Upload, X } from "lucide-react"
// import { useSession } from "next-auth/react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { toast } from "sonner"
// import { UserProfileApiResponse } from "./user-data-type"

// type VideoFile = {
//   file: File
//   preview: string
// }

// export default function VideoUpload() {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken: string })?.accessToken
//   const queryClient = useQueryClient()
//   const inputRef = useRef<HTMLInputElement>(null)

//   const [existingVideos, setExistingVideos] = useState<string[]>([])
//   const [newVideos, setNewVideos] = useState<VideoFile[]>([])

//   console.log(existingVideos)

//   // =========================
//   // GET PROFILE (ONE TIME)
//   // =========================

//   const {data} = useQuery<UserProfileApiResponse>({
//     queryKey: ["user-profile"],
//     queryFn: async ()=>{
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
//             method: "GET",
//             headers: {
//                 Authorization : `Bearer ${token}`
//             }
//         })

//         return res.json();
//     },
//     enabled : !!token
//   })


//   // =========================
//   // PUT UPDATE PROFILE
//   // =========================
//   const { mutate, isPending } = useMutation({
//     mutationKey: ["update-playing-videos"],
//     mutationFn: async () => {
//       const formData = new FormData()

//       // new files
//       newVideos.forEach((v) => {
//         formData.append("playingVideo", v.file)
//       })

//       // old video urls user kept
//       formData.append(
//         "data",
//         JSON.stringify({
//           existingPlayingVideo: existingVideos,
//         })
//       )

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         }
//       )

//       if (!res.ok) throw new Error("Update failed")
//       return res.json()
//     },
//     onSuccess: () => {
//       toast.success("Playing videos updated successfully")
//       setNewVideos([])
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//     },
//     onError: () => {
//       toast.error("Update failed")
//     },
//   })


//   useEffect(() => {
//           const video = data?.data?.playingVideo;
//           if (video) {
//               setExistingVideos(video);
//           }
//       }, [data?.data?.playingVideo]);

//   // =========================
//   // Handlers
//   // =========================
//   const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files) return

//     const selected = Array.from(files).map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }))

//     setNewVideos((prev) => [...prev, ...selected])
//   }

//   const removeExisting = (index: number) => {
//     setExistingVideos((prev) => prev.filter((_, i) => i !== index))
//   }

//   const removeNew = (index: number) => {
//     setNewVideos((prev) => prev.filter((_, i) => i !== index))
//   }

//   // =========================
//   // UI
//   // =========================
//   return (
//     <Card className="w-full max-w-xl p-5 space-y-4 rounded-xl">
//       <h3 className="text-base font-semibold">
//         Upload Your Playing Videos
//       </h3>

//       {/* Upload box */}
//       <div
//         onClick={() => inputRef.current?.click()}
//         className="flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg py-8 cursor-pointer hover:border-primary"
//       >
//         <Upload className="w-6 h-6" />
//         <span className="text-sm font-medium">Upload Here</span>

//         <input
//           ref={inputRef}
//           type="file"
//           accept="video/*"
//           multiple
//           hidden
//           onChange={handleSelectVideos}
//         />
//       </div>

//       {/* Existing videos */}
//       {existingVideos.length > 0 && (
//         <>
//           <p className="text-sm font-medium">Existing Videos</p>
//           <div className="grid grid-cols-3 gap-3">
//             {existingVideos.map((url, index) => (
//               <div key={url} className="relative">
//                 <video src={url} className="h-20 w-full rounded object-cover" />
//                 <Button
//                   size="icon"
//                   variant="destructive"
//                   className="absolute top-1 right-1 h-6 w-6"
//                   onClick={() => removeExisting(index)}
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* New videos */}
//       {newVideos.length > 0 && (
//         <>
//           <p className="text-sm font-medium">New Videos</p>
//           <div className="grid grid-cols-3 gap-3">
//             {newVideos.map((v, index) => (
//               <div key={index} className="relative">
//                 <video src={v.preview} className="h-20 w-full rounded object-cover" />
//                 <Button
//                   size="icon"
//                   variant="destructive"
//                   className="absolute top-1 right-1 h-6 w-6"
//                   onClick={() => removeNew(index)}
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Save */}
//       <Button
//         className="w-full"
//         onClick={() => mutate()}
//         disabled={isPending}
//       >
//         {isPending ? "Saving..." : "Save Videos"}
//       </Button>
//     </Card>
//   )
// }
