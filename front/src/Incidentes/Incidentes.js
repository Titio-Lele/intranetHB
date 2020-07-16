import React, { Component } from "react";

class Incidentes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            incidentes: [],
        }
    }

    async componentDidMount(){

        await 
        fetch('http://localhost:8080/api/')
        .then(response => response.json())
        .then((data) => this.setState({ incidentes : data }));
    }

    render(){
        const { incidentes } = this.state;

    return (
        <div>
        {incidentes.map( incidente => 
        <div key={incidente.id}>
            <p>{incidente.titulo}</p>
            <p>{incidente.descricao}</p>
        </div>
        )}
        </div>
    )}
}

export default Incidentes;