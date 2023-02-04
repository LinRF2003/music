import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vant组件库
import vant from 'vant'
import 'vant/lib/index.css'
// 引入二次封装的axios
import Request from "./utils/Request";

import Carousel from './components/Carousel.vue'


const app = createApp(App);
app.config.globalProperties.$Request = Request;

app.component("Carousel", Carousel);
app.use(router);
app.use(vant);

app.mount('#app');