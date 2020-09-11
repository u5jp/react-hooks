import React ,{useState,useEffect}from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DockTitleUpdateTwo() {
  const [count,setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <>
      <button onClick={()=>setCount(count+1)}>count - {count}</button>
    </>
  )
}

export default DockTitleUpdateTwo