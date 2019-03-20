import React, { Component } from 'react';
import intl from "react-intl-universal";
import { string } from 'util_react_web';
import { routerRedux } from 'dva/router';
import Link from 'umi/link';
import { Row, Icon, Form, Select, Col } from 'antd';
import SupportTab from '@/components/SupportTab';
import { Delay } from '@/utils';
import _ from 'lodash';
import styles from './index.less';

const { getIntl } = string;

const searchArr = [
  { key: 'hcapi.intentions.search.parttime', default: 'Part-time profiles', value: 'Can do part-time' },
  { key: 'hcapi.intentions.search.noneducation', default: 'Non-education profiles', value: 'Non-education candidate' },
  { key: 'hcapi.intentions.search.expertjob', default: 'Expert profiles', value: 'Expert' },
  { key: 'hcapi.intentions.search.teacher', default: 'Teacher profiles', value: 'Want be teacher' },
];

const delay500 = new Delay(500);

class SelectForm extends Component {

  handleSearch = v => {
    delay500.do( () => {
      const value = _.trim(v);
      const { dispatch, profiles: { where } } = this.props;
      if (value) {
        where.kw = value;
      } else {
        delete where.kw;
      }
      dispatch(routerRedux.push({
        pathnameKey: '/intentions',
        query: { ...where },
      }));
    });
  }

  handleClick = item => {
    const { dispatch, profiles: { where }  } = this.props;
    if (item.value) {
      where.kw = item.value;
    } else {
      delete where.kw;
    }
    dispatch(routerRedux.push({
      pathnameKey: '/intentions',
      query: { ...where },
    }));
  }

  supportTabOnChange = (key, value) => {
    const { dispatch, profiles: { where } } = this.props;
    if (value) {
      where[key] = value;
    } else {
      delete where[key];
    }
    dispatch(routerRedux.push({
      pathnameKey: '/intentions',
      query: { ...where },
    }));
  }

  render() {
    const { profiles: { where : { kw, postId, areaId, employmentId }} } = this.props;
    return (
      <div className={styles.selectDiv}>

        <Form layout="horizontal">
          <Row type="flex" justify="space-around" align="middle" className={styles.topSelect}>
            <Col xs={20} sm={20} md={18} lg={10} xl={8} className={styles.topSelectBox}>
              <Icon type="search" />
              <Select
                showSearch
                placeholder={getIntl(intl, 'hcapi.intentions.search', 'Search')}
                style={{ width: '100%' }}
                size='large'
                notFoundContent={null}
                value={kw}
                allowClear
                onSearch={this.handleSearch}
                dropdownRender={() => (
                  <div>
                    <ul className={styles.topSelectDropdown}>
                      {searchArr.map( item => (
                        <li key={item.key} onClick={() => this.handleClick(item)}>
                          <Icon type="search" />
                          {getIntl(intl, item.key, item.default)}
                        </li>
                      ))}
                      <li>
                        <Link to='/jobs'>
                          <Icon type="search" /> {getIntl(intl, 'hcapi.search.jobs', 'Search jobs')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              />
            </Col>
          </Row>
          <div className={styles.selectSupportDiv}>
            <ul style={{ margin: 0 , padding: 0}}>
              <li>
                <SupportTab 
                  label={getIntl(intl, 'hcapi.intentions.city', 'City')}
                  typeName='area'
                  onChange={this.supportTabOnChange}
                  field='areaId'
                  value={areaId}
                  {...this.props}
                />
              </li>
              <li>
                <SupportTab 
                  label={getIntl(intl, 'hcapi.intentions.industry', 'Industry')}
                  typeName='post'
                  onChange={this.supportTabOnChange}
                  field='postId'
                  value={postId}
                  {...this.props}
                />
              </li>
              <li>
                <SupportTab 
                  label={getIntl(intl, 'hcapi.intentions.employment', 'Employment')}
                  typeName='employment'
                  onChange={this.supportTabOnChange}
                  field='employmentId'
                  value={employmentId}
                  {...this.props}
                />
              </li>
            </ul>
          </div>
        </Form>
      </div>
    );
  }
}



export default SelectForm;