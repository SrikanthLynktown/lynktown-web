import React from 'react'
import Image from 'next/image';
const Products = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mt-5 md:mt-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="w-full">
                            <div className="block relative rounded overflow-hidden relative">
                                <Image
                                    alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Rectangle 4530.svg"
                                    width={459}
                                    height={371}
                                />
                                <Image
                                        alt="ecommerce" className="object-cover object-center w-5 h-5 absolute top-4  md:left-[240px] left-[130px]  text-[#6C6C6C] block" src="icons/wishlist.svg"
                                        width={459}
                                        height={371}
                                    />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-[#0A0A0A] text-[10px] leading-[15px] md:text-[18px] font-serif font-bold not-italic">Blue Blue jeans jacket</h2>
                                <h3 className="text-[#3B3B3B] text-[9px] leading-[14px] md:[16px] font-normal font-sans">Sizes: S, M, L</h3>
                                <div className="flex w-[115px]">
                                    <p className="text-[#0A0A0A] text-[9px] md:text-[16px] font-sans  font-bold not-italic">$16.00</p>
                                    <p className="px-2 text-[9px] font-sans  font-bold">$16.00</p>
                                    <p className="px-2 text-[9px] font-sans font-bold">63%</p>
                                    <p className="px-2 text-[9px] font-sans  font-bold uppercase">Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products;