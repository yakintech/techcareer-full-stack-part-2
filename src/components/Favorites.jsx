import { Button, Table } from 'antd'
import React from 'react'
import { connect } from 'react-redux'

function Favorites({ favorites, removeFavorites, removeAll }) {


  const remove = (customerId) => {

    removeFavorites(customerId)

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
      title: 'Remove',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => remove(id)} danger>Remove</Button>
    }
  ]


  const empty = () => {
    //reducer içerisindeki tüm favorileri temizleyen metoda gidiyorum.
    removeAll();
  }


  return (<>
    <Button onClick={() => empty()}>Remove ALL</Button>
    <Table dataSource={favorites} columns={columns}></Table>
  </>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorites: (data) => {
      dispatch({ type: 'REMOVE', payload: data })
    },
    removeAll: () => {
      dispatch({ type: 'REMOVE_ALL' })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)