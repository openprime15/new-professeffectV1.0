<template>
  <div>
    <h1>여기가 홈화면</h1>
    <div>
      안녕하세요?
      목표달성 도우미 서비스 떠벌림입니다.
      떠벌림 효과란 자신의 목표로 삼은 행동을 공개적으로
      남들에게 알림으로써 자신이 한 일에 더 책임을 느끼고 약속을
      더 잘 지키게 되는 효과입니다.
      새해에 다짐한 목표, 항상 생각하던 자기계발 잘 지키시지 않으신가요?
      지금 여러분의 목표를 설정해 주세요.
      저희가 떠벌려드리겠습니다.
    </div>
    <img src="../img/HomeImage.jpg" width="300" height="300" alt />
    <div>
      <button class="button" @click="toWriteForm">시작하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBody",
  methods: {
    toWriteForm() {
      this.$router.replace("/write_goal");
    }
  }
};
</script>

<style>
.button {
  background-color: rgba(254, 135, 123);
  color: white;
  width: 300px;
  height: 30px;
}
</style>