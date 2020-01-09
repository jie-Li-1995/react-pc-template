import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import {switchRoute} from '@/utils/renderRoutes'
import MyHeader from '../myHeader'
import './index.less'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class MyMain extends Component {
  state = {}
  MenuItemClick = (item) => {
    let pathname = `${this.props.match.path}/${item.keyPath.reverse().join('/')}`
    this.props.history.push({pathname, state: {day: 'Friday'}})
  }
  render() {
    console.log(MyHeader)
    return (
      <div className='MyMain'>
        <Layout className="layout">
          <Header>
            <MyHeader/>
          </Header>
          <Content>
            <Layout style={{ background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  onClick={this.MenuItemClick}
                  mode="inline"
                  defaultSelectedKeys={['loginLog']}
                  defaultOpenKeys={['admininstration']}
                  style={{ height: '100%' }}
                >
                  <SubMenu
                    key="admininstration"
                    title={
                      <span>
                        <Icon type="alipay-circle" />
                        admininstration
                      </span>
                    }
                  >
                    <Menu.Item key="loginLog">loginLog</Menu.Item>
                    <Menu.Item key="systemSetting">systemSetting</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="partsInfoManagment"
                    title={
                      <span>
                        <Icon type="wechat" />
                        partsInfoManagment
                     </span>
                    }
                  >
                    <Menu.Item key="partsList">partsList</Menu.Item>
                    <Menu.Item key="vehicleList">vehicleList</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {switchRoute(this.props.children, this.props.match.path)}
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}