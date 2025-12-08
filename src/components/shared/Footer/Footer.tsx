import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <div>
       <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary-foreground" />
              <span className="font-bold">ProScout</span>
            </div>
            <p className="text-sm opacity-90">Advanced sports analytics for scouts, coaches, and teams</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">© 2025 ProScout. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-100 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer