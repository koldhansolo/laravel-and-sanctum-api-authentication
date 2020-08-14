<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title><router-link :to="{ name: 'Home'}" class="white--text text-decoration-none">SANCTUM AUTHENTICATION</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        outlined
        :to="{name: 'Login'}"
      >
        Iniciar sesión
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
