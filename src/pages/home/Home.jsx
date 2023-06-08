import React from 'react'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
/* import Novedades from '../../components/novedades/Novedades' */
import Products from '../../components/products/Products'
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Products />
        <Contact />
        {/* <Novedades /> */}
    </div>
  )
}

export default Home