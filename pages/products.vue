<template>
    <div>
        <AppItemDisplay :productArr = "filteredProducts"/>
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
            //Future Improvements -> add filtering functionaliy
            return this.products
        }
    },
};
   
</script>

<style lang="scss" scoped>

</style>