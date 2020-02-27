import React from 'react';
import { Component } from 'react';
//Manejando eventos, tipos de evento y contenido de eventos.

    class PersistenciaEventos extends Component
    {
        state={
            color:'blue'
        }
        manejador = (e) =>
        {
            const color = e.target.value
            this.setState( state => ({
                color: color
            })
            )
        }

        render(){
            return(
                <div>
                    <h1 style={{color:this.state.color}}>{this.state.color}</h1>
                    <input type="text"
                    onChange={this.manejador}
                    />
                </div>
            )
        }
    }

 const App = () => (
     <div>
         <PersistenciaEventos/>
     </div>
 )

    export default App