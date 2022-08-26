import Description from "../description/description";
import classes from "./calculator.module.css"
import { useState } from "react";
import React from 'react'



const Calculator = () =>{
    const [ input, setInput ] = useState('');

    const addval = function(e){
        
        let value = e.target.innerText
        

        if (value === '0' && toString(input) === '0'){
            setInput(value)
        }
        else if (input !== 0){
            setInput(prev => prev + value)
        }
        
    }
    
    return(
        <div className={classes.container}>
            <Description description='A simple calculator for dividing, multiplying, summation and substraction'/>
            <div className={classes.wrapper}>
                <div className={classes.input}><input type='text' placeholder="Calculator)" disabled='True' value={input}></input></div>

                <div className={classes.tile}><button className={classes.button} onClick={addval}>0</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>1</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>2</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>/</button></div>

                <div className={classes.tile}><button className={classes.button} onClick={addval}>3</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>4</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>5</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>*</button></div>
                
                <div className={classes.tile}><button className={classes.button} onClick={addval}>6</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>7</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>8</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>+</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>9</button></div>
                
                <div className={classes.tile}><button className={classes.button} onClick={()=> setInput('')}>C</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={()=>{setInput(eval(input))}}>=</button></div>
                <div className={classes.tile}><button className={classes.button} onClick={addval}>-</button></div>
                
            </div>
        </div>
    )
}

export default Calculator;