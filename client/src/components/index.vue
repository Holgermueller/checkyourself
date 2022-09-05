<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-6 col-lg-6">
        <SubmitForm />
      </div>
      <div class="col-xs-4 col-sm-4 col-md-6 col-lg-6">
        <ScoresDisplay />
      </div>
    </div>
  </div>
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
/* .main-container {
  margin-top: 5%;
} */
</style>
