<template>
  <v-col cols="4">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{stock.name}}</div>
          <v-list-item-title class="headline mb-1">Price: {{stock.price}}</v-list-item-title>
          <v-list-item-subtitle>
            <v-text-field type="number" label="Quantity" filled v-model="quantity" :error="insufficientFunds"></v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
          <v-img :src="stock.image"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="buyStock" :disabled="quantity <= 0 || insufficientFunds">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
      buyStock() {
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: this.quantity
          }
          this.$store.dispatch('buyStock', order);
          this.quantity = 0;
      }
  }
};
</script>