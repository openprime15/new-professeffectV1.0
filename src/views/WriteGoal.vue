<template>
  <v-container class="writepage">
    <!-- 목표 페이스북 또는 카카오톡 공유 페이지 -->
    <h1>목표 작성 폼</h1>
    <p>목표 떠벌리기</p>
    <v-row align="center">
      <v-col cols="12" sm="3">
        <p class="text-center font-weight-black">카테고리</p>
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
    <v-row>
      <v-col cols="12" sm="3">
        <p class="text-center font-weight-black">태그</p>
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
    <input type="date" id="start-date" /> | 종료 날짜
    <input type="date" id="end-date" />
    <br />
    <input type="checkbox" />
    알람 설정
    <input type="time" />
    <a id="create-kakao-link-btn" @click="shareKakao">
      <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
    </a>
    <iframe
      src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=92&height=28&appId"
      width="92"
      height="28"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <!-- <div id="fb-root"></div>
    <div
      class="fb-share-button"
      data-href="https://developers.facebook.com/docs/plugins/"
      data-layout="button"
      data-size="large"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
        class="fb-xfbml-parse-ignore"
      >공유하기</a>
    </div>-->
  </v-container>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect
  },
  name: "WriteGoal",
  data: () => {
    return {
      items: [
        { code: 1, state: "운동, 다이어트" },
        { code: 2, state: "교양" },
        { code: 3, state: "절제" },
        { code: 4, state: "공부" },
        { code: 5, state: "기타" }
      ],
      value: [],
      // 이렇게 기본값 설정 가능 value: [{ name: "Javascript", code: "js" }],
      options: []
    };
  },
  methods: {
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
    },
    // 카카오톡으로 공유하기
    shareKakao() {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "떠벌림",
          description: "#목표 #달성 #달성 #목표 #분위기 #소개팅",
          imageUrl:
            "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com"
          }
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com"
            }
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com"
            }
          }
        ]
      });
    }
  }
};
</script>
