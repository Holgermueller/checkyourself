<template>
  <div id="TweetMessage">
    <v-card>
      <v-card-title>
        <h1><v-icon left>fab fa-twitter</v-icon>Tweet it?</h1>
      </v-card-title>
      <v-card-text>
        <v-textarea
          id="tweetContainer"
          class="tweet-container"
          :value="messageToCheck"
          rounded
          clearable
          counter
          clear-icon
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <a
          id="shareTweet"
          ref="shareTweet"
          href="https://twitter.com/intent/tweet"
          data-size="large"
          ><v-btn @click="tweetIt" block
            ><v-icon left>fab fa-twitter</v-icon> Tweet It?
          </v-btn></a
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TweetMessageComponent",

  computed: {
    messageToCheck() {
      return this.$store.getters.messageToCheck;
    },
  },

  methods: {
    tweetIt() {
      let messageToShare = this.messageToCheck;
      let tweetURL = "https://twitter.com/intent/tweet?text=" + messageToShare;

      this.$refs.shareTweet.href = tweetURL;

      // document.getElementById("shareTweet").href = tweetURL;
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #1da1f2;
  color: #f5f8fa;
  margin-bottom: 2%;
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
a {
  width: 100%;
  text-decoration: none;
}
</style>
