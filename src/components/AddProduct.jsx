import { Button, Checkbox, Col, Form, Input, message, Row, Select } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const { Option } = Select

function AddProduct() {

    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const [form] = Form.useForm();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setCategories(res.data)
            })

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setSuppliers(res.data)
            })

    }, [])

    const submit = (values) => {

        axios.post('https://northwind.vercel.app/api/products', values)
        .then(res => {
            form.resetFields();
            message.success('Success!!');
        })
    }


    return (<>

        <Form
            onFinish={submit}
            form={form} 
        >

            <Row gutter={24}>

                <Col span={12}>
                    <Form.Item
                        name='categoryId'
                        label='Categories'
                    >
                        <Select
                            defaultValue='Lütfen bir kategori seçiniz'
                        >
                            {
                                categories.map((item) => {
                                    return <Option key={item.id} value={item.id}>{item.name}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                </Col>
                <Col span={12}>
                    <Form.Item
                        name='supplierId'
                        label='Supplier'
                    >
                        <Select
                            defaultValue='Lütfen bir tedarikçi seçiniz'
                        >
                            {
                                suppliers.map((item) => {
                                    return <Option
                                        key={item.id}
                                        value={item.id}>{item.companyName}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item
                        label='Product Name'
                        name='productName'
                        rules={[{ required: true, message: 'Please input your product name!' },{max:30}]}

                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label='Unit Price'
                        name='unitPrice'
                    >
                        <Input />
                    </Form.Item>
                </Col>

            </Row>

            <Row>
                <Col>
                    <Form.Item
                        name='discontiuned'
                         valuePropName="checked"
                    >
                        <Checkbox>Discontiuned</Checkbox>
                    </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">Add</Button>

        </Form>
    </>
    )
}

export default AddProduct