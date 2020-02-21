import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'
// en este archivo se colocaron los componentes en la App.
// ESTE ES UN COMPONENTE FUNCIONAL, SIN ESTADO
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
    export default App