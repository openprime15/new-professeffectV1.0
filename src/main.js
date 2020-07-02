import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "t4ir-blockchain-testprime.firebaseapp.com",
  databaseURL: "https://t4ir-blockchain-testprime.firebaseio.com",
  projectId: "t4ir-blockchain-testprime",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
  messagingSenderId: "350660345449",
  appId: "1:350660345449:web:e3bd9365e440cdc1306cf8",
  measurementId: "G-2M1FGCNFFQ",
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
