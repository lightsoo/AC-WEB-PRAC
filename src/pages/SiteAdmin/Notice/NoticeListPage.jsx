import './NoticeListPage.less';
import React, {Component} from 'react'
import {Table, Input} from 'antd';

const Search = Input.Search;

/*presentational 컴포넌트에서는 자신의 state를 가지는게 아니라
container 컴포넌트의 props를 받아서 사용한다
*/
export default class NoticeListPage extends Component {

    constructor(props) {
        //initialize
        super(props);
        this.state = {
            dataSource: [],
            columns: [],
            test:''
        };
    }

    //한번 mount 된다.
    componentDidMount() {
        console.log('---componentDidMount---\n', this.props);
        // ajax call
        this.props.searchNotice();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('---componentWillReceiveProps nextProps---\n', nextProps);
        // const {dataSource, columns, notice} = nextProps;
        // console.log('notice: ', notice);
        // this.setState({
        //     dataSource : notice.dataSource,
        //     columns: notice.columns
        // });
    }

    render() {
        const {dataSource, columns} = this.props;

        console.log('render~~~~~~~~~');
        return (
            <div className="NoticeListPage">
                <div className="page-header">
                    <div className="title">
                        <h3>Notice List Page~</h3>
                    </div>
                    <div className="search-bar">
                        <Search
                            placeholder="Data 검색"
                            // defalutValue={this.props.keyword}
                            style={{width: 200}}
                            onSearch={this.props.searchNoticeByText}
                        >
                        </Search>
                    </div>
                </div>
                <div className="options-wrap">
                </div>
                <div className="contents">
                    {/*<Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={true}/>*/}
                    <Table dataSource={dataSource} columns={columns} pagination={true}/>
                </div>
            </div>
        );
    }
}