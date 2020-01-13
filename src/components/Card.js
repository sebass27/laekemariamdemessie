import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card">
            <div className="card-image">
              <img src={this.props.imageLink} alt={this.props.title} />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.text}</p>
            </div>
            <div className="card-action">
              <a href={this.props.pageLink}>Link to Article</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;