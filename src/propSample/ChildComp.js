import React from 'react'

function ChildComp(props) {


    return (<>
        <button onClick={() => props.merhaba()}>Click Me!</button>
    </>
    )
}

export default ChildComp