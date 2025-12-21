

// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import { useQuery, useMutation, QueryClient } from "@tanstack/react-query"
// import { Upload, X } from "lucide-react"
// import { useSession } from "next-auth/react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { toast } from "sonner"

// type VideoFile = {
//   file: File
//   preview: string
// }

// type UserProfile = {
//   playingVideo: string[]
// }

// export default function VideoUpload() {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken: string })?.accessToken
//   const inputRef = useRef<HTMLInputElement>(null)
//     const queryClient = new QueryClient();

//   const [existingVideos, setExistingVideos] = useState<string[]>([])
//   const [newVideos, setNewVideos] = useState<VideoFile[]>([])

//   // =========================
//   // GET PROFILE (RUN ONCE)
//   // =========================
//   const { data: profile } = useQuery<UserProfile>({
//     queryKey: ["user-profile"],
//     enabled: !!token,
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )

//       const json = await res.json()
//       return json.data
//     },
//   })

//   console.log(profile?.playingVideo)

//   // set existing videos ONLY when profile arrives
//   useEffect(() => {
//     if (profile?.playingVideo) {
//       setExistingVideos(profile.playingVideo)
//     }
//   }, [profile?.playingVideo])

//   // =========================
//   // PUT UPDATE PROFILE
//   // =========================
//   const { mutate, isPending } = useMutation({
//     mutationKey: ["update-playing-videos"],
//     mutationFn: async () => {
//       const formData = new FormData()

//       // append new video files
//       newVideos.forEach((v) => {
//         formData.append("playingVideo", v.file)
//       })

//       // send kept existing videos
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

//     // ✅ IMPORTANT FIX
//     onSuccess: (res) => {
//       toast.success("Playing videos updated successfully")

//       // update UI immediately
//       setExistingVideos(res?.data?.playingVideo || [])
//       setNewVideos([])

//       // sync react-query cache
//         queryClient.invalidateQueries({
//                 queryKey: ["user-profile"],
//             });
//     },

//     onError: () => {
//       toast.error("Update failed")
//     },
//   })

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
//     <Card className="w-full max-w-xl p-5 space-y-4 rounded-xl mt-24">
//       <h3 className="text-base font-semibold">
//         Upload Your Playing Videos
//       </h3>

//       {/* Upload box */}
//       <div
//         onClick={() => inputRef.current?.click()}
//         className="flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg py-8 cursor-pointer hover:border-primary transition"
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
//                 <video
//                   src={url}
//                   className="h-20 w-full rounded object-cover"
//                 />
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
//                 <video
//                   src={v.preview}
//                   className="h-20 w-full rounded object-cover"
//                 />
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


"use client"

import React, { useEffect, useRef, useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
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
  const token = (session?.user as { accessToken?: string })?.accessToken
  const inputRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()

  // Original videos from server (never modify this directly)
  const [originalVideos, setOriginalVideos] = useState<string[]>([])

  console.log(originalVideos)

  // Current kept existing videos (user can remove some → this changes)
  const [keptExistingVideos, setKeptExistingVideos] = useState<string[]>([])

  // New videos selected for upload
  const [newVideos, setNewVideos] = useState<VideoFile[]>([])

  // =========================
  // FETCH PROFILE
  // =========================
  const { data: profile, isLoading: profileLoading } = useQuery<UserProfile>({
    queryKey: ["user-profile"],
    enabled: !!token,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error("Failed to fetch profile")
      const json = await res.json()
      return json.data
    },
  })

  // Sync original + kept videos when profile loads/changes
  useEffect(() => {
    if (profile?.playingVideo) {
      setOriginalVideos(profile.playingVideo)
      setKeptExistingVideos(profile.playingVideo) // start with all kept
    }
  }, [profile?.playingVideo])

  // =========================
  // DELETE SINGLE EXISTING VIDEO
  // =========================
  const deleteVideoMutation = useMutation({
    mutationFn: async (videoUrl: string) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ playingVideo: videoUrl }),
      })
      if (!res.ok) {
        const err = await res.text()
        throw new Error(err || "Failed to delete video")
      }
      return res.json()
    },
    onSuccess: (response) => {
      const updatedList = response?.data?.playingVideo || []
      // Update both original and kept (since server confirms removal)
      setOriginalVideos(updatedList)
      setKeptExistingVideos(updatedList)
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
      toast.success("Video removed successfully")
    },
    onError: () => {
      toast.error("Failed to remove video")
      // Revert optimistic update if needed
    },
  })

  const addVideosMutation = useMutation({
    mutationFn: async () => {
      const formData = new FormData()

      // ONLY append new video files (backend appends to existing)
      newVideos.forEach((video) => {
        formData.append("playingVideo", video.file)
      })

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // No Content-Type → browser sets multipart boundary
        },
        body: formData,
      })

      if (!res.ok) {
        const err = await res.text()
        throw new Error(err || "Failed to upload videos")
      }
      return res.json()
    },
    onSuccess: (response) => {
      const updatedList = response?.data?.playingVideo || []
      // Update server-synced list
      setOriginalVideos(updatedList)
      setKeptExistingVideos(updatedList)
      setNewVideos([]) // clear previews
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
      toast.success("New videos added successfully!")
    },
    onError: () => toast.error("Failed to add videos"),
  })

  // =========================
  // HANDLERS
  // =========================
  const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const selected = Array.from(files)
      .filter((f) => f.type.startsWith("video/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))

    setNewVideos((prev) => [...prev, ...selected])
    if (e.target) e.target.value = ""
  }

  const removeNewVideo = (index: number) => {
    URL.revokeObjectURL(newVideos[index].preview)
    setNewVideos((prev) => prev.filter((_, i) => i !== index))
  }

  const removeExistingVideo = (url: string, index: number) => {
    // Optimistic UI: remove from kept list immediately
    setKeptExistingVideos((prev) => prev.filter((_, i) => i !== index))
    // Call backend to permanently delete
    deleteVideoMutation.mutate(url)
  }

  const hasNewVideos = newVideos.length > 0

  // =========================
  // UI
  // =========================
  if (profileLoading) return <div className="text-center py-10">Loading profile...</div>

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 space-y-5 rounded-xl mt-24">
      <h3 className="text-2xl font-bold text-center">Manage Playing Videos</h3>

      {/* Upload Area */}
      <div
        onClick={() => inputRef.current?.click()}
        className="border-4 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer hover:border-primary transition-colors bg-gray-50"
      >
        <Upload className="w-10 h-10 mx-auto text-gray-400 mb-4" />
        <p className="text-sm font-semibold">Click to Add New Videos</p>
        <p className="text-sm text-gray-600 mt-2">You can select multiple videos</p>
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          multiple
          hidden
          onChange={handleSelectVideos}
        />
      </div>

      {/* Currently Saved Videos (Old + Previously Added) */}
      {keptExistingVideos.length > 0 && (
        <section>
          <h4 className="text-lg font-semibold mb-3">
            Current Videos ({keptExistingVideos.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {keptExistingVideos.map((url, index) => (
              <div key={url} className="relative group">
                <video
                  src={url}
                  controls
                  className="w-full h-24 object-cover rounded-xl shadow-lg bg-black"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => removeExistingVideo(url, index)}
                  disabled={deleteVideoMutation.isPending}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* New Videos to be Added */}
      {newVideos.length > 0 && (
        <section>
          <h4 className="text-lg font-semibold mb-3 text-green-600">
            New Videos to Add ({newVideos.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {newVideos.map((video, index) => (
              <div key={index} className="relative group">
                <video
                  src={video.preview}
                  controls
                  className="w-full h-24 object-cover rounded-xl shadow-lg border-4 border-green-400"
                />
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => removeNewVideo(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Upload Button - Only when new videos selected */}
      {hasNewVideos && (
        <Button
          size="sm"
          className=" w-full text-xl py-6 bg-green-600 hover:bg-green-700"
          onClick={() => addVideosMutation.mutate()}
          disabled={addVideosMutation.isPending}
        >
          {addVideosMutation.isPending
            ? "Uploading Videos..."
            : `Add ${newVideos.length} New Video${newVideos.length > 1 ? "s" : ""}`}
        </Button>
      )}

      {!hasNewVideos && keptExistingVideos.length === 0 && (
        <p className="text-center text-gray-500 text-lg">No videos uploaded yet</p>
      )}
    </Card>
  )
}

