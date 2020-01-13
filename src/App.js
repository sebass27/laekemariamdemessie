import React from 'react';
import './App.css';

import Card from './components/Card';
import cardData from './card-data.json'

function App() {
  var cards = cardData.map(element => {
    return (<Card 
    pageLink={element.pageLink}
    imageLink={element.imageLink}
    title={element.title}
    text={element.text}
    />)
  });
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

export default App;
