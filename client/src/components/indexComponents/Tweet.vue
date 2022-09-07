<template>
  <div id="TweetMessage">
    <v-card>
      <v-card-title>
        <h1><i class="fab fa-twitter"></i> Tweet it?</h1>
      </v-card-title>
      <v-card-text>
        <v-textarea
          id="tweetContainer"
          class="tweet-container"
          :value="messageToCheck"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="tweetIt" block>
          <i class="fab fa-twitter"></i>
          <a
            id="shareTweet"
            href="https://twitter.com/intent/tweet"
            data-size="large"
          >
            Tweet It?</a
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TweetMessageComponent",

  data() {
    return {};
  },

  computed: {
    messageToCheck() {
      return this.$store.getters.messageToCheck;
    },
  },

  methods: {
    tweetIt() {
      let messageToShare = this.messageToCheck;
      let tweetURL = "https://twitter.com/intent/tweet?text=" + messageToShare;

      document.getElementById("shareTweet").attr("href", tweetURL);
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #1da1f2;
  color: #f5f8fa;
}
.v-textarea {
  background-color: #f5f8fa;
  padding: 8px;
}
.v-btn {
  background-color: #f5f8fa;
  color: #1da1f2;
  font-weight: bolder;
}
</style>
