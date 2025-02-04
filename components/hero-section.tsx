'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import img2 from '@/public/profile2.jpg'

export default function HeroSection() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'A Freelance Web Designer',
        'Mobile Apps Developer',
        'Web Developer',
        'Telegram Mini-App Developer'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="flex-1 text-white">
            <h2 className="text-amber-500 text-xl mb-4">HELLO!</h2>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              I&apos;m{' '}
              <span className="text-amber-500">
                Hosea<br />Pwakodikai
              </span>
            </h1>
            <div className="text-2xl mb-8 h-[2em]">
              <span ref={el}></span>
            </div>
            <div className="space-x-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 rounded-full">
                HIRE ME
              </Button>
              <Button variant="outline" className="border-amber text-black hover:bg-amber-600 px-8 py-6 rounded-full">
                  MY WORKS
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <Image
              src={img2}
              alt="Professional portrait"
              width={600}
              height={600}
              className="w-full max-w-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

