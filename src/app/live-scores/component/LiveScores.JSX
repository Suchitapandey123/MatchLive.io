"use client"
import { useState, useEffect } from "react"
import { Clock, Calendar, Star, ChevronDown, ChevronUp, RefreshCw } from "lucide-react"

export default function LiveScores() {
  const [activeSport, setActiveSport] = useState("football")
  const [liveMatches, setLiveMatches] = useState([])
  const [upcomingMatches, setUpcomingMatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [expandedLeagues, setExpandedLeagues] = useState({})

  // Sample data - replace with real API calls
  useEffect(() => {
    setIsLoading(true)
    // Simulate API loading
    setTimeout(() => {
      setLiveMatches([
        {
          id: 1,
          league: "Premier League",
          country: "England",
          team1: { name: "Arsenal", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png", score: 2 },
          team2: { name: "Chelsea", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png", score: 1 },
          time: "76'",
          status: "live",
          minute: 76,
          events: [
            { minute: 23, type: "goal", team: "home", player: "Saka" },
            { minute: 45, type: "goal", team: "away", player: "Sterling" },
            { minute: 68, type: "goal", team: "home", player: "Odegaard" },
            { minute: 72, type: "yellow", team: "away", player: "James" }
          ]
        },
        {
          id: 2,
          league: "La Liga",
          country: "Spain",
          team1: { name: "Barcelona", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png", score: 0 },
          team2: { name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png", score: 0 },
          time: "HT",
          status: "halftime",
          minute: 45,
          events: [
            { minute: 32, type: "yellow", team: "home", player: "Gavi" }
          ]
        }
      ])

      setUpcomingMatches([
        {
          id: 3,
          league: "Serie A",
          country: "Italy",
          team1: { name: "Juventus", logo: "/team-logos/juventus.png" },
          team2: { name: "AC Milan", logo: "/team-logos/milan.png" },
          time: "Today 20:45",
          status: "upcoming"
        },
        {
          id: 4,
          league: "Bundesliga",
          country: "Germany",
          team1: { name: "Bayern Munich", logo: "/team-logos/bayern.png" },
          team2: { name: "Dortmund", logo: "/team-logos/dortmund.png" },
          time: "Tomorrow 18:30",
          status: "upcoming"
        }
      ])
      setIsLoading(false)
    }, 1000)
  }, [activeSport])

  const toggleLeagueExpand = (leagueId) => {
    setExpandedLeagues(prev => ({
      ...prev,
      [leagueId]: !prev[leagueId]
    }))
  }

  const sports = [
    { id: "football", name: "Football" },
    { id: "basketball", name: "Basketball" },
    { id: "tennis", name: "Tennis" },
    { id: "cricket", name: "Cricket" },
    { id: "hockey", name: "Hockey" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Live Scores
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Real-time updates from matches around the world
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300">
                <RefreshCw className="mr-2" size={18} />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Sports Navigation */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {sports.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => setActiveSport(sport.id)}
                  className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSport === sport.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>

          {/* Live Matches Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                Live Now
              </h2>
              <div className="text-gray-500 flex items-center">
                <Clock className="mr-2" size={18} />
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {isLoading ? (
              <div className="grid gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse h-32"></div>
                ))}
              </div>
            ) : liveMatches.length > 0 ? (
              <div className="grid gap-4">
                {liveMatches.map((match) => (
                  <div key={match.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500">
                    <div 
                      className="p-4 cursor-pointer"
                      onClick={() => toggleLeagueExpand(match.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full mr-3">
                            LIVE
                          </span>
                          <div>
                            <h3 className="font-bold text-gray-800">{match.league}</h3>
                            <p className="text-xs text-gray-500">{match.country}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded mr-3">
                            {match.time}
                          </span>
                          {expandedLeagues[match.id] ? (
                            <ChevronUp className="text-gray-500" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-500" size={20} />
                          )}
                        </div>
                      </div>
                    </div>

                    {expandedLeagues[match.id] && (
                      <div className="px-4 pb-4">
                        {/* Match Events Timeline */}
                        <div className="mb-4">
                          <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                            
                            {match.events.map((event, idx) => (
                              <div key={idx} className="relative pl-8 mb-3">
                                <div className="absolute left-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"></div>
                                <div className="text-sm">
                                  <span className="font-medium text-gray-700">{event.minute}'</span> - 
                                  <span className={`ml-2 ${
                                    event.type === 'goal' ? 'text-emerald-600' : 
                                    event.type === 'yellow' ? 'text-yellow-500' : 'text-gray-600'
                                  }`}>
                                    {event.type === 'goal' ? '⚽ Goal!' : '🟨 Yellow card'} 
                                    {event.player && ` (${event.player})`}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-100 px-4 py-4">
                      <div className="flex justify-between items-center">
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end">
                            <span className="font-bold text-gray-800 mr-3">{match.team1.name}</span>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              {/* Team logo would go here */}
                              <span className="text-xs">T1</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mx-4">
                          <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[80px] text-center">
                            <span className="font-bold text-xl">
                              {match.team1.score} - {match.team2.score}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              {/* Team logo would go here */}
                              <span className="text-xs">T2</span>
                            </div>
                            <span className="font-bold text-gray-800 ml-3">{match.team2.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600">No live matches currently. Check back later!</p>
              </div>
            )}
          </div>

          {/* Upcoming Matches Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center">
                <Calendar className="mr-3 text-emerald-600" size={24} />
                Upcoming Matches
              </h2>
            </div>

            {isLoading ? (
              <div className="grid gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse h-24"></div>
                ))}
              </div>
            ) : upcomingMatches.length > 0 ? (
              <div className="grid gap-4">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            {/* League logo would go here */}
                            <span className="text-xs">L</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800">{match.league}</h3>
                            <p className="text-xs text-gray-500">{match.country}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {match.time}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end">
                            <span className="font-medium text-gray-800 mr-3">{match.team1.name}</span>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              {/* Team logo would go here */}
                              <span className="text-xs">T1</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mx-4 text-gray-500 text-sm">VS</div>
                        
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              {/* Team logo would go here */}
                              <span className="text-xs">T2</span>
                            </div>
                            <span className="font-medium text-gray-800 ml-3">{match.team2.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600">No upcoming matches scheduled. Check back later!</p>
              </div>
            )}
          </div>

          {/* Featured Leagues */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Star className="mr-3 text-amber-500" size={24} />
              Featured Leagues
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Premier League", country: "England" },
                { name: "La Liga", country: "Spain" },
                { name: "Serie A", country: "Italy" },
                { name: "Bundesliga", country: "Germany" },
                { name: "Ligue 1", country: "France" }
              ].map((league, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center cursor-pointer group">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    {/* League logo would go here */}
                    <span className="text-xs">L</span>
                  </div>
                  <h3 className="font-bold text-gray-800">{league.name}</h3>
                  <p className="text-sm text-gray-500">{league.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}