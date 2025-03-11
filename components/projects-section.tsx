import Image from 'next/image'
import Link from 'next/link'
import imgp from '@/public/timely.jpg'
import img2 from '@/public/project2.jpg'
import img3 from '@/public/project3.jpg'
import img1 from '@/public/project1.jpg'

export function ProjectsSection() {
  const projects = [
    {
      title: "ROLL PROTOCOL",
      description: "We leverage blockchain to create a secure and empowered user experience.",
      link: "https://www.rollprotocol.com/",
      image: img1,
    },
    {
      title: "TIMELY TRANSPORTATION AND LOGISTICS",
      description: "A transportation and logistics startup in Nigeria",
      link: "https://www.timelylogistic.com/",
      image: imgp,
    },
    {
      title: "TONHIVE",
      description: "The premier launchpad and acceleration hub for startups and web3 builders on TON",
      link: "https://www.tonhive.dev/",
      image: img2,
    },
    {
      title: "WUMZEE",
      description: "Consultation For Business Success",
      link: "https://www.wumzee.com/",
      image: img3,
    },
  ]

  return (
    <section id="projects" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
                    <span className="mt-3 md:mt-4 inline-block px-3 py-1 md:px-4 md:py-2 bg-amber-500 text-black rounded-full text-xs md:text-sm font-semibold">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

