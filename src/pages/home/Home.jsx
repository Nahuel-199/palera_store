import React from 'react'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Products from '../../components/products/Products'
import Contact from '../../components/contact/Contact';
import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Categories />
        <Products />
        <Contact />
    </div>
  )
}

export default Home