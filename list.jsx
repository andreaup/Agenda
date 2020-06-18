import React from 'react';
import Card from "./Card";

class List extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (    
        this.state.users.map(user => {
            return (
                <Card
                photo={this.props.photo}
                firstName ={this.props.firstName}
                lastName = {this.props.lastName}
                city = {this.props.city}
                profession = {this.props.profession}
                entryDate ={this.props.entryDate}
                />
            );
        })
      );
    }
}


props.list.map(item => <Card info={item.info} />);

