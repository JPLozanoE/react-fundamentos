import React from 'react';
import { Component } from 'react';

    class Contador extends Component
    {
        state={
            video: {
                title: 'Super video',
                likes: 0
            }
        }
        render()
        {
            return(
                // <h1>{this.state.video.title}</h1>
                <div>
                    <h1>
                        {this.state.video.title}
                    </h1>
                    <button onClick={this.add}>
                        Likes: ({this.state.video.likes})
                    </button>
                </div>
            )
        }

        add = () => {
            this.setState((state)=>({
                video:{
                    ...state.video,
                    likes:state.video.likes+1
                }
            }))
    }
}

const App = ()=>
    (
        <div>
            <Contador/>
        </div>
    )
    export default App