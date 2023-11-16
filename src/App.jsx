import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCard from './components/SideCard/SideCard';


function App() {

  return (
    <>
      <Header></Header>
      <div className='main row'>
        <div className="home-container col-md-8 card">
          <Home></Home>
        </div>
        <div className="sideCard-container col-md-4 card">
          <SideCard></SideCard>
        </div>
      </div>
    </>
  )
}

export default App
