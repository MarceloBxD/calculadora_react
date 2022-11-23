import {GlobalStyle} from "./GlobalStyle.js";
import * as C from './GlobalStyle'
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState(undefined)

  const handleButton = (e) => {
    var input = e.target.value
    setNum(num + input)

    if(num === 0)
      setNum(input)

    console.log(num)
  }

  const clear = () => {
    setNum(0)
  }

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  const calculate = () => {
    if(operator === '/'){
      setNum(eval(oldNum / num))
    }
    else if(operator === '+'){
      setNum(eval(parseFloat(oldNum) + parseFloat(num)))
    }
    else if(operator === '-'){
      setNum(eval(oldNum - num))
    }
    else if(operator === 'X'){
      setNum(eval(oldNum * num))
    }
  }

  const percentage = () => {
    setNum(num / 100)
  }

  const changeSign = () => {
    if(num > 0){
      setNum(-num)
    }
    else{
      setNum(Math.abs(num))
    }
  }

  return (
    <div>
      <C.Typography>Calculadora em React</C.Typography>
      <C.ContainerCalc>
        <C.ResultArea><C.Typography>{num}</C.Typography></C.ResultArea>
        <C.ButtonsArea>
          <C.Button onClick={clear} value='C'>C</C.Button>
          <C.Button onClick={changeSign}>+/-</C.Button>
          <C.Button onClick={percentage} value='%'>%</C.Button>
          <C.Button onClick={operatorHandler} value='/' style={{color: "#fff", backgroundColor: 'orangered'}}>/</C.Button>
          <C.Button onClick={handleButton} value={7}>7</C.Button>
          <C.Button onClick={handleButton} value={8}>8</C.Button>
          <C.Button onClick={handleButton} value={9}>9</C.Button>
          <C.Button onClick={operatorHandler} value='X' style={{color: "#fff", backgroundColor: "orangered"}}>X</C.Button>
          <C.Button onClick={handleButton} value={4}>4</C.Button>
          <C.Button onClick={handleButton} value={5}>5</C.Button>
          <C.Button onClick={handleButton} value={6}>6</C.Button>
          <C.Button onClick={operatorHandler} value='-' style={{color: "#fff", backgroundColor:'orangered'}}>-</C.Button>
          <C.Button onClick={handleButton} value={1}>1</C.Button>
          <C.Button onClick={handleButton} value={2}>2</C.Button>
          <C.Button onClick={handleButton} value={3}>3</C.Button>
          <C.Button onClick={operatorHandler} value='+' style={{color: "#fff", backgroundColor:'orangered'}}>+</C.Button>
          <C.Button style={{visibility:'hidden'}} onClick={changeSign}>+/-</C.Button>
          <C.Button onClick={handleButton} value={0}>0</C.Button>
          <C.Button onClick={handleButton} value=','>,</C.Button>
          <C.Button onClick={calculate} style={{color: "#fff", backgroundColor:'orangered'}}>=</C.Button>
        </C.ButtonsArea>
      </C.ContainerCalc>
      <GlobalStyle />
    </div>
  );
}

export default App;
