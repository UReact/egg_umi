import React from 'react';
import intl from "react-intl-universal";
import { string } from 'util_react_web';
import { Affix, Row, Col, Button } from 'antd';
import styles from './index.less';

const { getIntl } = string;


export default () => (
  <Affix offsetBottom={-1}>
    <Row className={styles.affix} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={12} sm={12} md={8} lg={4} xl={3}>
        <Button 
          block
          size='large'
          type='primary'
          href='/profiles/new'
          target='_blank'
          style={{ backgroundColor: '#1890ff', borderColor: '#1890ff'}}
        >
          {getIntl(intl, 'hcapi.create.my.resume', 'Create resume')}
        </Button>
      </Col>
      <Col xs={12} sm={12} md={{span: 8, offset: 8}} lg={{span: 4, offset: 16}} xl={{ span: 3, offset: 18 }}>
        <Button 
          block
          size='large'
          href='/jobs/new'
          type='primary'
          target='_blank'
        >
          {getIntl(intl, 'hcapi.post.a.job', 'Post a job')}
        </Button>
      </Col>
    </Row>
  </Affix>
);

