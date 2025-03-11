import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import img from '@/public/profile3.jpg'

export function AboutSection() {
  return (
    <section id="about">
      <div className="bg-black py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:flex-1 mx-auto lg:mx-0">
              <Image
                src={img}
                alt="About me image"
                width={500}
                height={500}
                className="rounded-lg w-full"
              />
            </div>
            <div className="lg:flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center lg:text-left">
                About Me
              </h2>
              <div className="text-[100px] md:text-[150px] font-bold text-zinc-800 leading-none mb-6 text-center lg:text-left">
                ABOUT
              </div>
              <p className="text-gray-400 mb-8 text-center lg:text-left">
                I'm a passionate web designer with over 3+ years of experience creating beautiful, functional websites. 
                My approach combines creativity with user-centric design principles to deliver exceptional digital experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="text-gray-400 min-w-[100px]">Name:</span>
                  <span className="text-white">Hosea Pwakodikai</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="text-gray-400 min-w-[100px]">Address:</span>
                  <span className="text-white">Kaduna State, Nigeria</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="text-gray-400 min-w-[100px]">Zip code:</span>
                  <span className="text-white">800283</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="text-gray-400 min-w-[100px]">Email:</span>
                  <span className="text-white break-all">stonesyxxx@gmail.com</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="text-gray-400 min-w-[100px]">Phone:</span>
                  <span className="text-white">+234 7086784657</span>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">My Skills</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Web Design</li>
                  <li>UI/UX Design</li>
                  <li>Web3 Development</li>
                  <li>Front-end Development </li>
                  <li>Mobile Apps Design</li>
                  <li>Telegram Mini-App Development</li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link href="/Hosea_Pwakodikai_Resume.pdf" download="Hosea_Pwakodikai_CV.pdf">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 md:px-8 md:py-3 rounded-full">
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

