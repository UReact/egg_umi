
import LS from 'util_storage';
import { where, url, delay, string } from 'util_react_web';
import config from './config';
import request from './request';

const { getPageQuery } = url;
const { getLikeWhere, getWhereObj} = string;

const getWidth = (elem) => {
  let width = elem &&
    typeof elem.getBoundingClientRect === 'function' &&
    elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};

const setStyle = (elem, styleProperty, value) => {
  if (elem && typeof elem.style === 'object') {
    // eslint-disable-next-line no-param-reassign
    elem.style[styleProperty] = value;
  }
};

const strIsInt = str => /^\+?[1-9][0-9]*$/.test(str);

const feedbackTypeObj = {
  viewCompanyInfo: 0,
  viewJobInfo: 1,
  viewProfile: 2,
  applyJob: 3,
  jobInvitation: 4,
  hrFeedback: 5,
  candidateFeddback: 6,
};

const stateTypeObj = {
  stop: 3,
  reject: 2,
  approved: 1,
  audit: 0
};

module.exports = {
  config,
  request,
  getPageQuery,
  getLikeWhere,
  getWhereObj,
  LS,
  Delay: delay,
  where,
  getWidth,
  setStyle,
  feedbackTypeObj,
  stateTypeObj,
  strIsInt
};
