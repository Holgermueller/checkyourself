<template>
  <v-card id="aboutCard" elevation="0">
    <v-card-title>
      <h1 class="display-4">About:</h1>
    </v-card-title>
    <v-card-text>
      <h2>How it works:</h2>
      <p class="body-1">
        This app leverages data from the Perspective API. Enter a message you
        want to send into the text field and check the toxicity level before you
        send it.
      </p>
      <h2>Some things to note:</h2>
      <p class="body-1">
        Phrases yield better results than single words, and it is only set to
        work with English.
      </p>
      <p class="body-1">Words from other languages will cause an error.</p>
      <p class="body-1">
        The API has difficulty detecting what language a word is from. For
        example, the word 'die' by itself will be interpreted as the German word
        'die,' which translates into 'the' in English. The API will not think
        it's the English verb meaning the end of life.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn to="/">Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
#aboutCard {
  width: 85%;
  margin: auto;
}
p {
  color: #212121;
}
</style>
