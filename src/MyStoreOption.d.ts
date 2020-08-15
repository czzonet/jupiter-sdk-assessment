/**
 * MyStore
 */
declare interface MyStoreOption<S> {
  /** namespaced  */
  namespaced: boolean;
  /** state */
  state: S;
  /** getters */
  getters?: Getters<S>;
  /** mutations */
  mutations: Mutations<S>;
  /** actions */
  actions: Actions<S>;
  /** modules */
  modules?: Modules;
}

type Getters<S> = {
  [prop: string]: (
    state: S,
    getters: any,
    rootState: any,
    rootGetters: any
  ) => any;
};

/** 模块 */
type Modules = any;

/** 同步变更状态函数 */
type Mutations<S> = {
  [prop: string]: (state: S, payload: any) => void;
};

/** 异步执行操作函数 */
type Actions<S> = {
  [prop: string]: (context: Context<S>, payload?: any) => Promise<any>;
};
/** 模块上下文对象 */
type Context<S> = {
  /** 状态 */
  state: S;
  /** 提交状态变更 */
  commit: (mutation: string, payload?: any, obj?: { root: boolean }) => void;
  /** 根状态 */
  rootState: any;
  /** 分发异步操作 */
  dispatch: (
    action: string,
    payload?: any,
    obj?: { root: boolean }
  ) => Promise<any>;
};
