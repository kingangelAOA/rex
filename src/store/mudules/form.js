const state = {
  form: {},
  items: [],
  valid: false,
  url: ''
};

const getters = {

};

const actions = {

};

const mutations = {
  init(state, payload) {
    state.form = payload.form
    state.items = payload.items
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
