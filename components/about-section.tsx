import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import img from '@/public/profile3.jpg'

export function AboutSection() {
  return (
    <section id="about">
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src={img}
                alt="About me image"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">
                About Me
              </h2>
              <div className="text-[150px] font-bold text-zinc-800 leading-none mb-6">
                ABOUT
              </div>
              <p className="text-gray-400 mb-8">
                I'm a passionate web designer with over 3+ years of experience creating beautiful, functional websites. 
                My approach combines creativity with user-centric design principles to deliver exceptional digital experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Name:</span>
                  <span className="text-white">Hosea Pwakodikai</span>
                </div>
                {/* <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Date of birth:</span>
                  <span className="text-white">January 1, 1990</span>
                </div> */}
                <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Address:</span>
                  <span className="text-white">Kaduna State, Nigeria</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Zip code:</span>
                  <span className="text-white">800283</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Email:</span>
                  <span className="text-white">stonesyxxx@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 min-w-[100px]">Phone:</span>
                  <span className="text-white">+234 7086784657</span>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Web Design</li>
                  <li>UI/UX Design</li>
                  <li>Web3 Development</li>
                  <li>Front-end Development </li>
                  <li>Mobile Apps Design</li>
                  <li>Telegram Mini-App Development</li>
                </ul>
              </div>
              {/* <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-amber-500">5+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-amber-500">100%</div>
                  <div className="text-gray-400">Satisfied Clients</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-amber-500">3+</div>
                  <div className="text-gray-400">Years of Experience</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-amber-500">5</div>
                  <div className="text-gray-400">Awards Won</div>
                </div>
              </div> */}
              <Link href="/Hosea_Pwakodikai_Resume.pdf" download="Hosea_Pwakodikai_CV.pdf ">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

