<template>
    <div class = "toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .toast {
    background: #8d0801;
    color: 214553;
    border-radius: 3px;
    padding: 12px 24px;
    position: relative;
    top: 0;
    right: 0;
    text-align: center;
    a {
    color: #D7BB98;
    font-weight: bold;
    text-decoration: none;
  }
  }
</style>