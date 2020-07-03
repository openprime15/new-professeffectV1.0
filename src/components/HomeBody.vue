<template>
  <v-container>
    <h1>여기가 홈화면</h1>
    <v-row no-gutters>
      <v-col cols="6">
        안녕하세요? 목표달성 도우미 서비스 떠벌림입니다. 떠벌림 효과란 자신의
        목표로 삼은 행동을 공개적으로 남들에게 알림으로써 자신이 한 일에 더
        책임을 느끼고 약속을 더 잘 지키게 되는 효과입니다. 새해에 다짐한 목표,
        항상 생각하던 자기계발 잘 지키시지 않으신가요? 지금 여러분의 목표를
        설정해 주세요. 저희가 떠벌려드리겠습니다.
        <div id="firebaseui-auth-container"></div>
        <!-- <button @click="GoogleLogin" class="google-button"></button> -->
      </v-col>
      <v-col cols="6">
        <img src="../img/HomeImage.jpg" width="300" height="300" alt />
        <div>
          <v-btn id="goButton" @click="toWriteForm">시작하기</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
var firebase = require("firebase");
var firebaseui = require("firebaseui");

export default {
  name: "HomeBody",
  methods: {
    toWriteForm() {
      this.$router.push("/write_goal");
    }
  },
  mounted: function() {
    var uiConfig = {
      signInSuccessUrl: "/",

      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account"
          }
        }
      ],

      tosUrl: "/"

      // privacyPolicyUrl: function() {
      //   window.location.assign("/");
      // }
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style>
#goButton {
  background-color: rgba(254, 135, 123);
  color: white;
  width: 300px;
  height: 30px;
}
</style>
