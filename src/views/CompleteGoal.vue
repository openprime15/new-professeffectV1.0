<template>
  <v-container>
    <h1>작성완료 페이지 제작</h1>
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
export default {
  name: "CompleteGoal",
  methods: {
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

<style>
</style>