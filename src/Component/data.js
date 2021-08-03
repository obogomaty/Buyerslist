import React from 'react';
import { Table, Tag } from 'antd'


class Data extends React.Component {

  render() {
    const columns = [
      {
        title: 'Username',
        dataIndex: 'userName',
        key: 'userName',
        render: text => <a>{text}</a>,
      },

      {
        title: 'Phone number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
      },

       {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: amount => <>&#8358;{amount}</>,
      }, 
      
      {
        title: 'Payment status',
        dataIndex: 'paymentStatus',
        filters: [{ text: 'Paid', value: 'paid', }, { text: 'Pay Later', value: 'pay later', },],
        key: 'paymentStatustus',
        onFilter: (value, record) => record.paymentStatus.indexOf(value) === 0,
        render: status => (
          <Tag color={status === 'paid' ? 'green' : 'red'}>
            {status}
          </Tag>
        )
      },
      {
        title: 'Action',
        key: 'action'
      }
    ];
    //use the props patern above or bellow as an alternative mechanism
    const { payments } = this.props;
    let total = 0;
    if (payments.length > 0) {
      total = payments.map(t => Number(t.amount)).reduce((a, b) => a + b);
    }

    return (
      <div className='table'>
      { total > 0 && <h2>Total Sells: {total}</h2>}
        <Table columns={columns} dataSource={payments} />

        {/* <table style={{ width: '80%', margin: '50px auto' }}>
                    <thead>
                        <tr>
                            <td >S/N</td>
                            <td>Username</td>
                            <td>Phone Number</td>
                            <td>Amount</td>
                            <td>Payment Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map(payment => {
                            return (
                                <tr>
                                    <td>{payment.id}</td>
                                    <td>{payment.userName}</td>
                                    <td>{payment.phoneNumber}</td>
                                    <td>&#8358; {payment.amount}</td>
                                    <td style={{ color: payment.paymentStatus === 'Paid' ? 'green': 'red' }}>{payment.paymentStatus}</td>
                                    <td>Action</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table> */}

      </div>
    );
  }
}

export default Data;