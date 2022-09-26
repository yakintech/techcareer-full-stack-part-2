import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SupplierList() {

    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => setsuppliers(res.data));

    }, [])



    return (<>
        <ul>
            {
                suppliers && suppliers.map((item,key) => {
                    return <li>{item.companyName}</li>
                })
            }
        </ul>
    </>
    )
}

export default SupplierList