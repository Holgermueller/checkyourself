<template>
  <v-card elevation="0">
    <v-card-title>
      <h2>output</h2>
    </v-card-title>
    <v-card-text> {{ scores }} </v-card-text>
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

<style scoped></style>
