"use client"
import HeroSection from "./herosection"
import FeatureSection from "./featuresection"
import Navbar from "./navbar"
import FAQ from "./faq"
import Footer from "./footer"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
