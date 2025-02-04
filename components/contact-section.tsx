'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const result = await emailjs.send(
        'service_odaqpuf', // Replace with your EmailJS service ID
        'template_40nkzfq', // Replace with your EmailJS template ID
        formData,
        'dxmHsWfqFFQ83ECF7' // Your public key
      )

      console.log(result.text)
      setSubmitMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          setSubmitMessage('Network error. Please check your internet connection and try again.')
        } else {
          setSubmitMessage(`Failed to send message: ${error.message}`)
        }
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again later.')
      }
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-bold">Email:</span> stonesyxxx@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Phone:</span> +2347086784657              </p>
              <p className="text-gray-300">
                <span className="font-bold">Address:</span> Bank of Industry Kaduna State
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-700 text-white p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-700 text-white p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-zinc-800 border-gray-700 text-white p-2"
              ></textarea>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitMessage && (
              <p className={`mt-2 ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

