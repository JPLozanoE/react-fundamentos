import React,{Component} from 'react';
  
const frutas=[
  'kiwi',
  'manzana',
  'coco',
  'naranja',
  'fresa',
  'arándano'
]
class App extends Component
{
  render(){
    return(
      <div>
        <ul>
          {frutas.map((fruta)=>{
            return(
            <li>{fruta}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
    export default App