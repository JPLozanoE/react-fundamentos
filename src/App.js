import React from 'react';
import { Component } from 'react';
class Hijo extends Component {

    // El manejador de click envía las props al evento personalizado onSaluda
    manejadorClick = () => {
      this.props.onSaluda('Hola Pablo','M','23')
    }
  
    render () {
      return (
        <div className='box blue'>
          <h2>Hijo</h2>
          {/* El evento onClick del botón dispara el manejador de CLick */}
          <button
            onClick={this.manejadorClick}
          >
            Saluda
          </button>
        </div>
      )
    }
  }
  
//   Las propiedades del estado deben ser definidas.
  class App extends Component {
    state = {
      name: '',
      age: '',
      sex: ''
    }

    // El manejador recibre las props y cambia el estado
    manejador = (name,age,sex) => {
      this.setState({ name, age, sex })
    }
  
    render () {
      return (
        <div className='box red'>
          <Hijo
        //   El evento personalizado onSaluda recurre a su propio manejador
            onSaluda={this.manejador}
          />
          <h1>
            Nombre: { this.state.name }
          </h1>
          <h1>
            Edad: { this.state.age }
          </h1>
          <h1>
            Sexo: { this.state.sex }
          </h1>
        </div>
      )
    }
  }

    export default App