import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { FrontPage } from './FrontPage';


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <FrontPage fluid style={{padding: 0}}/>
        <Container fluid   >
        
          {this.props.children}
        </Container> 
      </div>
    );
  }
}
