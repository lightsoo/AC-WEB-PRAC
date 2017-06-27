import './NoticeListPage.less';
import React, {Component} from 'react'
import {Table, Input} from 'antd';

const Search = Input.Search;

export default class NoticeListPage extends Component {

    constructor(props) {
        super(props);
        //initialize
        this.state = {
            dataSource: [],
            searchText: ''
        };
    }

    componentDidMount() {
        const dataSource = [
            {
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
                name: 'Lightsoo',
                age: 32,
                address: '10 Downing Street'
            }, {
                key: '2691',
                name: 'John',
                age: 32,
                address: '10 Downing Street'
            }, {
                key: '2681',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '56',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '21791',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '27591',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '217191',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '27951',
                name: 'J5ohn',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '2791',
                name: 'Joh51n',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '27912',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }];
        // ajax call
        this.setState({
            dataSource
        })
    }

    componentWillReceiveProps (nextProps, nextContext) {
        console.log('nextProp: ', nextProps);
        console.log('nextContext: ', nextContext);
    }

    render() {
        console.log('NoticeListPage render(): ', this.state.dataSource.length);
        console.log('NoticeListPage render(): ', this.props);

        //나중에 action을 통해서 데이터 셋..

        const columns = [
            {
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
                    <div className="title">
                        <h3>Notise List Page~</h3>
                    </div>
                    <div className="search-bar">
                        <Search
                            placeholder="Data 검색"
                            // defalutValue={this.props.keyword}
                            style={{width: 200}}
                            onSearch={this.handleSearch}
                        >
                        </Search>
                    </div>
                </div>
                <div className="options-wrap">
                </div>
                <div className="contents">
                    <Table dataSource={this.state.dataSource} columns={columns} pagination={true}/>
                </div>
            </div>
        );
    }

    handleSearch = (keyword) => {
        const newCondition = {
            page: 1,
            keyword
        };
        console.log(newCondition);
        //나중에는 여기서 액션을 줘야한다
        const dataSource = [
            {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street'
            }];

        //필터하는걸 만들어서 세팅, 생각해보면 액션을 취해서 API로 새로 데이터를 불러와야 되는게 맞는듯한데...?
        this.setState({
            dataSource
        });

        // {newCondition}
        // this.props.dispatch(newCondition)
        // this.changeCondition(newCondition);
    };

    onSearchChanged = (e) => {
        this.setState({searchText: e.target.value})
    };
}