import { Button, Table, Modal } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

function Customers() {

    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        getCustomers();

    }, []);

    const getCustomers = () => {
        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            });
    }


    const deleteCustomer = (id) => {

        confirm({
            title: 'Are you sure delete this customer?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',

            onOk() {
                setloading(true)
                axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
                    .then(res => {
                        getCustomers();
                    })
            },

            onCancel() {
                console.log('Cancel');
            },
        });



    }

    let columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName)
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName'
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle'
        },
        {
            title: ' Delete',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => deleteCustomer(id)} type='primary-outline' danger>Delete</Button>
        }

    ]


    return (<>
        <Table
            pagination={
                {
                    pageSize: 8
                }
            }
            bordered={true}
            columns={columns}
            dataSource={customers}
            loading={loading}></Table>
    </>
    )
}

export default Customers