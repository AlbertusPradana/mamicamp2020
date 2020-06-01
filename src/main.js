// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import AppDate from '@/components/AppDate'
import store from '@/store'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsa0HEASKa99ALJO-nWHXtgxzWkrqVziY',
  authDomain: 'mamicamp2020.firebaseapp.com',
  databaseURL: 'https://mamicamp2020.firebaseio.com',
  projectId: 'mamicamp2020',
  storageBucket: 'mamicamp2020.appspot.com',
  messagingSenderId: '312628094067',
  appId: '1:312628094067:web:2b0ea5fed5fb162e143606',
  measurementId: 'G-E1XTEMN2QV'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

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
