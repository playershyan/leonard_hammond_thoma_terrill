import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Law Firm Name</h3>
            <p className="text-sm text-gray-300">
              Your trusted legal advocate for family, personal injury, and criminal defense.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/practice-areas/divorce-family-law" className="hover:text-secondary">
                  Divorce & Family Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/personal-injury" className="hover:text-secondary">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/criminal-defense" className="hover:text-secondary">
                  Criminal Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Main Street</li>
              <li>Fort Wayne, IN 46802</li>
              <li>Phone: (260) 555-0100</li>
              <li>Email: contact@lawfirm.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {currentYear} Law Firm Name. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Disclaimer: The information on this website is for general informational purposes only
            and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
