"use client"
import HeroSection from "./herosection"
import FeatureSection from "./featuresection"
import Navbar from "./navbar"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  )
}

export default LandingPage
