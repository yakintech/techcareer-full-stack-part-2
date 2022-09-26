import React, { useEffect, useState } from 'react'

function EffectSample() {

    //bu component state değiştiğinde
    //parent component state değiştiğinde
    console.log('EFFECT SAMPLE RENDERED!!');

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0)

    //Bu kod BLOĞU SADECE BİR KERE ÇALIŞIR! []
    useEffect(() => {

        console.log('Use effect');

    }, [])

    //bu kod bloğu SADECE counter2 state değiştiğinde ÇALIŞIR!
    useEffect(() => {

        console.log('Use effect-2');

    }, [counter2])


    return (<>
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
        <div>
            <h1>Counter-2: {counter2}</h1>
            <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
        </div>
    </>
    )
}

export default EffectSample