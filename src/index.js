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

        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]

        METHODS.forEach((method)=>{
            this[method]=this[method].bind(this)
        })
    }
    agregar(){
        // De esa manera no funciona porque apunta al metodo agregar y no a la clase TarjetaFruta
        // this.setState({cantidad: this.state.cantidad+1});
        this.setState({
            cantidad: this.state.cantidad+1
        })
    }

    quitar(){
        // De esa manera no funciona porque apunta al metodo agregar y no a la clase TarjetaFruta
        // this.setState({cantidad: this.state.cantidad+1});
        this.setState({
            cantidad: this.state.cantidad-1
        })
    }

    limpiar(){
        // De esa manera no funciona porque apunta al metodo agregar y no a la clase TarjetaFruta
        // this.setState({cantidad: this.state.cantidad+1});
        this.setState({
            cantidad: 0
        })
    }

    render(){
        return (
            <div>
                <h3>{this.props.name}</h3> 
                <div>
                    Cantidad: {this.state.cantidad}
                </div>
                <button 
                //Las razones por las que no se utiliza un arrow function es porque .setState ejecuta el metodo Render y React hace la comparación para verificar qué fue lo modificado. Ello en un proyecto con pocos componentes tal vez no represente mucho problema pero en uno con cientos o miles de componentes puede generar un problema.
                onClick={
                    // Esta línea es igual a la de abajo, solamente que el .bind(this) se mueve al constructor para que este pueda funcionar de manera más organizada
                    // this.agregar.bind(this)}>
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
            {/* Es lo mismo */}
            {/* Para pasar props es necesario utilizar llaves SIEMPRE, a excepción de cuando se pasa un string, en ese caso las llaves son opcionales */}
            <TarjetaFruta name='Sandía' price={3.45}/>
            <TarjetaFruta name='Naranja' price={1.20} />
            <TarjetaFruta name='kiwi' price={1.25} />
            <TarjetaFruta name={`${FrutaExotica}`} price={2.30} />


        </div>
    )

ReactDOM.render(<App/>,document.getElementById('root'));