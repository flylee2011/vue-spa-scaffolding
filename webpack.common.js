/**
 * @fileoverview webpack 通用配置
 * @author liyifei
 * @date 2017/10
 */
let commonConfig = {
    // 根目录
    publicPath: '/',
    // 开发目录
    devPath: './src/',
    // 开发端口
    devPort: 8001,
    // 发布目录
    buildPath: './build/',
    // 图片相对路径
    imgPath: 'images/',
    // 图片转 base64 最大文件大小，<10k 的图片转 base64
    imgMaxSize: 10 * 1000
};
// 入口
commonConfig.entry = {
    // 公共类库
    vendor: ['vue/dist/vue.esm.js', 'vue-router', 'vuex'],
    // 业务
    page: commonConfig.devPath + 'page/index.js'
};

module.exports = commonConfig;
