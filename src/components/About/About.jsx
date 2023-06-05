import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const About = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col">
        <Header />
        <Footer />
      </header>
    </>
  )
}

export default About