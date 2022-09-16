import React from 'react'

function JsxMapObjectArraySample() {

    let categories = [
        {
            "id": 2,
            "description": "Sweet and savory sauces relishes spreads and seasonings",
            "name": "Condiments"
        },
        {
            "id": 1,
            "description": "Soft drinks coffees teas beers and ales",
            "name": "Beverages"
        },
        {
            "id": 3,
            "description": "Desserts candies and sweet breads",
            "name": "Confections"
        },
        {
            "id": 4,
            "description": "Cheeses",
            "name": "Dairy Products"
        },
        {
            "id": 5,
            "description": "Breads crackers pasta and cereal",
            "name": "Grains/Cereals"
        },
        {
            "id": 6,
            "description": "Prepared meats",
            "name": "Meat/Poultry"
        },
        {
            "id": 7,
            "description": "Dried fruit and bean curd",
            "name": "Produce"
        },
        {
            "id": 8,
            "description": "Seaweed and fish",
            "name": "Seafood"
        }
    ]

    return (<>

        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {
                categories.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    </>
    )
}

export default JsxMapObjectArraySample