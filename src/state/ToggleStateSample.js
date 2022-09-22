import React, { useState } from 'react'

function ToggleStateSample() {

    const [toggle, settoggle] = useState(false);

    const changeUserStatus = () => {

      settoggle(!toggle)

    }

  return (<>
    {
        toggle == true ? <h1>User Online</h1> : <h1>User Offline</h1>
    }

    <button onClick={() => changeUserStatus()}>Toggle</button>
  </>
  )
}

export default ToggleStateSample