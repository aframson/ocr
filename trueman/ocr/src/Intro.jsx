import React from 'react'
import ima from './assets/dr.gif'
import ucc from './assets/ucc.png'
import './style.css';
import a1 from './assets/1.png'
import a2 from './assets/2.png'
import a3 from './assets/3.png'
import Drugs from './Drugs';
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";

function Intro() {
  return (
    <>
      <div className='container'>
        <div className='navigation'>
          <ul>
            <li>
              <a className='title2' href="Home">AppName</a>
              <Link to="/">Home</Link>
              <Link to="/start">Get Started</Link>
            </li>
          </ul>
        </div>
        <div className='grid-box'>
          <div className='pan'>
            <div className='title'>Get Drugs Instantly from Reciepts</div>
            <p className='sub'>
              Hey just upload the reciept your doctors gives to you on this platform and it will recommend a
              Drug for you instantly
            </p>
            <Link to="/start">
              <button className='start'>Get Started</button>
            </Link>
          </div>
          <div className='pan'>
            <img className='image' src={ima} alt="logo" />
          </div>
        </div>
        <div className='process'>
          The Process
        </div>
        <div className='grid'>
          <div className='pp'>
            <center>
              <img src={a1} className="imf" />
            </center>
            <p className='txt'>
              1. First upload reciept onto the platform and wait for OCR process
            </p>
          </div>
          <div className='pp'>
            <center>
              <img src={a2} className="imf" />
            </center>
            <p className='txt'>
              2. Converted text is passed through our datasets and matched to an available drug
            </p>
          </div>
          <div className='pp'>
            <center>
              <img src={a3} className="imf" />
            </center>
            <p className='txt'>
              3. drug is presented for you to buy or get it delivered at your door step
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="sec">
            <div class="devs">
              <div className="sec-title">Developers</div>
              <div className="name">Trueman</div>
              <div className="name">Atta Mills</div>
              <div className="name">Nana Akufo Ado</div>
            </div>
          </div>
          <div class="sec">
            <div className="sec-title">Acknowledgment</div>
            <p class="ark">
              This is a project of the University of Cape Coast ,
              <br />built under the supervision of <span class="active">Mr. Vice President</span>
            </p>
          </div>


          <div class="sec">
            <img className="ucc" src={ucc} alt="" srcset="" />
          </div>
        </div>
      </div>
     
    </>

  )
}

export default Intro;