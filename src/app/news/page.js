// app/news/page.js
import News from './component/News'
import fs from 'fs'
import path from 'path'

async function getSportsData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'sportsData.json')
    const fileContents = await fs.promises.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error loading data:", error)
    return { news: [] }
  }
}

export default async function Page() {
  const sportsData = await getSportsData()
  return <News initialSportsData={sportsData} />
}


export const metadata = {
  title: 'Latest Sports News | Your Sports Portal',
  description: 'Get the latest updates on football, cricket, tennis and all major sports events.',
}