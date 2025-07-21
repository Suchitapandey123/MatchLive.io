"use client"
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"


const Footer = () => {
  return (
    <>
    <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Match
                </span>
                Live.io
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Your ultimate destination for live sports scores, breaking news, and highlights from around the world.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, color: "hover:text-blue-400" },
                  { icon: FaTwitter, color: "hover:text-sky-400" },
                  { icon: FaInstagram, color: "hover:text-pink-400" },
                  { icon: FaYoutube, color: "hover:text-red-400" },
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`text-slate-400 ${color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Quick Links",
                links: ["Home", "Live Scores", "News", "Fixtures", "Videos"],
              },
              {
                title: "Sports",
                links: ["Football", "Cricket", "Tennis", "Basketball", "Formula 1"],
              },
              {
                title: "Contact Us",
                links: [
                  "Email: info@matchlive.io",
                  "Phone: +1 (123) 456-7890",
                  "Address: 123 Sports Ave, New York, NY",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-white text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} MatchLive.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer