<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a v-if='userName' href="javascript:;">{{userName}}</a>
                    <a v-else href="javascript:;">登录</a>
                    <a v-if='userName' href="javascript:;">我的订单</a>
                    <a href="javascript:;" class='my-cart' @click="goToCart"><span class='icon-cart'></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-meun">
                    <div class="item-meun">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="item in phoneList" :key="item.id">
                                    <a :href="'/#/product/'+item.id" target='_blank'>
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle"/>
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="item-meun">
                        <span>RedMi手机</span>
                        <div class="children"></div>
                    </div>   
                    <div class="item-meun">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" />
                                        </div>
                                        <div class="pro-name">Redmi 智能电视 MAX 98''</div>
                                        <div class="pro-price">19999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" />
                                        </div>
                                        <div class="pro-name">小米电视4A 60英寸</div>
                                        <div class="pro-price">2199元</div>
                                    </a>
                                </li>   
                                <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" />
                                        </div>
                                        <div class="pro-name">Redmi 智能电视 X55</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" />
                                        </div>
                                        <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                                        <div class="pro-price">2999元</div>
                                    </a>
                                </li> 
                                 <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" />
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>   
                                 <li class="product">
                                    <a href="" target='_blank'>
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" />
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1749元</div>
                                    </a>
                                </li>                                             
                            </ul>                            
                        </div>
                    </div>                                     
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name='keyword'>
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:'nav-header',
   filters:{
       currency(val){
           if(!val) return '0.00'
           return '￥'+ val.toFixed(2) + '元'
       }
   },
   data() {
      return {
          userName:'vidy',
          phoneList:[]
      }
   },
   mounted(){
       this.getProductList()
   },
   methods:{
       login(){
           this.$router.push('/login')
       },
       getProductList(){
           this.axios.get('/products', {
               params:{
                   categoryId:'100012',
                   pageSize:6
               }
           }).then((res)=>{
                  this.phoneList = res.list
           })
       },
       goToCart(){
           this.$router.push('/cart')
       }

   }

}
</script>

<style lang='scss' scoped>
@import url('../../resource/scss/base.scss');
@import '../../resource/scss/config.scss';
@import '../../resource/scss/minx.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height:39px;
            background-color:#333;
            color:#B0B0B0;
            .container{
            @include flex();
            }    
            a{
                display:inline-block;
                color:#B0B0B0;
                margin-right:17px;
            }  
            .my-cart{
                width: 110px;
                background-color:#FF6000;
                text-align: center;
                color:#fff;
                margin-right: 0;
                .icon-cart{
                    @include bgImg($w:16px,$h:12px,$img:'/imgs/icon-cart-checked.png',$size:contain);
                    margin-right: 4px;
                }
            } 
        }
        .nav-header{
           .container{
               position: relative;
               height: 112px;
               @include flex();
              .header-logo{
                  display: inline-block;
                  width: 55px;
                  height: 55px;
                  background-color: #FF6000;
                  a{
                      display: inline-block;
                      width: 110px;
                      height: 55px;
                      &::before{
                          content:' ';
                          @include bgImg($w:55px,$h:55px,$img:'/imgs/mi-logo.png',$size:55px);
                          transition: margin .2s;
                      }
                      &::after{
                          content:' ';
                          @include bgImg($w:55px,$h:55px,$img:'/imgs/mi-home.png',$size:55px);
              
                      }
                      &:hover::before{
                          margin-left:-55px;
                          transition: margin .2s;
                      }
                  }
              }
              .header-meun{
                display: inline-block;
                width: 643px;
                padding-left: 209px;
                .item-meun{
                    display: inline-block;
                    color: #333;
                    font-size: 16px;
                    line-height:112px;
                    margin-right:20px;
                    span{
                       cursor: pointer;
                    }
                    &:hover{
                        color:$colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position:absolute;
                        top:112px;
                        left: 0;
                        width:1226px;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        border-top:1px solid #e5e5e5;
                        box-shadow:0px 7px 6px 0px rgba(0,0,0,0.11);
                        z-index:10;  
                        transition: all .3s;      
                        background-color:#fff;             
                        .product{
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            position: relative;
                            &::before{
                                content:' ';
                                position: absolute;
                                top:28px;
                                right: 0;
                                border-left:1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }  
                            &:last-child::before{
                                display:none;
                            }                             
                            a{
                                display: inline-block;
                            }
                            img{
                                height: 110px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 127px;
                            }
                            .pro-name{
                               margin-top: 19px;
                               margin-bottom: 8px;
                               color: $colorB;
                               font-weight:bold;
                            }
                            .pro-price{
                               color: $colorA;
                            }
                        }
                    }
                }  
              }
              .header-search{
                  width: 319px;
                  .wrapper{
                    height: 50px;
                    border:1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input{
                        border:none;
                        border-right: 1px solid #e0e0e0;
                        width: 264px;
                        height: 50px;
                        padding-left:14px;
                        box-sizing: border-box;
                    }
                    a{
                        @include bgImg($w:18px,$h:18px,$img:'/imgs/icon-search.png',$size:contain);
                        margin-left: 17px;
                    }
                  }
              }
           } 
        }
    }     
</style>
