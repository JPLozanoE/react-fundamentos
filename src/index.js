import React from 'react';
import ReactDOM from 'react-dom';

const name= 'Pablo Lozano'
const user={name:'Pablo Lozano',
            age:'20',
            country:'México'}

function getinfo(user)
{
    return `Hola mi nombre es ${user.name} y tengo ${user.age} años, el doble de mi edadd es ${user.age * 2}` 
}

const App = <h1>Hola React!*** {getinfo(user)} </h1>;

ReactDOM.render(App,document.getElementById('root'));