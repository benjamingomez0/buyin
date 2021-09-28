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
        <div class="smallnum" ></div>
        <nuxt-link to="/cart">Cart</nuxt-link>
    </nav>
   
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>