import ApiService from "./api.service";

// Action type constants
export const GET_HELP_SUBMISSIONS = "getHelpSubmissions";
export const SET_HELP_SUBMISSIONS = "setHelpSubmissions";
export const POST_HELP_SUBMISSION = "postHelpSubmission";
export const PUT_HELP_SUBMISSION = "putHelpSubmission";
export const DELETE_HELP_SUBMISSION = "deleteHelpSubmission";

// Define the initial state
const state = {
    helpSubmissions: [],
};

// Define getters
const getters = {
    helpSubmissions(state) {
        return state.helpSubmissions;
    },
};

// Define actions
const actions = {
    [GET_HELP_SUBMISSIONS]({ commit }, params) {
        return new Promise((resolve, reject) => {
            ApiService.get("/help-submissions", params.data)
                .then(response => {
                    const { data } = response;
                    commit(SET_HELP_SUBMISSIONS, data);
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [POST_HELP_SUBMISSION](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.post("/help-submissions", params.data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [PUT_HELP_SUBMISSION](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.put(`/help-submissions/${params.id}`, params.data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [DELETE_HELP_SUBMISSION](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.delete(`/help-submissions/${params.id}`)
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
    [SET_HELP_SUBMISSIONS](state, data) {
        state.helpSubmissions = data;
    },
};

// Export the Vuex module
export default {
    state,
    getters,
    actions,
    mutations,
};
