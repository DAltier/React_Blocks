import React, { Component } from 'react';
import './style.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

class Main extends Component{
  render(){
    return (
      <div className="main">
        <div className="content">
          <Subcontent/>
          <Subcontent/>
          <Subcontent/>
        </div>
        <Advertisement/>
      </div>
    );
  }
}

export default Main;