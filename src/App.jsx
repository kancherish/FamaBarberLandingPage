import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurLocation from "./components/OurLocation"
import OurService from "./components/OurService"
import Pricing from "./components/Pricing"
import TeamSection from "./components/TeamSection"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/WhyUs"

function App() {
  return (
    <div className="relative">
      {/* Header should be directly in the root layout */}
      <Header />

      <main className="pt-16 bg-gray-900"> {/* Add padding-top equal to header height */}
        <Hero />
        <AboutUs />
        <OurService />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Gallery />
        <TeamSection />
        <FAQ />
        <OurLocation />
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}

export default App