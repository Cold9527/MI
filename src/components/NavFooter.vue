<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="" />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/Cold9527" target='_blank'>githup主页</a>
        </div>
        <div class="copyright">© mi.com 京ICP证110507号 京ICP备10046444号 <span class="domin">京公网安备11010802020134号</span> 京网文[2020]0276-042号 </div>
    </div>
</template>

<script>
export default {
   name:'nav-footer',
   data() {
      return {
      }
   },

}
</script>

<style lang='scss' scoped>
.footer {
    height: 234px;
    border-top:4px solid #ff6600;
    background-color:#333333;
    color:#999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: #999;
            display: inline-block;
            margin: 0 10px;
        }
    }
    .copyright{
        margin:10px 0px;
        .domin{
            color:#ff6600;
        }
    }
}
</style>
