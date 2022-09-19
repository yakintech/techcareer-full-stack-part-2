import React, { useState } from 'react'

function ArraySample() {

    let metalBands = ['Pentagram', 'Murder King', 'Razor', 'Dr. Skull'];

    const [metals, setmetals] = useState(metalBands)


    const clearAll = () => {
        setmetals([])
    }

    const removeBand = (item) => {

        let newBands = metals.filter(q => q != item);
        setmetals([...newBands]);

    }

    return (<>
        <ul>
            {
                metals.map((item,key) => {
                    return <li style={{cursor:'pointer'}} onClick={() => removeBand(item)} key={key}>{item}</li>
                })
            }
        </ul>
        <button onClick={() => clearAll()}>Clear</button>
    </>
    )
}

export default ArraySample