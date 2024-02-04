// vuex

interface Getter<S, R> {
  (state: S, getters: any, rootState: R, rootGetters: any): any;
}

interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}

interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

interface Mutation<S> {
  (state: S, payload?: any): any;
}

interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

interface Action<S, R> {
  (context: ActionContext<S, R>, payload?: any): any;
}

interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;
  rootState: R;
  rootGetters: any;
}

interface Dispatch {
  (type: string, payload?: any): any;
}

interface Commit {
  (type: string, payload?: any, options?: any): any;
}

interface ModuleTree<S> {
  [key: string]: Module<any, S>;
}

interface Module<S, R> {
  namespaced?: boolean;
  state?: S;
  getters?: GetterTree<S, R>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, R>;
  modules?: ModuleTree<R>;
}

interface StoreOptions<S> {
  state: S;
  getters?: GetterTree<S, S>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, S>;
  modules?: ModuleTree<S>;
}

const key = "key";

function useStore() {
  // return inject(key); // inject导出自vue的api
  // 使用inject接收上层暴露的store
}

class Store<S = any> {
  constructor(options: StoreOptions<S>) {}

  install(app: any) {
    // App 导出自vue的类型, 暂用any替代
    // 在install中将store进行暴露
    app.provide(key, this);
  }
}

export function createStore<S>(options: StoreOptions<S>) {
  return new Store<S>(options);
}
