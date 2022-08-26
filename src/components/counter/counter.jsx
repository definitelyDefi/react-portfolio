import React, { useState } from "react";
import Description from "../description/description";
import classes from './counter.module.css';
import { useDispatch, useSelector } from "react-redux";

import { decrease, increase, resetCounter } from "../../store/reducers/counterReducer";


const Counter = function(){
    debugger
    const dispatch = useDispatch()
    const number = useSelector(state => state.counter.count)

    const [ color, setColor ] = useState('#000');
    const [ displayInc, setDisplayDec] = useState('none')
    const [ displayDec, setDisplayInc] = useState('none')

    async function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    } 

    async function increment(){
        setColor('#32a852')
        dispatch(increase())
        setDisplayInc('block')
        await timeout(200)
        setColor('#000')
        setDisplayInc('none')
    }

    async function decrement(){
        setColor('#fa0000')
        dispatch(decrease())
        setDisplayDec('block')
        await timeout(200)
        setColor('#000')
        setDisplayDec('none')
        
    }

    function reset (){
        dispatch(resetCounter())
    }
    
    return (
        <>
            <Description description='Simple counter with 3 buttons - increase, decrease and reset'/>
            <div className={classes.wrapper}>
                <div className={classes.header}> 
                        <h4 className={classes.decrease} style={{'display': displayInc}}>-1</h4>
                        <h1 style={{'color':color}}>{number}</h1>
                        <h4 className={classes.increase} style={{'display': displayDec}}>+1</h4>
                </div>

                <div className={classes.buttons}>
                    <button className={classes.button} onClick={decrement}>-</button>
                    <button className={classes.button} onClick={increment}>+</button>
                </div>
                <button className={classes.reset} onClick={reset}>reset</button>

            
            </div>
        </>
    )
}


export default Counter;