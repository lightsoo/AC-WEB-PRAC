import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {searchNotice, searchNoticeByText} from '../../actions/index'

import './AdminLayoutPage.less';
import NoticeList from './Notice/NoticeListPage';

const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

class AdminLayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline'
        };
    }

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };

    render() {
        //connect를 통해 reducer의 state와
        const {notice, searchNotice, searchNoticeByText} = this.props;
        // const childrenWithProps = React.Children.map(this.props.children,
        //     (child) => React.cloneElement(child, {
        //         notice:{notice},
        //         // {...notice},
        //         searchNotice: {searchNotice},
        //         searchNoticeByText:{searchNoticeByText},
        //     })
        // );
        return (

            <Layout className="AdminLayoutPage">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <AdminSide mode={this.state.mode}/>
                </Sider>

                <Layout>
                    <Header/>
                    <Content>
                        <NoticeList
                            //pass props to child
                            notice={notice}

                            // {...notice}
                            searchNotice={searchNotice}
                            searchNoticeByText={searchNoticeByText}
                        />
                        {/*{this.props.children}*/}
                        {/*{childrenWithProps}*/}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design prac ©2017 Created by Lightsoo
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

class AdminSide extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log('AdminSide props: ', this.props);
    // }

    render() {
        return (
            <Menu theme="dark" mode={this.props.mode}
                  defaultOpenKeys={['/admin/terms']}
                  defaultSelectedKeys={['/admin/terms']}
            >
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
                >
                    <Menu.Item key="/admin/notice">
                        <Link to="/admin/notice">
                            <Icon type="team"/>
                            <span className="nav-text">Notice</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/admin/terms">
                    <Link to="/admin/terms">
                        <Icon type="team"/>
                        <span className="nav-text">약관 관리</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/providers">
                    <Link to="/admin/providers">
                        <Icon type="team"/>
                        <span className="nav-text">서비스 관리</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}


//여기서 비즈니스 로직을 짜고 state값으 받는 presentational component(자식)은 View만 책임...
//AdminLayoutPage에서 자식 컴포넌트에 state값을 넘겨주는것
const mapStateToProps = (state) => {
    console.log('current state: ', state);
    return {
        notice: state.notice
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchNotice: () => dispatch(searchNotice()),
        searchNoticeByText: (cond) => dispatch(searchNoticeByText(cond))
    }
};

//react와 redux가 연결되어 프리젠테이션 컴포넌트에 state와 Dispath()메소드를 전달하는 부분
export default connect(mapStateToProps, mapDispatchToProps)(AdminLayoutPage);
