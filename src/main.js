import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "mck-professeffect.firebaseapp.com",
  databaseURL: "https://mck-professeffect.firebaseio.com",
  projectId: "mck-professeffect",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
  messagingSenderId: "720806938339",
  appId: "1:720806938339:web:36ee38427765d05ba127d6",
  measurementId: "G-ZSZ25KLRLR",
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
