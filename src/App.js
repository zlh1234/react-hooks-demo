import React from 'react';
import HookTest from './stateHook'
import UseReducerDemo from './useReducer'
import InputComponent from './useRef'
import './App.css';

const App = () => {
    return <div className="App">
        <HookTest />
        <div>
            <UseReducerDemo />
            <InputComponent />
        </div>
    </div>
}

export default App;
