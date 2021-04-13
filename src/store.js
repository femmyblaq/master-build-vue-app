import Vue from "vue";
import Vuex from "vuex";
import axios from "./auth_store";
import instance from "./auth_store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },

  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    },
  },

  actions: {
    async signUp({ commit }, payload) {
      try {
        const response = await axios.post("/register", payload);
        console.log("asyn await", response);
        return response.data;
      } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);
      }
    },

    async login(context, payload) {
      try {
        const request = await axios.post("/login", payload);
        console.log("async await", request);
        localStorage.setItem("salt", `Bearer ${request.data.token.token}`);

        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${request.data.token.token}`;

        return request.data;
      } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);
      }
    },
  },
  getters: {},
});
