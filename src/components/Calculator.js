import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable */
const  Calculator = () =>{

  const [value , setValue] = useState({
    total : null , 
    next : null , 
    operation: null,
  });
  

 const getValue =(e)=>{
    const buttonName =e.target.innerText;
    setValue(calculate({...value} , buttonName));
    
  }


  const result = () => {
    const { total, operation, next } = value;
    return (
      <>
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </>
    );
  }

  return (
    <>
  <div className='calculator'>
    <h1 className='clucTitle'>Lets Do Some Math...</h1>
    <div className="container">
      <div className="resualt"><h5>{result()}</h5></div>
      <div className="content">
        <button value='AC' onClick={getValue} type='submit'>AC</button>
        <button value='+/-' onClick={getValue}  type='submit'>+/-</button> 
        <button value='%' onClick={getValue} type='submit'>%</button>
        <button value='÷' className="calculation" onClick={getValue} type='submit'>÷</button>
        <button value='7'onClick={getValue} type='submit'>7</button>
        <button value='8' onClick={getValue} type='submit'>8</button>
        <button value='9' onClick={getValue} type='submit'>9</button>
        <button value='x' className="calculation" onClick={getValue} type='submit'>x</button>
        <button value='4' onClick={getValue}>4</button>
        <button value='5' onClick={getValue}>5</button>
        <button value='6' onClick={getValue}>6</button>
        <button value='-' className="calculation" onClick={getValue}>-</button>
        <button value='1' onClick={getValue}>1</button>
        <button value='2' onClick={getValue}>2</button>
        <button value='3' id='button' onClick={getValue}>3</button>
        <button value='+' className="calculation" onClick={getValue}>+</button>
        <button value='0' className="zero" onClick={getValue}>0</button>
        <button value='.' onClick={getValue}>.</button>
        <button value='=' className="calculation" onClick={getValue}>=</button>
      </div>
    </div>
      </div>
    </>
  );

}

export default Calculator;
