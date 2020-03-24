<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
  import AppHeader from './components/Header'

  export default {
    components: {
      AppHeader
    }
  }
</script>
