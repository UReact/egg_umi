import * as profilesService from '../services/profiles';

export default {
  namespace: 'profiles',
  state: {
    list: [],
    total: null,
    page: null,
    hasMore: true,
    loginUrl: null,
    where: {
      kw: '',
      postId: null,
      areaId: null,
      employmentId: null
    },
  },
  reducers: {
    save: (state, { payload: { list, total, page, hasMore = true, where }}) => ({ ...state, list, total, page, hasMore, where }),
  },
  effects: {
    *fetchInfinite({ payload }, { call, put }) {
      const { page = 1, list = [], kw, postId, areaId, employmentId } = payload;
      const { data } = yield call(profilesService.fetch, { page, where: { kw, postId, areaId, employmentId } });
      const { list: infiniteList , count, limit } = data;
      yield put({ 
        type: 'save', 
        payload: { 
          list: list.concat(infiniteList), 
          total: parseInt(count, 10),
          page: parseInt(page, 10),
          hasMore: limit * page < count,
          where: {
            kw, postId, areaId, employmentId
          }
        } 
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/intentions') {
          dispatch({ type: 'fetchInfinite', payload: query});
        } 
      });
    }
  }
};