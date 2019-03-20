import Mock, { Random } from 'mockjs';

const coverImgurl = [
  'http://img1.imgtn.bdimg.com/it/u=1136874347,1450057064&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2448877951,2620060011&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=4132183570,1215765008&fm=26&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=1470563913,3405471088&fm=26&gp=0.jpg',
  'https://f12.baidu.com/it/u=3040107888,665431335&fm=72',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1913035186,2697582614&fm=200&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4162602427,1308081213&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1087592139,1924203744&fm=200&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142774595,2935822695&fm=11&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2019838799,1735952744&fm=200&gp=0.jpg',
];
const companyLogo = [
  'https://image.hiredchina.com/FvJrbm44dwItJpgiJ0ZYrZZdec1X',
  'https://image.hiredchina.com/FuQQRKriO_jkL262bqQE5bnueyOc',
  'https://image.hiredchina.com/56fcc946c5199.jpg',
  'https://image.hiredchina.com/Ftvo16WEzTfKRuiBkpJSMoU7k_tV',
  'https://image.hiredchina.com/FpBju7MOJRI78XUqTiJXaa-hgxIQ',
  'https://image.hiredchina.com/Fud1uCFC6SKB71UEKLZN_pp6TPZT',
  'https://image.hiredchina.com/FpBju7MOJRI78XUqTiJXaa-hgxIQ',
  'https://image.hiredchina.com/FqhM15UBRML_0BSPIhG9LeyOgEbs',
  'https://image.hiredchina.com/Fv1ljONXQDCMDMcVkRBxxsE3VpiV',
  'https://image.hiredchina.com/Ft89EB9hiqEXCaPLm80uZ1A2gmmN',
  'https://image.hiredchina.com/Fq2J9VzJlE5BQ7rdFMh6AgTvCLFm',
  'https://image.hiredchina.com/FlR4gwZoXQXQoHSPC2F1cUNdOTkU',
  'https://image.hiredchina.com/FvkerRR5CTb5IcQMcmR-pecXPhg9',
  'https://image.hiredchina.com/FlvQ_Znpie0H86ZG57YRR4H7NYY-'
];

const personLogo = [
  'https://image.hiredchina.com/FqJPc4ct2H63tCqMHWzkgv8Y3x3X',
  'https://image.hiredchina.com/FkmwcU1Ucq33EjDhRKHrDzNYyjHA',
  'https://image.hiredchina.com/FvS0Bl5c9t_FUhW7kv0GqKA1PunL',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/X5pBzwcL3BJ8KCUUcEM1EjPPWFsicR9OibN04fDZLJA9FsDAZuS5lk6ibyXsox41RCZqv6KpPjAS9tW1SpgIhbF0g/132',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/PTFzoWHr1v2L5Yvk1SlYAwjTajI2XMC0n5AYzev7dOIYvoHEXcgGbHoQGaomUS6bvKNgXVbSFJNABhSFtOLplA/132',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/ps5dAicjCX2m4IISE2vbbIz4d5LRageibtO0QCq7lNUPvRufBdjACQ7reI2exr4NJESEbcy3qUyLWWJDgDkXK0wg/132',
  'https://image.hiredchina.com/Fs5A-9h27qyk7NWPbKHgNIqYQ4gW',
  'https://image.hiredchina.com/Fqv2ViphvOx7tdTHLcN-lmnj72u8',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ersuBOXN85F9DEiaAVjmkGJqKOKtnxECrqq4rN3mVlsGAVqN56hLWiceVkKlj1j7tMKjk3yAksgnOgA/132',
  'https://image.hiredchina.com/FgncwT0BB5fraSOim9jsH6nJCu1l',
  'https://image.hiredchina.com/FtwYDRy_yL1o25uWHwHgEkTb-vqh',
  'https://image.hiredchina.com/FhZu2G716OuVluiy7UEq1F4SFeKS',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/3DiamBv7ic91o1a8BneluEIJWCyAFV3zQibXt3nNrQgHe6iag7bbiaKdl5wwK8FQ9dW8YWPsOZ66K4hzyCDNTY4Ao0g/132',
  'https://image.hiredchina.com/FgS_-iyYUKbkETMxV1BGHg5IiaLs',
  'https://image.hiredchina.com/FnZSYM4WC2LtujKNaYkBQ9a_jVAG',
  'https://image.hiredchina.com/FoPzJKL0MUeOfKyY9GT2xmJb12Lz',
  'http://thirdwx.qlogo.cn/mmopen/vi_32/7DL88WEw0QtQRgsyfWVmyibmlpEhpn8nicWYJcwonWfNvvD8w1N6Kmx9ngpyOicBtvJib3qdmiclgk6249cia9ibFFv9g/132'
];

const employmentKey = [
  'Full-time',
  'Part-time',
  'Internship',
  'Contract',
  'Temporary',
];
const salaryKey = [
  'Nego',
  'More than 30K per month',
  '25K - 30K per month',
  '20K - 25K per month',
  '15K - 20K per month',
  '10K - 15K per month',
  'Under 10K per month'
];

const languageKey = [
  'Other',
  'English',
  'Chinese',
  'French',
  'Italian',
  'Spanish',
  'German'
];

const postKey = [
  'Retail',
  'Research & Development',
  'Real Estate',
  'Office Support',
  'Marketing',
  'Logistics',
  'Life Sciences',
  'Legal',
  'Industrial',
  'IT',
  'Hospitality',
  'Human Resources',
  'Healthcare',
  'Engineering & Manufacturing',
  'Education & Training',
  'Customer Service',
  'Creative',
  'Business Operation & Management',
  'Banking & Finance',
  'Administrative & Clerical',
  'Accounting'
];

const seniorityKey = [
  'Entry level',
  'Associate',
  'Mid-Senior level',
  'Director',
  'Executive'
];

const sizeKey = [
  '10,001+',
  '5,001 - 10,000',
  '1,001 - 5,000',
  '501 - 1,000',
  '101 - 500',
  '51 - 100',
  '11 - 50',
  '1 - 10',
];

const natureKey = [
  'Startup Company',
  'Nonprofits',
  'Government',
  'Foreign Representative Offices',
  'Publicly-Owned',
  'Foreign Investment (Europe and U.S)',
  'Foreign Investment (Non-Europe or U.S)',
  'Self-Owned',
  'Self-Employed',
  'Partnership',
  'Public Company',
  'Privately Held',
];

const degreeKey = [
  'High School',
  "Engineer's Degree",
  'Doctor of Philosophy (Ph.D.)',
  'Doctor of Medicine (M.D.)',
  'Juris Doctor (J.D.)',
  'Master of Business Administration (M.B.A.)',
  "Master's Degree",
  "Bachelor's Degree",
  "Associate's Degree",
];

const stateTypeKey = [
  'Material being reviewed',
  'Approved',
  'Reject',
  'Stop',
];

const mockProfile = () => (Mock.mock({
  firstName: '@first',
  lastName: '@last',

  line: '@word(11)',

  headimgurl: personLogo[Random.integer(0, personLogo.length - 1)],
  linkedinurl: '@url',

  headline: '@sentence(3, 10)',

  bornYear: '@integer(1960,2019)',
  isMan: '@boolean(1, 9, true)',
  isCertification: '@boolean(1, 9, true)',
  isChinese: '@boolean(1, 9, true)',
  isMarital: '@boolean(1, 9, true)',

  comeChinaYear: '@integer(1960,2019)',
  paidPerDay: '@integer(1,1000)',

  viewsNum: '@integer(1,1000)',
  newViewsNum: '@integer(1,1000)',
  newInvitationsNum: '@integer(1,1000)',
  payNum: '@integer(1,1000)',
  canSale: true, // '@boolean(1, 2, true)',

  companyName: '@title',
  nationalityKey: '@region',
  postKey: postKey[Random.integer(0, postKey.length - 1)],
  livingCityKey: '@city',

  postId: Random.integer(1, postKey.length - 1),
  nationalityId: 1,
  livingCityId: 1,

  languageIds: [1,2,3,4],
  salaryId: Random.integer(1, salaryKey.length - 1),
  salaryKey: salaryKey[Random.integer(0, salaryKey.length - 1)],

  lastLoginAt: '@date("yyyy-MM-dd HH:mm:ss")',

  viewAt: '@date("yyyy-MM-dd HH:mm:ss")',

  attachmentCount: '@integer(1,100)',

  canModify: true, // '@boolean(1, 2, true)',

  wantedAreaIds: [1,2,3,4],
  wantedPostIds: [1,2,3,4],

  'wantedAreas|1-10': [{'id|+1': 1,areaKey: '@city'}],
  'wantedPosts|1-10': [{'id|+1': 1,postKey: postKey[Random.integer(0, postKey.length - 1)]}],
  'languages|1-10': [{'id|+1': 1,languageKey: languageKey[Random.integer(0, languageKey.length - 1)]}],

  appling: true,

  email: '****@qq.com',
  phone: '134****7829',


  // bid: {
  //   id: '@integer(1,1100)',
  //   paidPerDay: '@integer(1000,11000)',
  //   // endAt: '@date("yyyy-MM-dd HH:mm:ss")',
  // }
}));


const mockJob = () => (Mock.mock({
  companyLogoimgurl: companyLogo[Random.integer(0, companyLogo.length - 1)],
  title: '@title',
  line: '@word(11)',
  companyName: '@title(3, 5)',
  companyCoverimgurl: coverImgurl[Random.integer(0, coverImgurl.length - 1)],
  companyLine: '@word(11)',

  seniorityKey: seniorityKey[Random.integer(0, seniorityKey.length - 1)],
  employmentKey: employmentKey[Random.integer(0, employmentKey.length - 1)],
  salaryKey: salaryKey[Random.integer(0, salaryKey.length - 1)],

  'areas|1-10': [{'id|+1': 1,areaKey: '@city'}],
  'languages|1-10': [{'id|+1': 1,languageKey: languageKey[Random.integer(0, languageKey.length - 1)]}],
  
  postKey: postKey[Random.integer(0, postKey.length - 1)],

  postId: 1,
  employmentId: 1,
  salaryId: 1,
  seniorityId: 1,

  languageIds: [ {key: 1}, {key: 2}, {key: 3}, {key: 4}],
  areaIds: [ {key: 1}, {key: 2}, {key: 3}, {key: 4}],


  emails: ['thomas@qq.com','thoa@126.com'],

  stateTypeId: '@integer(0, 3)',
  stateTypeKey: stateTypeKey[Random.integer(0, stateTypeKey.length - 1)],

  requirements: '@sentence(20, 100)',
  description: '@sentence(20, 100)',

  paidPerDay: '@integer(1,1000)',

  rejectReasonTypeTitle: '@sentence', // 审核不通过原因
  rejectReasonTypeKey: '@sentence',

  hrLoginAt: '@date("yyyy-MM-dd HH:mm:ss")',
  createdAt: '@date("yyyy-MM-dd HH:mm:ss")',

  viewsNum: '@integer(1,1000)',
  applyNum: '@integer(1,1000)',
  newViewsNum: '@integer(1,1000)',
  newApplysNum: '@integer(1,1000)',

  isApply: '@boolean(1, 9, true)',
  viewAt: '@date("yyyy-MM-dd HH:mm:ss")',

  canModify: '@boolean(1, 2, true)',

  bid: {
    id: '@integer(1,1100)',
    paidPerDay: '@integer(1000,11000)',
    // endAt: '@date("yyyy-MM-dd HH:mm:ss")',
  }
}));

const mockCompany = () => (Mock.mock({
  name: '@title',
  cnName: '@ctitle',
  website: '@url',

  line: '@word(11)',

  info: '@sentence(20, 100)',
  logoimgurl: companyLogo[Random.integer(0, companyLogo.length - 1)],
  coverimgurl: coverImgurl[Random.integer(0, coverImgurl.length - 1)],

  industryKey: postKey[Random.integer(0, postKey.length - 1)],
  sizeKey: sizeKey[Random.integer(0, sizeKey.length - 1)],
  natureKey: natureKey[Random.integer(0, natureKey.length - 1)],

  founded: '@integer(1960,2019)',

  'areas|1-10': [{'id|+1': 1,areaKey: '@city'}],
  
  industryId: 1,
  // areaIds: [{key: 1},{key: 2},{key: 3},{key: 4},{key: 5}],
  sizeId: 1,
  natureId: 1,
  areaIds: [ 1,2,3,4,5],
  
  stateTypeTitle: '@title(1, 2)',
  stateTypeKey: '@title(1, 2)',
  stateTypeId: 1,
  
  rejectReasonTypeTitle: '@sentence', // 审核不通过原因
  rejectReasonTypeKey: '@sentence',

  hrLoginAt: '@date("yyyy-MM-dd HH:mm:ss")',

  viewsNum: '@integer(1,1000)',
  newViewsNum: '@integer(1,1000)',
  newApplysNum: '@integer(1,1000)',

  // appling: true,
  master: {
    nickname: '@name',
    phone: '@integer(13000000000, 18000000000)'
  },

  canModify: '@boolean(1, 2, true)',


}));

const mockFeedback = () => (Mock.mock({
  content: '@sentence(20, 100)',
  feedbackTypeId: '@integer(0,7)',

  creatorName: '@name',
  creatorId: '@integer(1,1000)',

  companyName: '@title',
  companyAddrName: '@title',
  companyLogoimgurl: companyLogo[Random.integer(0, companyLogo.length - 1)],
  companyLine: '@word(11)',

  positionTitle: '@title',
  positionLine: '@word(11)',
  positionSalaryTitle: salaryKey[Random.integer(0, salaryKey.length - 1)],

  personName: '@name',
  personHeadimgurl: personLogo[Random.integer(0, personLogo.length - 1)],
  personLine: '@word(11)',
  personHeadline: '@sentence(3, 10)',

  createdAt: '@date("yyyy-MM-dd HH:mm:ss")',

  isMy: '@boolean(1, 2, true)'

}));


const mockSkill = () => (Mock.mock({
  'id|+1': 1,
  title: '@title',
}));

const mockWork = () => (Mock.mock({
  'id|+1': 1,
  companyName: '@title',
  companyLine: '@word(11)',
  companyLogoimgurl: companyLogo[Random.integer(0, companyLogo.length - 1)],
  companyIntro: '@sentence(20, 100)',

  industryKey: postKey[Random.integer(0, postKey.length - 1)],

  title: '@title',

  startAt: '@date("yyyy-MM-dd HH:mm:ss")',
  endAt: '@date("yyyy-MM-dd HH:mm:ss")',
  isCurrent: '@boolean(1, 2, true)',

  descriptiont: '@sentence(20, 100)',
}));

const mockEducation = () => (Mock.mock({
  'id|+1': 1,
  school: '@title',
  field: '@title',
  startAt: '@date("yyyy-MM-dd HH:mm:ss")',
  endAt: '@date("yyyy-MM-dd HH:mm:ss")',
  description: '@sentence(20, 100)',
  degreeKey: degreeKey[Random.integer(0, degreeKey.length - 1)],
  degreeId: Random.integer(1, degreeKey.length - 1)
}));


const mockSkillList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockSkill());
  }
  return list;
};

const mockWorkList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockWork());
  }
  return list;
};

const mockEducationList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockEducation());
  }
  return list;
};

const mockProfileList = (limit = 20) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockProfile());
  }
  return list.sort( (a,b) => {
    if(a.hrLoginAt < b.hrLoginAt) {
      return 1;
    } 
    return -1;
  });
};

const mockJobList = (limit = 20) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockJob());
  }
  return list.sort( (a,b) => {
    if(a.hrLoginAt < b.hrLoginAt) {
      return 1;
    } 
    return -1;
  });
};


const mockCompanyList = (limit = 20) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockCompany());
  }
  return list;
};

const mockFeedbackList = (limit = 20) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockFeedback());
  }

  return list.sort( (a,b) => {
    if(a.createdAt < b.createdAt) {
      return 1;
    } 
    return -1;
  });
};

const mockAttachmentList = () => [
  [ 
    { id: 1, title: 'test.mp4', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
    { id: 2, title: 'test1.jpeg', url: 'https://image.hiredchina.com/FqRvxn9UJO4Q_kqitQz51jCvpVhP' },
    { id: 3, title: 'test2.png', url: 'https://image.hiredchina.com/FrThF6ibSWkKBHhD0cz_W9fRF-3K' },
  ],
  [
    { id: 4, title: 'test3.jpg', url: 'https://image.hiredchina.com/FrThF6ibSWkKBHhD0cz_W9fRF-3K' },
    { id: 5, title: 'test4.gif', url: 'https://image.hiredchina.com/FrThF6ibSWkKBHhD0cz_W9fRF-3K' },
    { id: 6, title: 'test5.jpega', url: 'https://image.hiredchina.com/FrThF6ibSWkKBHhD0cz_W9fRF-3K' },
  ],
  [
    { id: 7, title: 'test.avi', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
    { id: 8, title: 'test.rm', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
    { id: 9, title: 'test.rmvb', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
  ],
  [
    { id: 10, title: 'test.3gp', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
    { id: 11, title: 'test.mov', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
    { id: 12, title: 'test.mov1', url: 'https://image.hiredchina.com/Fg5BRCx3RYkqE6QJ9xZXnuFn1rKL' },
  ]
];

const musicOrFileList = () => [
  { id: 13, title: 'test.doc', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 14, title: 'test.docx', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 15, title: 'test.pdf', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 16, title: 'test.txt', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 17, title: 'test.ppt', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 18, title: 'test.pptx', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 19, title: 'test.mp3', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 20, title: 'test.mov1', url: 'https://image.hiredchina.com/FnYJibfj2oXtoxBDXt8A7C6BB1WQ' },
  { id: 21, title: 'test1.mp3', url: 'http://img.ad.guideinchina.com/Toft%20Willingham-Dust.mp3' },
  
];

const mockResume = () => (Mock.mock({
  'id|+1': 1,
  summary: '@sentence(20, 100)',
  title: '@title',

  educations: mockEducationList(),
  skills: mockSkillList(),
  experiences: mockWorkList()
}));

const mockResumeList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockResume());
  }
  return list;
};

const mockHr = () => (Mock.mock({
  'id|+1': 1,
  headimgurl: personLogo[Random.integer(0, personLogo.length - 1)],
  nickname: '@name',
  mobilePhone: '@integer(13000000000, 18000000000)',
  email: '@email',
}));

const mockHrList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockHr());
  }
  return list;
};

const mockTask = () => (Mock.mock({
  id: '@integer(1,1000)',
  titleKey: '@title',
  describeKey: '@sentence(20, 100)',
  award: '@integer(100,1000)',
  url: '@url',
  imgUrl: coverImgurl[Random.integer(0, coverImgurl.length - 1)],
  isFinish: '@boolean(1, 2, true)',
}));

const mockTasksList = (limit = 4) => {
  const list = [];
  for (let i = 0; i < limit; i += 1) {
    list.push(mockTask());
  }
  return list;
};


export default {
  // --- account
  // 'GET /api/v1/account': {
  //   data: Mock.mock({
  //     balance: '@integer(0,10000)',
  //     companyBalance: '@integer(8000,10000)',
  //     discountList: [
  //       { showKey: '¥1,000+¥500 free!', id: '@integer(0,1000)' },
  //       { showKey: '¥500+¥300 free!', id: '@integer(0,1000)' },
  //       { showKey: '¥200+¥50 free!', id: '@integer(0,1000)' },
  //       { showKey: '¥100+¥10 free!', id: '@integer(0,1000)' },
  //       { showKey: '¥50', id: '@integer(0,1000)' },
  //     ]
  //   })
  // },
  // 'POST /api/v1/account/pay': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'POST /api/v1/account/topup': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //     id: '@integer(0,1000)',
  //   })
  // },
  // 'POST /api/v1/account/transfer': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- resumes
  // 'GET /api/v1/resumes': {
  //   data: {
  //     count: 100,
  //     limit: 20,
  //     list: mockResumeList()
  //   }
  // },
  // 'POST /api/v1/resumes': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/resumes/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/resumes/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- attachments
  // 'GET /api/v1/attachments': {
  //   data: {
  //     photoOrVideoList: mockAttachmentList(),
  //     musicOrFileList: musicOrFileList(),
  //   }
  // },

  // 'POST /api/v1/attachments': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // 'DELETE /api/v1/attachments/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- profiles
  // 'PUT /api/v1/profiles': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'POST /api/v1/profiles': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  'GET /api/v1/profiles': {
    data: {
      count: 100,
      limit: 20,
      list: mockProfileList()
    }
  },
  // 'GET /api/v1/profiles/current': {
  //   data: Mock.mock({
  //     bidHowMuch: '@integer(1000,10000)',
  //     current: mockProfile(),
  //     top3: mockProfileList(3)
  //   })
  // },
  // 'POST /api/v1/profiles/confirm': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'POST /api/v1/profiles/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/profiles/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  
  // 'GET /api/v1/profiles/check': {
  //   data: {
  //     count: 100,
  //     limit: 3,
  //     list: mockProfileList(3)
  //   }
  // },
  // 'GET /api/v1/profiles/similar': {
  //   data: {
  //     count: 100,
  //     limit: 12,
  //     list: mockProfileList(12)
  //   }
  // },
  // 'GET /api/v1/profiles/suit': {
  //   data: {
  //     count: 100,
  //     limit: 10,
  //     list: mockProfileList(12)
  //   }
  // },
  // 'GET /api/v1/profiles/news': {
  //   data: {
  //     count: 100,
  //     limit: 10,
  //     list: mockProfileList(12)
  //   }
  // },
  // 'GET /api/v1/profiles/contacts': {
  //   data: Mock.mock({
  //     canSeeContact: false,// '@boolean(1, 2, true)',
  //     buyContactHowMush: '@integer(1000,5000)',
  //     'phones|1-10': ['@integer(13000000000, 18000000000)'],
  //     'emails|1-10': ['@email'],
  //   })
  // },
  // 'POST /api/v1/profiles/bid': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/profiles/bid': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- jobs
  // 'PUT /api/v1/jobs/stop': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/jobs/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'POST /api/v1/jobs': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //     line: '@word(11)',
  //   })
  // },
  // 'POST /api/v1/jobs/bid': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/jobs/bid/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'GET /api/v1/jobs': {
  //   data: {
  //     count: 100,
  //     limit: 20,
  //     list: mockJobList()
  //   }
  // },
  // 'GET /api/v1/jobs/similar': {
  //   data: {
  //     count: 100,
  //     limit: 12,
  //     list: mockJobList(12)
  //   }
  // },
  // 'GET /api/v1/jobs/suit': {
  //   data: {
  //     count: 100,
  //     limit: 10,
  //     list: mockJobList(12)
  //   }
  // },
  // 'GET /api/v1/jobs/top3': {
  //   data: {
  //     list: mockJobList(3)
  //   }
  // },
  // 'GET /api/v1/jobs/alsoview': {
  //   data: {
  //     count: 100,
  //     limit: 10,
  //     list: mockJobList(10)
  //   }
  // },
  // 'GET /api/v1/jobs/interview': {
  //   data: {
  //     count: 100,
  //     limit: 10,
  //     list: mockJobList(10)
  //   }
  // },
  // 'GET /api/v1/jobs/current': {
  //   data: Mock.mock({
  //     current: mockJob(),
  //     'emails|1-10': [ '@email' ],
  //     newJobHowMuch: '@integer(5000,6000)',
  //     newJobNeedPay: true,
  //     howManyFree: '@integer(2,5)',
  //   })
  // },

  // 'GET /api/v1/jobs/company': Mock.mock({
  //   data: {
  //     list: [
  //       { key: 0, list: mockJobList(Random.integer(0,22)), count: '@integer(0,2000)'  },
  //       { key: 1, list: mockJobList(Random.integer(0,21)), count: '@integer(0,1000)'  },
  //       { key: 2, list: mockJobList(Random.integer(0,20)), count: '@integer(0,1300)'  },
  //       { key: 3, list: mockJobList(Random.integer(0,12)), count: '@integer(0,1500)'  },
  //     ],
  //     cost: '@integer(5000,6000)',
  //     bidHowMuch: '@integer(1000,2000)',
  //   }
  // }),
  
  // --- companies
  // 'GET /api/v1/companies': {
    
  //   data: {
  //     count: 100,
  //     limit: 20,
  //     list: mockCompanyList()
  //   }
  // },

  // 'GET /api/v1/companies/check': {
  //   data: {
  //     count: 100,
  //     limit: 3,
  //     list: mockCompanyList(3)
  //   }
  // },

  // 'GET /api/v1/companies/current': {
    
  //   data: mockCompany()
  // },

  // 'POST /api/v1/companies/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // 'DELETE /api/v1/companies/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // 'GET /api/v1/companies/similar': {
    
  //   data: {
  //     count: 100,
  //     limit: 12,
  //     list: mockCompanyList(12)
  //   }
  // },

  // 'POST /api/v1/companies': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // 'PUT /api/v1/companies': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },


  // --- feedbacks
  // 'POST /api/v1/feedbacks/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'GET /api/v1/feedbacks': {
  //   data: {
  //     count: 100,
  //     limit: 20,
  //     list: mockFeedbackList()
  //   }
  // },
  // 'GET /api/v1/feedbacks/focus': {
  //   data: {
  //     list: mockFeedbackList()
  //   }
  // },
  // 'PUT /api/v1/feedbacks/company': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/feedbacks/person': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/feedbacks/job': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'GET /api/v1/feedbacks/company': Mock.mock({
  //   data: [
  //     { key: 0, list: mockFeedbackList(Random.integer(0,22)), count: '@integer(0,2000)'  },
  //     { key: 1, list: mockFeedbackList(Random.integer(0,21)), count: '@integer(0,1000)'  },
  //     { key: 2, list: mockFeedbackList(Random.integer(0,20)), count: '@integer(0,1300)'  },
  //     { key: 3, list: mockFeedbackList(Random.integer(0,12)), count: '@integer(0,1500)'  },
  //     { key: 4, list: mockFeedbackList(Random.integer(0,32)), count: '@integer(0,1700)'  },
  //     { key: 5, list: mockFeedbackList(Random.integer(0,15)), count: '@integer(0,1600)'  },
  //     { key: 6, list: mockFeedbackList(Random.integer(0,18)), count: '@integer(0,1100)'  },
  //   ]
  // }),
  // 'GET /api/v1/feedbacks/person': Mock.mock({
  //   data: [
  //     { key: 0, list: mockFeedbackList(Random.integer(0,22)), count: '@integer(0,2000)'  },
  //     { key: 1, list: mockFeedbackList(Random.integer(0,21)), count: '@integer(0,1000)'  },
  //     { key: 2, list: mockFeedbackList(Random.integer(0,20)), count: '@integer(0,1300)'  },
  //     { key: 3, list: mockFeedbackList(Random.integer(0,12)), count: '@integer(0,1500)'  },
  //     { key: 4, list: mockFeedbackList(Random.integer(0,32)), count: '@integer(0,1700)'  },
  //     { key: 5, list: mockFeedbackList(Random.integer(0,15)), count: '@integer(0,1600)'  },
  //     { key: 6, list: mockFeedbackList(Random.integer(0,18)), count: '@integer(0,1100)'  },
  //   ]
  // }),
  // 'GET /api/v1/feedbacks/job/*': Mock.mock({
  //   data: [
  //     { key: 1, list: mockFeedbackList(Random.integer(0,21)), count: '@integer(0,1000)'  },
  //     { key: 2, list: mockFeedbackList(Random.integer(0,20)), count: '@integer(0,1300)'  },
  //     { key: 3, list: mockFeedbackList(Random.integer(0,12)), count: '@integer(0,1500)'  },
  //     { key: 4, list: mockFeedbackList(Random.integer(0,32)), count: '@integer(0,1700)'  },
  //     { key: 5, list: mockFeedbackList(Random.integer(0,15)), count: '@integer(0,1600)'  },
  //     { key: 6, list: mockFeedbackList(Random.integer(0,18)), count: '@integer(0,1100)'  },
  //   ]
  // }),
  // 'POST /api/v1/feedbacks': {
  //   data: Mock.mock({
  //     errSms: '@title', 
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- skills
  // 'POST /api/v1/skills': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/skills/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- experiences
  // 'POST /api/v1/experiences': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/experiences/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/experiences/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- educations
  // 'POST /api/v1/educations': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/educations/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/educations/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- upload
  // 'GET /api/v1/upload/token': {
  //   data: {
  //     token: 'token', 
  //     errSms: '', 
  //     origin: 'img.hiredchina.com',
  //   }
  // },

  // --- hrs
  // 'GET /api/v1/hrs': {
  //   data: {
  //     master: mockHr(),
  //     list: mockHrList(),
  //     applyList: mockHrList(),
  //     isMaster: true
  //   }
  // },
  // 'GET /api/v1/hrs/check': {
  //   data: {
  //     list: mockHrList(),
  //   }
  // },
  // 'POST /api/v1/hrs': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/hrs': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/hrs/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'PUT /api/v1/hrs/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'POST /api/v1/hrs/apply': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
  // 'DELETE /api/v1/hrs/apply/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },

  // --- tasks
  // 'GET /api/v1/tasks': {
  //   data: {
  //     oneTimeTasks: mockTasksList(),
  //     dailyTasks: mockTasksList(),
  //   }
  // },
  // 'PUT /api/v1/tasks/*': {
  //   data: Mock.mock({
  //     errSms: '@title',
  //     succeed: '@boolean(1, 2, true)',
  //   })
  // },
};