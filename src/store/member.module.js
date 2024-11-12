import ApiService from "./api.service";

// Action type constants
export const GET_MEMBERS = "getMembers";
export const SET_MEMBERS = "setMembers";
export const POST_MEMBER = "postMember";
export const PUT_MEMBER = "putMember";
export const DELETE_MEMBER = "deleteMember";

// Define the initial state
const state = {
    members: [],
};

// Define getters
const getters = {
    members(state) {
        return state.members;
    },
};

// Define actions
const actions = {
    [GET_MEMBERS]({ commit }, params) {
        return new Promise((resolve, reject) => {
            ApiService.get("/members", params.data)
                .then(response => {
                    const { data } = response;
                    commit(SET_MEMBERS, data);
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error fetching members:", err);
                    reject(err);
                });
        });
    },
    [POST_MEMBER](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.post("/members", params.data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [PUT_MEMBER](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.put(`/members/${params.id}`, params.data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [DELETE_MEMBER](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.delete(`/members/${params.id}`)
                .then(() => {
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
};

// Define mutations
const mutations = {
    [SET_MEMBERS](state, data) {
        state.members = data;
    },
};

// Export the Vuex module
export default {
    state,
    getters,
    actions,
    mutations,
};
