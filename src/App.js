import React from 'react';
import { Component } from 'react';
// Práctica paike de eventos de REact. se trabaja con el evento onMouseMove.
const styles=
{
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

class App extends Component {

    state={
        text: 'wa',
        evento: ''
    }

    manejador = (event) =>
    {
        // console.log(event)
        this.setState({
            text:event.target.value,
            evento: event.type
        })  
    }

    render() 
    {
        return (
            <div>
                <input 
                type="text"
                onChange={this.manejador}
                onCopy={this.manejador}
                onPaste={this.manejador}
                />

                <h1>
                    {this.state.text}
                </h1>
                <h1>
                    {this.state.evento}
                </h1>
            </div>

            
        )
    }
}

    export default App