import React from 'react';

const BioInfo = () => {
    return (
        <>
            <div>
                <div class="text-gray-600 body-font ">
                    <div class="container px-5 py-5 mx-auto">
                        <div class="flex flex-col text-center w-full">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 py-5">Bio Info</h1>
                            {/* <h2 class="font-medium text-sm text-[#3B3B3B]">Explore NC’s Boutique.
                                Look into our BTS, POVs, Tips, Styling recommendations and more!</h2> */}
                            <p class="lg:w-1/3 mx-auto leading-relaxed text-base">
                                Explore NC’s Boutique.
                                Look into our BTS, POVs, Tips, Styling recommendations and more!
                            </p>

                        </div>
                    </div>
                </div>
              
                <section class="overflow-hidden text-neutral-700">
                <div class="containe mx-auto px-5 lg:px-32 lg:pt-4">
                    <div class="-m-1 flex flex-wrap md:-m-2">
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src='images/image 2.svg' />
                            </div>
                        
                            <div class="ml-10 w-full p-1 md:p-2 ">
                                <img
                                    alt="gallery"
                                    class=" block h-full w-9/12	 rounded-lg object-cover object-center"
                                    src='images/image 2.svg' />
                            </div>

                        </div>
                        <div class="flex w-1/2 flex-wrap">

                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src='images/image 2.svg' />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src='images/image 2.svg' />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src='images/image 2.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <button class="flex mx-auto mt-10 text-[#6A5B40] rounded-[5px] border border-[#6A5B40] cursor-pointer py-1 px-20 rounded text-medium text-[14px] uppercase">View More</button>
            </div>
        </>
    )
}
export default BioInfo;