import { Button, Table, Modal } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { addToFavoritesAction, removeToFavoritesAction } from '../redux/actions/favorites.action';


const { confirm } = Modal;

function Customers(props) {


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

    const add = (id) => {

        //id ye göre listedeki customer ı yakalıyorum
        let customer = customers.find(q => q.id == id);

        //Globaldeki state e erişip oraya bu customer ı ekleyecek. Eğer global state üzerinde bir favori varsa ekleme YAPMAZ!
        let favoriteCustomer = props.favorites.find(item => item.id == customer.id);

        if (!favoriteCustomer)
            props.addToFavorites(customer);
        else
            props.removeFavorites(customer.id)


    }


    const favoriteControl = (id) => {


        //eğer müşteri favorilerdeyse dolu yıldız değilse boş yıldız gelecek.
        let isFavorite = props.favorites.find(q => q.id == id);

        console.log('isFavorite', isFavorite);
        if (isFavorite)
            return <StarFilled />
        else
            return <StarOutlined />

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
        },
        {
            title: ' Favorite',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => add(id)} shape='circle' icon={favoriteControl(id)} />
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


const mapStateToProps = (state) => {

    //favorites -> prop name of global state
    return {
        favorites: state.favoriteReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (data) => {
            dispatch(addToFavoritesAction(data))
        },
        removeFavorites: (data) => {
            // dispatch({ type: 'REMOVE', payload: data })
            dispatch(removeToFavoritesAction(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Customers)