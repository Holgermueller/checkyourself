<template>
  <v-card id="errors">
    <v-card-title>
      <span> Oops! It seems something has gone wrong! </span>
    </v-card-title>
    <v-card-text>
      <strong>
        {{ error }}
      </strong>
      <p class="body-1">So sorry about that.</p>
      <p class="body-1">Please see the about page for further details.</p>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="reload"> reset </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ErrorCard",

  computed: {
    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.v-card,
strong,
p {
  color: red;
}
</style>
