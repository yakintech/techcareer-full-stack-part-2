import React, { useState } from 'react'

function InputChangeSample() {

    const [formData, setFormData] = useState({
        name:'',
        surname:'',
        email:''
    })


    const changeInput = (element) => {
        setFormData({
            ...formData,
            [element.name]: element.value
          });
        
    }

  return (<>
    
    <div>
        <label>Name:</label>
        <input type='text' value={formData.name} name='name' onChange={(e) => changeInput(e.target)} />
    </div>
    <div>
        <label>Surname:</label>
        <input type='text' value={formData.surname} name='surname' onChange={(e) => changeInput(e.target)}  />
    </div>
    <div>
        <label>EMail:</label>
        <input type='text' value={formData.email} name='email' onChange={(e) => changeInput(e.target)} />
    </div>

  </>
  )
}

export default InputChangeSample