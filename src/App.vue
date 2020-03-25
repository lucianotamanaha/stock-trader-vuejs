<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container fluid>
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Header";

export default {
  components: {
    AppHeader
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>