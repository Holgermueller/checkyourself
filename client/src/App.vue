<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="0">
      <v-btn to="/">Check Yourself</v-btn>

      <v-spacer></v-spacer>
      <v-btn to="about" elevation="0"> About </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <strong>&copy; {{ new Date().getFullYear() }} - Holger Mueller</strong>
    </v-footer>
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
