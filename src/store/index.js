/**
 * @fileoverview vuex 全局状态管理
 * @author liyifei
 * @date 2017/10
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: null
    },
    mutations: {
        updateUserInfo(state, payload) {
            state.userInfo = payload.userInfo;
        }
    }
});

export default store;
