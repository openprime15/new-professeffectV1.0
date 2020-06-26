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
          @change="test"
          label="카테고리"
          outlined
        ></v-select>
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
  </v-container>
</template>

<script>
export default {
  name: "WriteGoal",
  data: () => {
    return {
      items: [
        { code: 1, state: "운동" },
        { code: 2, state: "자격증 취득" },
        { code: 3, state: "자기계발" },
        { code: 4, state: "자기관리" },
        { code: 5, state: "다이어트" },
        { code: 6, state: "공부" },
        { code: 7, state: "저금" },
        { code: 8, state: "나만의 로망" }
      ]
    };
  },
  methods: {
    test(e) {
      console.log(e);
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
