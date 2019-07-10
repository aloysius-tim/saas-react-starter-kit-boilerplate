/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Billing.css';
import {fetchCustomerAction} from "../../../../actions/paymentActions";
import {connect} from "react-redux";
import { Table, Divider, Tag } from 'antd';


class Billing extends React.Component {

  componentDidMount(): void {
    this.props.fetchPaymentCustomerInfo();
  }

  render() {
    return (
      <div className="row">
        {this.props.payment.loading && <div className="loading">Loading&#8230;</div>}
        <div className="col-xl-12 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Billing</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                {/* Description */}
                <h6 className="heading-small text-muted mb-4">Your subscription</h6>
                <div className="pl-lg-4">
                  <Table columns={columns} dataSource={data} />
                </div>

                <hr className="my-4" />
                {/* Description */}
                <h6 className="heading-small text-muted mb-4">Your payment methods</h6>
                <div className="pl-lg-4">
                  <Table columns={columns} dataSource={data} />
                </div>

                <div>
                  <pre>
                    {JSON.stringify(this.props.payment.s_customer, null, 2)}
                  </pre>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const mapDispatchToProps = dispatch => ({
  fetchPaymentCustomerInfo: () => dispatch(fetchCustomerAction()),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    payment: state.payment
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Billing));
