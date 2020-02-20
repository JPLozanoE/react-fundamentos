import React from 'react';
import ReactDOM from 'react-dom';


// Componente de clase extender clase React.component y hacer uso del método render para regresar elementos
// Los componentes estatales se pueden modificar y actualizar utilizando ESTADO
class TarjetaFruta extends React.Component{
    constructor(){
        super()
        this.state={
            cantidad:5
        }
    }
    render(){
        return (
            <div>
                <h3>{this.props.name}</h3> 
        <div>Cantidad: {this.state.cantidad}</div>
                <button 
                onClick={() => {
                    // this.state.cantidad=100;
                    this.setState({cantidad: this.state.cantidad+1});
                    // El uso de forceupdate() no es una buena práctica
                    // this.forceUpdate();
                    }}>
                Agregar
                </button>
                <p>${this.props.price}</p>
                <hr/>
            </div>  
        )
    }
}
        var FrutaExotica='Fruta de Dragon'
const App = ()=>
    (
        <div>
            {/* Es lo mismo */}
            {/* Para pasar props es necesario utilizar llaves SIEMPRE, a excepción de cuando se pasa un string, en ese caso las llaves son opcionales */}
            <TarjetaFruta name='Sandía' price={3.45}/>
            <TarjetaFruta name='Naranja' price={1.20} />
            <TarjetaFruta name='kiwi' price={1.25} />
            <TarjetaFruta name={`${FrutaExotica}`} price={2.30} />


        </div>
    )

ReactDOM.render(<App/>,document.getElementById('root'));