import React from 'react'

function CategoryTable({categoryList, deleteItem}) {


  return (<>
  <table>
      <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Delete</th>
          </tr>
      </thead>
      <tbody>
          {
              categoryList.map((item,key) => {
                 return <tr key={key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td><button onClick={() => deleteItem(item.id)}>Delete</button></td>
                  </tr>
              })
          }
      </tbody>
  </table>
  </>
  )
}

export default CategoryTable