import {LOGOUT, LOGIN, ME, USER_INFO, USER_LOADING, SET_AUTH, CLEAR_AUTH, SET_USER_INFO, SET_LOADING} from '@constants/actionTypes';

const state = {
  token: null,
  payload: null,
  isLoading: true
};

const getters = {
  isAuthenticated: state => null !== state.token,
  payload: state => state.payload,
  token: state => state.token,
  username: state => null !== state.payload ? state.payload.username : null,
};

const mutations = {
  [SET_AUTH]: (state, {token, payload}) => {
      state.token = token;
      state.payload = payload;
  },

  [CLEAR_AUTH]: state => {
      state.token = null;
      state.payload = null;
  },

  [SET_USER_INFO]: (state, {payload}) => {
    state.payload = payload;
  },

  [SET_LOADING]: (state, {status})=> {
    state.isLoading = status;
  }
};

const actions = {
  [LOGIN]: ({commit}, user) => {
    window.localStorage.setItem('access_token', user.token);
    
    commit(SET_AUTH, {token: user.token, payload: user});
    return user;
  },
  [ME]: ({commit}, user) => {
    commit(SET_AUTH, {token: user.token, payload: user});
    return user;
  },
  [USER_INFO]: ({commit}, user) => {
    commit(SET_USER_INFO, { payload: user });
    return user;
  },
  [USER_LOADING]: ({commit}, status) => {
    commit(SET_LOADING, {status});
    return status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};