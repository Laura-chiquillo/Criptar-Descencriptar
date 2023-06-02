import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

const state = {
    user: null,
};

const store = new vuex.Store({
    state,
    getters: {
        user: (state) => state.user,
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        }
    },

});

export default store;