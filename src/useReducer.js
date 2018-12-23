import React, { useReducer,useEffect,useState,useCallback,useMemo } from 'react'
const style = {
    block:{
        display:'block'
    }
}
//创建reducer
function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'reset':
            return { count: 0 };
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count <= 0 ? 0 : state.count - 1 };
        default:
            return state;
    }
}

const UseReducerDemo = () => {
    //useReducer(reducer,{默认值},{默认执行type})
    //默认值count为0,但默认执行一次increment
    const [state, dispatch] = useReducer(reducer, { count: 0 }, { type: 'increment' });
    const [tips,setTips] = useState(false);
    //异步增加
    const asyncIncrement = () => {
        setTimeout(()=>{
            dispatch({ type: 'increment' })
        },2000);
    }
    //当为0时提示不能再减了
    useEffect(()=>{
        if(!state.count){
            setTips(true);
        }else{
            setTips(false);
        }
    });
    //返回一个回调函数，如果tips值发生变化了函数重新渲染，否则不渲染
    const memoizedCallback = useCallback(()=>{
        console.log('useCallback run');
    },[tips]);
    //返回一个值，当tips的值发生变化时才调用
    const memoizedValue = useMemo(() => {
        console.log('useMemo run');
        return tips
    }, [tips]);
    return (
        <div>
            <p>
                <span>Count: {state.count}</span>
                <button onClick={() => dispatch({ type: 'reset' })}>还原</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={asyncIncrement}>async+</button>
                {
                    memoizedValue && <span style={style.block}>不能为负数哦</span>
                }
            </p>
            <p>
                <button onClick={memoizedCallback}>memoizedCallback</button>
            </p>
        </div>
    );
}
export default UseReducerDemo