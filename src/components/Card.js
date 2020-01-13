import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m10 l8">
          <div className="card">
            <div className="card-image">
              <img src={this.props.imageLink} alt={this.props.title} width="150px" height="200px"/>
              
            </div>
            <div className="card-content brown lighten-5">
              <span className="card-title flow-text"><h2>{this.props.title}</h2></span>
              <span className= "flow-text">{this.props.text}</span>
            </div>
            <div className="card-action  teal darken-3">
              <a href={this.props.pageLink}>Link to Article</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;