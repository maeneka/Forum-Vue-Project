// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBOhnTZ04pwJwZfs3JdMYPjqNUl229b9RY',
  authDomain: 'vueschool-forum-91414.firebaseapp.com',
  databaseURL: 'https://vueschool-forum-91414.firebaseio.com',
  projectId: 'vueschool-forum-91414',
  storageBucket: 'vueschool-forum-91414.appspot.com',
  messagingSenderId: '47206333910'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
