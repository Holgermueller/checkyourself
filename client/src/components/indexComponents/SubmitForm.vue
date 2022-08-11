<template>
  <v-card class="submit-form-card" elevation="0">
    <v-card-title> </v-card-title>

    <v-card-text>
      <v-form ref="form" class="form">
        <v-textarea
          aria-placeholder="Type text to check here..."
          placeholder="Type text to check here..."
          rows="5"
          v-model="message"
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="0" @click.prevent="clearForm">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        elevation="0"
        @click.prevent="submitForm"
        :disabled="this.message === ''"
        >Submit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SubmitForm",

  data: () => ({
    message: "",
    language: "",
  }),

  methods: {
    clearForm() {
      this.$refs.form.reset();
      this.message = "";
    },

    submitForm() {
      this.$store.dispatch("getScores", {
        message: this.message,
      });
    },
  },
};
</script>

<style scoped>
.form {
  width: 95%;
  margin: auto;
}
</style>
