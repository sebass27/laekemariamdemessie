import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m10 l8">
          <div className= "card">
            <div className="card horizontal">
              <div className="card-image grey darken-4">
                <img src={this.props.imageLink} alt={this.props.title} width="200px" height="60px"/>
              </div>
              <div className="card-content yellow accent-1">
                <span className="card-title">{this.props.title}</span>
                <span className= "flow-text">{this.props.text}</span>
              </div>
            </div>
            <div className="card-action purple">
                <a href={this.props.pageLink} className="link">Link to Article</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;