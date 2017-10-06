
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from 'App';
import Router from 'router';
import store from 'store';
import Promise from 'promise-polyfill';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

// pollyfill for promises to support IE 11
if (!window.Promise) {
	window.Promise = Promise;
}

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(VueRx, Rx);

let router = new Router();

/* eslint-disable no-new */
new Vue({
	el: '#app',
	alert,
	router,
	store,
	template: '<App/>',
	render: h => h(App)
});
