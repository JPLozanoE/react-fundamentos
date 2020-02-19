import React from 'react';
import ReactDOM from 'react-dom';

// Los componentes siempre deben de comenzar con Mayúscula
// De retornarse solamente un elemento, realizarlo solo en una línea, de lo contrario utilizar paréntesis para una mejor indentación
        const TarjetaFruta = () => (
            <div>
                <h3>Titulo</h3> 
                <hr/>
                <p>Descripción</p>
            </div>  
        )

// TarjetaFruta también se puede declarar de la siguiente manera
        function TarjetaFruta2(){
            return 
            <div>
                <h3>Titulo</h3> 
                <hr/>
                <p>Descripción</p>
            </div>  
        }

const App = ()=>
    (
        <div>
            {/* Es lo mismo */}
            <TarjetaFruta/>

            {/* A esto */}
            <TarjetaFruta></TarjetaFruta>

            <TarjetaFruta2/>   
        </div>
    )

ReactDOM.render(<App/>,document.getElementById('root'));