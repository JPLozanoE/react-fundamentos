import React from 'react';
import { Component } from 'react';
// Práctica paike de eventos de REact. se trabaja con el evento
const styles=
{
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

class App extends Component {

    state={
        x:0,
        y:0
    }

    manejador = (event) =>
    {
        // console.log(event)
        this.setState({
            x:event.clientX,
            y:event.clientY
        })  
    }

    render() 
    {
        return (
            <div style={styles}
            onMouseMove={this.manejador}>
            <div>
            X:{this.state.x}
            </div>
            <div>
            Y:{this.state.y}
            </div>
            </div>

            
        )
    }
}

    export default App