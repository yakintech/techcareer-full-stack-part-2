import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CategoryPage() {

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => setCategories(res.data))

    }, []);


    const goToDetail = (id) => {

        navigate('/categories/' + id)

    }


    return (<>
        <ul>
            {
                categories && categories.map((item, key) => {
                    return <>
                        <li key={key}>
                            <Link to={'/categories/' + item.id}>{item.name}</Link>
                        </li>
                        <button onClick={() => goToDetail(item.id)}>Go To Detail</button>
                    </>

                })
            }
        </ul>
    </>
    )
}

export default CategoryPage