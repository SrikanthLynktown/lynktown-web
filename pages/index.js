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
import Slider from '@/components/LandingCardSection/Slider'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='px-4'>
        <div className='bg-[#FFFFFF] rounded-b-lg mb-20'>
          <div >
            <Header />
          </div>
          <div>
            <LandingSection />
          </div>
          <div>
            <BioInfo />
            <RequestOrder />
            {/* Arivals section */}

            <div>
              <div className='invisible  md:visible -mt-[2150px] md:-mt-0 w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9]  md:border-b-0 md:border-t-0'>
                <ArivalsHeader />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <Arivals />
                  <Arivals />
                  <Arivals />
                  <Arivals />
                </div>
                <div className='md:visible invisible'>
                  <ArivalsButton />
                </div>
              </div>
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
            {/* Arivals section */}


            <div className='w-full md:w-[1000px] lg:w-full  border-b-4 border-[#D9D9D9] md:border-b-0'>
              <RecommnedHeader />
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <Recommended />
                <Recommended />
                <Recommended />
                <Recommended />
              </div>
              <div className='md:visible invisible'>
                <RecommendedButton />
              </div>
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

      </div>
    </>
  )
}

