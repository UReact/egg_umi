import React, { PureComponent } from 'react';
import moment from 'moment';
import intl from "react-intl-universal";
import Link from 'umi/link';
import { string } from 'util_react_web';
import Ellipsis from '@/components/Ellipsis';
import { Card, Avatar, Col } from 'antd';
import styles from './index.less';


const { Meta } = Card;

const { getIntl } = string;


class ProfileCard extends PureComponent {
  
  render() {
    const { item, xs = 24, sm = 12, md = 8, lg = 8, xl = 4 , cardStyle = { minWidth: 300, maxWidth: 650 } } = this.props;
   
    return (
      <Col className={styles.col} xs={xs} sm={sm} md={md} lg={lg} xl={xl} style={cardStyle}>
        <Link to={`/profiles/${item.line}`} target='_blank'>
          <Card
            actions={[
              <small>{getIntl(intl, 'hcapi.last.login', 'Last login')} {moment(item.lastLoginAt).fromNow()}</small>
            ]}
          >
            <Meta
              avatar={<Avatar size="large" shape="square" src={`${item.headimgurl}?imageView2/2/w/50`} />}
              title={<Ellipsis lines={1}>{item.firstName}</Ellipsis>}
            />
            <div className={styles.info}>
              <h4><Ellipsis lines={1}>{item.headline || '-'}</Ellipsis></h4>
              <div className='mt1' style={{fontWeight: 500}}>
                <Ellipsis lines={1}>{getIntl(intl, 'hcapi.profile.come.to.china.in', 'Come to China in')} {item.comeChinaYear}</Ellipsis>
              </div>
              <strong style={{ color: 'rgba(0,87,57,1)'}}>{getIntl(intl, 'hcapi.profile.looking.to', 'Looking to')}:</strong>
              <div style={{fontSize: '0.8rem'}}>
                <Ellipsis lines={1}><strong>{getIntl(intl, 'hcapi.profile.work.in', 'Work in')}</strong> {
                  (item.wantedAreas && item.wantedAreas.length > 0) ? item.wantedAreas.map( (a, i) => (<span key={`${a.id}`}>{getIntl(intl, a.areaKey)}{i < (item.wantedAreas.length - 1) ? ', ' : ''}</span>)) : getIntl(intl, 'hcapi.profile.anywhere', 'China')
                }
                </Ellipsis>
                <Ellipsis lines={1}><strong>{getIntl(intl, 'hcapi.profile.engaged.in', 'Engaged in')}</strong> {
                  (item.wantedPosts && item.wantedPosts.length > 0 ? item.wantedPosts.map( (a, i) => (<span key={`${a.id}`}>{getIntl(intl, a.postKey)}{i < (item.wantedPosts.length - 1) ? ', ' : ''}</span>)) : getIntl(intl, 'hcapi.profile.anything', 'anything'))
                }
                </Ellipsis>
                <Ellipsis lines={1}><strong>{getIntl(intl, 'hcapi.profile.can.do', 'Can do')}</strong> {
                  (item.wantedEmployments && item.wantedEmployments.length > 0 ? item.wantedEmployments.map( (a, i) => (<span key={`${a.id}`}>{getIntl(intl, a.employmentKey)}{i < (item.wantedEmployments.length - 1) ? ', ' : ''}</span>)) : getIntl(intl, 'hcapi.profile.can.do.anything', 'anything'))
                }
                </Ellipsis>
              </div>

              <div className='mt1' style={{fontWeight: 500}}>
                <Ellipsis lines={1}>{item.salaryKey ? getIntl(intl, item.salaryKey) : getIntl(intl, 'support.salarie.keep.secret')}</Ellipsis>
              </div>
            </div>
            { item.viewAt && (<small className={styles.viewAt} title={moment(item.viewAt).format('YYYY-MM-DD hh:mm')}>{getIntl(intl, 'hcapi.have.read', 'Have read')}</small>)}
          </Card>
        </Link>
      </Col>
    );
  }
}



export default ProfileCard;