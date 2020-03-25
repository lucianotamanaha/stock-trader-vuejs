<template>
  <div>
    <v-app-bar dark>
      <v-toolbar-title>
        <v-btn text to="/">APP Stock Trade</v-btn>
      </v-toolbar-title>
      <v-btn text small to="/portfolio">Portfolio</v-btn>
      <v-btn text small to="/stocks">Stocks</v-btn>
      <v-spacer></v-spacer>
      <v-btn text small @click="endDay">End Day</v-btn>
      <div class="mr-5">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" small dark v-on="on">Save & Load</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in sublinks" :key="index">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <span>Funds: <strong>{{ funds | currency}}</strong></span>
    </v-app-bar>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data: () => ({
    sublinks: [
      { name: "teste", link: "/teste" },
      { name: "teste", link: "/teste" }
    ]
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>