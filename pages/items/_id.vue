<template>

    <div>
    
        <div class = "container">
            
            <section
            class="image"
            :style= "`background: url(${currentItem.image}) no-repeat center center`"
            >
            </section>

            <!-- <p> Description: </p> -->
            <section class="details">
                <h1 id ="title" >{{ currentItem.title }}</h1>
                <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

                <div class="quantity">
                    <input type="number" min="1" v-model="count" />
                    <button 
                    @click= "addToCart" class="primary"
                    id ="add-to-cart"
                    >
                    Add to Cart - ${{ combinedPrice }}
                    </button>
                </div>
                
            <AppCartAddedMessage v-if= "cartSubmitted"> Order Submitted! <br> 
                    View <nuxt-link to="/cart">cart</nuxt-link>
                    <br>
                    View more <nuxt-link to="/products">products</nuxt-link>
            </AppCartAddedMessage>
            </section>
        </div>

    </div>
</template>

<script>
    import { mapState } from "vuex";
    import AppCartAddedMessage from '@/components/AppCartAddedMessage.vue';

    export default {
        components:{
            AppCartAddedMessage
        },
        data() {
            return {
                id: this.$route.params.id,
                cartSubmitted: false,
                count: 1,
                
            }
        },
        computed: {
            ...mapState(["products"]),
            currentItem() {
                let foundItem = {}

                for(let i = 0; i < this.products.length ; i++ )
                {
                    if(this.products[i].id === +this.id )
                    {
                        foundItem = this.products[i]
                        break;
                    }
                }
                return foundItem
            },
            combinedPrice() {
                let total = this.count * this.currentItem.price;
                return total.toFixed(2);
            }
        },
        methods: {
            addToCart() {
                let cartFormOutput = {
                    itemName: this.currentItem.title,
                    count: this.count,
                    price:this.currentItem.price,
                    subtotal: +this.combinedPrice
                }
                this.$store.commit("updateCart", cartFormOutput)
                this.cartSubmitted = true
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 1000px;
        margin: 100px auto;
        display: grid;
        grid-template-columns: 800px 1fr;
        grid-template-rows: 800px 1fr;
        grid-column-gap: 60px;
        grid-row-gap: 60px;
        line-height: 2;
    }

    .image {
        grid-area: 1 / 1 / 2 / 2;
        background-size: cover;
    }
    .details {
        grid-area: 1 / 2 / 2 / 3;   
        position: relative;
        
    }
    #title{
        font-size: 2.5em;
        color:black
    }
    .options {
        grid-area: 2 / 1 / 3 / 2;
    }
   #add-to-cart{
       margin-bottom: 5px;
   }

        


</style>