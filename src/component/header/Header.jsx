"use client"
import React from 'react'
import Link from "next/link"

import { Menu, X, Search, ArrowRight, Clock, Calendar, Play, TrendingUp, Users } from "lucide-react"
import { useState, useEffect } from "react"


const Header = () => {
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const [scrolled, setScrolled] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
 
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
     <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200"
            : "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className={`mr-4 lg:hidden transition-colors duration-300 ${
                  scrolled ? "text-slate-800 hover:text-indigo-600" : "text-white hover:text-yellow-400"
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-slate-800" : "text-white"
                }`}
              >
                <span className={scrolled ? "text-indigo-600" : "text-yellow-400"}>Match</span>Live.io
              </h1>
            </div>

            <nav className="hidden lg:flex space-x-8">
                 {[
             { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    
    { name: "Live Scores", path: "/live-scores" },
    { name: "Contact", path: "/contact" }].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled ? "text-slate-700 hover:text-indigo-600" : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-slate-700 hover:text-indigo-600" : "text-white hover:text-yellow-400"
                }`}
              >
                <Search size={20} />
              </button>
              <button className="hidden md:block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Live
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl border-t border-slate-200">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {["Home", "About", "News", "Fixtures", "Live Scores", "Videos"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-700 hover:text-indigo-600 font-medium py-3 border-b border-slate-100 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">
                Sign In
              </button>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-200">
            <div className="container mx-auto px-4 py-4 flex">
              <input
                type="text"
                placeholder="Search for matches, news, teams..."
                className="flex-grow px-6 py-3 border border-slate-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-r-full transition-all duration-300 shadow-lg">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}



export default Header