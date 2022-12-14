import Vue from "vue";
import Vuex from "vuex";

import Perspective from "./Perspective";
import Shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Perspective,
    Shared,
  },
});
