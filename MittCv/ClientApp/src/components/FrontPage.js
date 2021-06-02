import React, { Component } from 'react';
import { FiArrowDown } from 'react-icons/fi';
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
           <a class="nav-link" href="#link-about-me" >About Me <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#link-kunskaper">Kunskaper</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#link-kurser">Kurser</a>
         </li>
         <li class="nav-item">
           <a class="nav-link " href="#link-projekt">Projekt</a>
         </li>
       </ul>
     </div>
   </nav>
             <div  >
             <img   src="image/natureImg3.jpg" style={{paddingLeft : "0"}}  alt=""   />
             </div> 
            
      </div>
      )
  }
}