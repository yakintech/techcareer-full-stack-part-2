import React, { useRef, useState } from 'react'

function HomePage() {

  const [pColor, setcolor] = useState('');

  let pRef = useRef();

  const changeColor = () => {
    // setcolor('tomato')

    // document.getElementById('blog').style.color = 'tomato';
    pRef.current.style.color = 'brown'

  }


  

  return (<>
  
  <p ref={pRef} id='blog' style={{color:pColor}}>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis</p>

  <button onClick={() => changeColor()}>Change Color</button>
  <button onClick={() => window.hello()}>Hello</button>
  </>
  )
}

export default HomePage