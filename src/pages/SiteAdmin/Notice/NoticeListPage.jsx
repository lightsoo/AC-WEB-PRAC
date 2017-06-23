import './NoticeListPage.less';
import React, {Component} from 'react'
import {Table} from 'antd';

export default class NoticeListPage extends Component {

    render() {
        console.log('NoticeListPage render()');
        //나중에 action을 통해서 데이터 셋..
        const dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '237',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '203',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '236',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '216',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '2231',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '2121',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '2691',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '2681',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }, {
            key: '2791',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }];

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }];

        return (
        <div className="NoticeListPage">
            <div className="page-header">
                <div className="title">Notise List Page~</div>
            </div>
            <div className="options-wrap">

            </div>
            <div className="contents">
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        </div>
        );
    }
}