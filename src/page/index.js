/**
 * @fileoverview 入口
 * @author liyifei
 * @date 2017/10
 */
// 基础库
import Vue from 'vue';
// 路由
import $router from '../router';
// 全局状态管理
import $store from '../store';
// 引入 css
import '../asset/css/page/index.css';

// 判断运行环境
console.log('env status: ', process.env.NODE_ENV);

// 根节点
import indexRoot from './index.vue';
// 实例化
new Vue({
    el: '#app-zoocer',
    router: $router,
    store: $store,
    template: '<indexRoot />',
    components: {
        indexRoot
    }
});
