import React from 'react'
import { Link } from 'react-router-dom'

const Menuitem = ({ icon, title, link }) => {
    return (
        <Link to="" className='flex gap-2 p-2 rounded-full text-gray-600 active:text-sky-500 hover:text-black hover:bg-slate-200'>
            {icon}
            <Link to={title==="Home"? "/" :`/${title}`}><h3 className='font-medium'>{title}</h3></Link>
        </Link>
    )
}

export default Menuitem