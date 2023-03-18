import React from 'react';
import Image from 'next/image';
const LandingSection = () => {
    return (
        <>
            <div class="relative">
                <Image 
                    src='images/image.svg' alt=""
                    className='w-full'
                    width={90}
                        height={90}
                />
                {/* <div class="absolute top-14 left-3/4"> */}
                    <Image className='absolute  top-4 left-96 w-10 md:w-20 sm:left-[400px] md:left-[1200px]'
                        src="icons/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930508_827 1.svg"
                        alt=""
                        width={90}
                        height={90}
                    />
                {/* </div> */}

                {/* <section class="text-gray-600 body-font ">
                    <div class=" mx-auto flex items-center justify-center flex-col absolute top-3/4  md:left-60">
                        <div class="p-4 lg:w-1/2 md:w-40 ">
                            <div class="bg-[#897552] flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row">
                                
                                <img class="w-16 h-16  rounded" alt="hero" src="https://dummyimage.com/720x600" />

                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}
                {/* <img class="lg:w-2/5 md:w-3/6 w-2/6  object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}

            </div>
        </>
    )
}
export default LandingSection;