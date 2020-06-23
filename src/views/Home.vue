<template>
  <div class="home">
    <!-- 여기서 만들든가 HomeBody가서 내용 쓰면 됩니다. -->
    <!-- 버튼을 누르면 목표 작성 페이지로 갈 수 있도록 ㄱㄱ -->
    <HomeBody />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBody from "@/components/HomeBody.vue";

export default {
  name: "Home",
  components: {
    HomeBody
  }
};
</script>
