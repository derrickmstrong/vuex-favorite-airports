export default {
  state: {
    favorites: [],
  },
  mutations: {
    UPDATE_FAVORITES(state, payload) {
      state.favorites = payload;
    },
  },
  actions: {
    addToFavorites: function (context, payload) {
      const favorites = context.state.favorites;
      favorites.push(payload);
      context.commit('UPDATE FAVORITE', favorites);
    },
  },
  getters: {},
};