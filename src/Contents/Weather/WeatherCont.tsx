import React, {useState} from "react";
import './WeatherCont.css';
import {WeatherCurrent/*, Weather3Days*/, IWeather} from "./Weather";
/*import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';*/


const current = new Date();    
const dateString = current.toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'});
 

const WeatherCont = () => (
    <div className="weather-cont" >       
        <Weather/>                        
     </div>     
)

const Weather = () => {    
   // const[textcity, setTextcity] = useState('');   
    const[city, setCity] = useState('');
    const[data, setData] = useState<IWeather>({main:{temp:0,feels_like:0,humidity: 0,pressure:0}, weather: [{icon:'', description:''}]}); 
   // const[state, setState] = useState(0);
    
    const getWeather = async(city: string): Promise<undefined> => {     
      const url =`http://api.openweathermap.org/data/2.5/weather?q=${city},RU&appid=2ccd7bcfe7d02d401563d4c18dc7ea92&lang=ru&&units=metric`;  
      const response = await fetch(url);
      const body = await response.json();
      setData(body);
      return undefined
      //console.log(body);      
   }
 
    return (
    <div className="weather" >   
         <input className={'search-city-input'} 
                placeholder ="Введите город"  
                type="text"                              
                value={city}
                onChange={(event)=> {                      
                  setCity(event.target.value);                                    
                  //setState(1);
                  }}     
               onKeyUp={(event)=>{if (event.key === "Enter") {
                                    getWeather(city)
                                   // setState(2);
                                  }} 
                       } 
         />  
         <button className="button-search" name="button-search" 
            onClick = {() => {
               getWeather(city);
             //  setState(2);
            } }          
         > Показать
         </button>      
       <div className = "cur-date-text">
          Сегодня {dateString}
       </div> 
       {/*state !==0 ? <WeatherCurrent city={city} date={dateString} data={data} /> : null*/}    
      {/*} <BrowserRouter>        
         <Routes>
            <Route path="curday" element={<WeatherCurrent city={city} date={dateString} data={data}/>} />
            <Route path="3day" element={<Weather3Days city={city} date={dateString} data={data}/>} />
         </Routes>  
         </BrowserRouter>                 */}
       <WeatherCurrent city={city} date={dateString} data={data} />   
     </div>     
    )
}

 





export default WeatherCont;