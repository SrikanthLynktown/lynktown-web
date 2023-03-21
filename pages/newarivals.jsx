import HeroSection from '@/components/HeroSection';
import LandingSection from '@/components/Landingsection';
import NewArivalHeader from '@/components/NewArivalHeader';
import React from 'react';

const IndedPage = () => {
    return (
        <>
            <div>
                <NewArivalHeader />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                </div>
            </div>
        </>
    )
}
export default IndedPage;