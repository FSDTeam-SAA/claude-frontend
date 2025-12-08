"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b border-border bg-white">
        <nav className="container mx-auto px-4 py-3 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/images/logo.png" alt="logo" width={1000} height={1000} className="w-[202px] h-[56px] object-cover"/>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-[300ms] ${pathname === "/" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Home
              </Link>
              <Link href="/services" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-[300ms] ${pathname === "/services" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Services
              </Link>
              <Link href="/about-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-[300ms] ${pathname === "/about-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                About Us
              </Link>
              <Link href="/contact-us" className={`text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-[300ms] ${pathname === "/contact-us" ? "border-b-[2px] border-primary" : "border-0"}`}>
                Contact Us
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-6">
          <Link href="/login">
              <Button variant="ghost" size="sm" className="h-[48px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-12 rounded-full">
                Sign In
              </Button>
          </Link>
             <Link href="/sign-up">
              <Button size="sm" className="h-[48px] py-2 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] ">
                Register
              </Button></Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4 md:hidden space-y-3 pb-4">
              <Link href="/" className="block text-sm hover:text-primary transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm hover:text-primary transition">
                Services
              </Link>
              <Link href="/about-us" className="block text-sm hover:text-primary transition">
                About Us
              </Link>
              <Link href="/contact-us" className="block text-sm hover:text-primary transition">
                Contact Us
              </Link>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar