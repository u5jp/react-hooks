import React ,{useState,useEffect}from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'


function DockTitleUpdateOne() {
  const [count,setCount] = useState(0)
  useDocumentTitle(count)
  useEffect(()=>{
    document.title=`カウント${count}`
  },[count])
  return (
    <>
      <button onClick={()=>setCount(count+1)}>count - {count}</button>
    </>
  )
}

export default DockTitleUpdateOne