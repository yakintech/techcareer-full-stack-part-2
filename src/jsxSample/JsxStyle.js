import React from 'react'

function JsxStyle() {

  let h1Style = {
    color:'tomato',
    backgroundColor:'black'
  }


  return (<>
    <h1 style={h1Style}>Kariyer Net</h1>
    <h1 style={{backgroundColor:'black', color:'green'}}>Tech Career</h1>
  </>
  )
}

export default JsxStyle