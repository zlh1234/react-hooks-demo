import React from 'react';
import HookTest from './stateHook'
import useReducerDemo from './useReducer'
import InputComponent from './useRef'
import './App.css';

const App = () => {
    return <div className="App">
        <HookTest />
        <div>
            <useReducerDemo />
            <InputComponent />
        </div>
    </div>
}

export default App;
