// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import MobileNavbar from "./MobileNavbar";
// import { navLinks } from "@/components/utils/navLinks";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isAtTop, setIsAtTop] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setIsAtTop(window.scrollY <= 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Define routes where navbar should be white at top
//   const whiteNavRoutes = [
//     "/",
//     "/services",
//     "/about-us",
//     "/contact-us",
//   ];

//   // Check if current route is in whiteNavRoutes
//   const isWhiteNavRoute = whiteNavRoutes.includes(pathname);


//   // ✅ Adjust padding dynamically
//   const containerPadding = pathname === "/" && isAtTop ? "py-2" : "py-0";

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isAtTop && isWhiteNavRoute ? "bg-transparent" : "bg-white shadow-md"
//         }`}
//     >
//       <div
//         className={`container transition-all duration-500 ${containerPadding}`}
//       >
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href={"/"}>
//             <Image
//               src={"/assets/images/logo.png"}
//               alt="logo"
//               width={1000}
//               height={1000}
//               className="h-[72px] w-[216px] transition-all duration-500"
//             />
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden md:block">
//             <ul className="flex items-center gap-2 text-primary">
//               {navLinks.map((item, index) => {
//                 const isActive = item.link === pathname;

//                 // Text color logic
//                 const textColor =
//                   isWhiteNavRoute && isAtTop ? "text-white" : "text-black";

//                 // Normal links
//                 return (
//                   <li key={index}>
//                     <Link
//                       href={item.link}
//                       className={`p-2 px-4 text-base transition-all duration-500 ease-in-out ${textColor} ${isActive ? "font-semibold underline" : "font-normal"
//                         }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="ghost" size="sm" className="h-[48px] hover:bg-primary hover:text-white hover:border-none text-base text-primary font-normal leading-[150%] border-[2px] border-primary py-2 px-12 rounded-full">
//                 Sign In
//               </Button>
//             </Link>
//             <Link href="/sign-up">
//               <Button size="sm" className="h-[48px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
//                 Register
//               </Button></Link>
//           </div>

//           {/* Mobile menu */}
//           <MobileNavbar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// previous code 





// version 1 

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { LogOut, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { usePathname } from "next/navigation";
// import { signOut, useSession } from "next-auth/react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import LogoutModal from "@/components/modals/LogoutModal"
// import { toast } from "sonner"
// import UserSearch from "./UserSearch"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname();
//   const [logoutModalOpen, setLogoutModalOpen] = useState(false);
//   const [open, setOpen] = useState(false)


//   const session = useSession();
//   const status = session?.status;
//   // console.log(status)
//   // console.log(session)
//   const user = session?.data?.user
//   // console.log(user)


//   useEffect(() => {
//     setOpen(false)
//   }, [pathname])

//   const handLogout = async () => {
//     try {
//       toast.success("Logout successful!");
//       await signOut({ callbackUrl: "/login" });
//     } catch (error) {
//       console.error("Logout failed:", error);
//       toast.error("Logout failed. Please try again.");
//     }
//   };
//   return (
//     <div className="sticky top-0 z-50">
//       <header className="w-full border-b border-border bg-white">
//         <nav className="container mx-auto px-4 py-3 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <Image src="/assets/images/logo.png" alt="logo" width={1000} height={1000} className="w-[202px] h-[56px] object-cover" />
//             </Link>

//             <div className="hidden lg:block">
//               <UserSearch />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8">
//               <Link href="/" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                 Home
//               </Link>
//               <Link href="/services" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                 Services
//               </Link>
//               <Link href="/about-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                 About Us
//               </Link>
//               <Link href="/contact-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                 Contact Us
//               </Link>
//             </div>

//             {/* CTA Buttons */}

//             <div className="hidden sm:flex items-center gap-6">
//               {
//                 status === "authenticated" && user ? (
//                   <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
//                     <DropdownMenuTrigger>
//                       <Image src={user?.profileImage || "/assets/images/no-user.jpg"} alt="user-img" width={200} height={200} className="w-14 h-14 rounded-full border object-contain" />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="p-2">
//                       <Link href="/profile">
//                         <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Profile</DropdownMenuLabel>
//                       </Link>
//                       <Link href="/password-change">
//                         <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Password Change</DropdownMenuLabel>
//                       </Link>
//                       <DropdownMenuLabel onClick={() => setLogoutModalOpen(true)} className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"><LogOut className="w-5 h-5 " /> Logout</DropdownMenuLabel>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <>
//                     <Link href="/login">
//                       <Button variant="ghost" size="sm" className="h-[48px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full">
//                         Sign In
//                       </Button>
//                     </Link>
//                     <Link href="/sign-up">
//                       <Button size="sm" className="h-[48px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
//                         Register
//                       </Button></Link>
//                   </>
//                 )
//               }

//             </div>

//             {/* Mobile Menu Button */}
//             <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div >

//           {/* Mobile Menu */}
//           {
//             isOpen && (
//               <div className="mt-4 md:hidden flex flex-col space-y-3 pb-4">
//                 <Link href="/" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                   Home
//                 </Link>
//                 <Link href="/services" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                   Services
//                 </Link>
//                 <Link href="/about-us" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                   About Us
//                 </Link>
//                 <Link href="/contact-us" className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
//                   Contact Us
//                 </Link>


//                 <div className="flex items-center justify-between gap-4 pt-2">
//                   {
//                     status === "authenticated" && user ? (
//                       <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
//                         <DropdownMenuTrigger>
//                           <Image src={user?.profileImage || "/assets/images/no-user.jpg"} alt="user-img" width={200} height={200} className="w-14 h-14 rounded-full border object-contain" />
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="p-2 border-2 border-red-500">
//                           <Link href="/profile">
//                             <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Profile</DropdownMenuLabel>
//                           </Link>
//                           <Link href="/password-change">
//                             <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">Password Change</DropdownMenuLabel>
//                           </Link>
//                           <DropdownMenuLabel onClick={() => setLogoutModalOpen(true)} className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"><LogOut className="w-5 h-5 " /> Logout</DropdownMenuLabel>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     ) : (
//                       <>
//                         <Link href="/login">
//                           <Button variant="ghost" size="sm" className="h-[40px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full">
//                             Sign In
//                           </Button>
//                         </Link>
//                         <Link href="/sign-up">
//                           <Button size="sm" className="h-[40px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
//                             Register
//                           </Button></Link>
//                       </>
//                     )
//                   }

//                 </div>
//               </div>
//             )
//           }
//         </nav >
//       </header >

//       {logoutModalOpen && (
//         <LogoutModal
//           isOpen={logoutModalOpen}
//           onClose={() => setLogoutModalOpen(false)}
//           onConfirm={handLogout}
//         />
//       )}
//     </div >
//   )
// }

// export default Navbar

// version 2 




"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutModal from "@/components/modals/LogoutModal"
import { toast } from "sonner"
import SearchBox from "./SearchBox"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [logoutModalOpen, setLogoutModalOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const session = useSession()
  const status = session?.status
  const user = session?.data?.user

  // Replace with your actual base URL
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://your-api-url.com"

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handLogout = async () => {
    try {
      toast.success("Logout successful!")
      await signOut({ callbackUrl: "/login" })
    } catch (error) {
      console.error("Logout failed:", error)
      toast.error("Logout failed. Please try again.")
    }
  }

  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b border-border bg-white">
        <nav className="container mx-auto px-4 py-3 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[202px] h-[56px] object-cover"
              />
            </Link>

            {/* Search Box - Desktop */}
            <div className="hidden lg:block flex-1 max-w-md mx-4">
              <SearchBox baseUrl={BASE_URL} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
              {status === "authenticated" && user ? (
                <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                  <DropdownMenuTrigger>
                    <Image
                      src={user?.profileImage || "/assets/images/no-user.jpg"}
                      alt="user-img"
                      width={200}
                      height={200}
                      className="w-14 h-14 rounded-full border object-contain"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-2">
                    <Link href="/profile">
                      <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                        Profile
                      </DropdownMenuLabel>
                    </Link>
                    <Link href="/password-change">
                      <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                        Password Change
                      </DropdownMenuLabel>
                    </Link>
                    <DropdownMenuLabel
                      onClick={() => setLogoutModalOpen(true)}
                      className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"
                    >
                      <LogOut className="w-5 h-5 " /> Logout
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-[48px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      size="sm"
                      className="h-[48px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] "
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4 md:hidden flex flex-col space-y-3 pb-4">
              {/* Search Box - Mobile */}
              <div className="mb-2">
                <SearchBox baseUrl={BASE_URL} />
              </div>

              <Link
                href="/"
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"
                }`}
              >
                Contact Us
              </Link>

              <div className="flex items-center justify-between gap-4 pt-2">
                {status === "authenticated" && user ? (
                  <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                    <DropdownMenuTrigger>
                      <Image
                        src={user?.profileImage || "/assets/images/no-user.jpg"}
                        alt="user-img"
                        width={200}
                        height={200}
                        className="w-14 h-14 rounded-full border object-contain"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2">
                      <Link href="/profile">
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                          Profile
                        </DropdownMenuLabel>
                      </Link>
                      <Link href="/password-change">
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                          Password Change
                        </DropdownMenuLabel>
                      </Link>
                      <DropdownMenuLabel
                        onClick={() => setLogoutModalOpen(true)}
                        className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"
                      >
                        <LogOut className="w-5 h-5 " /> Logout
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-[40px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button
                        size="sm"
                        className="h-[40px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] "
                      >
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {logoutModalOpen && (
        <LogoutModal
          isOpen={logoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onConfirm={handLogout}
        />
      )}
    </div>
  )
}

export default Navbar