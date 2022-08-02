import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="resualt"><h5>0</h5></div>
        <div className="content">
          <div className="item1"><p>Ac</p></div>
          <div className="item2"><p>+/-</p></div>
          <div className="item3"><p>%</p></div>
          <div className="calculation"><p>*</p></div>
          <div className="item1"><p>7</p></div>
          <div className="item1"><p>8</p></div>
          <div className="item2"><p>9</p></div>
          <div className="calculation"><p>x</p></div>
          <div className="item1"><p>4</p></div>
          <div className="item1"><p>5</p></div>
          <div className="item2"><p>6</p></div>
          <div className="calculation"><p>-</p></div>
          <div className="item1"><p>1</p></div>
          <div className="item1"><p>2</p></div>
          <div className="item2"><p>3</p></div>
          <div className="calculation"><p>+</p></div>
          <div className="zero"><p>0</p></div>
          <div className="item1"><p>.</p></div>
          <div className="calculation"><p>=</p></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
