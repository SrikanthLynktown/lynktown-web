import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
const Posts = () => {
    const router = useRouter()
    return (
        <>
            <section Name="overflow-hidden text-neutral-700 ">
                <div className="containe mx-auto px-5  lg:px-32 lg:pt-12  ">
                    <div className='py-10 '>
                        {/* <h6 className='text-center text-5xl font-normal	text-[#0A0A0A]'>All Posts</h6> */}


                        <div className="flex-grow md:text-center text-[18px] md:text-5xl font-normal text-[#0A0A0A] border-b border-[#CECECE] md:border-b-0 pb-4">
                            <div className=" inline-flex  uppercase">
                                <div className='md:invisible visible'>
                                    <Image onClick={() => router.push('http://localhost:3000/')}
                                        src='icons/arrowicon.svg'
                                        width={90}
                                        height={90}
                                        className='w-[12px] height-[12px] py-2 mr-4'
                                    />
                                </div>
                                <h6 className='text-[18px]  md:text-[52px] text-[#0A0A0A]  font-normal font-serif uppercase'>All Posts</h6>
                            </div>
                        </div>

                    </div>
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 67.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>

                            <div class="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 69.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className="flex w-4/6  flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 68.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 70.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 71.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>

                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 72.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 73.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 74.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>

                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 75.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-4/6  flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 76.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                        <div className="flex w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 77.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>

                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="images/Rectangle 77.svg"
                                    width={346}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Posts;