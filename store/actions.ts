export default {
  prepareApp({ commit }: any) {
    commit('setAppReady', true);
  },
};
