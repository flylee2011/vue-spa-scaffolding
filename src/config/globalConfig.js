/**
 * @fileoverview 全局配置
 * @author liyifei
 * @date 2017/11
 */
let globalConfig = {
    // 调试模式
    debug: false,
    // api 域名
    apiDomain: '/'
};

if (process.env.NODE_ENV == 'develop') {
    // 打开调试模式
    globalConfig.debug = true;
    globalConfig.apiDomain = '/test/';
}

export default globalConfig;
