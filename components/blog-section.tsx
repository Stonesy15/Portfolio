import Image from 'next/image'

export function BlogSection() {
  const blogPosts = [
    { title: 'The Future of Web Design', date: 'June 1, 2023', excerpt: 'Exploring upcoming trends in web design and their impact on user experience.' },
    { title: 'Mastering React Hooks', date: 'May 15, 2023', excerpt: 'A comprehensive guide to using React Hooks effectively in your projects.' },
    { title: 'Optimizing Website Performance', date: 'May 1, 2023', excerpt: 'Tips and tricks to improve your website\'s loading speed and overall performance.' },
  ]

  return (
    <section id="my-blog" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-zinc-900/50 rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=200&width=400`}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

