import React from 'react'


const WhoToFollowCard = (props) => {
    const {image, name, username} = props.userData;
  return (
    <div className='flex p-3 hover:bg-gray-300 items-center'>
        <img src={image} alt="profile-img" className='w-14 h-14 object-cover rounded-full' />
        <div className='flex flex-col flex-1 px-2'>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-lg text-gray-500 -my-1'>@{username}</p>
        </div>
        <button className='bg-black text-white rounded-full px-5 py-2 h-fit cursor-pointer'>Follow</button>
    </div>
  )
}

export default WhoToFollowCard