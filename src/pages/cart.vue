<template>
    <div>
        cart
        <order-header />
        <nav-footer />
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import OrderHeader from '../components/OrderHeader'
export default {
   name:'cart',
   data() {
      return {
      }
   },
   components:{
       NavFooter,
       OrderHeader
   }

}
</script>

<style>

</style>
