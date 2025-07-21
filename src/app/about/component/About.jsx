"use client"

import Link from "next/link"
import { Users, Target, Zap, Newspaper, Video, Bell, Smartphone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dark Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-white/20 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 shadow-2xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            About MatchLive.io
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Real-time sports coverage crafted for passionate fans who demand excellence
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 space-y-16">
        {/* Our Story */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6 text-lg">
                Founded in 2023, MatchLive.io emerged from a simple yet powerful vision: to revolutionize how sports
                fans experience live coverage. Born out of frustration with delayed updates and fragmented information,
                we set out to create something extraordinary.
              </p>
              <p className="text-lg">
                What started as a passion project among sports enthusiasts has evolved into a comprehensive platform
                that serves millions of fans worldwide. We believe that every moment in sports matters, and every fan
                deserves to experience the thrill in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between fans and the sports they love, delivering unparalleled access to
              live action through:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lightning-Fast Updates</h3>
                  <p className="text-gray-700 text-sm">Real-time scores and play-by-play coverage</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Newspaper className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Breaking News</h3>
                  <p className="text-gray-700 text-sm">In-depth analysis and expert insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Match Highlights</h3>
                  <p className="text-gray-700 text-sm">Key moments and game-changing plays</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Personal Alerts</h3>
                  <p className="text-gray-700 text-sm">Customized notifications for your teams</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl md:col-span-2">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multi-Platform Access</h3>
                  <p className="text-gray-700 text-sm">
                    Seamless experience across all your devices, anytime, anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-10 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Meet the Team</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                We're a diverse, global team of sports journalists, data analysts, developers, and design experts — all
                united by our shared passion for sports and commitment to delivering exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                From our newsroom to our engineering labs, every team member brings unique expertise and an unwavering
                dedication to serving the sports community.
              </p>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-gray-200 mb-4">
                  Have questions, feedback, or ideas to share? We'd love to connect with you!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
