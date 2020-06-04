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
    if(this.$cookie.get('userId')){
      this.getUser(),
      this.getCartCount()
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }

}
</script>
<style lang='scss'>
@import '../resource/scss/base.scss';
@import '../resource/scss/reset.scss';
@import '../resource/scss/config.scss';
@import '../resource/scss/button.scss';

</style>
