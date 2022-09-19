import React, { useState } from 'react'

function CounterSample() {

  //counter değişkenimin kendisi!
  //setcounter, bu değişkeni değiştirebilecek ve bu sayede ekranı güncelleyecek tek ARKADAŞIMIZ!!
  const [counter, setcounter] = useState(0);


  console.log('COUNTER SAMPLE RENDERED!!');


  const increase = () => {
    setcounter(counter + 1)
  }

  const decrease = () => {
    setcounter(counter - 1);
  }



  return (<>
    <h1>Counter: {counter}</h1>
    <button onClick={() => increase()}>Increase</button>
    <button onClick={() => decrease()}>Decrease</button>

  </>
  )
}

export default CounterSample