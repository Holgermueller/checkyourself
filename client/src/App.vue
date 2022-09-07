<template>
  <v-app>
    <v-app-bar app color="#fafafa" elevation="0">
      <a href="/">
        <h1 class="title">
          <v-icon left>fa-solid fa-check</v-icon>
          Check Yourself
        </h1></a
      >

      <v-spacer></v-spacer>
      <a href="/about">About</a>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <strong
        >&copy; {{ new Date().getFullYear() }} - Holger Mueller
        <a href="https://github.com/Holgermueller/checkyourself" target="_blank"
          ><v-icon>mdi-github</v-icon></a
        >
        | Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and
        the
        <a href="https://perspectiveapi.com/" target="_blank"
          >Perspective API</a
        >
      </strong>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
body,
html {
  font-family: roboto, sans-serif;
}
h1,
.v-icon {
  color: #006600;
}
a {
  text-decoration: none;
}
</style>
