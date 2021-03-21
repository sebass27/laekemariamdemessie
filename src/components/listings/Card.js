import React from 'react';



class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m10 l8 push-xs2 push-s2 push-m2 push-l2 pull-xs2 pull-s2 pull-m2 pull-l2">
          <div className= "card">
            <div className="card horizontal"> 
              <div className="title-grid">
                <div className="img-container">
                  <div className="center">
                    <img src={this.props.imageLink} alt={this.props.title}/>
                  </div>
                </div>
               
                <span className="card-title">{this.props.title}</span>
              </div> 
              <div className="card-content yellow accent-1">
                
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