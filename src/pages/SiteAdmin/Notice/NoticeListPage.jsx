import './NoticeListPage.less';
import React, {Component} from 'react'
import {Table, Input} from 'antd';

const Search = Input.Search;

export default class NoticeListPage extends Component {

    constructor(props) {
        //initialize
        super(props);
        this.state = {
            dataSource: [],
            columns:[]
        };
    }

    //한번 mounte 된다.
    componentDidMount() {
        console.log('---componentDidMount---\n');
        // ajax call
        this.props.searchNotice();
        const {dataSource, columns} = this.props;
        // console.log('NoticeListPage componentDidMount(): \n', this.props);

        this.setState({
            dataSource,
            columns
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('---componentWillReceiveProps---\n');
        const {dataSource, columns} = nextProps;
        this.setState({
            dataSource,
            columns
        })
    }

    render() {
        console.log('render~~~~~~~~~');
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
                            // onSearch={this.handleSearch}
                            onSearch={this.props.handleSearch}
                        >
                        </Search>
                    </div>
                </div>
                <div className="options-wrap">
                </div>
                <div className="contents">
                    {/*DidMount에서 setState해줘서 이렇게 사용하면 될지알앗는데 set이 안됫다..*/}
                    <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={true}/>

                    {/*<Table dataSource={dataSource} columns={columns} pagination={true}/>*/}
                </div>
            </div>
        );
    }

    // handleSearch = (keyword) => {
    //     const newCondition = {
    //         page: 1,
    //         keyword
    //     };
    //     // console.log(newCondition);
    //     //나중에는 여기서 액션을 줘야한다
    //     const dataSource = [
    //         {
    //             key: '1',
    //             name: 'Mike',
    //             age: 32,
    //             address: '10 Downing Street'
    //         }];
    //
    //     //필터하는걸 만들어서 세팅, 생각해보면 액션을 취해서 API로 새로 데이터를 불러와야 되는게 맞는듯한데...?
    //     this.setState({
    //         dataSource
    //     });
    // };
}