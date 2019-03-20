import React, { Component } from 'react';
import { connect } from 'dva';
import IndexAffix from '@/components/IndexAffix';
import intl from "react-intl-universal";
import { string } from 'util_react_web';
import DocumentMete from 'react-document-meta';
import { BackTop, Spin } from 'antd';
import SelectForm from '../SelectForm';
import DataRow from './DataRow';
import styles from './index.less';

const { getIntl } = string;

@connect(({ profiles, global, loading }) => ({
  profiles,
  system: global.system,
  loading: loading.effects['profiles/fetchInfinite'],
}))
class IndexPage extends Component {
  state = { listLoading: true }

  loadMoreFunc = () => {
    const { profiles: { list, page, where }, dispatch } = this.props;
    this.setState({
      listLoading: true,
    });
    dispatch({
      type: 'profiles/fetchInfinite',
      payload: { list, page: page + 1, ...where },
    }).then( () => {
      this.setState({
        listLoading: false,
      });
    });
  }

  render() {
    const { listLoading } = this.state;
    const { 
      profiles: { list, hasMore }, 
      system: { titleKey, keyworkKey, descriptionKey },
      loading 
    } = this.props;
    const spinning = listLoading && loading && hasMore;

    const meta = {
      title: getIntl(intl, titleKey, 'HiredChina.com'),
      description: getIntl(intl, descriptionKey, 'HiredChina.com'),
      meta: {
        name: {
          keywords: getIntl(intl, keyworkKey, 'job, China, foreigner, 在华外国人才')
        }
      }
    };

    return (
      <DocumentMete {...meta}>
        <div className={styles.normal}>
          <SelectForm 
            {...this.props}
          />
          <Spin spinning={spinning}>
            <DataRow 
              list={list} 
              loadMoreFunc={this.loadMoreFunc} 
              spinning={spinning} 
              hasMore={hasMore} 
              listLoading={listLoading || loading} 
              {...this.props} 
            />
          </Spin>
          <BackTop>
            <div className='up'>UP</div>
          </BackTop>

          <IndexAffix />
        </div>
      </DocumentMete>
     
    );
  }
}



export default IndexPage;