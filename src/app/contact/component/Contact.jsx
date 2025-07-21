"use client"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loadingToast = toast.loading("Sending your message...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      toast.dismiss(loadingToast)

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error(result.error || "Something went wrong.")
      }
    } catch (error) {
      toast.dismiss(loadingToast)
      toast.error("Failed to send message.")
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Contact Us
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg h-40 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Mail className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@matchlive.io</p>
                      <p className="text-gray-600">support@matchlive.io</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Phone className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <MapPin className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">123 Sports Avenue</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132331!2d-73.9878449241646!3d40.74844047138972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}