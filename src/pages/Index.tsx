
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import PopularRestaurants from '@/components/home/PopularRestaurants';
import FeaturedItems from '@/components/home/FeaturedItems';
import HowItWorks from '@/components/home/HowItWorks';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <FeaturedItems />
      <HowItWorks />
    </MainLayout>
  );
};

export default Index;
