
import './App.css';
import React from 'react';
import Header from './Contents/Menus/Header'
import SubMenuCont from './Contents/Menus/SubMenuCont';
import WeatherCont from './Contents/Weather/WeatherCont';
import News from './Contents/News';
import About from './Contents/About';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">          
        <Header/>         
        <Routes>                    
          <Route path="/weather/*" element={<SubMenuCont/>}/>             
          <Route path="/news" element={<News/>}/>
          <Route path="/about" element={<About/>}/>          
        </Routes>
    </div> 
  
  );
}



export default App;
