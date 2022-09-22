import React, { useState } from 'react'

function ToDoListSample() {

    const [todos, settodos] = useState([]);

    //inputtaki state todoName değişkeni tarafından tutulacaktır.
    const [todoName, settodoName] = useState('')


    const addNewTodo = () => {

        let randomId = Math.floor(Math.random() * 1000);

        let newToDo = {
            id: randomId,
            name: todoName,
            completed: false
        }

        settodos([...todos, newToDo]);
        settodoName('')

    }


    const todoStatusChange = (id, key) => {

        //mevcut todo nun statusunu değiştirecek (completed);

        //Öncelikle değişecek todoyu buluyorum
        //let todo = todos.find(q => q.id == id);

        let todo = todos[key];
        todo.completed = !todo.completed;

        settodos([...todos])
    }

    const removeAll = () => {
        settodos([]);
    }

    const updateToDoItem = (value, id) => {

        let todo = todos.find(q => q.id == id);
        todo.name = value;

        settodos([...todos])

    }

    return (<>
        <div>
            <label>ToDo Name</label>
            <input type='text' value={todoName} onChange={(e) => settodoName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewTodo()}>Add</button>
            <button onClick={() => removeAll()}>Remove All</button>
        </div>
        <div>
            <ul>
                {
                    todos && todos.map((item, key) => {

                        let style = {
                            cursor: 'pointer',
                            display: 'flex'
                        }
                        if (item.completed) {
                            //style.textDecorationLine = 'line-through'
                            style.backgroundColor = 'green'
                        }



                        return <div style={style}>
                            <input type='text' value={item.name} onChange={(e) => updateToDoItem(e.target.value, item.id)} />
                            {/* <button onClick={() => todoStatusChange(item.id, key)}>Change Status</button> */}
                        </div>

                        // return <div style={{display:'flex'}}>
                        //   <li style={style}  key={item.id}>{item.name}</li>
                        //   <button onClick={() => todoStatusChange(item.id, key)}>Change Status</button>
                        // </div>

                    })
                }
            </ul>
        </div>
    </>
    )
}

export default ToDoListSample


// {
//     id: 55,
//     name: 'Fatura yatırılacak',
//     completed:false
// }
