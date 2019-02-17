import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BodyImgs from "./components/BodyImgs";
import Foot from "./components/Foot";

import './App.css';

function App() {
    return (
    <div className = ".container-fluid">
    <Navbar/>
    <Header/>
    <BodyImgs/>
    <Foot/>
   </div> );
  }


export default App;
