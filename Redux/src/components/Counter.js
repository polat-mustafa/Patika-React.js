import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice'

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter</h1>
        <p>{counter.value}</p>
        <button onClick={() => dispatch(decrement())}>+</button>
        <button onClick={() => dispatch(increment())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment 5</button>
    </div>
  )
}

export default Counter