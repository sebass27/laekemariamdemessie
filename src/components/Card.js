import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m10">
          <div class="card">
            <div class="card-image">
              <img src={this.props.imageLink} alt={this.props.title} />
              <span class="card-title">{this.props.title}</span>
            </div>
            <div class="card-content">
              <p>{this.props.text}</p>
            </div>
            <div class="card-action">
              <a href={this.props.pageLink}>Link to Article</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;