"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutModal from "@/components/modals/LogoutModal"
import { toast } from "sonner"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [open, setOpen] = useState(false)


  const session = useSession();
  const status = session?.status;
  // console.log(status)
  // console.log(session)
  const user = session?.data?.user
  // console.log(user)


  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handLogout = async () => {
    try {
      toast.success("Logout successful!");
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b border-border bg-white">
        <nav className="container mx-auto px-4 py-3 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/images/logo.png" alt="logo" width={1000} height={1000} className="w-[202px] h-[56px] object-cover" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Home
              </Link>
              <Link href="/services" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Services
              </Link>
              <Link href="/about-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                About Us
              </Link>
              <Link href="/contact-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Contact Us
              </Link>
            </div>

            {/* CTA Buttons */}

            <div className="hidden sm:flex items-center gap-6">
              {
                status === "authenticated" && user ? (
                  <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                    <DropdownMenuTrigger>
                      <Image src={user?.profileImage || "/assets/images/no-user.jpg"} alt="user-img" width={200} height={200} className="w-14 h-14 rounded-full border object-contain" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2">
                      <Link href="/profile">
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Profile</DropdownMenuLabel>
                      </Link>
                      <Link href="/password-change">
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Password Change</DropdownMenuLabel>
                      </Link>
                      <DropdownMenuLabel onClick={() => setLogoutModalOpen(true)} className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"><LogOut className="w-5 h-5 " /> Logout</DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="h-[48px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button size="sm" className="h-[48px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
                        Register
                      </Button></Link>
                  </>
                )
              }

            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div >

          {/* Mobile Menu */}
          {
            isOpen && (
              <div className="mt-4 md:hidden flex flex-col space-y-3 pb-4">
                <Link href="/" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/" ? "border-b-[2px] border-primary" : "border-0"}`}>
                  Home
                </Link>
                <Link href="/services" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"}`}>
                  Services
                </Link>
                <Link href="/about-us" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                  About Us
                </Link>
                <Link href="/contact-us" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                  Contact Us
                </Link>


                <div className="flex items-center justify-between gap-4 pt-2">
                  {
                    status === "authenticated" && user ? (
                      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                        <DropdownMenuTrigger>
                          <Image src={user?.profileImage || "/assets/images/no-user.jpg"} alt="user-img" width={200} height={200} className="w-14 h-14 rounded-full border object-contain" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="p-2 border-2 border-red-500">
                          <Link href="/profile">
                            <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Profile</DropdownMenuLabel>
                          </Link>
                          <Link href="/password-change">
                            <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Password Change</DropdownMenuLabel>
                          </Link>
                          <DropdownMenuLabel onClick={() => setLogoutModalOpen(true)} className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"><LogOut className="w-5 h-5 " /> Logout</DropdownMenuLabel>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <>
                        <Link href="/login">
                          <Button variant="ghost" size="sm" className="h-[40px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full">
                            Sign In
                          </Button>
                        </Link>
                        <Link href="/sign-up">
                          <Button size="sm" className="h-[40px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
                            Register
                          </Button></Link>
                      </>
                    )
                  }

                </div>
              </div>
            )
          }
        </nav >
      </header >

      {logoutModalOpen && (
        <LogoutModal
          isOpen={logoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onConfirm={handLogout}
        />
      )}
    </div >
  )
}

export default Navbar