import React from 'react'

import LiveScores from './component/LiveScores'


const page = () => {
  return (
    <>
    <LiveScores/>
    </>
  )
}

export const metadata = {
  title: 'Live Scores | Real-time Sports Updates',
  description: 'Stay updated with real-time scores of football, cricket, tennis and all your favorite sports. Instant updates and match stats.',
}


export default LiveScores