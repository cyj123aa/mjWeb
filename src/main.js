import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(iView);
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
