import React from 'react'
// Este fichero (componentes) quedó como directorio para reutilizaación de componentes
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
export default TarjetaFruta
