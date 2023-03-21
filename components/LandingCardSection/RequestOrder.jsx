import React from 'react'
import Image from 'next/image';
const RequestOrder = () => {
    return (
        <>

            <div className="relative text-gray-600 body-font relative mt-5 ">
                <div className="containe mx-auto flex px-5 py-5 items-center justify-center flex-col">
                    <Image src="images/order request card.svg" alt=""
                        width={1057}
                        height={570}
                    />

                    {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                </div>


                {/* <div class="absolute top-[200px] left-[40px] mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </div> */}
                <div className="p-4 ">
                    <div className="px-4 md:gap-4 lg:w-2/3 md:w-full flex absolute top-[100px] md:top-[385px] md:left-48 md:top-2/3 ">
                        <div className="flex-grow w-[249px] h-[58px] md:w-[627px] md:h-[146px] ">
                            <h6 className='text:[22px] md:text-[52px]  font-bold text-[#FFFFFF] font-sans '> Request order
                            </h6>
                            <p className='md:w-[464px] md:h-[35px] text-[#FFFFFF] font-normal text-[12px] md:text-[30px] font-sans py-2'>Buy anything you find interesting</p>

                        </div>
                        <div className=''>
                            <Image className='w:[30px] h-[30px] md:w-[75px] md:h-[75px] mt-2 md:mt-5 -ml-10 md:-ml-0'
                                src='icons/arrow.svg'
                                width={75}
                                height={75}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default RequestOrder;
