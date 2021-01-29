import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Hero from './components/Hero'
import './App.css'

class App extends Component {
  render () {
    return (
        <Container>
            <Navbar/>
            <Hero/>
        </Container>
    )
  }
}

export default App
