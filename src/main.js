// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueFire);


// Initialize Firebase
let app;


var config = {
    apiKey: "AIzaSyBA3wD62xFH0JPvEGhyYivVfze68OeAYrw",
    authDomain: "aplicacion01-bd4a2.firebaseapp.com",
    databaseURL: "https://aplicacion01-bd4a2.firebaseio.com",
    projectId: "aplicacion01-bd4a2",
    storageBucket: "aplicacion01-bd4a2.appspot.com",
    messagingSenderId: "424336792866"
};


	

let ap = firebase.initializeApp(config)
let db = ap.database();
let articlesRef = db.ref('articles');
export default articlesRef;




firebase.auth().onAuthStateChanged(function(user){
	if (!app) {
		app = new Vue({
		  el: '#app',
		  router,
		  components: { App },
		  template: '<App/>'
		})
	}
});



