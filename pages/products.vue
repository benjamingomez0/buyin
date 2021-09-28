<template>
    <div>
        <pre>{{ products[0] }}</pre>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'products',
        ]),
        filteredProducts() {
            //to do:
            //filter results by category.
            return this.products
        }
    },
};
   
</script>

<style lang="scss" scoped>

</style>