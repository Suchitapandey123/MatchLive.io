// app/news/[slug]/page.js
import { readFile } from 'fs/promises'
import path from 'path'
import Details from './components/Details'


export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'sportsData.json')
  const fileData = await readFile(filePath, 'utf8')
  const sportdata = JSON.parse(fileData)
  const newsItem = sportdata.news.find(item => item.id === params.slug)

  return {
    title: `${newsItem.title} | Sports News`,
    description: newsItem.summary.substring(0, 160), // 160 characters तक
    alternates: {
      canonical: `https://yourdomain.com/news/${newsItem.id}`,
    },
    openGraph: {
      title: newsItem.title,
      description: newsItem.summary,
      images: [
        {
          url: newsItem.image,
          width: 800,
          height: 600,
          alt: newsItem.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description: newsItem.summary,
      images: [newsItem.image],
    }
  }
}


export default async function Page({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'sportsData.json')
  const fileData = await readFile(filePath, 'utf8')
  const sportdata = JSON.parse(fileData)
  const newsItem = sportdata.news.find(item => item.id === params.slug)

  return <Details initialNewsItem={newsItem} slug={params.slug} />
}


