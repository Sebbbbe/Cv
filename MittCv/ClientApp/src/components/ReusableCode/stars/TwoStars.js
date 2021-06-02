import React, { Component } from 'react';

import {BsStar} from 'react-icons/bs';
import {BsStarFill} from 'react-icons/bs';




export class TwoStars extends Component {
    
    constructor(){
      super();
    }
    
   
  
    render() {
    
   
     // 
     // 
  
     const style = {color: 'green'};
      return (
          <div>
          
          <BsStarFill style={style} />
          <BsStarFill   style={style}/>
          <BsStar />
          <BsStar />
          <BsStar />
         
  
          
          </div>
      ) 

    }
}