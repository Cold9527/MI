<template>
    <div>
        <order-header />
        <router-view />
        <nav-footer />
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import OrderHeader from '../components/OrderHeader'
export default {
   name:'order',
   data() {
      return {
      }
   },
   components: {
       NavFooter,
       OrderHeader
   }

}
</script>

<style>

</style>
