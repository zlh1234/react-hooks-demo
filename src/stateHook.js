import React,{ useState,useEffect } from 'react'

const HookTest = () => {
    const [obj,setValue] = useState({key:'count',value:0});
    const [arr,setArr] = useState([]);
    const handleChange = () => {
        const value = obj.value+1;
        //改变状态
        setValue(Object.assign(obj,{value}));
        setArr([...arr,obj.value]);
    }
    const handleNoChange = () => {
        setValue({...obj});
    }
    //更新钩子
    //useEffect(fn,[value])，第二个参数类似componentShouldUpdate里的比对优化，如果和上一次一致，就不更新
    //第二个参数传递一个[]，则为只执行一次,如有具体的值，如[obj.value]，那么obj.value变化时触发
    useEffect(()=>{
        // setArr([...arr,obj.value]);
        console.log('obj->',obj);
        console.log('arr->',arr);
        console.log(obj.value,'---------------------------------');
        return ()=>{console.log('卸载组件了')}
    },false);
    return (
        <div>
            <p>HookTest</p>
             {obj.key}:{obj.value}
             <p>
                <button onClick={handleChange}>累加</button>
                <button onClick={handleNoChange}>不变</button>
             </p>
        </div>
    )
}
export default HookTest