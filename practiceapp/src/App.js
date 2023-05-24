import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inNumber, deNumber, mulNumber, divNumber } from './action'

const App = () => {

  let mystate = useSelector((state) => state.changeNumber)
  let myMul = useSelector((state) => state.multiplyTheNumber)
  let dispatch = useDispatch()

  return (
    <>
      <h1>reducer Pratice</h1>
      <h1>{mystate}</h1>
      <button onClick={() => dispatch(inNumber(5))}>+</button>
      <button onClick={() => dispatch(deNumber(5))}>-</button>

      <h1>{myMul}</h1>
      <button onClick={() => dispatch(mulNumber(5))}>+</button>
      <button onClick={() => dispatch(divNumber(5))}>-</button>
    </>
  )
}

export default App