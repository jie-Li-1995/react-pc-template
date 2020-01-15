import React, { Component } from 'react'
import { Button, Select, Tooltip, Icon } from 'antd'
import './index.less'
import { MyIcon } from '../../../assets/iconfont/ccwIcon'

export default class Login extends Component {
  state = {
    VersionTemplates: [],
    templates: [],
    isCurrentVersion: false,
    heightLightIcon: false,
    selectData: {
      IsTree: false
    }
  }

  render () {
    return (
      <div id='PartList'>
        <div className='tool clear-fix'>
          <Button
            className={this.state.selectData.IsTree ? 'active fll tree' : 'fll tree'}
            onClick='changeTreeState(true)' />
          <Button
            style={{ border: 'none' }}
            className={!this.state.selectData.IsTree ? 'active fll caidan ml' : 'fll caidan ml'}
            onClick='changeTreeState(false)' />
          <Select
            className='fll'
            v-model='selectData.ImportIds'
            onChange='changeImportIds'
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
            onChange='tableList'
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
              onClick='dialogSearch = true'
              className={`${this.state.heightLightIcon ? 'active' : ''} fa el-icon-search flr ml`}
            />
          </Tooltip>

          <Tooltip title='View Customization' placement='top'>
            <Icon
              type='setting'
              theme='filled'
              className='fa fa-cog flr ml'
              onClick='$router.push({name: " TemplateSetting"})'
            />
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Export ALL' placement='top'>
            <Button
              className='SignUpBtn flr ml'
              onClick='exportAll'
            >
              <MyIcon type='icon-piliangdaochu' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Export' placement='top'>
            <Button
              className='SignUpBtn flr ml'
              onClick='exportItem'
            >
              <MyIcon type='icon-daochu' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Copy From' placement='top'>
            <Button
              disabled='!isCurrentVersion'
              className='SignUpBtn flr ml'
              onClick='batchCope'
            >
              <MyIcon type='icon-copy' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Batch Edit' placement='top'>
            <Button
              disabled='!isCurrentVersion'
              className='SignUpBtn flr ml'
              onClick='batchEdit'
            >
              <MyIcon type='icon-bianji' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Add' placement='top'>
            <Button
              className='SignUpBtn flr ml'
              onClick='addItem'
            >
              <MyIcon type='icon-tianjia' />
            </Button>
          </Tooltip>

          <Tooltip className='item' effect='dark' title='Delete' placement='top'>
            <Button
              className='SignUpBtn flr'
              onClick='deleteItems'
            >
              <MyIcon type='icon-shanchu' />
            </Button>
          </Tooltip>
        </div>
      </div>
    )
  }
}
