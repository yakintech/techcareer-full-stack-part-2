import React, { useState } from 'react'
import { categories } from '../data/categories'
import AddCategory from './AddCategory'
import CategoryTable from './CategoryTable'


//PARENT COMPONENT
function CategoryPage() {

    const [categoryList, setcategoryList] = useState(categories);

    const deleteItem = (id) => {

        let filteredCategories = categoryList.filter(q => q.id != id);
        setcategoryList([...filteredCategories])

    }


    const add = (item) => {

        setcategoryList([...categories, item]);

    }

    return (<>
        <h1>Category Page</h1>
        <AddCategory add={add} />
        <CategoryTable categoryList={categoryList} deleteItem={deleteItem} />
    </>
    )
}

export default CategoryPage