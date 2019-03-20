import React, { PureComponent } from 'react';
import intl from "react-intl-universal";
import { string } from 'util_react_web';
import { Row } from 'antd';
import Card from '../Card';
import More from '../Card/More';
import styles from './index.less';

const { getIntl } = string;
class DataRow extends PureComponent {

  render() {
    const { list, listLoading, type = 'flex', justify = 'center', align = 'top' } = this.props;
    
    return (
      list && list.length > 0 ? (
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} type={type} justify={justify} align={align}>
          { list.map( item => (
            <Card key={item.line} item={item} {...this.props} />
          )) }
          <More 
            {...this.props}
          />
        </Row>
      ) : (
        !listLoading && <p className={styles.notData}>{getIntl(intl, 'hcapi.index.not.data', 'There is no data of this type at present. We will record your request and develop corresponding resources as soon as possible')}</p>
      )
    );
  }
}

export default DataRow;