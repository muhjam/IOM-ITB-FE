import { createStore } from "vuex";
import auth from "./auth.module";
import activity from "./activity.module";

export default createStore({
  state() {
    return {
      // state properties
    };
  },
  mutations: {
    // mutations
  },
  actions: {
    // actions
  },
  modules: {
    auth,
    activity
  },
});
