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

// const MAX_VIDEOS = 3

// export default function VideoUpload() {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken?: string })?.accessToken
//   const inputRef = useRef<HTMLInputElement>(null)
//   const queryClient = useQueryClient()

//   const [originalVideos, setOriginalVideos] = useState<string[]>([])
//   const [keptExistingVideos, setKeptExistingVideos] = useState<string[]>([])
//   const [newVideos, setNewVideos] = useState<VideoFile[]>([])

//   console.log(originalVideos)

//   // =========================
//   // FETCH PROFILE
//   // =========================
//   const { data: profile, isLoading } = useQuery<UserProfileApiResponse>({
//     queryKey: ["user-profile"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       if (!res.ok) throw new Error("Failed to fetch profile")
//       const json = await res.json()
//       return json.data
//     },
//     enabled: !!token,
//   })

//   useEffect(() => {
//     if (profile?.data?.user?.playingVideo) {
//       setOriginalVideos(profile?.data?.user?.playingVideo)
//       setKeptExistingVideos(profile?.data?.user?.playingVideo)
//     }
//   }, [profile?.data?.user?.playingVideo])

//   // =========================
//   // DELETE EXISTING VIDEO
//   // =========================
//   const deleteVideoMutation = useMutation({
//     mutationFn: async (videoUrl: string) => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-remove`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ playingVideo: videoUrl }),
//         }
//       )
//       if (!res.ok) throw new Error("Failed to delete video")
//       return res.json()
//     },
//     onSuccess: (response) => {
//       const updated = response?.data?.playingVideo || []
//       setOriginalVideos(updated)
//       setKeptExistingVideos(updated)
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//       toast.success("Video removed successfully")
//     },
//     onError: () => toast.error("Failed to remove video"),
//   })

//   // =========================
//   // ADD NEW VIDEOS
//   // =========================
//   const addVideosMutation = useMutation({
//     mutationFn: async () => {
//       const formData = new FormData()
//       newVideos.forEach((video) =>
//         formData.append("playingVideo", video.file)
//       )

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`,
//         {
//           method: "PUT",
//           headers: { Authorization: `Bearer ${token}` },
//           body: formData,
//         }
//       )

//       if (!res.ok) throw new Error("Failed to upload videos")
//       return res.json()
//     },
//     onSuccess: (response) => {
//       const updated = response?.data?.playingVideo || []
//       setOriginalVideos(updated)
//       setKeptExistingVideos(updated)
//       setNewVideos([])
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//       toast.success("Videos uploaded successfully")
//     },
//     onError: () => toast.error("Failed to upload videos"),
//   })

//   // =========================
//   // HANDLERS
//   // =========================
//   const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files) return

//     const totalCount =
//       keptExistingVideos.length + newVideos.length

//     if (totalCount >= MAX_VIDEOS) {
//       toast.warning(
//         "You can upload up to 3 videos only. Please remove an existing video to add another."
//       )
//       return
//     }

//     const remaining = MAX_VIDEOS - totalCount

//     const selected = Array.from(files)
//       .filter((f) => f.type.startsWith("video/"))
//       .slice(0, remaining)
//       .map((file) => ({
//         file,
//         preview: URL.createObjectURL(file),
//       }))

//     if (selected.length < files.length) {
//       toast.warning(`Only ${remaining} more video(s) allowed`)
//     }

//     setNewVideos((prev) => [...prev, ...selected])
//     e.target.value = ""
//   }

//   const removeNewVideo = (index: number) => {
//     URL.revokeObjectURL(newVideos[index].preview)
//     setNewVideos((prev) => prev.filter((_, i) => i !== index))
//   }

//   const removeExistingVideo = (url: string, index: number) => {
//     setKeptExistingVideos((prev) =>
//       prev.filter((_, i) => i !== index)
//     )
//     deleteVideoMutation.mutate(url)
//   }

//   const totalVideos =
//     keptExistingVideos.length + newVideos.length

//   // =========================
//   // UI
//   // =========================
//   if (isLoading)
//     return <div className="text-center py-10">Loading profile...</div>

//   return (
//     <Card className="w-full max-w-4xl mx-auto p-6 space-y-5 rounded-xl mt-24">
//       <h3 className="text-2xl font-bold text-center">
//         Manage Playing Videos
//       </h3>

//       {/* Upload Area */}
//       <div
//         onClick={() => inputRef.current?.click()}
//         className="border-4 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer hover:border-primary bg-gray-50"
//       >
//         <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
//         <p className="font-semibold">Click to Add Videos</p>
//         <p className="text-sm text-gray-600">
//           Maximum {MAX_VIDEOS} videos allowed ({totalVideos}/{MAX_VIDEOS})
//         </p>
//         <input
//           ref={inputRef}
//           type="file"
//           accept="video/*"
//           multiple
//           hidden
//           onChange={handleSelectVideos}
//         />
//       </div>

//       {/* Existing Videos */}
//       {keptExistingVideos.length > 0 && (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {keptExistingVideos.map((url, index) => (
//             <div key={url} className="relative group">
//               <video
//                 src={url}
//                 controls
//                 className="w-full h-24 object-cover rounded-xl"
//               />
//               <Button
//                 size="icon"
//                 variant="destructive"
//                 className="absolute top-2 left-2 opacity-0 group-hover:opacity-100"
//                 onClick={() => removeExistingVideo(url, index)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* New Videos */}
//       {newVideos.length > 0 && (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {newVideos.map((video, index) => (
//             <div key={index} className="relative group">
//               <video
//                 src={video.preview}
//                 controls
//                 className="w-full h-24 object-cover rounded-xl border-4 border-green-400"
//               />
//               <Button
//                 size="icon"
//                 variant="destructive"
//                 className="absolute top-2 left-2 opacity-0 group-hover:opacity-100"
//                 onClick={() => removeNewVideo(index)}
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}

//       {newVideos.length > 0 && (
//         <Button
//           className="w-full py-6 text-xl bg-green-600 hover:bg-green-700"
//           onClick={() => addVideosMutation.mutate()}
//         >
//           Upload Videos
//         </Button>
//       )}
//     </Card>
//   )
// }

"use client"

import { Upload, X, Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

const MAX_VIDEOS = 3

export default function VideoUpload({ videos }: { videos: string[] }) {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken
  const queryClient = useQueryClient()
  const inputRef = useRef<HTMLInputElement>(null)

  const [keptExistingVideos, setKeptExistingVideos] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    setKeptExistingVideos(videos)
  }, [videos])

  // Delete video mutation (auto update)
  const deleteMutation = useMutation({
    mutationFn: async (url: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-remove`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ playingVideo: url }),
        }
      )
      return res.json()
    },
    onSuccess: (_, url) => {
      setKeptExistingVideos(prev => prev.filter(v => v !== url))
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
      toast.success("Video removed")
    },
    onError: () => toast.error("Failed to delete video"),
  })

  // Upload video mutation (auto upload)
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append("playingVideo", file)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      )
      return res.json()
    },
    onMutate: () => setUploading(true),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
      setUploading(false)
      toast.success("Video uploaded")
    },
    onError: () => {
      setUploading(false)
      toast.error("Upload failed")
    },
  })

  const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const remaining = MAX_VIDEOS - keptExistingVideos.length

    if (remaining <= 0) {
      toast.warning(`Maximum ${MAX_VIDEOS} videos allowed`)
      return
    }

    const selectedFiles = files
      .filter(f => f.type.startsWith("video/"))
      .slice(0, remaining)

    if (!selectedFiles.length) return

    // Auto-upload each video
    selectedFiles.forEach(file => uploadMutation.mutate(file))

    e.target.value = "" // reset input
  }

  return (
    <Card className="w-full p-6 space-y-5 rounded-xl mt-24">
      <h3 className="text-2xl font-bold text-center">
        Manage Playing Videos
      </h3>

      <div
        onClick={() => inputRef.current?.click()}
        className={`border-4 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer bg-gray-50 ${
          uploading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {uploading ? (
          <Loader2 className="w-10 h-10 mx-auto text-gray-400 mb-3 animate-spin" />
        ) : (
          <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
        )}
        <p className="font-semibold">
          {uploading ? "Uploading..." : "Click to Add Videos"}
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        multiple
        hidden
        onChange={handleSelectVideos}
        disabled={uploading}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        {keptExistingVideos.map(url => (
          <div key={url} className="relative">
            <video src={url} controls className="w-full h-24 rounded-xl" />
            <Button
              size="sm"
              variant="destructive"
              className="absolute top-2 left-2 p-1 rounded-[5px]"
              onClick={() => deleteMutation.mutate(url)}
              disabled={uploading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}



// "use client"

// import { Upload, X } from "lucide-react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { useMutation, useQueryClient } from "@tanstack/react-query"
// import { useSession } from "next-auth/react"
// import { useEffect, useRef, useState } from "react"
// import { toast } from "sonner"

// const MAX_VIDEOS = 3

// type VideoFile = {
//   file: File
//   preview: string
// }

// export default function VideoUpload({ videos }: { videos: string[] }) {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken?: string })?.accessToken
//   const queryClient = useQueryClient()
//   const inputRef = useRef<HTMLInputElement>(null)

//   const [keptExistingVideos, setKeptExistingVideos] = useState<string[]>([])
//   const [newVideos, setNewVideos] = useState<VideoFile[]>([])

//   useEffect(() => {
//     setKeptExistingVideos(videos)
//   }, [videos])

//   const deleteMutation = useMutation({
//     mutationFn: async (url: string) => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-remove`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ playingVideo: url }),
//         }
//       )
//       return res.json()
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//       toast.success("Video removed")
//     },
//   })

//   const uploadMutation = useMutation({
//     mutationFn: async () => {
//       const formData = new FormData()
//       newVideos.forEach(v => formData.append("playingVideo", v.file))

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`,
//         {
//           method: "PUT",
//           headers: { Authorization: `Bearer ${token}` },
//           body: formData,
//         }
//       )
//       return res.json()
//     },
//     onSuccess: () => {
//       setNewVideos([])
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//       toast.success("Videos uploaded")
//     },
//   })

//   const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || [])
//     const remaining = MAX_VIDEOS - (keptExistingVideos.length + newVideos.length)

//     if (remaining <= 0) {
//       toast.warning("Maximum 3 videos allowed")
//       return
//     }

//     const selected = files
//       .filter(f => f.type.startsWith("video/"))
//       .slice(0, remaining)
//       .map(file => ({
//         file,
//         preview: URL.createObjectURL(file),
//       }))

//     setNewVideos(prev => [...prev, ...selected])
//     e.target.value = ""
//   }

//   return (
//     <Card className="w-full p-6 space-y-5 rounded-xl mt-24">
//       <h3 className="text-2xl font-bold text-center">
//         Manage Playing Videos
//       </h3>

//       <div
//         onClick={() => inputRef.current?.click()}
//         className="border-4 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer bg-gray-50"
//       >
//         <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
//         <p className="font-semibold">Click to Add Videos</p>
//       </div>

//       <input
//         ref={inputRef}
//         type="file"
//         accept="video/*"
//         multiple
//         hidden
//         onChange={handleSelectVideos}
//       />

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//         {keptExistingVideos.map(url => (
//           <div key={url} className="relative">
//             <video src={url} controls className="w-full h-24 rounded-xl" />
//             <Button
//               size="icon"
//               variant="destructive"
//               className="absolute top-2 left-2"
//               onClick={() => deleteMutation.mutate(url)}
//             >
//               <X className="h-4 w-4" />
//             </Button>
//           </div>
//         ))}
//       </div>

//       {newVideos.length > 0 && (
//         <Button
//           className="w-full py-6 text-xl bg-green-600"
//           onClick={() => uploadMutation.mutate()}
//         >
//           Upload Videos
//         </Button>
//       )}
//     </Card>
//   )
// }




