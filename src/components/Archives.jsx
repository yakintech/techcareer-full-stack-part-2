import { Button, Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Archives() {

    let archives = useSelector(state => state);

    let dispatch = useDispatch();


    const removeArchive = (id) => {

        dispatch({type:'REMOVE_TO_ARCHIVE', payload:id})
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
            title:'Remove',
            dataIndex:'id',
            render: (id) => <Button onClick={() => removeArchive(id)}>Remove</Button>
        }
    ]

    const empty = () => {
        dispatch({type:'REMOVE_ALL'})
    }

    return (<>
        <Button type='primary' danger onClick={() => empty()}>Remove All</Button>
        <Table columns={columns} dataSource={archives}></Table>
    </>
    )
}

export default Archives