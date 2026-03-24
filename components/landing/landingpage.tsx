"use client"
import HeroSection from "./herosection"
import FeatureSection from "./featuresection"
import Navbar from "./navbar"
import FAQ from "./faq"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FAQ />
    </div>
  )
}

export default LandingPage
