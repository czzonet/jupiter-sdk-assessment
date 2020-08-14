import { total, add } from "../api";

const store = {
  namespaced: true,
  state: {
    loading: false,
    editorTitle: "",
    editorContent: "",
    pipeEditor: {},
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
    PIPEEDITOR: (state, payload: boolean) => {
      state.pipeEditor = payload;
    },
    EDITORTITLE: (state, payload: string) => {
      state.editorTitle = payload;
    },
    EDITORCONTENT: (state, payload: string) => {
      state.editorContent = payload;
    },
  },
  modules: {},
  actions: {
    Editor: async ({ state, commit, dispatch }, payload) => {
      const { editorTitle, editorContent } = payload;
      commit("EDITORTITLE", editorTitle);
      commit("EDITORCONTENT", editorContent);
    },
    Add: async ({ state, commit, dispatch }, payload) => {
      try {
        commit("LOADING_ON", true);

        const editor = JSON.parse(JSON.stringify(state.pipeEditor.$data));
        const res = await add(editor);
        console.log("[I] [Add]: ", res.data);
        return true;
      } catch (error) {
        console.log("[E] [Add]: ", error);
        return false;
      } finally {
        commit("LOADING_OFF", false);
      }
    },
  },
} as MyStoreOption<State>;

export default store;

/** 状态 */
type State = {
  loading: boolean;
  editorTitle: string;
  editorContent: string;
  /** Pipe of components so it is easy to access realtime data */
  pipeEditor: any;
};
