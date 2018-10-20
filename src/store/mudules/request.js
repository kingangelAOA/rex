require('es6-promise').polyfill();
require('isomorphic-fetch');


const state = {
  url: '',
  options: {},
  isFetching: false,
  responseJson: null,
  ex: null
};

const getters = {
  successResponseJson: state => {
    if (state.responseJson.status === 200) {
      return state.responseJson.data
    }
    return null
  },
  failedResponseJson: (state, getters) => {
    if (getters.successResponseJson === null) {
      return state.responseJson.error
    }
    return null
  },
  isError: (state, getters) => {
    if (getters.successResponseJson === null) {
      return false
    }
    return true
  }
};

const actions = {
  fetchRequest({commit}, payload) {
    commit('request', payload)
  }
};

const mutations = {
  request(state, payload) {
    state.options = payload.options;
    state.url = payload.url;
    state.isFetching = true
    fetch(state.url, state.options).then(res => {
      if (res.ok) {
        state.response = res.json()
      } else {
        state.ex = res.statusText
      }
      state.isFetching = false
    }).catch(ex => {
      state.ex = ex
      state.isFetching = false
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
