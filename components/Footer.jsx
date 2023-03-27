import React from 'react';
import Image from 'next/image';
const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font bg-[#9C8861] mb-16 lg:mb-0 lg:pb-10">
                <div className="container py-4 px-5 lg:py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-full md:w-[560px] md:h-[288px] mr-4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left bg-white border border-[#FFFFFF] rounded-lg shadow md:flex-row">
                        <div className="flex m-4 bg-white  lg:pt-[20px]">
                            <Image alt="testimonial"
                                className="w-20 h-20 lg:w-40  lg:h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="images/image.svg"
                                width={20}
                                height={20}
                            />
                            <div className='pl-4 pt-[10px]'>
                                <h6 className='text-[14px] text-left lg:text-[25px] font-normal leading-[18px] lg:leading-[30px]  text-[#9C8861] '>About Lynk Town</h6>
                                <p className="mt-2 text-[10px] lg:text-[16px] font-normal leading-[18px] lg:leading-[30px] text-left font-Poppins ">lorem20 Lorem ipsum dolor lorem10 sit amet, consectetur adipiscing elit. Lorem dignissim consectetur penatibus ac amet aenean. sspendisse </p>
                            </div>
                        </div>

                    </div>


                    <div className=''>
                        <div className="lg:gap-14 flex-grow flex  md:pl-20 lg:-mb-10 md:m lg:mt- md:text-left text-center lg:ml-20">
                            <div className="lg:h-[203px]h-full md:w-1/2 w-full px-4 text-left">
                                <h6 className="mt-4 mb-2 capitalize text-[16px] lg:text-[18px] font-normal lg:leading-[30px] text-white">catagories</h6>
                                <div className="list-none mb-10 text-left">
                                    <li className='mb-2 cursor-pointer'>
                                        <a className=" capitalize text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">western wear</a>
                                    </li>
                                    <li className='mb-2 cursor-pointer'>
                                        <a className=" capitalize text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">new arrivals</a>
                                    </li>
                                    <li className='mb-2 cursor-pointer'>
                                        <a className=" capitalize text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">2022 new arrivals</a>
                                    </li>
                                    <li className='mb-2 cursor-pointer'>
                                        <a className=" capitalize text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">Ethnic wear</a>
                                    </li>
                                </div>
                            </div>
                            <div className="lg:w- lg:h-[203px] h-full md:w-1/2 w-full px-4 text-left">
                                <h6 className="mt-4 mb-3 capitalize text-[16px] lg:text-[18px] font-normal lg:leading-[30px] text-white">contact us</h6>
                                <div className="list-none mb-10 text-left">
                                    <div className='flex gap-3 mb-2 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 lg:w-10 lg:h-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>

                                        <a className="capitalize  text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">contact@company.com</a>
                                    </div>
                                    <div className='flex gap-3 mb-2 cursor-pointer'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                        <a className="capitalize  text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">(414) 687 - 5892</a>
                                    </div>
                                    <div className='flex gap-2 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>

                                        <a className="capitalize  text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">794 Mcallister St</a>
                                    </div>
                                    <div className='flex px-6'>
                                        <a className="capitalize  text-[10px] lg:text-[15px] font-normal lg:leading-[30px] text-white">San Francisco, 94102</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* play store */}

                        <div className=''>
                            <div class="container lg:py-4 mx-auto flex items-center md:flex-row flex-col">
                                <div class="lg:gap-14 flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                                    <button class="bg-black inline-flex lg:py-2 px-2 lg:px-5 rounded-lg items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-8 lg:w-6  lg:h-6" viewBox="0 0 512 512">
                                            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                        </svg>
                                        <span class="ml-2 lg:ml-4 flex items-start flex-col leading-none">
                                            <span class="text-[10px] lg:text-[14px] text-white mb-1">GET IT ON</span>
                                            <span class="text-[10px] lg:text-[14px] text-white font-medium">Google Play</span>
                                        </span>
                                    </button>
                                    <button class="bg-black inline-flex lg:py-2 px-2 lg:px-5 rounded-lg items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-8 lg:w-6  lg:h-6" viewBox="0 0 305 305">
                                            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                        </svg>
                                        <span class="ml-2 lg:ml-4 flex items-start flex-col leading-none">
                                            <span class="text-[10px] lg:text-[14px] text-white mb-1">Download on the</span>
                                            <span class="text-[10px] lg:text-[14px] text-white font-medium">App Store</span>
                                        </span>
                                    </button>
                                    <button class="visible lg:hidden">

                                        <Image className='w-[39px] h-[39px] md:w-[90px] md:h-[90px]'
                                            src="icons/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930508_827 1.svg"
                                            alt=""
                                            width={39}
                                            height={39}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* play store */}

                    </div>

                </div>

                <div className="">
                    <div className="border-t container mx-auto py-4 px-5 flex flex-wra flex-col sm:flex-row lg:gap-4">
                        <p className="text-[#FFFFFF] text-[10px] lg:text-[18px] text-center">Copyright © 2022 Company Name
                        </p>
                        <span className="flex sm:ml-auto sm:mt-0 mt-2 justify-cente sm:justify-start gap-">
                            <a className="">
                                <p className='text-[#FFFFFF] text-[9px] lg:text-[18px]'>All Rights reversed</p>
                            </a>
                            <a className="">
                                <p className='text-[#FFFFFF] text-[9px] lg:text-[18px] ml-1 lg:ml-4 lg:pl-4 pl-1 border-l-2 underline'>Terms and Conditions</p>
                            </a>
                            <a className="" >
                                <p className='text-[#FFFFFF] text-[9px] lg:text-[18px] ml-1 lg:ml-4 lg:pl-4 pl-1 border-l-2 underline' >Privacy Policy</p>
                            </a>
                            <a className="">
                                <p className='text-[#FFFFFF] text-[9px] lg:text-[18px] ml-1 lg:ml-4 lg:pl-4 pl-1 border-l-2 underline '>For Support</p>
                            </a>
                        </span>
                        <button class="lg:visible invisible">

                            <Image className=''
                                src="icons/vecteezy_whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent_18930508_827 1.svg"
                                alt=""
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;