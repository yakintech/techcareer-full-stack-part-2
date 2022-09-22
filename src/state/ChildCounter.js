import React from 'react'

function ChildCounter(props) {


    return (<>
        <div>ChildCounter</div>
        <h3>{props.counter}</h3>
        <button onClick={() => props.getData(100)}>Send Data to parent comp</button>
    </>

    )
}

export default ChildCounter