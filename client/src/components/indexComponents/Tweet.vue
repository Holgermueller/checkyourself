<template>
  <div id="TweetMessage">
    <v-card>
      <v-card-title>
        <h1>Tweet it?</h1>
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="messageToTweet"
          :value="messageToCheck"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="tweetIt" block>Tweet It?</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TweetMessageComponent",

  data() {
    return {
      messageToTweet: "",
    };
  },

  computed: {
    messageToCheck() {
      return this.$store.getters.messageToCheck;
    },
  },

  methods: {
    tweetIt() {
      console.log("tweet");
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
}
.v-btn {
  background-color: #f5f8fa;
  color: #1da1f2;
  font-weight: bolder;
}
</style>
