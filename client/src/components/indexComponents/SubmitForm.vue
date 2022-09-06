<template>
  <v-card class="submit-form-card" elevation="0">
    <v-card-title>
      <div class="headline">Check yourself:</div>
    </v-card-title>

    <v-card-text>
      <v-form ref="form" class="form">
        <v-textarea
          aria-placeholder="Type text to check here..."
          placeholder="Type text to check here..."
          v-model="message"
        ></v-textarea>

        <!-- <v-select label="Select a language"></v-select> -->
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="0" @click="clearForm" rounded>Clear</v-btn>

      <v-btn
        elevation="0"
        @click.prevent="submitForm"
        :disabled="this.message === ''"
        rounded
        ><v-icon>mdi-account</v-icon>Submit</v-btn
      >
      <v-btn elevation="0" rounded>
        <v-icon>mdi-twitter</v-icon> Tweet it</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SubmitForm",

  data: () => ({
    message: "",
    // language: "",
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
      this.clearForm();
    },
  },
};
</script>

<style scoped>
.form {
  width: 95%;
  margin: auto;
}
v-btn {
  width: 100%;
}
</style>
