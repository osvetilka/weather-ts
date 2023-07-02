import React from "react";
import './Header.css';
import logo from './logo.png';
import MainMenu from './MainMenu'


const Header = () => (
    <div className="header" >
      {/*}  <Logo className="App-logo"/>    */}
        <Logo/>
        <MainMenu/>
     </div>     
)


// логотип сайта
const Logo = () => (
  <a href="index.js"><img src={logo} alt="Прогноз погоды"/></a>
)


export default Header;
