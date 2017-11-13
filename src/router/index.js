/**
 * @fileoverview 路由
 * @author liyifei
 * @date 2017/10
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 组件
// 各页面业务组件
import {
    Home
} from '../component/';

const router = new VueRouter({
    routes: [
        // 根目录
        {
            path: '/',
            component: Home
        }
    ]
});

export default router;
