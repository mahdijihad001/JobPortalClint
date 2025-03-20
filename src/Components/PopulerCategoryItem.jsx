import React from 'react'
import { AiOutlineDollar } from 'react-icons/ai'

const PopulerCategoryItem = ({item}) => {
    return (
        <div className='flex items-center gap-2.5 shadow p-5'>
            <div className='bg-[#f3f4f7] p-6 rounded-md hover:bg-[#1967d2]'>
                <img src={item.icon} className='h-[40px] w-[40px] hover:filter hover:brightness-150 hover:invert text-blue-600' alt="" />
            </div>
            <div>
                <h1 className='font-bold text-gray-600 text-xl mb-2'>{item.department}</h1>
                <h2 className='text-[#696969]'>({item.openPositions} 0pen Position)</h2>
            </div>
        </div>
    )
}

export default PopulerCategoryItem