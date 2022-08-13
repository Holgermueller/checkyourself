<template>
  <v-card elevation="0">
    <v-card-title>
      <h2>Scores</h2>
    </v-card-title>
    <v-card-text>
      <div class="scores">
        <div v-for="(score, index) in scores" :key="index" class="score">
          <div
            class="single-score"
            :style="`width: ${score.Score}%; background: ${score.color}; border-left: 4px solid ${score.borderColor}`"
          ></div>
          <span>
            <h4>{{ score.ScoreName }}: {{ score.Score }}</h4>
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ScoresDisplay",
  data: () => ({}),

  computed: {
    scores() {
      return this.$store.getters.scores;
    },
  },
};
</script>

<style scoped>
.scores {
  width: 95%;
  margin: 0 auto;
}
.score {
  background: #fafafa;
  margin: 10px auto;
  position: relative;
}
.single-score {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
}
span {
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}
</style>
