import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import './App.css'

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

class App extends Component {
  render () {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Resume/>
        </>
    )
  }
}

export default App
