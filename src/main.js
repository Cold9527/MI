import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import env from './env'

//根据前端的跨域方式来调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// axios.defaults.baseURL = env.baseURL
//接口拦截处理
axios.interceptors.response.use(function(response) {
  let res = response.data
  let path = location.hash;
  if(res.status === 0){
    return res.data
  }else if (res.status === 10){
    if(path !== '#/index'){
      window.location.href = '/#/login'
      return Promise.reject(new Error('用户密码错误'))
    }    
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
},(error)=>{
  let res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

Vue.use(VueCookie)
Vue.prototype.$Message = Message
Vue.use(VueAxios, axios)
Vue.use(VueLazyload,{
  loading: 'imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
