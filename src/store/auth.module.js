import ApiService from "./api.service";
import JwtService from "./jwt.service";
import config from "@/ConfigProvider";
import router from "@/router";

export const GET_JWT = "getJWT";
export const GET_USER = "getUser";
export const GET_USER_JSON = "getUserJson";
export const VERIFY_AUTH = "verifyAuth";
export const PURGE_AUTH = "purgeAuth";
export const FETCH_JWT = "fetchJwt";

export const SET_JWT = "setJWT";
export const SET_USER = "setUser";
export const SET_USER_JSON = "setUserJson";

const state = {
  isAuthenticated: !!JwtService.getToken(),
  // isAuthenticated: false,
  user: JwtService.getUser(),
  userJson: {},
  sessionId: JwtService.getSession(),
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  currentUser(state) {
    return state.user || false;
  },
  currentSession(state) {
    return state.sessionId;
  },
};

const actions = {
  [GET_JWT](context) {
    const tokenFormUrl = router?.history?.current?.query?.token;
    return new Promise((resolve, reject) => {
      const nextUrl = encodeURIComponent(
        `/redirect?url=${window.location.href}`,
      );
      if (!context.getters.currentSession && !tokenFormUrl) {
        context.commit(PURGE_AUTH);

        window.location.href =
          config.value("GETHIRED_WEB_URL") + `/signin?next=${nextUrl}`;
        return;
      }
      ApiService.get(config.value("GETHIRED_WEB_URL") + "/employee/jwt", {
        session: context.getters.currentSession,
      })
        .then(async ({ data }) => {
          context.commit(SET_JWT, data.jwt);
          setTimeout(() => {
            ApiService.setHeader();
            return;
          }, 100);
          resolve(data);
        })
        .catch((err) => {
          if (!tokenFormUrl) {
            context.commit(PURGE_AUTH);
            // window.location.href =
            //   config.value("GETHIRED_WEB_URL") + `/signin?next=${nextUrl}`;
          }
          reject(err);
        });
    });

    // use this code for local development, and comment code above
    // try {
    //   const token = config.value("HARDCODE_TOKEN");
    //   context.commit(SET_JWT, token);
    //   setTimeout(() => {
    //     ApiService.setHeader();
    //     return;
    //   }, 100);
    // } catch (err) {
    //   context.commit(PURGE_AUTH);
    // }
  },
  async [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
    } else {
      await context.dispatch(GET_JWT);
    }
  },
  [GET_USER](context) {
    ApiService.setHeader();
    return new Promise((resolve, reject) => {
      ApiService.get(`/me?t=${new Date().getTime()}`)
        .then(async ({ data }) => {
          context.commit(SET_USER, data);
          resolve(data);
        })
        .catch((err) => {
          // reject(err);
        });
    });
  },
  [GET_USER_JSON](context) {
    ApiService.setHeader();
    return new Promise((resolve, reject) => {
      ApiService.getForm(`/userjson`)
        .then(async ({ data }) => {
          context.commit(SET_USER_JSON, data);
          resolve(data);
        })
        .catch((err) => {
          // reject(err);
        });
    });
  },
  [FETCH_JWT](context, token) {
    return new Promise((resolve, reject) => {
      let session = !token ? context.getters.currentSession : null;
      ApiService.get("/jwt", { token, session })
        .then(async ({ data }) => {
          if (data?.jwt) {
            context.commit(SET_JWT, data?.jwt);
          } else {
            context.commit(PURGE_AUTH);
          }
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [PURGE_AUTH](context) {
    context.commit(PURGE_AUTH);
    return;
  },
};

const mutations = {
  [SET_JWT](state, data) {
    if (data) {
      state.isAuthenticated = true;
      JwtService.saveToken(data);
    }
    return;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = null;
    state.sessionId = "";
    JwtService.destroyToken();
    JwtService.destroyUser();
  },
  [SET_USER](state, data) {
    if (data) {
      const nameArr = data.emp_full_name.split(" ");
      data.shortName = nameArr[0];
    }

    state.user = data;
    JwtService.saveUser(JSON.stringify(data));
    return;
  },
  [SET_USER_JSON](state, data) {
    console.log(data);
    state.userJson = data;
    return;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
