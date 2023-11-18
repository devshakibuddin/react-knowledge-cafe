import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCard from './components/SideCard/SideCard';


function App() {
  const [readTime,setReadTime] = useState("");
  const handleReadTime = (time) =>{
     const previousReadTime = localStorage.getItem("readTime");
     if (previousReadTime) {
      const sum = parseInt (previousReadTime) + parseInt(time);
      localStorage.setItem("readTime", sum);
      setReadTime(sum)
      // console.log(sum);
     }
     else{
      localStorage.setItem("readTime",time);
      setReadTime(time)
     }
  }

  const handleTittle = (tittle) =>{
    const getTittleFromLS = localStorage.getItem(tittle)
    if (getTittleFromLS) {
      console.log('already exist');
    }
    else{
      localStorage.setItem(tittle,1);
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='main row'>
        <div className="home-container col-md-8 card">
          <Home handleReadTime={handleReadTime} handleTittle={handleTittle}></Home>
        </div>
        <div className="sideCard-container col-md-4 card">
          <SideCard readTime={readTime}></SideCard>
        </div>
      </div>
    </>
  )
}

export default App
