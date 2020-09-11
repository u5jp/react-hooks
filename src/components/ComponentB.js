import React ,{useContext}from 'react'
import {CountContext} from '../App'


function ComponentB() {
  const countContext = useContext(CountContext)
  return (
    <>
      <button onClick={() => countContext.countDispatch({type:'increment1',value:1})}>increment</button>
      <button onClick={() => countContext.countDispatch({type:'decrement1',value:1})}>decrement</button>
      <button onClick={() => countContext.countDispatch({type:'reset'})}>reset</button>
    </>
  )
}

export default ComponentB