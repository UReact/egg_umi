import React, { PureComponent } from 'react';
import intl from "react-intl-universal";
import { string } from 'util_react_web';
import { Card, Spin, Col } from 'antd';
import styles from './index.less';


const { getIntl } = string;

class More extends PureComponent {
  
  render() {
    const { 
      xs = 24, 
      sm = 12, 
      md = 8, 
      lg = 8, 
      xl = 4 , 
      cardStyle = { minWidth: 300, maxWidth: 650 },
      hasMore, spinning, loadMoreFunc,
    } = this.props;
    
    return (
      hasMore ?
      (
        <Col className={styles.more} xs={xs} sm={sm} md={md} lg={lg} xl={xl} style={cardStyle}>
          <Spin spinning={spinning}>
            <Card onClick={loadMoreFunc}>
              <div className={styles.info}>{getIntl(intl, '', 'Click to load more')}</div>
            </Card>
          </Spin>
        </Col>
       ) : null

    );
  }
}



export default More;