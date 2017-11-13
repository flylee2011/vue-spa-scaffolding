# vue-spa-scaffolding

single application scaffolding powered by vue family(2.x)

---

## Installation

### Notice: The project need nodejs && webpack environment. Recommend nodejs version > 6.9，webpack 2.x

```
// install require lib
sudo npm install -g webpack webpack-dev-server

// clone code
git clone https://github.com/flylee2011/vue-spa-scaffolding.git
cd vue-spa-scaffolding

// install project dependencies
npm install
```

---

## Command Tools
```
// run dev server
// open http://localhost:8001
npm run start-dev

// build code, the result in /build folder
npm run build

// run build server
// open http://localhost:8002
npm run start-build
```

---

## Src Code Structure

```
|-asset # 静态资源文件
|   |-css
|   |-images
|   |-html # 静态页
|-page # 应用入口
|-component # vue 组件
|-router # vue 路由
|-store # vuex 组件
|-config # 配置文件，如接口域名、图片域名等
|-utils # 工具类组件
|-vendor # 第三方插件类
|-index.html # 入口html文件
```

---

## License

BSD license

---
