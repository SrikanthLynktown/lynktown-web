import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '@/components/Footer'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const inter = Inter({ subsets: ['latin'] })

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
              <div className='invisible  md:visible -mt-[2150px] md:-mt-0 w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9]  md:border-b-0 md:border-t-0'>
                <ArivalsHeader />
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                  <SwiperSlide>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-full">
                      <Arivals />
                      <Arivals />
                      <Arivals />
                      <Arivals />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-full">
                      <Arivals />
                      <Arivals />
                      <Arivals />
                      <Arivals />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-full">
                      <Arivals />
                      <Arivals />
                      <Arivals />
                      <Arivals />
                    </div>
                  </SwiperSlide>

                </Swiper>

                <div className='md:visible invisible'>
                  <ArivalsButton />
                </div>
              </div>
              {/* for desktop */}

              {/* for Mobile */}
              <div className='py-4 md:hidden visible'>
                <ArivalsHeader />
                <Carousel >
                  <Arivals />
                  <Arivals />
                  <Arivals />
                  <Arivals />
                </Carousel>
              </div>
            </div>
            {/* for Mobile */}

            {/* Arivals section */}


            <div className='invisible  md:visible -mt-[2000px] lg:-mt-0 md:-mt-0 w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9] md:border-b-0'>
              <RecommnedHeader />
              <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
                <SwiperSlide className='lg:mb-10'>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:py-">
                    <Recommended />
                    <Recommended />
                    <Recommended />
                    <Recommended />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:py-">
                    <Recommended />
                    <Recommended />
                    <Recommended />
                    <Recommended />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='lg:mb-10'>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:py- ">
                    <Recommended />
                    <Recommended />
                    <Recommended />
                    <Recommended />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className='md:visible invisible'>
                <RecommendedButton />
              </div>
            </div>


            <div className='py-4 md:hidden visible'>
              <RecommnedHeader />
              <Carousel className=''>
                <Recommended />
                <Recommended />
                <Recommended />
                <Recommended />
              </Carousel>
            </div>
            {/* Recommended part */}


            {/* Products part */}
            <div className='w-full md:w-[1000px] lg:w-full '>
              <ProductsHeader />
              <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-4">
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
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

