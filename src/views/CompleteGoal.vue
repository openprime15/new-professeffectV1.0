<template>
  <v-container>
    <h1>작성완료 페이지 제작</h1>

    <v-navigation-drawer :width="width" :value="true" stateless>
      <v-img
        :aspect-ratio="16 / 9"
        src="https://i.imgur.com/MUlLzZP.jpg"
        id="capture"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">{{ getCategory }}목표 도전</div>
            <div class="body-1">{{ getTitle }}</div>
            <div class="body-1">{{ getDate }}</div>
          </v-col>
        </v-row>
      </v-img>
    </v-navigation-drawer>
    <v-row>{{ getCategory }}</v-row>
    <v-row>{{ getValue }}</v-row>
    <v-row>{{ getTitle }}</v-row>
    <v-row>{{ getDate }}</v-row>
    <v-row>{{ getRows }}</v-row>
    <v-row>{{ getAlarm }}</v-row>
    <v-row>{{ getAlarmTime }}</v-row>
    <v-row><v-btn @click="captureImage">캡쳐하기</v-btn></v-row>
    <a id="create-kakao-link-btn" @click="shareKakao">
      <img
        src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
      />
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
import html2canvas from "html2canvas";
import { mapGetters } from "vuex";
export default {
  name: "CompleteGoal",
  data() {
    return {
      capturedata: "",
      width: 600,
    };
  },
  methods: {
    //버튼 누르면 이미지 캡쳐 되도록
    captureImage() {
      html2canvas(document.querySelector("#capture"), {
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        //이미지 다운 되도록
        const cp = document.createElement("a");
        cp.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        cp.download = "captureImage.jpg";
        cp.click();
        this.capturedata = canvas.toDataURL("image/jpeg");
        // console.log(url);
      });
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
            webUrl: "https://developers.kakao.com",
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
              webUrl: "https://developers.kakao.com",
            },
          },
        ],
      });
    },
  },
  computed: {
    ...mapGetters([
      "getCategory",
      "getValue",
      "getTitle",
      "getDate",
      "getRows",
      "getAlarm",
      "getAlarmTime",
    ]),
  },
  // created: function() {
  //   html2canvas(document.querySelector("#capture"), {
  //     allowTaint: true,
  //     useCORS: true,
  //   }).then((canvas) => {
  //     //이미지 다운 되도록
  //     const cp = document.createElement("a");
  //     cp.href = canvas
  //       .toDataURL("image/jpeg")
  //       .replace("image/jpeg", "image/octet-stream");
  //     cp.download = "captureImage.jpg";
  //     cp.click();
  //     this.capturedata = canvas.toDataURL("image/jpeg");
  //     // console.log(url);
  //   });
  // },
};
</script>

<style>
.subheading {
  /* position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2; */
  font-size: 5rem;
  text-align: center;
}
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
