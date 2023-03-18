import react from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Image from 'next/image';
const Header = () => {
    return (
        <>
            <nav
                class="flex-no-wrap relative flex w-full items-center justify-between  py-4  dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-6">
                    <button
                        class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div
                        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item>
                        <a
                            class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
                            href="#">
                            <img
                                src="images/Group 7739.svg" alt=""
                                loading="lazy" />
                        </a>

                    </div>

                    <div class="flex justify-center mt-2 px-4">
                        <div class="mb-3 xl:w-64 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            <input
                                type="search"
                                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent px-3 py-1.5 text-[13px] font-normal text-[#9D9D9D]     focus:outline-none"
                                id="exampleSearch"
                                placeholder="Search for designers, brands and more" />
                        </div>
                    </div>

                    <div class="relative flex items-center">

                        <a
                            class="px-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#">
                            <img
                                src="icons/profile.svg"
                                class="h-[32px] w-[28px]"
                                alt=""
                                loading="lazy" />

                        </a>


                        <div class="relative" data-te-dropdown-ref>
                            <a
                                class="hidden-arrow px-4 flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                href="#"
                                id="dropdownMenuButton2"
                                role="button"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <img
                                    src='icons/profile.svg'
                                    class="h-[32px] w-[28px]"
                                    alt=""
                                    loading="lazy" />
                            </a>
                        </div>

                        <div class="relative" data-te-dropdown-ref>
                            <a
                                class="hidden-arrow  px-2 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                href="#"
                                id="dropdownMenuButton1"
                                role="button"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <img
                                    src='icons/notification.svg'
                                    class="h-[30px] w-[25px]"
                                    alt=""
                                    loading="lazy" />
                                <span
                                    class="absolute -mt-6 ml-3 rounded-full bg-[#DA1E28] py-0 px-1.5 text-xs text-white"
                                >1</span>

                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;