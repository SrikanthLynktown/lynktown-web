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
                </div>
                <div className="p-4 ">
                    <div className="gap-24 lg:w-2/3 md:w-full flex absolute  top-44 left-10 md:top-2/3 md:left-60">
                        <div className="flex-grow md:w-[627px] md:h-[146px] ">
                            <h1 className='text:[22px] md:text-[52px]  font-bold text-white font-sans '> Request order
                            </h1>
                            <p className='md:w-[464px] md:h-[35px] text-[#FFFFFF] font-normal text-[12px] md:text-[30px] font-sans py-2'>Buy anything you find interesting</p>

                        </div>
                        <div className='w:[30px] h-[30px] md:w-[75px] md:h-[75px]'>
                            <Image className=''
                                src='icons/arrow.svg'
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default RequestOrder;
