import React from "react";
import "../index.css";
import Shivangi from "../img/ShivangiJoshi.jpg";
import Vishal from "../img/VishalPushpad.jpg";
import Nabya from "../img/NabyaDutt.jpg";

const AboutUs =()=>{
    return(
        <div>
             <section>
      <div class="row">
        <h1 className="text-headingColor lg:text-[3rem] font-bold" >Our Team</h1>
      </div>
      <div class="row">
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Vishal} />
            </div>
            <h3>Vishal Pushpad</h3>
            <p>Student-UPES | CSE | AIML</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Nabya}/>
            </div>
            <h3>Nabya Dutt</h3>
            <p>Student-UPES | CSE | AIML</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Shivangi}/>
            </div>
            <h3>Shivangi Joshi</h3>
            <p>Student-UPES | CSE | AIML</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>

    )
}
export default AboutUs;