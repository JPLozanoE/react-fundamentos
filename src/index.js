import React from 'react';
import ReactDOM from 'react-dom';

// Los componentes siempre deben de comenzar con Mayúscula
// De retornarse solamente un elemento, realizarlo solo en una línea, de lo contrario utilizar paréntesis para una mejor indentación
        const TarjetaFruta = (props) => (
            <div>
                <h3>{props.name}</h3> 
        <p>${props.price}</p>
                <hr/>
            </div>  
        )

// TarjetaFruta también se puede declarar de la siguiente manera
        function TarjetaFruta2(props){
            console.log(props)
            return <div>
                <h3>{props.name}</h3> 
                <p>${props.price}</p>
                <hr/>
            </div>  
        }

        var FrutaExotica='Fruta de Dragon'

        // Componente Funcional
const App = ()=>
    (
        <div>
            {/* Es lo mismo */}
            {/* Para pasar props es necesario utilizar llaves SIEMPRE, a excepción de cuando se pasa un string, en ese caso las llaves son opcionales */}
            <TarjetaFruta name='Sandía' price={3.50}/>
            <TarjetaFruta name='Naranja' price={1.00} />
            <TarjetaFruta name='kiwi' price={1.00} />
            <TarjetaFruta name='Plátano' price={2.00} />

            {/* Uso de variables y string template, nótese el uso de Llaves */}
            <TarjetaFruta2 name={`${FrutaExotica}`} price={5.00} />

            {/* A esto */}
            {/* <TarjetaFruta></TarjetaFruta> */}

        </div>
    )

ReactDOM.render(<App/>,document.getElementById('root'));