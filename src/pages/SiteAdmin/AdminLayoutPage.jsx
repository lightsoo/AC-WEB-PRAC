import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router';

import './AdminLayoutPage.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline', //밑으로 SubMenuList
            // mode: 'vertical',//옆으로 SubMenuList...
        };
        this.onCollapse = (collapsed) => {
            console.log(collapsed);
            this.setState({
                collapsed,
                mode: collapsed ? 'vertical' : 'inline',
            });
        };
    }

    render() {
        console.log(this.state);

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

        return(
            <Layout className="AdminLayoutPage">
                {/*layout만들때 큰 컴포넌트는 Page로 구성하고 작은 컴포넌트들을 빼줘야한다.*/}
                <Sider
                    collapsible
                    collapsed= {this.state.collapsed}
                    onCollapse= {this.onCollapse}
                >
                    <AdminSide mode = {this.state.mode}/>
                </Sider>

                <Layout>
                    <Header/>
                    <Content>
                        {/*<Table dataSource={dataSource} columns={columns}/>*/}
                      {this.props.children}
                    </Content>
                    <Footer style={{ background: '#fff', textAlign: 'center' }}>
                        Ant Design prac ©2017 Created by Lightsoo
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

class AdminSide extends Component{

    constructor(props){
        super(props);
        console.log('AdminSide props: ', this.props);
    }
    render() {
        return (
                <Menu theme="dark" mode={this.props.mode}
                      defaultOpenKeys={['/admin/terms']}
                      defaultSelectedKeys={['/admin/terms']}
                >
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
                    >
                        <Menu.Item key="/admin/notice">
                            <Link to="/admin/notice">
                                <Icon type="team"/>
                                <span className="nav-text">Notice</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/admin/terms">Term</Menu.Item>
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

export default Admin;