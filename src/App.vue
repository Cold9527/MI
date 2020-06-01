<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  data(){
    return {

    }
  },
  mounted(){
    this.getUser(),
    this.getCartCount()
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{

      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{

      })
    }
  }

}
</script>
<style lang='scss'>
@import '../resource/scss/reset.scss';
@import '../resource/scss/config.scss';
@import '../resource/scss/button.scss';

</style>
