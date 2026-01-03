
"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface User {
  _id: string
  firstName: string
  lastName: string
  email?: string
  profileImage?: string
}

interface SearchBoxProps {
  baseUrl: string
}

const SearchBox = ({ baseUrl }: SearchBoxProps) => {
  const { status, data: session } = useSession()
  const router = useRouter()

  const token = (session?.user as { accessToken?: string })?.accessToken

  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchRef = useRef<HTMLDivElement>(null)

  /* ----------------------------------
     Fetch all users (ONLY if logged in)
  -----------------------------------*/
  useEffect(() => {
    if (status !== "authenticated") return

    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${baseUrl}/user/all-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })

        if (!res.ok) throw new Error("Failed to fetch users")

        const data = await res.json()
        setUsers(data?.data || [])
      } catch {
        setError("Failed to load users")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [baseUrl, token, status])

  /* ----------------------------------
     Search users (debounced)
  -----------------------------------*/
  useEffect(() => {
    if (status !== "authenticated") return

    const searchUsers = async () => {
      if (!searchTerm.trim()) {
        setFilteredUsers([])
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `${baseUrl}/user/all-user?searchTerm=${encodeURIComponent(searchTerm)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )

        if (!res.ok) throw new Error("Search failed")

        const data = await res.json()
        setFilteredUsers(data?.data || [])
      } catch {
        setError("Search failed")
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(searchUsers, 300)
    return () => clearTimeout(timer)
  }, [searchTerm, baseUrl, token, status])

  /* ----------------------------------
     Close dropdown on outside click
  -----------------------------------*/
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  /* ----------------------------------
     Handlers
  -----------------------------------*/
  const handleFocus = () => {
    if (status !== "authenticated") {
      toast.info("Please login to search users")
      router.push("/login")
      return
    }
    setIsOpen(true)
  }

  const handleClear = () => {
    setSearchTerm("")
    setFilteredUsers([])
  }

  const displayUsers = searchTerm.trim()
    ? filteredUsers
    : users.slice(0, 5)

  /* ----------------------------------
     UI
  -----------------------------------*/
  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative border-2 border-[#929292] rounded-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          className="pl-10 pr-10 h-10 rounded-full border-2 border-gray-200 focus:border-primary"
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
              <span className="ml-2 text-sm text-gray-600">Loading...</span>
            </div>
          ) : error ? (
            <div className="p-4 text-center text-sm text-red-500">{error}</div>
          ) : displayUsers?.length > 0 ? (
            displayUsers?.map((user) => (
              <Link
                key={user._id}
                href={`/player-profile/${user?._id}`}
                onClick={() => {
                  setIsOpen(false)
                  setSearchTerm("")
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
              >
                <Image
                  src={user.profileImage || "/assets/images/no-user.jpg"}
                  alt={user.firstName}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border"
                />
                <div>
                  <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                  {user.email && (
                    <p className="text-xs text-gray-700">{user.email}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="p-6 text-center text-sm text-gray-500">
              No users found
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBox





// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Search, X, Loader2 } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import Image from "next/image"
// import Link from "next/link"
// import { useSession } from "next-auth/react"

// interface User {
//   id: string
//   name: string
//   email?: string
//   profileImage?: string
//   // Add other user fields as needed
// }

// interface SearchBoxProps {
//   baseUrl: string
// }

// const SearchBox = ({ baseUrl }: SearchBoxProps) => {
//   const session = useSession();
//   const token = (session?.data?.user as { accessToken: string })?.accessToken;
//   const [searchTerm, setSearchTerm] = useState("")
//   const [users, setUsers] = useState<User[]>([])
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const searchRef = useRef<HTMLDivElement>(null)

//   // Fetch all users on component mount
//   useEffect(() => {
//     const fetchAllUsers = async () => {
//       setIsLoading(true)
//       setError(null)
//       try {
//         const response = await fetch(`${baseUrl}/user/all-user`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         if (!response.ok) throw new Error("Failed to fetch users")
//         const data = await response.json()
//         setUsers(data?.data || data || [])
//       } catch (err) {
//         setError("Failed to load users")
//         console.error("Error fetching users:", err)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchAllUsers()
//   }, [baseUrl, token])

//   // Handle search with API call
//   useEffect(() => {
//     const searchUsers = async () => {
//       if (!searchTerm.trim()) {
//         setFilteredUsers([])
//         return
//       }

//       setIsLoading(true)
//       setError(null)
//       try {
//         const response = await fetch(
//           `${baseUrl}/user/all-user?searchTerm=${encodeURIComponent(searchTerm)}`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//         )
//         if (!response.ok) throw new Error("Search failed")
//         const data = await response.json()
//         setFilteredUsers(data?.data || data || [])
//       } catch (err) {
//         setError("Search failed")
//         console.error("Error searching users:", err)
//       } finally {
//         setIsLoading(false)
//       }

//     }

//     const debounceTimer = setTimeout(() => {
//       searchUsers()
//     }, 300)

//     return () => clearTimeout(debounceTimer)
//   }, [searchTerm, baseUrl, token])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   // Show all users when focused without search term
//   const displayUsers = searchTerm.trim() ? filteredUsers : users.slice(0, 5)

//   const handleClear = () => {
//     setSearchTerm("")
//     setFilteredUsers([])
//   }

//   return (
//     <div ref={searchRef} className="relative w-full max-w-md">
//       <div className="relative border-[2px] border-[#929292] rounded-full">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//         <Input
//           type="text"
//           placeholder="Search users..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onFocus={() => setIsOpen(true)}
//           className="pl-10 pr-10 h-10 rounded-full border-2 border-gray-200 focus:border-primary transition-colors"
//         />
//         {searchTerm && (
//           <button
//             onClick={handleClear}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             aria-label="Clear search"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         )}
//       </div>

//       {/* Dropdown Results */}
//       {isOpen && (
//         <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
//           {isLoading ? (
//             <div className="flex items-center justify-center py-8">
//               <Loader2 className="w-6 h-6 animate-spin text-primary" />
//               <span className="ml-2 text-sm text-gray-600">Loading...</span>
//             </div>
//           ) : error ? (
//             <div className="p-4 text-center text-sm text-red-500">{error}</div>
//           ) : displayUsers.length > 0 ? (
//             <div className="py-2">
//               {!searchTerm && (
//                 <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
//                   Recent Users
//                 </div>
//               )}
//               {displayUsers.map((user) => (
//                 <Link
//                   key={user.id}
//                   href={`/profile/${user.id}`}
//                   onClick={() => {
//                     setIsOpen(false)
//                     setSearchTerm("")
//                   }}
//                   className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
//                 >
//                   <Image
//                     src={user.profileImage || "/assets/images/no-user.jpg"}
//                     alt={user.name}
//                     width={40}
//                     height={40}
//                     className="w-10 h-10 rounded-full object-cover border"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-900 truncate">
//                       {user.name}
//                     </p>
//                     {user.email && (
//                       <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                     )}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="p-8 text-center">
//               <p className="text-sm text-gray-500">
//                 {searchTerm ? "No users found" : "No users available"}
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default SearchBox