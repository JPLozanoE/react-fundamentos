import React from 'react'
// import './TarjetaFruta.css'
// Al importar styles de esta manera guardamos en el objeto styles las clases de estilo, el punto importante es el uso de la palarbra MODULE. Esto se usa para evitar la sobreescritura de clases.
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component{
    state={
        cantidad:0
    }
    // El método puede funcionar así
    agregar=()=>this.setState({cantidad: this.state.cantidad+1})

    quitar=()=>this.setState({cantidad: this.state.cantidad-1})

    limpiar=()=>this.setState({cantidad: 0})

    render(){
        const hasItems =this.state.cantidad>0
        // Separación de la lógica en una variable aparte.
        const activeClass=hasItems ? styles['card-active'] : '';
        //Utilizamos llaves y String templates para hacer un toggle entre TarjetaFruta y TarjetaFruta TarjetaFruta-activa en la clase de CSS
        const clases=   `${styles.card} ${activeClass}`
        // Otra manera de hacerlo es la siguiente (La manera tradicional):
        // const clases=   styles.card + activeClass

        return (
                <div className={clases}>
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
                    <hr/>
                    <p>${this.props.price}</p>
                    {/* Multiplicamos el Precio en la prop por la cantidad en el estado */}
                    <p>Total:${this.props.price * this.state.cantidad}</p>

                </div>  
            )
    }

}
export default TarjetaFruta
