 import React, {Component } from 'react';

 class Card extends Component{

    render(){
        const {photo, name, lastName, city, profession, entryDate} = this.props
    return <div>
        <img src={photo} alt="portada"/>
        <p>{name}</p>
        <span>({lastName})</span>
        <p> city: {city}</p>
        <p> profession: {profession}</p>
        <p> entryDate: {entryDate}</p>
        </div>
    }
 }

export default Card;
