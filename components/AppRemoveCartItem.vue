<template>
    <div>


        <input 
            type="number"  
            @change ="cartUpdater()"
            v-model="amount"
            class="changeAmt" 
            >
        
    </div>
</template>

<script >
import { mapState } from 'vuex';

export default {
    data() {
        return {
            amount: parseInt(this.itemInfo.count)
        } 
    },   
    props: {
        itemInfo : {
            type: Object
        }
    },
    computed: {
        ...mapState([
            'cart',
        ])
    },
    methods:{
        cartUpdater() {
            let updatedItem = {
                itemName: this.itemInfo.itemName,
                count : parseInt(this.amount),
                price: Number(this.itemInfo.price),
                subtotal: Number(this.amount) * Number(this.itemInfo.price),
                id: this.itemInfo.id,              
            }

            this.$store.commit('UpdateCartAmounts',updatedItem)
            
           
         
        }
    }
};

</script>

<style lang="scss" scoped>
    .changeAmt{
        width: 25%;
    }
</style>