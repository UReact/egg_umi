import intl from 'react-intl-universal';
import React, { Component } from 'react';
import { Dropdown, Button } from 'antd';
import ResizeObserver from 'resize-observer-polyfill';
import { string } from 'util_react_web';
import styles from './index.less';
import { getWidth, setStyle } from '@/utils';


const { getIntl } = string;

const MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
const FLOAT_PRECISION_ADJUST = 0.5;

class DOMWrap extends Component {
  state = { lastVisibleIndex: undefined, };

  // original scroll size of the list
  originalTotalWidth = 0;

  // cache item of the original items (so we can track the size and order)
  menuItemSizes = [];

  labelWidth = 0;

  componentDidMount() {
   
    this.setChildrenWidthAndResize();

    const menuUl = this.node;
    if (!menuUl) {
      return;
    }
    this.resizeObserver = new ResizeObserver(entries => {
      entries.forEach(this.setChildrenWidthAndResize);
    });

    [].slice.call(menuUl.children).concat(menuUl).forEach(el => {
      this.resizeObserver.observe(el);
    });
    if (typeof MutationObserver !== 'undefined') {
      this.mutationObserver = new MutationObserver(() => {
        this.resizeObserver.disconnect();
        [].slice.call(menuUl.children).concat(menuUl).forEach(el => {
          this.resizeObserver.observe(el);
        });
        this.setChildrenWidthAndResize();
      });
      this.mutationObserver.observe(
        menuUl,
        { attributes: false, childList: true, subTree: false }
      );
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.resizeObserver.disconnect();
    }
  }

  setChildrenWidthAndResize = () => {
    const ul = this.node;
    if (!ul) {
      return;
    }

    const ulChildrenNodes = ul.children;
    if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
      return;
    }

    const lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];
    // need last overflowed indicator for calculating length;
    setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

    const menuItemNodes = this.getMenuItemNodes();

    // reset display attribute for all hidden elements caused by overflow to calculate updated width
    // and then reset to original state after width calculation

    const overflowedItems = menuItemNodes
      .filter(c => {
        if (c.className) {
          return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
        }
        return false;
      } );
    overflowedItems.forEach(c => {
      setStyle(c, 'display', 'inline-block');
    });

    this.menuItemSizes = menuItemNodes.map(c => getWidth(c));
    
    overflowedItems.forEach(c => {
      setStyle(c, 'display', 'none');
    });
    this.labelWidth = getWidth(ul.children[0]) + 8;
    this.overflowedIndicatorWidth = getWidth(ul.children[ul.children.length - 1]);
    this.originalTotalWidth = this.menuItemSizes.reduce((acc, cur) => acc + cur, 0);
    this.handleResize();
    // prevent the overflowed indicator from taking space;
    // setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'none');
  }

  getMenuItemNodes = () => {
    const { prefixCls = 'hc' } = this.props;
    const ul = this.node;
    if (!ul) {
      return [];
    }

    // filter out all overflowed indicator placeholder
    return [].slice.call(ul.children)
      .filter(node => {
        if (node.className) {
          return node.className.split(' ').indexOf(`${prefixCls}-overflowed-submenu`) < 0;
        }
        return false;
      });
  }

  handleResize = () => {
    const ul = this.node;
    if (!ul) {
      return;
    }
    const width = getWidth(ul);

    this.overflowedItems = [];
    let currentSumWidth = this.labelWidth + 70;

    // index for last visible child in horizontal mode
    let lastVisibleIndex;

    // float number comparison could be problematic
    // e.g. 0.1 + 0.2 > 0.3 =====> true
    // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
    if (this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
      lastVisibleIndex = -1;

      this.menuItemSizes.forEach(liWidth => {
        currentSumWidth += liWidth + 16;
        if (currentSumWidth + this.overflowedIndicatorWidth <= width ) {
          lastVisibleIndex += 1;
        }
      });
    }
    this.setState({ lastVisibleIndex });
  }

  getOverflowedSubMenuItem = (keyPrefix = 'hc', overflowedItems, renderPlaceholder) => {

    if (overflowedItems.length === 0) {
      return null;
    }

    const { overflowedIndicator = (<Button>...{getIntl(intl, 'base.more', 'more')}</Button>), 
      prefixCls = 'hc', style: propStyle } = this.props;
  
    // put all the overflowed item inside a submenu
    // with a title of overflow indicator ('...')
    let style = { ...propStyle };
    let key = `${keyPrefix}-overflowed-indicator`;

    if ( renderPlaceholder !== true) {
      style = {
        ...style,
        display: 'none',
      };
    } else if (renderPlaceholder) {
      style = {
        ...style,
        visibility: 'hidden',
        // prevent from taking normal dom space
        position: 'absolute',
      };
      key = `${key}-placeholder`;
    }

    const overlay = (<div className={styles.dropdown}>{overflowedItems}</div>);

    return (
      <Dropdown
        className={`${prefixCls}-overflowed-submenu`}
        key={key}
        disabled={false}
        style={style}
        trigger={['click']}
        overlay={overlay}
        placement="bottomRight"
      > 
        {overflowedIndicator}
      </Dropdown>
    );
  }

  renderChildren(children) {
    // need to take care of overflowed items in horizontal mode
    const { lastVisibleIndex } = this.state;
    return (children || []).reduce((acc, childNode, index) => {
      let item = childNode;
      const { props: { eventkey } } = childNode;
      let overflowed = this.getOverflowedSubMenuItem(eventkey, []);
      if (lastVisibleIndex !== undefined ) {
        if (index > lastVisibleIndex) {
          item = React.cloneElement(
            childNode,
            // 这里修改 eventkey 是为了防止隐藏状态下还会触发 openkeys 事件
            {
              style: { display: 'none' },
              eventkey: `${eventkey}-hidden`,
              className: `${childNode.className || ''} ${MENUITEM_OVERFLOWED_CLASSNAME}`,
            },
          );
        }
        if (index === lastVisibleIndex + 1) {
          this.overflowedItems = children.slice(lastVisibleIndex + 1).map(c => React.cloneElement(
              c,
              // children[index].key will become '.$key' in clone by default,
              // we have to overwrite with the correct key explicitly
              { key: c.props.eventkey, mode: 'vertical-left' },
            ));
          overflowed = this.getOverflowedSubMenuItem(
            eventkey,
            this.overflowedItems,
          );
        }
      }

      const ret = [...acc, overflowed, item];

      if (index === children.length - 1) {
        // need a placeholder for calculating overflowed indicator width
        ret.push(this.getOverflowedSubMenuItem(eventkey, [], true));
      }
      return ret;
      // return [...acc, item];
    }, []);
  }

  render() {
    const { label, optionList } = this.props;
    return (
      <div className={styles.row} ref={node => { this.node = node; }}>
        <strong style={{marginRight: 8}}>{label}:</strong>
        {this.renderChildren(optionList)}
      </div>
    );
  }
}

export default DOMWrap;
