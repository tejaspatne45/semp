import React from 'react'
import TrendingCard from './TrendingCard'
import trendingData from '../data/trendingData.json'
import tweetData from '../data/tweets.json'
import WhoToFollowCard from './WhoToFollowCard'

const ExploreBar = () => {
  const trending = trendingData.map((item)=>{
    return <TrendingCard key={item.id} data={item} />
  })
  const WhoToFollow = tweetData.map((item)=>{
    return <WhoToFollowCard key={item.id} userData={item} />
})
  return (
    <div className='px-6 h-screen overflow-y-scroll'>
      <div className='flex flex-row bg-slate-100 rounded-full mt-2 p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input type="text" placeholder='search' className='bg-transparent w-full px-2 foucs:ring-0 outline-none' />
      </div>
      <div className='flex flex-col text-left bg-slate-100 rounded-2xl my-3 h-fit'>
        <p className='font-black text-lg p-3'>What's happening</p>
        {trending}
        <p className='font-normal text-blue-500 text-lg p-3 hover:font-semibold'>Show More</p>
      </div>
      <div className='flex flex-col text-left bg-slate-100 rounded-2xl my-3 h-fit'>
        <p className='font-black text-lg p-3'>Who To Follow</p>
        {WhoToFollow}
        <p className='font-normal text-blue-500 text-lg p-3 hover:font-semibold cursor-pointer'>Show More</p>
      </div>
    </div>
  )
}

export default ExploreBar