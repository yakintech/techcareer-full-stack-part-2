import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Bu sayfa açılırken dışarıdan bir ID geliyor
function CategoryDetail() {

    const [detail, setdetail] = useState({});

    let { id } = useParams();

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/categories/${id}`)
            .then(res => setdetail(res.data))

    }, [])



    return (<>
        <h1>ID: {detail.id} </h1>
        <h1>Name: {detail.name}</h1>
        <h1>Description: {detail.description}</h1>
    </>
    )
}

export default CategoryDetail