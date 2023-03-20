import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import tweetData from '../data/tweets.json'
import WhoToFollowCard from '../components/WhoToFollowCard'
import TabSection from '../components/TabSection'
import TrendingCard from '../components/TrendingCard'
import trendingData from '../data/trendingData.json'

const Explore = () => {
  const WhoToFollow = tweetData.map((item) => {
    return <WhoToFollowCard key={item.id} userData={item} />
  })
  // const trends = trendingData.map((item) => {
  //   return <TrendingCard key={item.id} data={item} />
  // })
  // filter
  // const trends = trendingData.filter((item) => item.category === "Finance").map((item) => {
  //   return <TrendingCard key={item.key} data={item} />
  // })
  const trends = trendingData.slice(0,3).map((item) => {
    return <TrendingCard key={item.key} data={item} />
  })

  return (
    <Layout title="Explore/Twitter">
      <div className='flex h-screen'>
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* trending */}
        <div className='flex flex-1 flex-col bg-white w-2/3 px-2 overflow-y-scroll'>
          {/* searchbar */}
          <div className="flex flex-row bg-slate-100 rounded-full mt-2 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full px-2 focus:ring-0 outline-none"
            />
          </div>
          {/* tab */}
          <TabSection />
          {/* banner */}
          <div className='border-b-2 '>
            <img src="https://wallpaper.dog/large/17139523.jpg" alt="banner" />
          </div>

          <div className='flex flex-col text-left bg-slate-100 rounded-2xl my-3 h-fit'>
            <p className='font-black text-lg p-3'>What's happening</p>
            {trends}
            <p className='font-normal text-blue-500 text-lg p-3 hover:font-semibold cursor-pointer'>Show More</p>
          </div>
        </div>
        {/* whotofollow */}
        <div className='flex flex-col bg-white w-1/3 px-3 overflow-y-scroll'>
          <div className='flex flex-col text-left bg-slate-100 rounded-2xl my-3 h-fit'>
            <p className='font-black text-lg p-3'>Who To Follow</p>
            {WhoToFollow}
            <p className='font-normal text-blue-500 text-lg p-3 hover:font-semibold'>Show More</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Explore