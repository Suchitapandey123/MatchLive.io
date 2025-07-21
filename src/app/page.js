import React from 'react';
import HomePage from "../component/homepage/Homepage";


export const metadata = {
  title: 'Latest Sports News | Your Sports Portal',
  description: 'Get the latest updates on football, cricket, tennis and all major sports events',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  openGraph: {
    title: 'Live Sports News & Updates',
    description: 'Breaking news, match reports and expert analysis for all sports',
    images: [{
      url: 'https://yourdomain.com/images/home-og.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Sports News & Updates',
    description: 'Breaking news, match reports and expert analysis',
    images: ['https://yourdomain.com/images/home-twitter.jpg'],
  },
}

// मुख्य कंपोनेंट
export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}