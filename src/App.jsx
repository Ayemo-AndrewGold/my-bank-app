import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Bank Photo' />
      <Campus />
      <Title subTitle='Testimonial' title='What Client says' />
      <Testimonials />
      <Title subTitle='Contact Us' title='Get intouch' />
      <Contact />
      </div>
    </div>
  )
}

export default App