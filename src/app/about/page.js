import React from 'react'
import HeroSection from './components/HeroSection'
import StoryTabs from './components/StoryTabs'
import ProductCategories from './components/ProductCategories'
import FeaturesSection from './components/FeaturesSection'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToActions'
import NewsletterSignup from '@/components/Newslater'


export default function AboutPage() {
  return (
    <>
        <HeroSection/>
        <StoryTabs/>
        <ProductCategories/>
        <FeaturesSection/>
        <Testimonials/>
        <CallToAction/>
        <NewsletterSignup/>
    </>
  )
}
