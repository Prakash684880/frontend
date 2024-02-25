import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Services from './Components/Services/services'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/Appstore/AppStore'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'


const App = () => {



  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar/>
   <Hero/>
   <Services/>
   <Banner/>
   <AppStore />
    <Testimonial />
    <Footer />
    </div>
    </>
  )
}

export default App
