import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/contact"
import Testimonial from "./components/Testimonials/Testimonial"
import Title from "./components/Title/Title"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import Programs from "./components/programmes/programs"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What are Student saying'/>
        <Testimonial/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
