import React from "react";
import './Weather.css';
// доступ к API сервиса погоды
/*const api = {
  key: 'c7616da4b68205c2f3ae73df2c31d177',   //2ccd7bcfe7d02d401563d4c18dc7ea92
  base: 'http://api.openweathermap.org/data/2.5/'
}*/

interface IWeatherIcon{
  icon: string;
  description: string;
}

interface IArrayWeatherIcon {
  [index: number]: IWeatherIcon;
}

export interface IWeather {
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
    pressure: number
  },
  weather: IArrayWeatherIcon  //any
} 

const upperCaseFirstLetter=(str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const WeatherCurrent: React.FC<{city: string, date: string, data: IWeather}> = ({city, date, data}) => {     
    if (data.main) {
      const url_icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      return (    
        <div className='weather-current-page'>                                        
         {/*} {console.log(data)}       */}
          <div className="weather-header">Погода на сегодня: {city}, {date}</div>  
          <div className="main-weather-params" >
            <p className = "temprature">{data.main.temp.toFixed()}°С</p>           
            <div className = 'weather-icon'>
              <img className = 'weather-img' src={url_icon} alt={data.weather[0].description}/>
            </div>
            <div className="weather-descr">{upperCaseFirstLetter(data.weather[0].description)}</div>  
                                          
          </div>        
          <p>Ощущается: {data.main.feels_like.toFixed()}°С</p> 
          <p>Влажность: {data.main.humidity}%</p> 
          <p>Давление: {Math.round(data.main.pressure*0.750064)} мм рт.ст.</p>  {/*МБар в мм рт ст*/ }                     
          
        </div>

      );  
    }         
  else  
    return (
     <div className='weather-current-page'>   
       {city ? <p>Погода для города {city} не найдена</p>:null}                                               
     </div>
    );
}  

const Weather3days: React.FC<{city: string, date: string, data: IWeather}> = ({city, date, data}) => {     
  if (data.main) {
    const url_icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return (    
      <div className='weather-current-page'>                                        
       {/*} {console.log(data)}       */}
        <div className="weather-header">Погода на 3 дня: {city}, {date}</div>            
          {/*<div className="main-weather-params" >
            <p className = "temprature">{data.main.temp.toFixed()}°С</p>           
            <div className = 'weather-icon'>
              <img className = 'weather-img' src={url_icon} alt={data.weather[0].description}/>
            </div>
            <div className="weather-descr">{upperCaseFirstLetter(data.weather[0].description)}</div>  
                                          
          </div>        
          <p>Ощущается: {data.main.feels_like.toFixed()}°С</p> 
          <p>Влажность: {data.main.humidity}%</p> 
          <p>Давление: {Math.round(data.main.pressure*0.750064)} мм рт.ст.</p>  {/*МБар в мм рт ст*/   }
                           
    </div>

    );  
  }         
else  
  return (
   <div className='weather-current-page'>   
     {city ? <p>Погода для города {city} не найдена</p>:null}                                               
   </div>
  );
}  
  

export {WeatherCurrent, Weather3days};



