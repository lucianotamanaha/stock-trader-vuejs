<template>
    <v-row>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </v-row>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from './Stock'

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>