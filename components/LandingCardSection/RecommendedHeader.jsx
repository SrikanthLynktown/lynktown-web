import React from 'react'
import { useRouter } from 'next/router';
const RecommnedHeader = () => {
    const router=useRouter()
    return (
        <>
            <div className='mt-5 md:py-4 md:mt-10'>
                <div className="flex items-cente flex-wrap  gap-28 px-5">
                    <h1 className='text-[16px] md:text-[42px] lg:text-[42px] text-[#333333] font-medium  md:ml-[350px] lg:ml-[500px] font-sans leading-[18px] md:mt-10'>Recomended</h1>
                    <h1 className='md:invisible visible justify-items-end cursor-pointer text-[#857250] text-[14px] font-medium font-serif leading-[20px] ' onClick={() => router.push('./recommended')}>View More</h1>
                </div>
            </div>
        </>
    )
}
export default RecommnedHeader;