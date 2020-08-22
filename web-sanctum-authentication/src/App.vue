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
        v-if="!auth"
      >
        Iniciar sesión
      </v-btn>
      <v-btn
        text
        outlined
        v-if="auth"
        @click="logout"
        :loading="loading"
      >
        Cerrar sesión
      </v-btn>
    </v-app-bar>

    <v-main class="blue-grey lighten-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['auth', 'loading']),
  },
  methods: {
    ...mapActions(['logout'])
  },

  data: () => ({
    //
  }),
};
</script>
