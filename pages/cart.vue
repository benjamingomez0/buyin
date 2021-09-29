<template>
  <main class="cart container">
    <h2>Your Cart</h2>

    <section v-if="cart.length">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.itemName }}
            </td>
            <td>
                <AppRemoveCartItem :itemInfo = "item"/>
            </td>
            <td> {{item.subtotal.toFixed(2)}} </td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="total">Total: {{getTotalPrice.toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
      <button>Proceed to checkout</button>
    </section>

    <AppEmptyCart v-else />
  </main>
</template>

<script>
import AppEmptyCart from "@/components/AppEmptyCart.vue";
import AppRemoveCartItem from '@/components/AppRemoveCartItem.vue';
export default {
  components: {
    AppEmptyCart,
    AppRemoveCartItem
  },
  computed: {
    cart() {

        return this.$store.state.cart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    }
  }
};
</script>

<style lang="scss" scoped></style>