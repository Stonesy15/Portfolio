export function ServicesSection() {
  return (
    <section id="services" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {['Software Development', 'Web Development', 'UI/UX Design','Telegram Mini-Apps Development', 'Mobile App Design', 'Project Management',].map((service, index) => (
            <div key={index} className="bg-zinc-900/50 p-6 md:p-8 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{service}</h3>
              <p className="text-gray-400">
                Provide high-quality {service.toLowerCase()} services tailored to meet your specific needs and goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

