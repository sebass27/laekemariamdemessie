
import React, { Component } from "react";
import './App.css';
import Card from './listings/Card';
import cardData from '../data/card-data.json';
import Nav from '../components/page_components/navbar'

class Home extends Component {
  render() {
    // cards are mapped with page link,image, title and summary text
    const Cards = cardData.map(element => {
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
      </React.Fragment>
    );
  }
}

export default Home;
