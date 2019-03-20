export default {
  'GET /api/v1/base/%2Fmenu': {"code":0,"data":{"left":[{"index":0,"rev":"","rel":"","blankTarget":false,"path":"/jobs","icon":"","name":"hcapi.menu.left.jobs","id":20,"menutype":"left","loginedCan":false,"guestCan":false},{"index":0,"rev":"","rel":"","blankTarget":false,"path":"/intentions","icon":"","name":"hcapi.menu.left.candidates","id":21,"menutype":"left","loginedCan":false,"guestCan":false}],"right":[{"index":0,"rev":"","rel":"","blankTarget":false,"path":"/profiles","icon":"","name":"hcapi.menu.right.dashboard","id":22,"menutype":"right","loginedCan":false,"guestCan":false,"authority":["candidate"],"authorityIds":[{"key":1}]},{"index":0,"rev":"","rel":"","blankTarget":false,"path":"/hrs","icon":"","name":"hcapi.menu.right.my.company","id":23,"menutype":"right","loginedCan":false,"guestCan":false,"authority":["hr"],"authorityIds":[{"key":3}]}]},"msg":"Request success"},
  'GET /api/v1/base/%2Fi18n%2Fen-US': {
    "code": 0,
    "data": {
      "en-US": "EN",
      "zh-CN": "中文"
    },
    "msg": "Request success"
  },
  'GET /api/v1/base/%2Fi18n%2Fzh-CN': {
    "code": 0,
    "data": {
      "en-US": "EN",
      "zh-CN": "中文"
    },
    "msg": "请求成功"
  },
  'GET /api/v1/base/%2Fpath%2Floginweb': {
    "data": "http://localhost:3101"
  },
  'GET /api/v1/base/%2Fpath%2Fhcweb': {
    "data": "http://localhost:8000"
  },
  'GET /api/v1/base/current': {
    "code": 0,
    "data": {
      "lastAtFormat": "2018-11-16 10:32",
      "nickname": "Thomas Lau",
      "lastAt": "2018-11-16T02:32:59.000Z",
      "isLock": false,
      "lastLanguage": "zh",
      "companyId": 12,
      "personId": 1,
      "companyLogoimgurl": 'https://image.hiredchina.com/FvJrbm44dwItJpgiJ0ZYrZZdec1X',
      "headimgurl": "https://image.hiredchina.com/FpxXVRh34w3zIfxyMG-app_bLRpd",
      "createdAt": "2018-11-16T02:32:59.000Z",
      "updatedAt": "2018-12-13T03:40:37.000Z",
      "roles": ['logined', 'hr']
    },
    "msg": "请求成功",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6Mn0sImV4cCI6MTU0NTIxNDU4NiwiaWF0IjoxNTQ0NjA5Nzg2fQ.o7XepgzaqTgNPIhOXSxpbJmE1eH-3odXHJ_YvUEF88E"
  },
  'GET /api/v1/base/%2Fsystem': {
    "code": 0,
    "data": {
      "nameKey": "hcapi",
      "titleKey": "hc",
      "keyworkKey": "hc",
      "descriptionKey": "hc",
      "logoUrl": "https://image.hiredchina.com/logo.jpg",
      "miniLogoUrl": "https://image.hiredchina.com/FpBju7MOJRI78XUqTiJXaa-hgxIQ?imageView2/2/w/70",
      "copyrightKey": "",
      "recordCode": ""
    }
  },
  'GET /api/v1/base/%2Ffooter': {
    "code": 0,
    "data": {
      social: [
        {
          icon: 'facebook',
          href: 'https://www.facebook.com/HiredChina',
        },
        {
          icon: 'linkedin',
          href: 'https://www.linkedin.com/company-beta/5051303/',
        },
        {
          icon: 'twitter',
          href: 'https://twitter.com/HiredChina',
        },{
          icon: 'weibo',
          href: 'https://weibo.com/u/5492401803',
        },
      ],
      links: [
        {
          key: 'For Job Seekers',
          title: 'For Job Seekers',
          href: 'https://pro.ant.design',
          blankTarget: true,
          children: [
            {
              key: 'Find Jobs',
              title: 'Find Jobs',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Upload Resume',
              title: 'Upload Resume',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Salary',
              title: 'Salary',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Help',
              title: 'Help',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            }
          ]
        },
        {
          key: 'For Employers',
          title: 'For Employers',
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
          children: [
            {
              key: 'Post Jobs',
              title: 'Post Jobs',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Search Resumes',
              title: 'Search Resumes',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Executive Service',
              title: 'Executive Service',
              img: 'http://www.hiredchina.com/img/consulting.jpeg',
            },
          ]
        },
        {
          key: 'About Us',
          title: 'About Us',
          href: 'https://ant.design',
          blankTarget: true,
          children: [
            {
              key: 'Phone',
              title: '(86) 0755 21654992',
              icon: 'phone',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Email',
              title: 'info@hiredchina.com',
              icon: 'mail',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Subscribe',
              title: 'Subscribe',
              img: 'http://www.hiredchina.com/img/guideinchina_code.png',
            }
          ]
        },{
          key: 'Find Foreigners',
          title: 'Find Foreigners',
          href: 'https://ant.design',
          blankTarget: true,
          children: [
            {
              key: 'Part time',
              title: 'Part time',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Teacher',
              title: 'Teacher',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Experts',
              title: 'Experts',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Other',
              title: 'Other',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            }
          ]
        },{
          key: 'Find Jobs',
          title: 'Find Jobs',
          href: 'https://ant.design',
          blankTarget: true,
          children: [
            {
              key: 'Part time Jobs',
              title: 'Part time',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Teacher',
              title: 'Teacher',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Senior',
              title: 'Experts',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            },
            {
              key: 'Other Jobs',
              title: 'Other',
              href: 'https://github.com/ant-design/ant-design-pro',
              blankTarget: true,
            }
          ]
        },
      ]
    }
  }
};
