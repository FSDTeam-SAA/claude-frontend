"use client"

import { useEffect, useRef, useState } from "react"
import { Search } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useSession } from "next-auth/react"

interface User {
  _id: string
  name: string
  profileImage?: string
}

export default function UserSearch() {
    const session = useSession();
    const token = (session?.data?.user as {accessToken:string})?.accessToken;
  const [searchTerm, setSearchTerm] = useState("")
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 🔹 API call
  const { data, isLoading } = useQuery({
    queryKey: ["users", searchTerm],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/all-user?searchTerm=${searchTerm}`,{
            method: "GET",
            headers: {
              Authorizaton : `Bearer ${token}`
            }
          }
      )
      if (!res.ok) throw new Error("Failed to fetch users")
      return res.json()
    },
    enabled: !!token && open,
  })

  // 🔹 Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={containerRef} className="relative w-[320px]">
      {/* Input */}
      <div className="flex items-center gap-2 border rounded-full px-4 py-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="Search here"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[110%] left-0 w-full bg-white border rounded-xl shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {isLoading && (
            <p className="p-4 text-sm text-muted-foreground">Searching...</p>
          )}

          {!isLoading && data?.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground">
              No users found
            </p>
          )}

          {data?.map((user: User) => (
            <div
              key={user._id}
              className="flex items-center gap-3 px-4 py-2 hover:bg-muted cursor-pointer"
            >
              <Image
                src={user.profileImage || "/assets/images/no-user.jpg"}
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
