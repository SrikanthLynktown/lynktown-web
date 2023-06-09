import React from 'react'
import { useRouter } from 'next/router'

const Button = () => {
    const router = useRouter();

    return (
        <>
            <button className="flex mx-auto mt-10 text-[#6A5B40] rounded-[5px] border border-[#6A5B40] cursor-pointer py-1 px-20 rounded text-medium text-[14px] uppercase" onClick={() => router.push('./newarivals')}>View More</button>
        </>
    )
}
export default Button;