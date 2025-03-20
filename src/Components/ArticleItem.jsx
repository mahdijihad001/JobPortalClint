import React from 'react'



const ArticleItem = ({blogImage}) => {
    return (
        <div className='shadow bg-white rounded-[10px] p-2.5'>
            <img src={blogImage} className='w-full h-[320px] rounded-md hover:scale-105 duration-700' alt="" />
            <div className='p-4'>
                <h2 className='text-slate-400 font-medium text-[15px] pb-3'>August 31, 2021</h2>
                <h1 className='font-bold text-xl text-[#2f3238] mb-1.5 hover:text-blue-400 duration-500'>Attract Sales And Profits</h1>
                <p className='text-[14px] font-normal text-gray-400'>A job ravenously while Far much that one rank beheld after outside....</p>
                <button className='text-[17px] font-normal mt-2.5 text-blue-400 hover:text-blue-700'>Read More</button>
            </div>
        </div>
    )
}

export default ArticleItem