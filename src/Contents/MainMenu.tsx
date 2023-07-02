import React from "react";
import './MainMenu.css';
/*import {Link} from "react-router-dom";*/

const MainMenu = () => (
    <div className="main-menu" >         
      { /* <li><Link to="weather/">Погода</Link></li>
        <li><Link to="weather/">Новости</Link></li>
        <li><Link to="weather/">О сайте</Link></li>   */}     
        <li><a href="#">Погода</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">О сайте</a></li>
     </div>     
)

export default MainMenu;