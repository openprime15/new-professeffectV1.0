<template>
  <div class="writepage">
    <!-- 목표 페이스북 또는 카카오톡 공유 페이지 -->
    <h1>목표 작성 폼</h1>
    <p>목표 떠벌리기</p>
    <select name id>
      카테고리
      <option value>운동</option>
      <option value>어학</option>
      <option value>미술</option>
      <option value>음악</option>
      <option value>공부</option>
      <option value>금기</option>
    </select>
    세부 카테고리
    <input type="text" />
    <br />세부 내용
    <textarea name id cols="30" rows="10"></textarea>
    <hr />시작 날짜
    <input type="date" id="start-date" /> |
    종료 날짜
    <input type="date" id="end-date" />
    <br />
    <input type="checkbox" />
    알람 설정
    <input type="time" />
  </div>
</template>

<script>
export default {
  name: "WriteGoal"
};
</script>
