import React, { Component } from 'react'
import { Button, Select, Tooltip, Icon, Table, Tag, Divider, Pagination, Form } from 'antd'
import './index.less'
import { MyIcon } from '../../../assets/iconfont/ccwIcon'

const { Column, ColumnGroup } = Table

const dataSource = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 322222222222222222222,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default class PartsList extends Component {
  state = {
    VersionTemplates: [],
    templates: [],
    isCurrentVersion: false,
    heightLightIcon: false,
    selectData: {
      IsTree: false
    },
    loading: false,
    selectedRowKeys: []
  }

  clearRowKeys = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }

  handelChangePage = val => {
    console.log(val)
  }

  render () {
    const { loading, selectedRowKeys } = this.state
    const hasSelected = selectedRowKeys.length > 0
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(this)
        console.log('onChange')
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        this.setState({ selectedRowKeys })
      },
      onSelect: (record, selected, selectedRows) => {
        console.log('onSelect')
        console.log(record, selected, selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log('onSelectAll')
        console.log(selected, selectedRows, changeRows)
      }
    }
    return (
      <div id='PartList'>
        <div className='tool clear-fix'>
          <Button className={this.state.selectData.IsTree ? 'active fll tree' : 'fll tree'} />
          <Button
            style={{ border: 'none' }}
            className={!this.state.selectData.IsTree ? 'active fll caidan ml' : 'fll caidan ml'}
          />
          <Select
            className='fll'
            v-model='selectData.ImportIds'
            multiple
            collapse-tags>
            {
              this.state.VersionTemplates.map(({ StrId, StrImportTime }) => (
                <Select.Option key={StrId} value={StrId}>{StrImportTime}</Select.Option>
              ))
            }
          </Select>
          <Select
            placeholder='Choose a Version'
          >
            {
              this.state.templates.map(({ Id, name }) => (
                <Select.Option key={Id} value={Id}>{name}</Select.Option>
              ))
            }
          </Select>

          <Tooltip title='Search' placement='top'>
            <Icon
              type='search'
              className={`${this.state.heightLightIcon ? 'active' : ''} fa el-icon-search flr ml`}
            />
          </Tooltip>

          <Tooltip title='View Customization' placement='top'>
            <Icon
              type='setting'
              theme='filled'
              className='fa fa-cog flr ml'
            />
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Export ALL' placement='top'>
            <Button
              className='SignUpBtn flr ml'
            >
              <MyIcon type='icon-piliangdaochu' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Export' placement='top'>
            <Button
              className='SignUpBtn flr ml'
            >
              <MyIcon type='icon-daochu' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Copy From' placement='top'>
            <Button
              disabled='!isCurrentVersion'
              className='SignUpBtn flr ml'
            >
              <MyIcon type='icon-copy' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Batch Edit' placement='top'>
            <Button
              disabled='!isCurrentVersion'
              className='SignUpBtn flr ml'
            >
              <MyIcon type='icon-bianji' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Add' placement='top'>
            <Button
              className='SignUpBtn flr ml'
            >
              <MyIcon type='icon-tianjia' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Delete' placement='top'>
            <Button
              className='SignUpBtn flr'
            >
              <MyIcon type='icon-shanchu' />
            </Button>
          </Tooltip>
        </div>
        <section>
          <Button
            type='primary'
            onClick={this.clearRowKeys}
            disabled={!hasSelected}
            loading={loading}>
            Reload
          </Button>
        </section>
        <section>
          <Table
            bordered
            rowKey='address'
            dataSource={dataSource}
            rowSelection={rowSelection}
          >
            <ColumnGroup title='Name'>
              <Column title='First Name' dataIndex='firstName' key='firstName' />
              <Column title='Last Name' dataIndex='lastName' key='lastName' />
            </ColumnGroup>
            <Column title='Age' dataIndex='age' key='age' width={60} ellipsis />
            <Column title='Address' dataIndex='address' key='address' />
            <Column
              title='Tags'
              dataIndex='tags'
              key='tags'
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color='blue' key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
            <Column
              title='Action'
              key='action'
              render={(text, record) => (
                <span>
                  <a>Invite {record.lastName}</a>
                  <Divider type='vertical' />
                  <a>Delete</a>
                </span>
              )}
            />
          </Table>
        </section>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.handelChangePage} />
      </div>
    )
  }
}
