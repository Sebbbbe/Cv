import React, { Component } from 'react';
import '../css/Home.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {AboutMe} from '../components/ReusableCode/AboutMe'
import { Link } from 'react-router-dom';
import {TwoStars} from '../components/ReusableCode/stars/TwoStars'
import { ThreeStars } from './ReusableCode/stars/ThreeStars';
import { FourStars } from './ReusableCode/stars/FourStars';
import { FiveStars } from './ReusableCode/stars/FiveStars';
import  aboutMeImage from '../Image/pictureOfMe.jpg';




export class Home extends Component {
  static displayName = Home.name;
  constructor(){
    super();
    this.state = {
      amountState : 0
    }
  }
  
 
  componentDidMount(){
    fetch('https://api.github.com/users/Sebbbbe/repos')
    .then(response => response.json())
    .then(json => {
      this.setState({
        amountRepos : json.length
      })
    });
  }

  render() {
  
   


    
    return (
      <div>
      <section className="img-container">
      <h1 class="centered">Sebastian Tiger 
      <br></br>
      Full-Stack Dev
      
      <a href="#link-about-me"><FiArrowDown   className="arrow-down " /> </a>
      </h1>
     
  
      
  
          </section>


        <section className="aboutMe">
            
         
          <h4 id="link-about-me" ><AboutMe /></h4>
          <img id="img-2" src={aboutMeImage} alt="" />
          <p className="margin-25">
            Hej, Jag heter Sebastian är  22 år gammal bott i Stockholm hela mitt liv och flyttade till göteborg för att lära mig programmera.
            Jag älskar att lära mig nya tekniker som gör det snabbare , bättre eller enklare.
            Min kärlek ligger på backend där jag jobbar med entity framework men jag lär mig full stack så jag vet vad som behövs för att få en hel sida att fungera.
            Jag studerar på handelsakademin till objektorienterad systemutvecklare i göteborg och har precis slutat mitt första år.
               </p>

        </section>
        <div class="container col-md-6">
        <div class="rows ">
        <section id="link-kunskaper" className="kunskaper" >
      


          <h4 > Kunskaper</h4>
          <section className=" flex-parent" >
        
          <p className=" flex-child" >C#    <FiveStars  /></p>
        
          <p   className=" flex-child">Entity framework   <FiveStars /></p>
          <p   className=" flex-child">LINQ    <FourStars /></p>
          <p   className=" flex-child">HTML5       <FiveStars /></p>
          <p   className=" flex-child">CSS     <FourStars /></p>
          <p   className=" flex-child">React  <ThreeStars /></p>
          <p   className=" flex-child">BootStrap <FourStars /></p>
          <p   className=" flex-child" >Axios    <TwoStars  /></p>
          <p className=" flex-child"  >sql server <ThreeStars /></p>
      
          </section>
        </section>
        </div>  
        </div>
        <section className="Verktyg "  >
          <h4 >Verktyg</h4>
          <p>Git</p>
          <p>ASP.net </p>
          <p>api</p>
          <p>uml - diagrams</p>

        </section>









        <div class="container test">
          <div class="row">



            <ul class="list-group  cool-md-6 col-xl-6 col-lg-6 margin-50 "  >
              <li class="list-group-item" id="link-kurser" >kurser som jag läst:</li>

              <li class="list-group-item list-group-item-success">Introduktion till systemutveckling 2v</li>
              <li class="list-group-item list-group-item-light">Introduktion till objektorientering 4v</li>
              <li class="list-group-item list-group-item-success">Objektorienterad programmering, grundläggande   12v</li>
              <li class="list-group-item list-group-item-light"> Objektorienterad analys 4v</li>
              <li class="list-group-item list-group-item-success">Objektorienterad design 4v</li>
              <li class="list-group-item list-group-item-light"> Databaser 6v</li>
              <li class="list-group-item list-group-item-success">Webbapplikationer 8v</li>
              <br></br>
            </ul>








            <ul class="list-group col-xl-6 cool-md-6 col-lg-6 margin-50 "   >
              <li class="list-group-item">Kurser som jag kommer läsa innan avslutad utbildning:</li>

              <li class="list-group-item list-group-item-success">Agil Projektledning 2v</li>
              <li class="list-group-item list-group-item-light">LIA1 -Lärande i arbete 8v</li>
              <li class="list-group-item list-group-item-success">Objektorienterad programmering avancerad 12v</li>
              <li class="list-group-item list-group-item-light">LIA 2 - lärande i arbete 12v</li>
              <li class="list-group-item list-group-item-success">examensarbete 2v</li>
              <li class="list-group-item list-group-item-light">Empty</li>
              <li class="list-group-item list-group-item-success">Empty</li>

            </ul>




          </div>
        </div>


        <section className="projekt margin-75" >
          <h4 id="link-projekt"> Projekt:</h4>
          <div class="container">

            <div className="col-lg-8 offset-lg-2" >
              <div class="card "    >
                <div class="card-header ">
                  <p> Grupparbete</p>

                </div>
                <div class="card-body">
                  <h5 class="card-title ">Resturang recension hemsida </h5>
                  <p class="card-text"><p>Där vi bygger en resturang recentions sida som låter användarna skriva recentioner om deras favoritställen. I detta projekt har jag fokuserat på backend delen med entity framework och lite
                  axios för att få ihop backend med frontend.
          </p></p>
                  <div class="text-center" >
                    <a href="https://github.com/Sebbbbe/WebbApplikation" target="_blank"  replace  class="btn btn-success" >Go To Project</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-8  " className=" col-lg-8 offset-lg-2" >

              <div class="card " className="card1" >
                <div class="card-header">
                  <p>Eget Arbete</p>
                </div>
                <div class="card-body" >
                  <h5 class="card-title">Queenslab backend inlämning:</h5>
                  <p class="card-text">Här byggde jag ett api som håller reda på antal besökare, både i butiken som helhet samt på varje avdelning.
         Håller reda på när besökare går in och lämnar butiken som sedan sparas.</p>
                  <div class="text-center" >
                    <a href="https://github.com/Sebbbbe/QueensLabBackEnd" target="_blank" class="btn btn-success">Go To Project</a>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="col-md-8   " className="col-lg-8 offset-lg-2">
      
              <div class="card" className="card1"  >
                <div class="card-header">
                  <p>Eget Arbete</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Första backend inlämningen:</h5>
                  <p class="card-text">Jag tänker bygga en bugtracker hemsida och som första inlämning på databaser var detta mitt projekt. Det är väldigt enkelt då det är första gången jag kom i kontakt med entity framework.</p>
                  <div class="text-center" >
                    <a href="#" class="btn btn-success">Go To Project</a>
                  </div>
                </div>
              </div>
            </div>
      

            </div>



        </section>
           <hr className="footer" />
           
     

      <div className="links">
      <a href="https://www.linkedin.com/in/sebastian-tiger-2917571ba/"  target="_blank">
      <FaLinkedin size={35} style={{ margin : 30 }}  />
      </a>


      <a href="https://github.com/Sebbbbe?tab=repositories"  target="_blank" className="github-logo"  >
      <FaGithub size={35}/>
      </a>

      <p >Antal repos i mitt github:  {this.state.amountRepos}</p>
     
      </div>

        
</div>
   


    );
  }
}
