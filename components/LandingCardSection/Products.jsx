import React from 'react'
import Image from 'next/image';
const Products = () => {
    return (
        <>
             <section class="text-gray-600 body-font">
             <div class="container px-5 mt-5 md:mt-10 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 w-full">
                                <div class="block relative  rounded overflow-hidden">
                                    <div class="block relative  rounded overflow-hidden relative">
                                        <Image
                                            alt="ecommerce" class="object-cover object-center w-full h-full block" src="images/Rectangle 4530.svg"
                                            width={459}
                                            height={371}
                                        />
                                        <Image
                                            alt="ecommerce" class="object-cover object-center w-5 h-5 absolute top-4 left-80 sm:left-60 md:left-60 text-[#6C6C6C] block" src="icons/wishlist.svg"
                                            width={459}
                                            height={371}
                                        />
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Blue Blue jeans jacket</h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Sizes: S, M, L</h3>
                                    <div className="flex">
                                        <p className="mt-1 px-">$16.00</p>
                                        <p className="mt-1 px-2">$16.00</p>
                                        <p className="mt-1 px-2">$16.00</p>
                                        <p className="mt-1 px-2">$16.00</p>
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