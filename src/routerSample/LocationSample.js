import React from 'react'
import { useLocation } from 'react-router-dom'

function LocationSample() {




    //search url de ? sonrasını bana verir. Örneğin ...com/test?name=cagatay
    let query = useQuery();
    console.log('query', query);

    return (<>
        <h1>{query.get("name")}</h1>
        <h1>{query.get("surname")}</h1>
    </>)
}

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

export default LocationSample