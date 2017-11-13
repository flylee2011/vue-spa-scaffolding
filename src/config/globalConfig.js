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

if (location.href.indexOf('localhost') != -1) {
    // 本地域名，打开调试模式
    globalConfig.debug = true;
}

export default globalConfig;
