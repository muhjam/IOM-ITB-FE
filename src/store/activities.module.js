import ApiService from "./api.service";

// Constants for actions and mutations
export const GET_ACTIVITIES = "getActivities";
export const GET_DETAIL_ACTIVITY = "getDetailActivity";
export const SET_ACTIVITIES = "setActivities";
export const SET_DETAIL_ACTIVITY = "setDetailActivity";
export const POST_ACTIVITY = "postActivity";
export const PUT_ACTIVITY = "putActivity";
export const DELETE_ACTIVITY = "deleteActivity";

// Define the initial state
const state = {
    activities: {},
    detailActivity:{}
};

// Define getters
const getters = {
    activities(state) {
        return state.activities; // Return the list of activities
    },
    detailActivity(state) {
        return state.detailActivity; // Return the list of activities
    },
};

// Define actions
const actions = {
    [GET_ACTIVITIES](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.get("/activities", params)
                .then(response => {
                    const { data } = response;
                    context.commit(SET_ACTIVITIES, data);
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error fetching activities:", err);
                    reject(err);
                });
        });
    },
    [GET_DETAIL_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.get(`/activities/${params?.slug}`)
                .then(response => {
                    const { data } = response;
                    context.commit(SET_DETAIL_ACTIVITY, data);
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error fetching activities:", err);
                    reject(err);
                });
        });
    },
    [POST_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.post("/activities", params.data)
                .then(response => {
                    const { data } = response;
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error creating activity:", err);
                    reject(err);
                });
        });
    },
    [PUT_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.put(`/activities/${params.id}`, params.data)
                .then(response => {
                    const { data } = response;
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error updating activity:", err);
                    reject(err);
                });
        });
    },
    [DELETE_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.delete(`/activities/${params.id}`)
                .then(() => {
                    resolve();
                })
                .catch(err => {
                    console.error("Error deleting activity:", err);
                    reject(err);
                });
        });
    },
};

// Define mutations
const mutations = {
    [SET_ACTIVITIES](state, data) {
        state.activities = data.data; // Set the state with the fetched activities data
    },
    [SET_DETAIL_ACTIVITY](state, data) {
        state.detailActivity = data.data; // Set the state with the fetched activities data
    },
};

// Export the Vuex store module
export default {
    state,
    getters,
    actions,
    mutations,
};
