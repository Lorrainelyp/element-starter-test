import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

// 页面
import Cropper from './pages/demo/Cropper'
import Draggable from './pages/demo/Draggable'

const routes = [
  { path: '/pages/demo/Cropper', component: Cropper },
  { path: '/pages/demo/Draggable', component: Draggable }
]

const router = new VueRouter({
  routes 
})

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
