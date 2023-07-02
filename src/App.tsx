
import './App.css';
import React from 'react';
import Header from './Contents/Header'
import SubMenuCont from './Contents/SubMenuCont';
import WeatherCont from './Contents/Weather/WeatherCont';
//import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">          
        <Header/>      
        <SubMenuCont/>      
        <WeatherCont/>      
    
    </div> 
  
  );
}



export default App;
