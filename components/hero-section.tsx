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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 md:py-20">
          <div className="flex-1 text-white text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-amber-500 text-xl mb-4">HELLO!</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              I&apos;m{' '}
              <span className="text-amber-500">
                Hosea<br className="hidden sm:block" />Pwakodikai
              </span>
            </h1>
            <div className="text-xl sm:text-2xl mb-8 h-[2em]">
              <span ref={el}></span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:space-x-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-5 rounded-full">
                HIRE ME
              </Button>
              <Button variant="outline" className="border-amber-500 text-white hover:bg-amber-600 hover:text-black px-6 py-5 rounded-full">
                MY WORKS
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0">
            <Image
              src={img2}
              alt="Professional portrait"
              width={600}
              height={600}
              className="w-full rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

