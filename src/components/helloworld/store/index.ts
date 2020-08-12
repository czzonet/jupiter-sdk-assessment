const store = {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    LOADING: (state, payload: boolean) => {
      state.loading = payload;
    },
    LOADING_ON: (state, payload: boolean) => {
      state.loading = payload;
    },
    LOADING_OFF: (state, payload: boolean) => {
      state.loading = payload;
    },
  },
  modules: {},
  actions: {},
} as MyStoreOption<State>;

export default store;

/** 状态 */
type State = {
  loading: boolean;
};
