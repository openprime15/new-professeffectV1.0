<template>
  <v-app>
    <v-app-bar app color="red accent-1" dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-btn>
        <router-link to="/">Home</router-link> </v-btn
      >|
      <v-btn>
        <router-link to="/write_goal">목표 쓰기</router-link>
      </v-btn>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
