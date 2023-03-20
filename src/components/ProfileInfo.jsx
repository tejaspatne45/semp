import React from 'react'

const ProfileInfo = (props) => {
    const { coverPhoto, avatar, bio, location, website, dob, followersCount, followingCount, handle, fullname, joined } = props.profile;
    return (
        <div className='text-left border-b-2'>
            <div className='relative'>
                <img src={coverPhoto} alt="cover" className='h-full' />
                <img src={avatar} alt="profile" className='rounded-full w-32 absolute -bottom-10 left-4' />
            </div>
            <div className='mt-16 mx-3 flex flex-col'>
                <span className='font-bold text-2xl'>{fullname}</span>
                <span>@{handle}</span>
            </div>
            <div className='m-3'>
                <p className='text-lg'>{bio}</p>
                <section className='mt-5'>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-row gap-3'>
                            <article className='flex flex-row text-slate-600 gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p>{location}</p>
                            </article>
                            <article className='flex flex-row text-slate-600 gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <a href='https://www.instagram.com/super_broly' className='text-blue-500 hover:underline'>{website}</a>
                            </article>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <article className='flex flex-row text-slate-600 gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                                </svg>

                                <p>{dob}</p>
                            </article>
                            <article className='flex flex-row text-slate-600 gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>

                                <p>{joined}</p>
                            </article>
                        </div>
                    </div>
                </section>
                <section className='flex flex-row mt-3'>
                    <div className='mr-5'>
                        <span className='font-bold'>{followingCount}</span> Following
                    </div>
                    <div className='mr-5'>
                        <span className='font-bold'>{followersCount}</span> Followers
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ProfileInfo