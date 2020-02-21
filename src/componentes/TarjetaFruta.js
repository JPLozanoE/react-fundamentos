import React from 'react'
// Este fichero (componentes) quedó como directorio para reutilizaación de componentes
// ESTE COMPONENTE ES UN COMPONENTE ESTATAL O DE CLASE, CON ESTADO
class TarjetaFruta extends React.Component{
    state={
        cantidad:0
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
        // Declaración de lógica para determinación de colores en CSS. Separar lógica del operador. cuando esté la variable en el operador solamente debe de compararse si la variable que contiene la condición es true or false
        const hasItems =this.state.cantidad>0
        const styles={
            border: '1px solid black',
            // Utilizar Camel Case para propiedades CSS. Otra alternativa es colocar comillas a las propiedades
            marginBottom: '1em',
            'border-radius': '0.5em',
            // IMPORTANTE, EL PADDING HACE MARGEN HACIA DENTRO. IMPORTANTE APRENDER A USAR CSS PINCHE MENSO
            padding: '1em',
            // USO DE OPERADORES TERNARIOS. EL OPERADOR TERNARIO HACE UN TOGGLE ENTRE DATOS EN CASO DE CUMPLIRSE O NO CUMPLIRSE UNA CONDICIÓN
            background: hasItems ? 'linear-gradient(45deg,black,#4a02f7)' : '#FFF',
            color: hasItems ? '#FFF' : '#000',
            transition: 'all 400ms ease-out'
        }
        return (
                <div style={styles}>
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
