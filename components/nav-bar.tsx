'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = 'home'

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop <= 100) { // Increased threshold for better detection
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(targetId)
    if (isMobile) {
      setIsOpen(false) // Close mobile menu after clicking a link
    }
  }

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About Me' },
    { href: 'resume', label: 'Resume' },
    { href: 'services', label: 'Services' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    // { href: 'my-blog', label: 'My Blog' },
    { href: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              HOSEA
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`${
                  activeSection === item.href
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-white'
                } transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-black/95 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => smoothScroll(e, item.href)}
              className={`block px-3 py-2 ${
                activeSection === item.href
                  ? 'text-amber-500'
                  : 'text-gray-300 hover:text-white'
              } transition-colors duration-200`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

