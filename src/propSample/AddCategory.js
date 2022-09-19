import React, { useState } from 'react'

function AddCategory({add}) {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

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
            <button onClick={() => add({name:name, description: description})}>Add</button>
        </div>
    </div>
  </>
  )
}

export default AddCategory