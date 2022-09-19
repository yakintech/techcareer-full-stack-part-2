import React, { Fragment } from 'react'

function CityList(props) {

    const { cities } = props;

    return (<>
        <ul>
            {
                cities && cities.map((item,key) => {
                    return <li key={key}>{item}</li>
                })
            }
        </ul>
    </>
    )
}

export default CityList