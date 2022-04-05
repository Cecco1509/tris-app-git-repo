import React from 'react';
import Tris from './tris';
import './App.css';

export class App extends React.Component{

    render(): JSX.Element{
        return (
            <div >
                <div
                    className='App-header'
                >
                    <h1>Tris Game</h1>
                    <br/>
                    <Tris />
                </div>
            </div>
        );
    }
}

export default App;
