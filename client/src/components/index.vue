<template>
  <div class="container text-center">
    <ErrorCard v-if="error" />
    <div v-else class="row">
      <div class="col-xs-4 col-sm-6 col-md-6 col-lg-6">
        <SubmitForm />
      </div>
      <div class="col-xs-4 col-sm-6 col-md-6 col-lg-6">
        <ScoresDisplay />
      </div>
    </div>
    <div>
      <TweetMessageComponent />
    </div>
  </div>
</template>

<script>
import ErrorCard from "./indexComponents/Errors.vue";
import SubmitForm from "./indexComponents/SubmitForm.vue";
import ScoresDisplay from "./indexComponents/ScoresDisplay.vue";
import TweetMessageComponent from "./indexComponents/Tweet.vue";

export default {
  name: "HomePage",
  components: {
    ErrorCard,
    SubmitForm,
    ScoresDisplay,
    TweetMessageComponent,
  },

  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>
