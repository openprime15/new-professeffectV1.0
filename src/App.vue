<template>
  <v-app>
    <v-app-bar app color="red accent-1" dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>|
      <v-btn>
        <router-link to="/write_goal">목표 쓰기</router-link>
      </v-btn>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    window.Kakao.init(process.env.VUE_APP_CLIENT_ID);
  },
  components: {},

  data: () => ({
    //
  })
};
</script>
