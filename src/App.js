import React from 'react';
import { Component } from 'react';
const Saludo = (props) => {
    return (
      <div>
        <div>
            {/* Si dentro de la prop name viene llena, entonces realizar <strong>{ props.name }</strong> */}
          { props.name && <strong>{ props.name }</strong>}
        </div>
        
        {/* si props trae consigo saluda */}
        { props.saluda
        
          ? (
              // Entonces retorna esto
            <h1>Hola, tu eres genial !</h1>
          )
          : (
            //   De lo contrario retorna esto
            <p>
              Woops, no hay saludo para ti!
            </p>
          )
        }
      </div>
    )
  
    // if (props.saluda) {
    //   return (
    //     <h1>Hola, tu eres genial !</h1>
    //   )
    // }
  
    // return (
    //   <p>
    //     Woops, no hay saludo para ti!
    //   </p>
    // )
  }
  
  const App = () => (
    <div>
      <Saludo
    //   Se envía la prop saluda. esta es recibida como true.
        saluda
        // Se envía la prop name con el valor 'Pablo'
        name='Pablo'
      />
    </div>
  )

    export default App