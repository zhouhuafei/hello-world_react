import React from 'react'
import logo from './logo.svg'
import './index.scss'
import HelloWorld from 'src/components/HelloWorld'

function Home () {
  return (
    <div className="Home">
      <header className="Home-header">
        <HelloWorld />
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  )
}

export default Home
