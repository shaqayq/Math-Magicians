import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable */
class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.state={
      total : null,
      next:null,
      operation:null
    }
    this.getValue=this.getValue.bind(this);
  }

  getValue=(e)=>{
    const buttonName  =e.target.value;
    this.setState((prevValue)=>calculate({
      ...prevValue,
    },buttonName ));
    
  }

  result = () => {
    const { total, operation, next } = this.state;
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
  
  
  render() {
    return (
      <div className="container">
        <div className="resualt"><h5>{this.result()}</h5></div>
        <div className="content">
          <button value='Ac' onClick={this.getValue} type='submit'>Ac</button>
          <button value='+/-' onClick={this.getValue}  type='submit'>+/-</button> 
          <button value='%' onClick={this.getValue} type='submit'>%</button>
          <button value='÷' className="calculation" onClick={this.getValue} type='submit'>÷</button>
          <button value='7'onClick={this.getValue} type='submit'>7</button>
          <button value='8' onClick={this.getValue} type='submit'>8</button>
          <button value='9' onClick={this.getValue} type='submit'>9</button>
          <button value='x' className="calculation" onClick={this.getValue} type='submit'>x</button>
          <button value='4' onClick={this.getValue}>4</button>
          <button value='5' onClick={this.getValue}>5</button>
          <button value='6' onClick={this.getValue}>6</button>
          <button value='-' className="calculation" onClick={this.getValue}>-</button>
          <button value='1' onClick={this.getValue}>1</button>
          <button value='2' onClick={this.getValue}>2</button>
          <button value='3' id='button' onClick={this.getValue}>3</button>
          <button value='+' className="calculation" onClick={this.getValue}>+</button>
          <button value='0' className="zero" onClick={this.getValue}>0</button>
          <button value='.' onClick={this.getValue}>.</button>
          <button value='=' className="calculation" onClick={this.getValue}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
