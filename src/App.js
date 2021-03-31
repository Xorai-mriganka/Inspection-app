import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import React from 'react'
import Inspection from './components/Inspection/Inspection';


function App() {
  return (
    <div className="App">
      <Header/>
      <Inspection/>
      <Footer/>
    </div>
  )
}



export default App;
