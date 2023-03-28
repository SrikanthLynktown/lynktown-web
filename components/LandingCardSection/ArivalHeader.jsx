import React from 'react';
import { useRouter } from 'next/router';
const ArivalsHeader = () => {
    const router=useRouter()
    return (
        <>
            <div className=''>
                <h6 className='text-center md:text-[30px] leading-[18px] font-serif font-normal	text-[#161616] py-4 md:visible invisible'>~ Menu ~</h6>
                <div className="flex items-center flex-wrap  gap-28 px-5 py-1">
                    <h1 className='text-[16px] md:text-[42px] lg:text-[42px] text-[#333333] font-medium md:ml-[350px] lg:ml-[500px]  font-sans leading-[18px]  uppercase md:mt-10'>New Arivals</h1>
                    <h1 className='md:invisible visible justify-items-end cursor-pointer text-[#857250] text-[14px] font-medium font-serif leading-[20px]' onClick={() => router.push('./newarivals')}>View More</h1>
                </div>
            </div>
        </>
    )
}
export default ArivalsHeader;