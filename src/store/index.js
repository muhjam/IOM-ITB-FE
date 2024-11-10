import { createStore } from "vuex";
import auth from "./auth.module";
import activity from "./kegiatan.module";
import merchandise from "./merchandise.module";
import transaction from "./transaction.module";

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
    activity,
    merchandise,
    transaction
  },
});
