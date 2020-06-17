import React from 'react';

class Card extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (    
        <div className="card">
          <img src={this.props.photo}/>
          <h5>{this.props.firstName} {this.props.lastName}</h5>
          <h6>{this.props.city}</h6>
          <p>{this.props.profession}</p>
          <h6 class="dateAdmis">{this.props.entryDate}</h6>
        </div>
      );
    }
}

