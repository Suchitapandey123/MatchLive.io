"use client"
import { useState } from "react"
import { ArrowRight, Clock, Calendar, Play, TrendingUp, Users, Video, Eye, Share2, Heart } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import sportdata from "../../data/sportsData.json"
import Link from "next/link"

export default function Home() {
  const [activeTab, setActiveTab] = useState("live")

  // Updated matches array with 3-4 additional entries
  const matches = [
    { id: 1, league: "Premier League", team1: "Arsenal", team2: "Chelsea", score: "2 - 1", time: "Live", isLive: true },
    { id: 2, league: "La Liga", team1: "Barcelona", team2: "Real Madrid", score: "0 - 0", time: "45'", isLive: true },
    { id: 3, league: "Serie A", team1: "Juventus", team2: "AC Milan", score: "-", time: "Today 20:45", isLive: false },
    {
      id: 4,
      league: "Bundesliga",
      team1: "Bayern Munich",
      team2: "Dortmund",
      score: "-",
      time: "Tomorrow 18:30",
      isLive: false,
    },
    // New entries added
    {
      id: 5,
      league: "Premier League",
      team1: "Manchester",
      team2: "Liverpool",
      score: "3 - 2",
      time: "Live",
      isLive: true,
    },
    {
      id: 6,
      league: "Champions League",
      team1: "PSG",
      team2: "Manchester ",
      score: "1 - 0",
      time: "78'",
      isLive: true,
    },
    {
      id: 7,
      league: "La Liga",
      team1: "Atletico Madrid",
      team2: "Valencia",
      score: "-",
      time: "Today 22:00",
      isLive: false,
    },
    {
      id: 8,
      league: "Serie A",
      team1: "Inter Milan",
      team2: "Napoli",
      score: "-",
      time: "Tomorrow 19:45",
      isLive: false,
    },
  ]

  // Updated latest sports news data
  const latestSportsNews = [
    {
      id: 1,
      title: "World Cup 2024: Argentina defeats Brazil in thrilling final",
      category: "Football",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "NBA Finals: Lakers secure championship with game 7 victory",
      category: "Basketball",
      time: "4 hours ago",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Tennis: Djokovic wins record-breaking 25th Grand Slam title",
      category: "Tennis",
      time: "6 hours ago",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  const trending = [
    { id: 1, title: "Transfer News: Mbappe to Real Madrid confirmed?", category: "Football", views: "1.2M" },
    { id: 2, title: "T20 World Cup: India vs Pakistan preview", category: "Cricket", views: "890K" },
    { id: 3, title: "F1: Verstappen extends championship lead", category: "Formula 1", views: "654K" },
    { id: 4, title: "Olympics 2024: New sports to watch out for", category: "Olympics", views: "432K" },
  ]

  // New highlights data
  const highlights = [
    {
      id: 1,
      title: "Messi's Incredible Free Kick Goal",
      sport: "Football",
      duration: "2:45",
      views: "2.1M",
      likes: "45K",
      thumbnail:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
    },
    {
      id: 2,
      title: "LeBron's Game-Winning Dunk",
      sport: "Basketball",
      duration: "1:30",
      views: "1.8M",
      likes: "38K",
      thumbnail:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false,
    },
    {
      id: 3,
      title: "Djokovic's Championship Point",
      sport: "Tennis",
      duration: "3:12",
      views: "950K",
      likes: "22K",
      thumbnail:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
    },
    {
      id: 4,
      title: "Verstappen's Overtake of the Year",
      sport: "Formula 1",
      duration: "1:55",
      views: "1.3M",
      likes: "31K",
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false,
    },
    {
      id: 5,
      title: "Kohli's Century Celebration",
      sport: "Cricket",
      duration: "2:20",
      views: "1.6M",
      likes: "42K",
      thumbnail:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
    },
    {
      id: 6,
      title: "Serena's Emotional Victory",
      sport: "Tennis",
      duration: "4:05",
      views: "890K",
      likes: "28K",
      thumbnail:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="animate-fade-in">
                <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Never Miss a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Match
                  </span>{" "}
                  Again
                </h2>
                <p className="text-xl lg:text-2xl mb-8 text-slate-200 leading-relaxed">
                  Live scores, breaking news, and highlights from all major sports worldwide
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                    <Play className="mr-2" size={20} />
                    Live Matches
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Latest News
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="animate-slide-in">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/988/212/non_2x/cricket-match-concept-with-stadium-and-background-free-vector.jpg?height=500&width=600"
                  alt="Sports Collage"
                 className="w-[400px] mx-auto h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-700"
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Scores Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 lg:mb-0">Live Scores & Fixtures</h2>
            <div className="flex bg-slate-100 rounded-full p-1 shadow-inner">
              {["live", "upcoming", "completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium capitalize ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:text-slate-800 hover:bg-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {matches
              .filter(
                (match) =>
                  (activeTab === "live" && match.isLive) ||
                  (activeTab === "upcoming" && !match.isLive) ||
                  (activeTab === "completed" && !match.isLive && match.score !== "-"),
              )
              .map((match) => (
                <div
                  key={match.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 ${
                    match.isLive ? "border-red-500 shadow-red-100" : "border-indigo-500 shadow-indigo-100"
                  } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        {match.league}
                      </span>
                      <span
                        className={`flex items-center text-sm font-semibold px-3 py-1 rounded-full ${
                          match.isLive ? "text-red-600 bg-red-100" : "text-slate-600 bg-slate-100"
                        }`}
                      >
                        {match.isLive ? <Clock className="mr-1" size={14} /> : <Calendar className="mr-1" size={14} />}
                        {match.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <div className="text-center">
                        <div className="h-14 w-14 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mb-3 flex items-center justify-center">
                          <span className="text-slate-600 font-bold text-lg">{match.team1.charAt(0)}</span>
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">{match.team1}</span>
                      </div>
                      <div
                        className={`px-6 py-3 rounded-xl font-bold text-lg ${
                          match.isLive
                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {match.score}
                      </div>
                      <div className="text-center">
                        <div className="h-14 w-14 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mb-3 flex items-center justify-center">
                          <span className="text-slate-600 font-bold text-lg">{match.team2.charAt(0)}</span>
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">{match.team2}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                      View Details <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Matches
            </button>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 overflow-hidden shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-white text-red-600 px-4 py-2 rounded-full font-bold mr-6 whitespace-nowrap shadow-lg z-10 relative">
              BREAKING
            </div>
            <div className="whitespace-nowrap animate-marquee">
              <span className="mx-8">• Mbappe agrees to join Real Madrid on 5-year deal</span>
              <span className="mx-8">• India defeats England in thrilling T20 match</span>
              <span className="mx-8">• NBA: Durant requests trade from Brooklyn Nets</span>
              <span className="mx-8">• Wimbledon 2023: Djokovic advances to semifinals</span>
            </div>
          </div>
        </div>
      </div>

      {/* News Section - UPDATED */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">🔥 Trending Sports News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportdata.news.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <Link href={`/news/${item.id}`}>
                    {" "}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block capitalize">
                    {item.category}
                  </span>
                  <Link href={`/news/${item.id}`}>
                    <h3 className="font-bold mb-2 line-clamp-2 text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm line-clamp-3">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All News
            </button>
          </div>
        </div>
      </section>

      

      {/* NEW SECTION: Sports Highlights */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              🎬 Sports{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Highlights
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Catch the most exciting moments and game-changing plays from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={highlight.thumbnail || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                      <Play className="text-white" size={32} fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {highlight.duration}
                  </div>

                  {/* New Badge */}
                  {highlight.isNew && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      NEW
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-400/30">
                      {highlight.sport}
                    </span>
                    <div className="flex items-center space-x-3 text-slate-300">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span className="text-xs">{highlight.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart size={14} className="mr-1" />
                        <span className="text-xs">{highlight.likes}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                    {highlight.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center text-sm">
                      <Video size={16} className="mr-2" />
                      Watch Now
                    </button>
                    <button className="text-slate-300 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center mx-auto">
              <Video className="mr-2" size={20} />
              View All Highlights
            </button>
          </div>
        </div>
      </section>
      


      {/* Trending Now Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 lg:mb-0">Trending Now</h2>
            <div className="flex items-center">
              <span className="text-slate-600 mr-3">View by:</span>
              <select className="bg-slate-100 border-0 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trending.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full mr-4 shadow-lg">
                    <TrendingUp size={20} />
                  </div>
                  <span className="text-sm font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-4 text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-slate-500">
                    <Users size={16} className="mr-1" />
                    {item.views} views
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors duration-300 flex items-center">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-200">
            Subscribe to our newsletter and get the latest sports news and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex mb-8">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-l-full focus:outline-yellow-400 text-slate-800 font-medium"
            />
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-r-full font-semibold transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaFacebook, color: "hover:text-blue-400" },
              { icon: FaTwitter, color: "hover:text-sky-400" },
              { icon: FaInstagram, color: "hover:text-pink-400" },
              { icon: FaYoutube, color: "hover:text-red-400" },
            ].map(({ icon: Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`text-white ${color} transition-all duration-300 transform hover:scale-125`}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <style jsx global>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slide-in {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      .animate-slide-in {
        animation: slide-in 1s ease-out 0.3s both;
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
    </div>
  )
}
