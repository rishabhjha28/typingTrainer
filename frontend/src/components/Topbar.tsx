import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='flex items-center justify-between bg-blue-700 px-4 py-3 sticky top-0'>
        <div className=' font-bold text-2xl text-white'>
            <Link to='/'>Typing Trainer</Link>
        </div>
        <div className='flex'>
            <div className='mr-2'>
                <Link to='/login'><button className='px-2 py-1 rounded-md bg-yellow-400'>Log in</button></Link>
            </div>
            <div className='ml-2'>
                <Link to='/register'><button className='px-2 py-1 rounded-md bg-white'>Sign up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar