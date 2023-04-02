import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import BioInfo from '@/components/LandingCardSection/BioInfo'
import LandingSection from '@/components/Landingsection'
import Arivals from '@/components/LandingCardSection/Arivals'
import RequestOrder from '@/components/LandingCardSection/RequestOrder'
import ArivalsHeader from '@/components/LandingCardSection/ArivalHeader'
import RecommnedHeader from '@/components/LandingCardSection/RecommendedHeader'
import Recommended from '@/components/LandingCardSection/Recommended'
import ProductsHeader from '@/components/LandingCardSection/ProductsHeader'
import Products from '@/components/LandingCardSection/Products'
import ProductsButton from '@/components/LandingCardSection/ProductsButton'
import ArivalsButton from '@/components/LandingCardSection/ArrivalsButton'
import RecommendedButton from '@/components/LandingCardSection/RecommendedButton'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '@/components/Footer'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='px-4'>
        <div className='bg-[#FFFFFF] rounded-b-lg mb-20'>
          <div >
            <Header />
          </div>

          {/* for Modal */}
          {/* <HomeModal /> */}
          {/* for Modal */}

          <div>
            <LandingSection />
          </div>
          <div>
            <BioInfo />
            <RequestOrder />


            {/* Arivals section */}
            <div>
              {/* for desktop */}
              <div className='w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9]  md:border-b-0 md:border-t-0'>
                <ArivalsHeader />
                <Swiper pagination={true} modules={[Pagination]} slidesPerView={4} className="mySwiper -mb-14 md:-mb-0"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 10
                    },
                  }}
                >
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Arivals />
                  </SwiperSlide>

                </Swiper>


                <div className='md:visible invisible'>
                  <ArivalsButton />
                </div>
              </div>
              {/* for desktop */}
            </div>

            {/* Arivals section */}


            <div className='lg:-mt-0 md:-mt-0 w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9] md:border-b-0'>
              <RecommnedHeader />
              <Swiper pagination={true} modules={[Pagination]} slidesPerView={4} className="mySwiper -mb-14 md:-mb-0"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  },
                }}
              >
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>

                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>

                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <Recommended />
                </SwiperSlide>

              </Swiper>

              <div className='md:visible invisible'>
                <RecommendedButton />
              </div>
            </div>

            {/* Products part */}
            <div className='w-full md:w-[1000px] lg:w-full py-4'>
              <ProductsHeader />
              <div >
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-4">
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-4">
                  <Products />
                  <Products />
                  <Products />
                  <Products />
                </div>

              </div>
              <div>
                <ProductsButton />
              </div>
            </div>
            {/* Products part */}

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

