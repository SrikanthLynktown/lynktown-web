import React from 'react';

const BioInfo = () => {
    return (
        <>
            <div className='w-full md:w-[1000px] lg:w-full '>
                <div className="text-gray-600 body-font ">
                    <div className="container px-2 mt-28 md:mt-10 lg:mt-24 py-14 md:py-20  lg:py-10 mx-auto">
                        <div className="flex flex-col  w-full">
                            <h1 className="text-center text-[#0A0A0A] text-[20px] md:text-[42px] font-normal font-serif leading-[31px] py-5 md:mt-10">Bio Info</h1>
                            {/* <h2 className="font-medium text-sm text-[#3B3B3B]">Explore NC’s Boutique.
                                Look into our BTS, POVs, Tips, Styling recommendations and more!</h2> */}
                            <p className="w-[329px] h-[47px] md:w-full lg:w-full mx-auto text-[#3B3B3B] lg:text-center text-[14px] font-bold md:text-[20px] md:font-normal font-sans leading-7 text-left px-2">
                                Explore NC’s Boutique.
                                Look into our BTS, POVs, Tips, Styling recommendations and more!
                            </p>

                        </div>
                    </div>
                </div>

                <section className="overflow-hidden text-neutral-700">
                    <div className="containe mx-auto px-5 lg:px-32 lg:pt-4">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src='images/image 2.svg' />
                                </div>

                                <div className="ml-10 w-full p-1 md:p-2 ">
                                    <img
                                        alt="gallery"
                                        className=" block h-full w-9/12	 rounded-lg object-cover object-center"
                                        src='images/image 2.svg' />
                                </div>

                            </div>
                            <div className="flex w-1/2 flex-wrap">

                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src='images/image 2.svg' />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src='images/image 2.svg' />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src='images/image 2.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='p-4 w-full h-full md:w-[343px] md:h-[50px] flex mx-auto mt-10  text-[#6A5B40] rounded-[5px] border border-[#6A5B40] cursor-pointer rounded '>
                    <button className="px-4 mx-auto md:px-28 text-[14px] font-bold md:font-normal font-sans leading-[18px]">View More</button>
                </div>
            </div>
        </>
    )
}
export default BioInfo;