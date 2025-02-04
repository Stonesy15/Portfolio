import dynamic from 'next/dynamic'
import { NavBar } from '@/components/nav-bar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ServicesSection } from '@/components/services-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { BlogSection } from '@/components/blog-section'
import HeroSection from '@/components/hero-section'
import ContactSection from '@/components/contact-section'

// const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false })
// const ContactSection = dynamic(() => import('@/components/contact-section'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </main>
  )
}

