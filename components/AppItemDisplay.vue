<template>
    <section class = "productinfo">
        <!-- <div>  -->
            <!-- this is the head -->
            <!-- name delivery time etc -->
        <!-- </div> -->

            <!-- this is the card more or less -->
        <div class="row">
            <div
            v-for="item in productArr"
            :key="item.id"
            :style= "`background: url(${item.image}) no-repeat center center`"
            class="items"
            >
            <div class="iteminfo">
                <!-- this is the bottom part with the price -->
                <div>
                    <h4>{{ item.title }}</h4>
                    <p>Price: {{ item.price.toFixed(2) }}</p>
                    <p>Avr Rating: {{ item.rating.rate }}</p>
                    <p>Ratings: {{ item.rating.count }}</p>
                </div>
                <nuxt-link :to="`/items/${item.id}`">
                    <button>View Item ></button>
                </nuxt-link>
            </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        props: {
            productArr: {
                type: [Array, Object]
            },
        },    
    }
</script>

