import React from 'react';
import Image from 'next/image';
const WishList = () => {
    return (
        <>
            <div className="flex justify-center py-10 px-4 ">
                <div
                    className="border border-[#6A5B40] block max-w- w-[816px] rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
                    <div className="flex border-b border-[#6A5B40] py-3 px- dark:border-neutral-600 dark:text-neutral-50">
                        <Image
                            src='icons/Arrow 1.svg'
                            className='ml-10 w-[32px] text-[#000000]'
                            width={10}
                            height={10}
                        />
                        <h6 className='mx-auto text-[#6A5B40] text-[52px] font-normal font-serif '>Wishlist</h6>

                    </div>
                    <div className="p-6">

                        <div className="mx-auto flex flex-col items-center bg-whit border border-[#6A5B40] rounded-lg shadow md:flex-row ">
                            <Image
                                className="p-4 object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-lg" src="images/wishlistimg.svg" alt=""
                                width={10}
                                height={10}
                            />
                            <div className="flex flex-col text-left h-[140px] px-4">
                                <h5 className="text-[14px] text-[#0A0A0A] w-[112px] h-[17px]  font-medium font-sans leading-[18px] mb-4">Blue men kurta</h5>
                                <p className="text-[14px] text-[#0A0A0A] w-[50px] h-[17px]  font-bold font-sans leading-[18px] mb-4">₹1000</p>
                                <a href="" className='text-[#1A5E9D] underline text-[12px] font-normal font-sans leading-[20px] mb-4'>Product lynk</a>
                                <p className='text-[14px] text-[#3B3B3B] w-[50px] h-[17px]  font-medium font-sans leading-[18px]'>Size:  M</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default WishList;