import { total, add, show, change } from "../api";

const store = {
  namespaced: true,
  state: {
    loading: false,
    editorTitle: "",
    editorContent: "",
    totalTable: [],
    totalCount: 0,
    pipeEditor: {},
    pipePagination: {},
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
    EDITORTITLE: (state, payload: string) => {
      state.editorTitle = payload;
    },
    EDITORCONTENT: (state, payload: string) => {
      state.editorContent = payload;
    },
    TOTALTABLE: (state, payload: any[]) => {
      state.totalTable.splice(
        0,
        state.totalTable.length,
        ...JSON.parse(JSON.stringify(payload))
      );
    },
    TOTALCOUNT: (state, payload: number) => {
      state.totalCount = payload;
    },
    PIPEEDITOR: (state, payload: boolean) => {
      state.pipeEditor = payload;
    },
    PIPEPAGINATION: (state, payload: boolean) => {
      state.pipePagination = payload;
    },
  },
  modules: {},
  actions: {
    Editor: async ({ state, commit, dispatch }, payload) => {
      const { title, content } = payload;
      commit("EDITORTITLE", title);
      commit("EDITORCONTENT", content);
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
    Change: async ({ state, commit, dispatch }, payload) => {
      try {
        commit("LOADING_ON", true);

        const editor = JSON.parse(JSON.stringify(state.pipeEditor.$data));
        const res = await change({ ...editor, ...payload });
        console.log("[I] [Change]: ", res.data);
        return true;
      } catch (error) {
        console.log("[E] [Change]: ", error);
        return false;
      } finally {
        commit("LOADING_OFF", false);
      }
    },
    Total: async ({ state, commit, dispatch }, payload) => {
      try {
        commit("LOADING_ON", true);
        const pagination = JSON.parse(
          JSON.stringify(state.pipePagination.$data)
        );

        const res = await total({
          page: pagination.page,
          limit: pagination.limit,
        });
        console.log("[I] [Total]: ", res.data);
        commit("TOTALTABLE", res.data.data);
        commit("TOTALCOUNT", res.data.count);

        return true;
      } catch (error) {
        console.log("[E] [Total]: ", error);
        return false;
      } finally {
        commit("LOADING_OFF", false);
      }
    },
    Show: async ({ state, commit, dispatch }, payload) => {
      try {
        commit("LOADING_ON", true);

        const res = await show(payload);
        console.log("[I] [Show]: ", res.data);
        await dispatch("Editor", res.data.data);

        return true;
      } catch (error) {
        console.log("[E] [Show]: ", error);
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

  totalTable: any[];
  totalCount: number;
  /** Pipe of components so it is easy to access realtime data */
  pipeEditor: any;
  pipePagination: any;
};
