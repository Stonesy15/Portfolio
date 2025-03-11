'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="font-bold">Email:</span> stonesyxxx@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Phone:</span> +2347086784657
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Address:</span> Bank of Industry Kaduna State
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-amber-500 hover:bg-amber-600 text-black w-full md:w-auto px-8 py-3 rounded-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

