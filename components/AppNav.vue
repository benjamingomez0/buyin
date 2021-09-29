<template>
    <nav>
        <ul>
        <li>
            <nuxt-link exact to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/products">Products</nuxt-link>
        </li>
        </ul>
        <div class="smallnum" v-if="getTotalItems > 0">
            {{ getTotalItems }}
        </div>
            <nuxt-link to="/cart">Cart</nuxt-link>
    </nav>
   
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            "getTotalItems",
        ])
    },
};
    
</script>

<style lang="scss" scoped>

</style>