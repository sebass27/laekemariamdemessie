import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <li>
	      <a href={this.props.pageLink}>
		      <div class="img-container"> 
            <img src={this.props.imageLink} alt=""/>
          </div>
		      <h3>{this.props.title}</h3>
		      <p>{this.props.text}</p>
	      </a>
	    </li>
    );
  }
}

export default Card;