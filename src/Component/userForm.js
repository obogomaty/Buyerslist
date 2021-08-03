import React, { useState } from 'react';
import Data from './data';
// import { Button, Drawer, Form, Input, InputNumber, Select } from 'antd';
import { Button } from 'antd';
import { Drawer } from 'antd';
import { Form } from 'antd';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import { Select } from 'antd';

const UserForm = () => {
  const [payments, setPayments] = useState([])   // defining payments which is state values
  const [visible, setVisible] = useState(false)   // defining visible or visibilty or showing hidden element (react)
  const [form] = Form.useForm();  //defining form and form validation in react hook,also custom hook to manage form
  const { Option } = Select;         // defining option status

  const handleSubmit = (values) => {
    const { userName, phoneNumber, amount, paymentStatus, } = values;
    const payment = { id: payments.length + 1, userName, phoneNumber, amount, paymentStatus }
    setPayments([...payments, payment])
    form.resetFields()
  }

  const showDrawer = () => {
    setVisible(true)
  }

  const closeDrawer = () => {
    setVisible(false)
  }



  return (
    <>
      <Button type="primary" onClick={showDrawer} className='addbtn'>
        Add New Customer
      </Button>

      <Drawer visible={visible} onClose={closeDrawer} placement='right' width={500}>
        <Form
          onFinish={handleSubmit}
          initialValues={{ paymentStatus: 'paid', amount: '1000' }}
          form={form}
          className='form'
        >
          <Form.Item
            name='userName'
             label='Fullname'
            rules={[{ required: true, message: 'Please indicate your fullname!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='phoneNumber'
            label='Phone number'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='amount'
            label='Amount'
            rules={[{ required: true, message: 'Please input your amount' }]}
          >
            <InputNumber></InputNumber> = {100} 
          </Form.Item>

          <Form.Item
            name='paymentStatus'
            label='Amount'>
            <Select placeholder="Select Payment">
              <Option value="paid">Paid</Option>
              <Option value="pay later">Pay Later</Option>
            </Select>
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>

      <Data payments={payments} />
    </>
    // <div className="container">
    //     <input type='number' min='100' placeholder='Amount' onChange={this.handleAmount} value={amount} />
    //     <input type="text" placeholder="UserName" onChange={this.handleChangeUserName} value={userName} />
    //     <input type="tel" placeholder="PhoneNumber" onChange={this.handleChangePhoneNumber} value={phoneNumber} />

    //     <select onChange={this.handleChangeSelect} value={paymentStatus}>
    //         <option >Select Payment</option>
    //         <option>Paid</option>
    //         <option>Paid Later</option>
    //     </select>

    //     <Button onClick={this.handleSubmit} type="danger">Add</Button>



    // </div>


  );
}

export default UserForm;