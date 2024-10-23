import ApiService from "./api.service";

// Constants for actions and mutations
export const GET_ACTIVITIES = "getActivities";
export const SET_ACTIVITIES = "setActivities";
export const POST_ACTIVITY = "postActivity";
export const PUT_ACTIVITY = "putActivity";
export const DELETE_ACTIVITY = "deleteActivity";

// Define the initial state
const state = {
    activities: [],
};

// Define getters
const getters = {
    activities(state) {
        return state.activities; // Return the list of activities
    },
};

// Define actions
const actions = {
    [GET_ACTIVITIES](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.get("/activity/list", params)
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
    [POST_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.post("/activity/create", params.data)
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
            ApiService.put(`/activity/update/${params.id}`, params.data)
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
            ApiService.delete(`/activity/delete/${params.id}`)
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
};

// Export the Vuex store module
export default {
    state,
    getters,
    actions,
    mutations,
};
