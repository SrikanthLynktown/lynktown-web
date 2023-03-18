import React from 'react'
import Image from 'next/image';
const RequestOrder = () => {
    return (
        <>

            <section class="text-gray-600 body-font relative mt-5">
                <div class="containe mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img src="images/order request card.svg" alt="" />

                    {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                </div>
                <div class="p-4 ">
                    <div class="lg:w-2/3 md:w-full flex absolute top-2/3 left-60">
                        <div class="flex-grow  ">
                            <h1 className='text-2xl font-medium title-font text-white'> Request order
                            </h1>
                            <p className='text-[#FFFFFF] py-2'>Buy anything you find interesting</p>

                        </div>
                        <div className=''>
                            <Image className=''
                                src={'icons/arrow.svg'}
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>

                   
                </div>
            </section>
        </>
    )
}
export default RequestOrder;
