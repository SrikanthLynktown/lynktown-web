import react from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Image from 'next/image';
const Header = () => {
    return (
        <>
            <nav
                className="w-full md:w-[1000px] lg:w-full  flex-no-wrap relative flex items-center justify-between  py-4  dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start "
                data-te-navbar-ref>
                <div className="flex w-full flex-wra items-center justify-between px-6">
                    <button
                        className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item>
                        <a
                            className="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
                            href="#">
                            <img
                                src="images/Group 7739.svg" alt=""
                                loading="lazy" />
                        </a>

                    </div>

                    <div className="relative flex items-center ">
                        <div className="flex justify-center mt-2 md:px-4 ">
                            <div className="invisible md:visible mb-2 xl:w-72 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">

                                <input
                                    type="search"
                                    className="md:px-6 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent px-3 py-1.5 text-[13px] font-normal text-[#9D9D9D] focus:outline-none"
                                    id="exampleSearch"
                                    placeholder="Search for designers, brands and more" />

                                {/* <div className=''> */}
                                <Image
                                    src="icons/searchicon.svg"
                                    width={10}
                                    height={10}
                                    className='absolute w-[15px] h-[16px] top-[17px] ml-2'
                                />
                                {/* </div> */}
                            </div>

                            <div className='md:invisible visible mt-2 px-4'>
                                <Image
                                    src="icons/searchicon.svg"
                                    width={18}
                                    height={19}
                                    className='w-[18px] h-[19px] '
                                />
                            </div>
                        </div>


                        <div
                            className="flex md:visible invisible md:px-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#">
                            <Image
                                src="icons/Vector.svg"
                                className="w-[18px] h-[19px] md:h-[32px] md:w-[28px]"
                                alt=""
                                loading="lazy"
                                width={18}
                                height={19}
                                 />

                            <Image
                                src="icons/wishlist.svg"
                                className="visible md:invisible w-[18px] h-[19px] -ml-4 "
                                alt=""
                                loading="lazy"
                                width={18}
                                height={19}
                                 />

                        </div>


                        <div
                            className=" px-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#">
                            <Image
                                src='icons/profile.svg'
                                className="w-[18px] h-[19px] md:h-[32px] md:w-[28px]"
                                alt=""
                                loading="lazy"
                                width={18}
                                height={19}
                                 />
                        </div>

                        <div
                            className="hidden-arrow md:px-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#"
                            id="dropdownMenuButton1"
                            role="button"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            <Image
                                src='icons/notification.svg'
                                className="w-[18px] h-[19px] md:h-[30px] md:w-[25px]"
                                alt=""
                                loading="lazy"
                                width={18}
                                height={19}
                                 />
                            <span
                                className="absolute -mt-6 md:-mt-8 ml-1 md:ml-3 rounded-full bg-[#DA1E28] py-0 px-1 text-xs text-white"
                            >1</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;