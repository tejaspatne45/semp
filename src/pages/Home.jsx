import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import HomeFeed from '../components/HomeFeed'
import ExploreBar from '../components/ExploreBar'

const Home = () => {
  return (
        <Layout title="Home/Twitter">
            <div className='flex h-screen'>
                {/* Sidebar */}
                <Sidebar></Sidebar>
                {/* Feed */}
                <HomeFeed></HomeFeed>
                {/* Explore */}
                <ExploreBar></ExploreBar>
            </div>
        </Layout>
  )
}

export default Home