// const APIV1 = 'http://127.0.0.1:7004'
const APIV1 = '/api/v1';
const APIV2 = '/api/v2';


module.exports = {
  APIV1,
  APIV2,
  api: {
    base: `${APIV1}/base`,
    system: `${APIV1}/system`,
    loginApi: `${APIV1}/agent/loginapi`
  },
  PAGE_SIZE: 20,
  haveHeaderSearch: false,
  haveNotice: false
};