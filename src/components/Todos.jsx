import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Todos() {

    const [todos, settodos] = useState([]);

    //use dispatch hook u ile reducerlara erişebilme imkanım oluyor!!
    const dispatch = useDispatch()

    //map state to props. UseSelector ile state e ulaşıyorum.
    let archiveList = useSelector(state => state.todoReducer);



    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                let todoList = [];

                res.data.forEach(element => {

                    let newTodo = {
                        id: element.id,
                        userId: element.userId,
                        title: element.title,
                        completed: element.completed.toString()
                    }

                    todoList.push(newTodo);

                });
                settodos(todoList)
            })

    }, []);


    const addToArchive = (id) => {

        let todo = todos.find(q => q.id == id);

        //listeden bulduğum todoyu arşive ekliyorum. TABİ ARŞİVDE YOKSA!!
        let archiveTodo = archiveList.find(q => q.id == id);

        if (!archiveTodo) {
            dispatch({ type: 'ADD_TO_ARCHIVE', payload: todo })
        }

    }


    let columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'User Id',
            dataIndex: 'userId'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Completed',
            dataIndex: 'completed'
        },
        {
            title: 'Archive',
            dataIndex: 'id',
            render: (id) => <Button type='primary' onClick={() => addToArchive(id)}>Add To Archive</Button>
        }
    ]



    return (<>
        <Table columns={columns} dataSource={todos}></Table>
    </>
    )
}

export default Todos