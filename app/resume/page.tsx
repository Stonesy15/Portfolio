import { NavBar } from '@/components/nav-bar'
import { ResumeSection } from '@/components/resume-section'

export default function ResumePage() {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      <ResumeSection />
    </main>
  )
}

