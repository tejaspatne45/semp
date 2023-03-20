import React from 'react'
import HomeWidget from './HomeWidget'
import TweetCard from './TweetCard'
import tweetData from '../data/tweets.json'

const HomeFeed = () => {
    const allTweets = tweetData.map((item)=>{
        return <TweetCard key={item.id} tweetData={item} />
    })
  return (
    <div className='w-2/4 h-screen overflow-y-scroll'>
        <HomeWidget/>
        {allTweets}
    </div>
  )
}

export default HomeFeed