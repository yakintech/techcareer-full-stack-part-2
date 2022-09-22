import React, { useState } from 'react'
import { categories } from '../data/categories'

function CategoryTable() {

    const [categoryList, setcategoryList] = useState(categories);

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const [orderNameStatus, setorderNameStatus] = useState(false)


    const removeAll = () => {
        setcategoryList([]);
    }

    const deleteCategory = (id) => {

        let filteredCategories = categoryList.filter(q => q.id != id);
        setcategoryList([...filteredCategories])
    }

    const addNewCategory = () => {

       
        let categoryId =  Math.max(...categoryList.map(o => o.id)) + 1


        let newCategory = {
            id: categoryId,
            name: name,
            description: description
        }

        setcategoryList([...categoryList, newCategory]);

    }


    const orderByName = () => {

        if(orderNameStatus){
            setorderNameStatus(false);
            categoryList.sort((a, b) => b.name.localeCompare(a.name));
        }
        else{
            setorderNameStatus(true);
            categoryList.sort((a, b) => a.name.localeCompare(b.name));
        }
       

        setcategoryList([...categoryList])

    }

    return (<>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type='text' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addNewCategory()}>Add</button>
            </div>
        </div>
        <h1>Length: {categoryList.length}</h1>

        {
        
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th style={{cursor:'pointer'}} onClick={() => orderByName()}>Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList.map((item, key) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        }
        <button onClick={() => removeAll()}>Remove All</button>

    </>
    )
}

export default CategoryTable