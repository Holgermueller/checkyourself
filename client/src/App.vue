<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/">Home</v-btn>
      <v-btn to="about"> About </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
