import React from 'react';
import Image from 'next/image';
const ProfileModal = () => {
    return (
        <>
            <div className='w-[240px] h-[460px] bg-[#F5F5F5] rounded-lg p-'>
                <div className="flex items-center border-b-2 py-5 mb-3 p-2" >
                    <img className="w-[60px] h-[60px] rounded-full mr-4" src="images/dumy.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="lg:text-[18px] font-bold text-[#000000]">Robert Maxwell</p>
                    </div>
                </div>
                <div className='px-'>
                    <div className="flex border-b-2 py- pb-3 px-4 gap-4">
                        <Image
                            src="icons/notification.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>Notifications</p>
                    </div>

                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/wishlist.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>Wishlist</p>
                    </div>

                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/location.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>My Address</p>
                    </div>
                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/location.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                          
                        />
                        <p>Measurments</p>
                    </div>
                </div>

                <div
                    className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto py-4 px-4"
                    id="navbarSupportedContent1"
                    data-te-collapse-item>
                    <a
                        className="mt-2 mr-2 flex items-center lg:mt-0"
                        href="#">
                        <Image
                            src="images/Group 7739.svg" alt=""
                            loading="lazy"
                            width={100}
                            height={100}
                        />
                    </a>

                </div>

                <div className=''>
                    <button className="mt-5 mx-auto text-[16px] flex justify-center border border-[#DA1E28] text-[#DA1E28] font-medium py-1 px-6 rounded-full">
                        Loggout
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default ProfileModal;