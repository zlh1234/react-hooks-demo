import React,{useRef} from 'react'

const InputComponent = () => {
    const inputEl = useRef(null);
    const pEl = useRef(null);
    const handleChange = () => {
        //此处仅仅为了演示useRef
        var v = inputEl.current.value;
        console.log(inputEl.current.value)
        pEl.current.innerHTML = v;
    }
    return(
        <div>
            <input ref={inputEl} type="text" onChange={handleChange} />
            <p ref={pEl}></p>
        </div>
    )
}
export default InputComponent