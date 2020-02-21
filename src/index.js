import React from 'react';
import ReactDOM from 'react-dom';

//Eliminamos el constructor y cambiamos de utilizar metodos a arrow functions para así evitar el bind, ambas formas son correctas. A esta manera de trabajar se le llama utilizar inicializadores de propiedad.

// LOS INICIALIZADORES DE PROPIEDAD SON UTILIZADOS PERO NO SON ESTÁNDAR, LA MANERA MÁS CORRECTA DE TRABAJAR ES LA VISTA EN LA LECCIÓN ANTERIOR
class TarjetaFruta extends React.Component{
    state={
        cantidad:5
    }
    // El método puede funcionar así
    agregar=()=>this.setState({cantidad: this.state.cantidad+1})
    
    // o así
    // agregar=()=>this.setState({
    //     cantidad: this.state.cantidad+1
    // })

    quitar=()=>this.setState({cantidad: this.state.cantidad-1})

    limpiar=()=>this.setState({cantidad: 0})

    render(){
        return (
                <div>
                    <h3>{this.props.name}</h3> 
                    <div>
                        Cantidad: {this.state.cantidad}
                    </div>
                    <button 
                    onClick={
                        this.agregar}>
                    +
                    </button>
                    <button 
                    onClick={
                        this.quitar}>
                    -
                    </button>
                    <button 
                    onClick={
                        this.limpiar}>
                    Limpiar
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
            <TarjetaFruta name='Sandía' price={3.45}/>
            <TarjetaFruta name='Naranja' price={1.20} />
            <TarjetaFruta name='kiwi' price={1.25} />
            <TarjetaFruta name={`${FrutaExotica}`} price={2.30} />
        </div>
    )

ReactDOM.render(<App/>,document.getElementById('root'));