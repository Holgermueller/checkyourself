<template>
  <v-container class="main-container">
    <v-row class="text-center">
      <v-col>
        <SubmitForm />
      </v-col>
      <v-col>
        <ScoresDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubmitForm from "./indexComponents/SubmitForm.vue";
import ScoresDisplay from "./indexComponents/ScoresDisplay.vue";

export default {
  name: "HomePage",
  components: {
    SubmitForm,
    ScoresDisplay,
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 5%;
}
</style>
