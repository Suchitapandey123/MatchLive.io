"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Details = ({ initialNewsItem = null, slug: initialSlug = null }) => {
  const { slug: clientSlug } = useParams();
  const [newsItem, setNewsItem] = useState(initialNewsItem);
  const slug = initialSlug || clientSlug;

  useEffect(() => {
    if (!initialNewsItem && slug) {
      // Client-side fallback if server didn't provide data
      fetch('/data/sportsData.json')
        .then(res => res.json())
        .then(data => {
          const found = data.news.find(item => item.id === slug);
          setNewsItem(found);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [slug, initialNewsItem]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        News not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white pt-24 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-[400px] object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x400?text=News+Image";
            }}
          />
          <Link
            href="/news"
            className="absolute top-4 left-4 bg-white/80 hover:bg-white text-emerald-700 px-4 py-2 rounded-full flex items-center text-sm font-medium shadow"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back
          </Link>
        </div>

        <div className="p-6 md:p-10">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 text-sm rounded-full mb-3 uppercase font-semibold tracking-wider">
            {newsItem.category}
          </span>

          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
            {newsItem.title}
          </h1>

          <div className="text-sm text-gray-500 mb-6">
            {formatDate(newsItem.date)} &nbsp;|&nbsp; <span className="italic">By {newsItem.author}</span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {newsItem.content}
          </p>

          <div className="flex flex-wrap gap-3">
            {newsItem.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-emerald-600 text-white px-4 py-1 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;