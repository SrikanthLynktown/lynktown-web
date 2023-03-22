import React from 'react';
import Image from 'next/image';
import '../styles/landing.module.css'
const LandingSection = () => {
    return (
        <>
            <div className="relative">
                <div className=' '>
                    <Image
                        src='images/image.svg' alt=""
                        className=''
                        width={1445}
                        height={838}
                    />
                </div>

                <div className="flex-grow pl-6 absolute top-[-15px] md:top-[180px] md:left-[138px] leading-[165px]">
                    <div className=" inline-flex md:text-[#FFFFFF]  text-[#FFFFFF] text-lg md:text-8xl font-normal text-[#0A0A0A]">
                        <h6 className='text-[54px] md:text-[138px]'>LynkTown</h6>
                    </div>
                </div>
                <div className="absolute top-[10px] left-[270px]  md:top-[50px] md:left-[1180px]">
                    <Image className='w-[49px] h-[49px] md:w-[90px] md:h-[90px]'
                        src="icons/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930508_827 1.svg"
                        alt=""
                        width={90}
                        height={90}
                    />
                </div>

                <div className="text-gray-600 body-font ">
                    <div className=' anding absolute top-[150px] left-1.5 md:top-96  md:left-40'>
                        <div className="p-4 w-[300px] h-[206px]  md:p-6 md:h-[504px] md:w-[1000px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row ">
                            <Image className="object-cover -mt-16 rounded md:-mt-0 w-[70px] h-[73px] md:w-[239px] md:rounded-lg  md:h-[411px]  left-[41px]" src="images/manager-new-workshop 1.svg" alt=""
                                width={90}
                                height={90}
                            />
                            <div className="flex flex-col md:p-14 leading-normal ">
                                {/* Following */}
                                <div>
                                    <div className='mr-4 md:mr-0 md:invisible visible ml-56 '>
                                        <Image src="icons/share.svg" className='w-[30px] h-[30px] md:w-[49px] md:h-[49px]' alt=""
                                            width={49}
                                            height={49}
                                        />
                                    </div>
                                    <p className='ml-52 w-[59px] h-[18px] text-[#897552] text-[14px] font-medium md:invisible visible'>following</p>
                                </div>
                                {/* Following */}
                                <div className='border-dotted border-b-2 border-[#999999] -mt-5 md:py-6'>
                                    <div className="flex gap-12 md:gap-0">
                                        <h5 className="md:mb-2 w-[133px] h-[31px] text-[20px] md:text-[38px] text-[#000000] md:w-[256px] md:h-[60px] lg:w-[256px] lg:h-[60px] font-normal font-serif">NC’s Boutique</h5>
                                        <div className='flex md:gap-6  md:ml-40 md:visible invisible '>
                                            <Image src="icons/share.svg" className='w-[30px] h-[30px] md:w-[49px] md:h-[49px]' alt=""
                                                width={49}
                                                height={49}
                                            />
                                            <Image src="icons/share.svg" className=' w-[30px] h-[30px] md:w-[49px] md:h-[49px]' alt=""
                                                width={49}
                                                height={49}
                                            />
                                        </div>
                                        {/* pass following icon */}
                                        {/* <div className='mr-4 md:mr-0 md:invisible visible'>

                                            <div className='bg-[#897552] text-[#FFFFFF] rounded-full p-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                                </svg>

                                            </div>
                                        </div> */}
                                        {/* pass following icon */}

                                    </div>
                                    <div className="flex gap-28">
                                        <p className='mb-3 w-[166px] h-[18px] text-[12px] md:text-[23px] font-normal md:w-[320px] md:w-[36px] font-sans md:mb-2'>lynktown.com/ncsboutique</p>
                                        {/* <p className='w-[59px] h-[18px] text-[#897552] text-[14px] font-medium md:invisible visible'>following</p> */}
                                    </div>
                                </div>
                                <div className='flex'>

                                    <div className='py-4'>
                                        <div className='flex gap-2 '>
                                            <Image src="icons/Heart.svg" className='w-[12px] h-[12px] md:w-[23px] md:h-[24px] mt-1 bg-[#FFFFFF]' alt=""
                                                width={23}
                                                height={24}
                                            />
                                            <p className='w-[97px] h-[18px] text-[12px] md:text-[23px]  md:w-[148px] md:h-[36px] font-normal font-sans'>100k love this</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <Image src="icons/location.svg" className='w-[12px] h-[14px] md:w-[23px] md:h-[28px] mt-1 bg-[#FFFFFF]' alt=""
                                                width={23}
                                                height={28}
                                            />
                                            <p className='w-full h-[18px] md:w-[252px] md:h-[36px] text-[12px] md:text-[23px] font-normal font-sans md:pt-0'>Kalyan nagar, Bangalore</p>
                                        </div>

                                        <div className='flex gap-2'>
                                            <Image src="icons/bag.svg" className='w-[12px] h-[14px] md:w-[23px] md:h-[28px] mt-1 bg-[#FFFFFF]' alt=""
                                                width={23}
                                                height={28}
                                            />
                                            <p className='w-[207px] h-[18px] md:w-full md:h-[36px] text-[12px] md:text-[23px] font-normal font-sans md:pt-0'>Prducts are readymade & Customise</p>
                                        </div>
                                       
                                    </div>

                                    <div className='flex gap-2 py-4  md:mr-0 md:invisible visible '>
                                        {/* <Image src="icons/bag.svg" className='w-[20px] h-[30px] bg-[#897552] text-red-300 rounded-full p-4' alt=""
                                            width={30}
                                            height={30}
                                        /> */}

                                        {/* <div className='relative w-[20px] h-[30px] bg-[#897552] text-[#FFFFFF] rounded-full px-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="absolute left-[4px] text-[#FFFFFF] top-[2px] w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>

                                        </div> */}
                                        <div>
                                            <Image src="icons/share.svg" className='w-[30px] h-[30px] ' alt=""
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <div>
                                            <Image src="icons/share.svg" className='w-[30px] h-[30px] ' alt=""
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div >
                                </div>
                                <button class="md:visible invisible  bg-[#897552] hover:bg-[#897552] md:w-[281px] py-1 text-white md:text-[20px] rounded ">
                                    <span>Follow</span>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default LandingSection;