import React from "react";
import  './SubMenuCont.css';
import WeatherCont from  "../Weather/WeatherCont"
import {Link} from "react-router-dom";


const SubMenuCont = () => (
    <div className="sub-menu-cont" >
        {/*<Searchbar cityName='Введите город'/>                */}
        <SubMenu/>
        <WeatherCont/>
     </div>     
)

const SubMenu = () => (
    <div className="subnav">
        <div className="subnav-menu">            
            <Link to="today" className="subnav-menu-item">Сегодня</Link> 
            <Link to="3days" className="subnav-menu-item">3 дня</Link>
            <Link to="7days" className="subnav-menu-item">7&nbsp;дней</Link>
            <Link to="10days" className="subnav-menu-item">10&nbsp;дней</Link>             
            <Link to="month" className="subnav-menu-item">Месяц</Link>             
        </div>
    </div>   
)

/*const Searchbar = ({cityName}) => (
    <div class="search">
        <input type="search" class="search-input" placeholder={cityName} autocomplete="off"/>         
    </div>    
)*/

 

export default SubMenuCont;

