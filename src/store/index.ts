import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

import hello from "../components/hello/store";

const store = {
  state: {
    loading: false,
    token: "",
  },
  mutations: {},
  actions: {},
  modules: { hello },
} as StoreOptions<State>;

const MainStore = new Vuex.Store(store);

export default MainStore;

/** 状态 */
type State = {
  loading: boolean;
  token: string;
};
