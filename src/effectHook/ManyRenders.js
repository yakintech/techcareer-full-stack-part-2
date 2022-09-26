import React, { useEffect, useState } from 'react'

function ManyRenders() {

    const [webuser, setwebuser] = useState({});

    let webuserDetail = {
        name: 'Çağatay',
        surname: 'Yıldız'
    };


    // setwebuser(webuserDetail)
    
    useEffect(() => {
        setwebuser(webuserDetail)
    }, [])

    return (<>
        <h1>{webuser.name}</h1>
        <h1>{webuser.surname}</h1>
    </>
    )
}

export default ManyRenders