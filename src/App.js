import React from 'react';
import { Button } from '@material-ui/core';
import { Form } from "semantic-ui-react";
import Card from "./components/card"
import List from "./components/list"


class Formulario extends React.Component{
 state ={
   list : [{
     name:"pepito",
     lastName:"perez",
     photo:"",
     city :"Bogotá",
     profession : "Ingeniero",
     entryDate :"06/06/2020"
   }]
 }
  render(){

    return(
      <div>
        {/* https://www.pngitem.com/pimgs/m/78-786420_icono-usuario-joven-transparent-user-png-png-download.png */}
        {/* <Card photo="" name ="pepito" lastName="perez" city="bogotá" profession="Ingeniero" entryDate ="06/06/2020" /> */}
        < List items={this.state.list}/>
      <Form onSubmit ={this.handleSubmit}>
        <Form.Input
            name="firstName"
            fluid
            label="Nombre"
            placeholder="Nombre"
            pattern = "/[a-zA-Z]/g"
            required
            
          />
        <Form.Input
            name="lastName"
            fluid
            label="Apellido"
            placeholder="Apellido"
            pattern = "/[a-zA-Z]/g"
            required
          />
        <Form.Input
            name="city"
            fluid
            label="Ciudad"
            placeholder="Ciudad"
            pattern = "/[a-zA-Z]/g"
            required
          />
        <Form.Input
            name="profession"
            fluid
            label="Profesion"
            placeholder="Profesión"
            required
          />
        <Form.Input
            name="entryDate"
            fluid
            label="Fecha Ingreso"
            placeholder="Fecha de ingreso"
            required
            type = "date"
          />
          <Button type="submit">
          Guardar
          </Button>
        
      </Form>
      </div>


    );
  }
}

// function App() {
//   return <Button color="primary">Hello World</Button>;
// }

export default Formulario;
