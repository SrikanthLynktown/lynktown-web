import React from 'react'
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <div className=''>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mt-5 md:mt-10">
                        <div className="flex flex-wrap -m-4">
                        <div className=" p-4 w-full">
                                <div className="block relative rounded overflow-hidden relative">
                                    <Image
                                        alt="ecommerce" class="object-cover object-center w-full h-full block" src="images/Rectangle 4530.svg"
                                        width={459}
                                        height={371}
                                    />
                                    <Image
                                        alt="ecommerce" class="object-cover object-center w-5 h-5 absolute top-4 left-[300px] md:left-[310px] lg:left-[240px] text-[#6C6C6C] block" src="icons/wishlist.svg"
                                        width={459}
                                        height={371}
                                    />
                                   
                                </div>
                                
                                <div className="mt-4">
                                    <h2 className="text-[#0A0A0A] md:text-[18px] font-serif font-bold not-italic">Blue Blue jeans jacket</h2>
                                    <h3 className="text-[#3B3B3B] md:[16px] font-normal font-sans">Sizes: S, M, L</h3>
                                    <div className="flex">
                                        <p className="text-[#0A0A0A] md:text-[16px] font-serif font-bold not-italic">$16.00</p>
                                        <p className="px-2 font-serif font-bold">$16.00</p>
                                        <p className="px-2 font-serif font-bold">$16.00</p>
                                        <p className="px-2 font-serif font-bold">$16.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default HeroSection