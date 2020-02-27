import React from 'react';
import { Component } from 'react';

//Práctic con componente spread y maneras de actualizar el estado.

    const Gato =(props) =>
    (
        <div>
            <h1>Gato 🐈</h1>
            <pre>
                {JSON.stringify(props,null,4)}
            </pre>
        </div>
    )


class App extends Component {
    state=
    {
        fuerza:100,
        vidasRestantes:7,
        name:'Bicho'
    }
    render() 
    {
        const otrosDatos =
        {
            raza: 'tropical',
            peleasNocturnas:300
        }

        return (
            <div>
                <h1><Gato
                name='Garfield'
                age='1 año'
                {...otrosDatos}
                {...this.state}
                /></h1>
            </div>
        )
    }
}

    export default App