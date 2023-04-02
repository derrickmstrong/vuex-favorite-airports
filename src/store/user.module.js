export default {
  namespaced: true,
  state: {
    firstName: 'Derrick',
    lastName: 'Strong',
  },
  mutations: {},
  actions: {},
  getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`;
    },
  },
};