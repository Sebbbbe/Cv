import React, { Component } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import  frontImage from '../Image/natureImg3.jpg';
export class FrontPage extends Component {
 
  constructor(){
    super();
  }
  


  render() {
      return(
      <div>
 <nav class="navbar navbar-expand-lg navbar-light ">
     
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"  ></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item active ">
           <a class="nav-link text-white hoverEffect" href="#link-about-me" >About Me <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white hoverEffect" href="#link-kunskaper">Kunskaper</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white hoverEffect" href="#link-kurser">Kurser</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white hoverEffect " href="#link-projekt">Projekt</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white hoverEffect" href="#link-lia">LIA</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-white hoverEffect" href="#link-arbete">Arbete</a>
         </li>
       </ul>
     </div>
   </nav>
             <div  >
             <img   src={frontImage} style={{paddingLeft : "0"}}  alt=""   />
             </div> 
            
      </div>
      )
  }
}