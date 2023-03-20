import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import ExploreBar from '../components/ExploreBar'
import ProfileInfo from '../components/ProfileInfo'
import profileData from '../data/profileData.json'
import TweetCard from '../components/TweetCard'
import tweetData from '../data/tweets.json'

const Profile = () => {
  const profile = profileData;
  const allTweets = tweetData.map((item)=>{
    return <TweetCard key={item.id} tweetData={item}></TweetCard>
  })
  return (
    <Layout title="BROLY/Twitter">
      <div className='flex h-screen'>
        {/* Sidebar */}
        <Sidebar></Sidebar>
        {/* Profile */}
        <div className="flex-1 h-screen overflow-auto">
          <ProfileInfo profile={profile}></ProfileInfo>
          {allTweets}
        </div>
        {/* Explore */}
        <ExploreBar></ExploreBar>
      </div>
    </Layout>
  )
}

export default Profile