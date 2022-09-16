import React from 'react'

//jsx elementi için () sytnax kullanılır. JSX içerisinde JS kodu için {} kullanılır.
function JsxSample() {

    let h1Element = (<h1>Tech Career</h1>)
    let name = "Çağatay Yıldız";

    return (<>
        <p>{name.toUpperCase()}</p>
        {h1Element}
    </>
    )
}

export default JsxSample