<template>
  <v-container style="width:50%">
    <!-- 목표 페이스북 또는 카카오톡 공유 페이지 -->
    <h1 class="text-center font-weight-black">목표 떠벌림</h1>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <p id="formText" class="font-weight-black text-sm-center">카테고리</p>
      </v-col>
      <v-col class="d-flex" cols="12" sm="9">
        <v-select
          :items="items"
          item-value="code"
          item-text="state"
          @change="changeCategory"
          label="카테고리"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <p id="formText" class="font-weight-black text-sm-center">태그</p>
      </v-col>
      <v-col class="d-flex" cols="12" sm="9">
        <multiselect
          v-model="value"
          tag-placeholder="Add this as new tag"
          placeholder="넣고 싶은 태그"
          label="name"
          track-by="code"
          :options="options"
          :multiple="true"
          :taggable="true"
          @tag="addTag"
        ></multiselect>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <p id="formText" class="font-weight-black text-sm-center">내용</p>
      </v-col>
      <v-col class="d-flex" cols="12" sm="9">
        <v-text-field label="내용을 입력해주세요" single-line outlined></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <p id="formText" class="text-sm-center font-weight-black">언제부터?</p>
      </v-col>
      <v-col cols="8" sm="6">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="selectDate"
              label="날짜를 선택해주세요"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" :allowed-dates="allowedDates" no-title scrollable range>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="d-flex" cols="4" sm="3">
        <p class="d-flex align-center">주</p>
        <v-text-field
          v-model="rows"
          class="mx-4"
          label="회"
          max="7"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3" sm="3"></v-col>
      <v-col cols="9" sm="4">
        <p class="font-weight-black" id="formText">알람 설정</p>
        <v-switch class="mx-2" value input-value="true"></v-switch>
      </v-col>
      <v-col cols="12" sm="5">
        <v-text-field label="알람 시간" value="12:30:00" type="time" suffix="GMT+9"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div class="my-2">
        <v-btn id="goButton" @click="toWriteForm">작성 완료</v-btn>
      </div>
    </v-row>
    <!-- <select name id>
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
    <input type="date" id="start-date" /> | 종료 날짜
    <input type="date" id="end-date" />
    <br />
    <input type="checkbox" />
    알람 설정
    <input type="time" />-->
  </v-container>
</template>

<script>
import Multiselect from "vue-multiselect";
import "material-design-icons-iconfont/dist/material-design-icons.css";
export default {
  components: {
    Multiselect
  },
  name: "WriteGoal",
  data: () => {
    return {
      date: [new Date().toISOString().substr(0, 10)],
      menu: false,
      today: new Date().toISOString().substr(0, 10),
      items: [
        { code: 1, state: "운동, 다이어트" },
        { code: 2, state: "교양" },
        { code: 3, state: "절제" },
        { code: 4, state: "공부" },
        { code: 5, state: "기타" }
      ],
      value: [],
      // 이렇게 기본값 설정 가능 value: [{ name: "Javascript", code: "js" }],
      options: [],
      rows: 1
    };
  },
  methods: {
    allowedDates(val) {
      return this.date[1] ? val >= this.today : val >= this.date[0];
    },
    //작성완료 페이지로 이동
    toWriteForm() {
      this.$router.push("/complete_goal");
    },
    //카테고리 선택시 세부카테고리 목록
    changeCategory(e) {
      switch (e) {
        case 1:
          // console.log(1);
          this.options = [
            { name: "홈트레이닝", code: "1-1" },
            { name: "걷기", code: "1-2" },
            { name: "헬스장 가기", code: "1-3" },
            { name: "아침 운동", code: "1-4" },
            { name: "kg 감량", code: "1-5" }
          ];
          break;
        case 2:
          // console.log(2);
          this.options = [
            { name: "책 읽기", code: "2-1" },
            { name: "신문기사 읽기", code: "2-2" },
            { name: "강연 듣기", code: "2-3" }
          ];
          break;
        case 3:
          // console.log(3);
          this.options = [
            { name: "금연", code: "3-1" },
            { name: "금주", code: "3-2" },
            { name: "금겜", code: "3-3" },
            { name: "일찍 기상", code: "3-4" }
          ];
          break;
        case 4:
          // console.log(4);
          this.options = [
            { name: "영어 공부", code: "4-1" },
            { name: "인강 듣기", code: "4-2" },
            { name: "자격증 취득", code: "4-3" }
          ];
          break;
        case 5:
          // console.log(5);
          this.options = [
            { name: "저축", code: "5-1" },
            { name: "하늘 보기", code: "5-2" },
            { name: "일기 쓰기", code: "5-3" }
          ];
          break;
        default:
          break;
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    }
  },
  computed: {
    selectDate() {
      return this.date.join("~");
    }
  }
};
</script>
<style>
#formText {
  color: rgba(254, 135, 123);
}
</style>
