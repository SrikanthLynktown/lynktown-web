import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

const NewArivalHeader = () => {
    const router = useRouter();

    return (
        <>
            <div className="relative border-b border-[#CECECE] md:border-b-0 -mt-20 md:-mt-0">
                <div className='invisible md:visible'>
                    <Image
                        src='images/newarivalimage.svg' alt=""
                        className='w-full h-1/2 md:w-full'
                        width={1400}
                        height={426}
                    />
                </div>

                <div class="flex justify-end md:px-6 md:mt-10 md:visible invisible">
                    <div class="relative">
                        <select class="rounded-[5px] border border-[#DADADA] appearance-none focus:outline-none  pl-3  w-[110px] h-[40px] ">
                            <option>Filter</option>
                            <option>All</option>
                            <option>Arivals</option>
                            <option>All Posts</option>
                        </select>
                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" class="w-4 h-4 mt-1" viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="flex-grow px-6  absolute top-[60px] md:top-[60px] lg:top-1/2 md:left-12 ">
               
                    <div className="gap-6 md:gap-0 mt-10 md:mt-0 inline-flex ">
                        <div className='md:invisible visible'>
                            <Image onClick={() => router.push('http://localhost:3000/')}
                                src='icons/arrowicon.svg'
                                width={90}
                                height={90}
                                className='w-[12px] height-[12px] py-2 mr-4'
                            />
                        </div>
                        <h6 className='text-[18px] md:text-[50px] text-[#0A0A0A] md:text-[#FFFFFF] font-normal font-serif md:leading-[165px] uppercase '>New Arivals</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewArivalHeader;