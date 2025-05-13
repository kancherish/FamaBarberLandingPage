import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import FAQ from "./components/FAQ"
import  Footer  from "./components/Footer"
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
    <>
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Hero/>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <OurService />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <TeamSection />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <OurLocation />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
