import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "./components/News";
import Article from "./components/Article";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
  <div className="container">

    <header className="header">
      <nav>
        <div className="wrapper">
          <div className="logo2"><a href="http://localhost:3001/"><img src="https://ic.wampi.ru/2021/11/05/logo.png"></img></a></div>
          <ul className="snip1250">
            <li className="current"><a className="a" href="http://localhost:3001/" data-hover="Home">Home</a></li>
            <li><a className="a" href="football" data-hover="FOOTBALL">FOOTBALL</a></li>
            <li><a className="a" href="nba" data-hover="NBA">NBA</a></li>
            <li><a className="a" href="nhl" data-hover="NHL">NHL</a></li>
            <li>
              <a className="a" href="allsports" data-hover="ALL SPORTS">ALL SPORTS</a>
              </ li>
          </ul>   
        </div>  
      </nav>
    </header>

    <main className="main">
    <BrowserRouter>
    <Switch>
        <Route component={News} path="/" exact />
        <Route  path="/post/:id" children={ <Article/>} />
    </Switch>
    </BrowserRouter>
    </main>

    <footer className="footer-distributed">

      <div className="footer-left">
        <img className="logo1" src="https://ic.wampi.ru/2021/11/05/logo.png"></img>
        <p className="footer-links">
          <a href="#">Home</a>
          |
          <a href="#">About</a>
          |
          <a href="#">Contact</a>
          |
          <a href="#">Blog</a>
        </p>

        <p className="footer-company-name">Copyright @ 2021<strong>SagarDeveloper</strong>
        All rights reserved</p>
      </div> 

      <div className="footer-center">
            <div>
                <img src='https://img.icons8.com/material-sharp/2x/ffffff/marker.png'></img>
                <p><span>Belarus</span>
                    Brest</p>
            </div>

            <div>
                <img src='https://img.icons8.com/ios-glyphs/2x/ffffff/phone.png'></img>
                <p>+91 74**9**258</p>
            </div>
            <div>
                <img src='https://img.icons8.com/material-rounded/2x/ffffff/mail.png' className="email"></img>
                <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations
                and
                Effects along with
                HTML, JavaScript and Projects using C/C++.
            </p>
            <div className="footer-icons">
                <a href="#" className="fa-facebook"><img src="https://img.icons8.com/ios-filled/0.5x/ffffff/facebook-f.png"></img></a>
                <a href="#" className="fa-instagram"><img src="https://img.icons8.com/windows/0.9x/ffffff/instagram.png"></img></a>
                <a href="#" className="fa-linkedin"><img src="https://img.icons8.com/ios-glyphs/0.7x/ffffff/linkedin-2.png"></img></a>
                <a href="#" className="fa-twitter"><img src="https://img.icons8.com/glyph-neue/0.4x/ffffff/twitter.png"></img></a>
                <a href="#" className="fa-youtube"><img src="https://img.icons8.com/ios-filled/0.5x/ffffff/youtube.png"></img></a>
            </div>
        </div>
        
    </footer>

  </div>
  );
}
export default App;
