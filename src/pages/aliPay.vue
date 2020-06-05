<template>
    <div class="ali-pay">
       <div class="form" v-html="content"></div>
       <loading v-if='loading'></loading>
    </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
   name:'AliPay',
   data() {
      return {
          orderNo:this.$route.query.orderId,
          content:' ',
          loading:true
      }
   },
   mounted(){
       this.paySubmit()
   },
   methods:{
       paySubmit(){
           this.axios.post('/pay',{
                orderId: this.orderNo,
                orderName:'小米商城', //扫码支付时订单名称
                amount:0.01, //单位元
                payType:1 //1支付宝，2微信
           }).then((res)=>{
               this.content = res.content
               setTimeout(()=>{
                   document.forms[0].submit()
               },100)
           })
       }
   },
   components: {
       Loading
   }

}
</script>

<style>

</style>
