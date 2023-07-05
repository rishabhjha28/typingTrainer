import React from 'react'
import { FiSettings } from 'react-icons/fi'

const SettingBar = () => {
    return (
        <div className=' bg-gray-500 py-3 flex justify-end'>
            <div className='pr-4 text-white font-extrabold text-2xl cursor-pointer hover:text-black'>
                <FiSettings />
            </div>
        </div>
    )
}

export default SettingBar