import React ,{useState,useEffect,useRef}from 'react'


function Count() {
  const [count,setCount] = useState(0)
  const intervalRef = useRef()

  useEffect(()=>{
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount +1)
    },1000)
    return()=> {
        clearInterval(intervalRef.current)
    }
  },[])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>clearInterval(intervalRef.current)}>ストップ</button>
    </>
  )
}

export default Count