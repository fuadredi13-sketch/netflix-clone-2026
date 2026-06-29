import React from 'react'
import Header from "./Header/Header.jsx"
import Footer from './Footer/Footer.jsx'
import Banner from './banner/Banner.jsx'
import Rowlist from '../Rows/Rowlist/Rowlist.jsx'


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
      
    </div>
  )
}

export default Home
