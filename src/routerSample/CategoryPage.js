import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CategoryPage() {

    const [categories, setCategories] = useState([]);


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => setCategories(res.data))

    }, [])


    return (<>
        <ul>
            {
                categories && categories.map((item,key) => {
                    return <li key={key}><Link to={'/categories/' + item.id}>{item.name}</Link></li>
                })
            }
        </ul>
    </>
    )
}

export default CategoryPage