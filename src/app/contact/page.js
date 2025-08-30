import React, { Suspense } from 'react'
import HeroSection from './components/HeroSection'
import ContactMethods from './components/ContactMethods'
import ContactForm from './components/ContactForm'
import BusinessInfo from './components/BuisnessInfo'
import FAQSection from './components/FAQSection'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-stone-50">
      <HeroSection />
      <ContactMethods />
      <div className="py-20 bg-gradient-to-r from-stone-50 to-cream-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
            <BusinessInfo />
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  )
}
