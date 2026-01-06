import React from 'react'
import Hero from '../_components/hero'
import Hero2 from '../_components/hero2'
import WhyUsSection from '../_components/whyUs'
import GrowthMission from '../_components/growthmission'
import ServicesHome from '../_components/seviceshome'
import FAQ from '../_components/faq\'s'
import Testimonials from '../_components/testimonials'

export default function HomePage() {
  return (
    <>
    <Hero />
    <Hero2 />
    <WhyUsSection />
    <Testimonials />
    <GrowthMission />
    <ServicesHome />
    <FAQ />
    </>
  )
}
