const state = {
  valid: false
};

const getters = {

};

const actions = {
  createForm({commit}, payload) {
    commit('init', payload)
  },
  submit({commit}, payload) {
    commit('request/fetchRequest', )
  }
};

const mutations = {
  init(state, payload) {
    state.that = payload.that;
    state.form = payload.form;
    state.postUrl = payload.postUrl;
    state.postOptions = payload.postOptions;
    state.items = payload.items
  },
  postForm(state, payload) {

  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
