import React from 'react'


function Title() {
  console.log('Title component')
  return (
    <>
      <h1>useCallback hookによる最適化</h1>
    </>
  )
}

export default React.memo(Title)