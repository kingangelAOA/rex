const state = {
  message: '',
  status: false,
  type: 'success'
};

const getters = {};

const actions = {
  trigger({commit}, payload) {
    commit('open', payload)
  },
  disappear({commit}) {
    commit('close')
  }
};

const mutations = {
  open(state, payload) {
    state.status = true;
    state.message = payload.message;
    state.type = payload.type
  },
  close(state) {
    state.status = false;
    state.message = '';
    state.type = 'success'
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
