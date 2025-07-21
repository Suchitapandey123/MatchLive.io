"use client"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

const ITEMS_PER_PAGE = 4

export default function News({ initialSportsData = { news: [] } }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedNews, setExpandedNews] = useState({})
  const [isLoading, setIsLoading] = useState(false) // Start with false since we have initial data
  const [sportsData, setSportsData] = useState(initialSportsData)
  const [currentPage, setCurrentPage] = useState(1)

  // Optional: Client-side data fetching for updates
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch("/data/sportsData.json")
        const data = await res.json()
        setSportsData(data)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // Rest of your existing component code remains exactly the same...
  // Keep all your existing functions, state, and JSX
  // Only remove the direct JSON import and modify the initial states as shown above

  const categories = [
    { id: "all", name: "All News" },
    { id: "football", name: "Football" },
    { id: "basketball", name: "Basketball" },
    { id: "tennis", name: "Tennis" },
    { id: "american football", name: "NFL" }
  ]

  const toggleNewsExpand = (newsId) => {
    setExpandedNews(prev => ({
      ...prev,
      [newsId]: !prev[newsId]
    }))
  }

  const filteredNews = sportsData.news.filter(news => {
    const matchesCategory = activeCategory === "all" || news.category === activeCategory
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (news.tags && news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    return matchesCategory && matchesSearch
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Sports News
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Breaking news, match reports and expert analysis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Category Filter */}
              <div className="flex-1 overflow-x-auto">
                <div className="flex space-x-2 pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setCurrentPage(1) // Reset to first page when category changes
                      }}
                      className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1) // Reset to first page when search changes
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* News Grid */}
          {isLoading ? (
            <div className="grid gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse h-48"></div>
              ))}
            </div>
          ) : filteredNews.length > 0 ? (
            <>
              <div className="grid gap-8">
                {paginatedNews.map((newsItem) => (
                  <div key={newsItem.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="md:flex">
                      {/* News Image */}
                      <div className="md:w-1/3 h-48 md:h-auto">
                       <Link href={`/news/${newsItem.id}`} > <img 
                          src={newsItem.image} 
                          alt={newsItem.title}
                          className="w-full h-40 object-cover"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "https://via.placeholder.com/400x300?text=News+Image"
                          }}
                         />
      </Link>
                      </div>
                      
                      {/* News Content */}
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                            {newsItem.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(newsItem.date)}
                          </span>
                        </div>
                        
                       <Link href={`/news/${newsItem.id}`} >  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">{newsItem.title}</h2></Link>
                        <p className="text-gray-600 mb-4">{newsItem.summary}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {newsItem.tags?.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button
                            onClick={() => toggleNewsExpand(newsItem.id)}
                            className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center"
                          >
                            {expandedNews[newsItem.id] ? (
                              <>
                                Read Less <ChevronUp className="ml-1" size={18} />
                              </>
                            ) : (
                              <>
                                Read More <ChevronDown className="ml-1" size={18} />
                              </>
                            )}
                          </button>
                        </div>
                        
                        {expandedNews[newsItem.id] && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-gray-700 mb-4">{newsItem.content}</p>
                            <div className="text-sm text-gray-500">
                              By {newsItem.author}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center gap-1">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          currentPage === page 
                            ? "bg-emerald-500 text-white" 
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <p className="text-gray-600">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}