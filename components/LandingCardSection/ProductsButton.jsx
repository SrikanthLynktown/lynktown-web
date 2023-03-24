import React from 'react'
import { useRouter } from 'next/router'

const ProductsButton = () => {
    const router = useRouter();

    return (
        <>
            <div className='p-4 w-full h-full md:w-[343px] md:h-[50px] flex mx-auto mt-10  text-[#6A5B40] rounded-[5px] border border-[#6A5B40] cursor-pointer rounded '>
                <button className="px-4 mx-auto md:px-28 text-[14px] font-bold md:font-normal font-sans leading-[18px]">View More</button>
            </div>
        </>
    )
}
export default ProductsButton;