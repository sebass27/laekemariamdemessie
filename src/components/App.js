import React, { Component } from "react";
import './App.css';
import Card from './listings/Card';
import CardData from '../data/card-data.json';
import Nav from './page_components/navbar'
import Consent from './page_components/cookie-consent';

class Home extends Component {
  render() {
    // cards are mapped with page link,image, title and summary text
    const Cards = CardData.map(element => {
      return (
        <Card 
        pageLink={element.pageLink}
        imageLink={element.imageLink}
        title={element.title}
        text={element.text}
        />
      )
    });
    return (
      <React.Fragment>
        <Nav/>
        {Cards}
        <Consent/> 
      </React.Fragment>
    );
  }
}

export default Home;
