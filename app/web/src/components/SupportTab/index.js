import intl from 'react-intl-universal';
import React, { Component } from 'react';
import { Tag } from 'antd';
import { string } from 'util_react_web';
import DOMWrap from './DOMWrap';

import { getSupports } from '@/services/agent';

const { getIntl } = string;
const { CheckableTag } = Tag;


class SupportTab extends Component {
  // original scroll size of the list
  originalTotalWidth = 0;

  // cache item of the original items (so we can track the size and order)
  menuItemSizes = [];

  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      initDone: false,
      list: [], 
      current: value || ''
    };
  }

  componentDidMount() {
    const { typeName } = this.props;
    
    getSupports({ typeName }).then(res => {
      const { data } = res;
      const { list } = data;
      this.setState({ initDone: true, list });
    });
  }

  handleChange = value => {
    const { onChange, field } = this.props;
    const { current } = this.state;
    let newValue =value;
    const willUpdate = {};
    if (current === value) {
      newValue = null;
      willUpdate.current = '';
    } else {
      willUpdate.current = newValue;
    }
    this.setState(willUpdate);
    if (onChange) {
      onChange(field, newValue);
    }
  }

  render() {
    const { initDone, list, current } = this.state;
    const { label, typeName } = this.props;
    let thisList = list;
    if (current) {
      const otherList = list.filter( i => `${i.value}` !== `${current}`);
      const currentList = list.filter( i => `${i.value}` === `${current}`);
      thisList = [...currentList, ...otherList];
    }
   
    const optionList = thisList.map(item => (
      <CheckableTag 
        key={`ct-${typeName}-${item.value}`} 
        checked={`${current}` === `${item.value}`} 
        onChange={() => this.handleChange(item.value)}
      >
        {getIntl(intl, item.titleKey)}
      </CheckableTag>
    ));
    return (
      initDone &&
      <DOMWrap 
        label={label}
        optionList={optionList}
      />
    );  
  }
}

export default SupportTab;
