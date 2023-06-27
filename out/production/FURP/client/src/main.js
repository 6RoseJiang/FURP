import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import './assets/main.css'
import router from "@/router";
import * as echarts from 'echarts';

const app = createApp(App);

app.use(router)
app.use(Antd).mount('#app');
