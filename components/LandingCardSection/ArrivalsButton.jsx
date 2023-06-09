import React from 'react'
import { useRouter } from 'next/router'

const ArivalsButton = () => {
    const router = useRouter();

    return (
        <>
            <div className='p-4 w-[150px] md:w-[343px] md:h-[50px] flex mx-auto mt-10  text-[#6A5B40] rounded-[5px] border border-[#6A5B40] cursor-pointer  rounded text-medium text-[14px] uppercase '>
                <button className="px-4 md:px-28 text-[14px] font-bold md:font-normal font-sans leading-[18px]" onClick={() => router.push('./newarivals')}>View More</button>
            </div>
        </>
    )
}
export default ArivalsButton;