<template>
    <div class="index">
        <div class="container">
          <div class="swiper-box">
            <div class="nav-menu">
              <ul class="menu-wrap">
                <li class="menu-item">
                  <a href="javascript:;">手机 电话卡</a>
                  <div class="clidren">
                    <ul v-for="item in menuList" :key="item.index">
                      <li v-for="sub in item" :key="sub.index">
                        <a :href="sub ? '/#/product/'+sub.id : ''">
                          <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'">
                          {{ sub ? sub.name : '小米9'}}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="javascript:;">电视 盒子</a>
                </li>
                <li class="menu-item">
                  <a href="javascript:;">笔记本 显示器 平板</a>
                </li>   
                <li class="menu-item">
                  <a href="javascript:;">家电 插线板</a>
                </li> 
                <li class="menu-item">
                  <a href="javascript:;">出行 穿戴</a>
                </li>
                <li class="menu-item">
                  <a href="javascript:;">电源 配件</a>
                </li>
                <li class="menu-item">
                  <a href="javascript:;">生活 箱包</a>
                </li>                                                                       
              </ul>
            </div>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(item,index) in slideList" :key="index">
                <a :href="'/#/product/'+item.id">
                  <img v-lazy='item.img'>
                </a>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>              
            </swiper>
          </div>
          <div class="ads-box">
            <a :href="'/#/product/' + item.id" v-for='item in adsList' :key="item.id">
              <img v-lazy='item.img' alt="">
            </a>
          </div>
          <div class="banner">
            <a href="/#/product/30">
              <img v-lazy="'/imgs/banner-1.png'" alt=''>
            </a>
          </div>
        </div>
        <div class="product-box">
          <div class="container">
            <h2>手机</h2>
            <div class="wrapper">
              <div class="banner-left">
                <a href="/#/product/35" >
                  <img v-lazy="'imgs/mix-alpha.jpg'"  alt="">
                </a>
              </div>
              <div class="list-box">
                <div class="list" v-for='arr in phoneList' :key="arr.index">
                  <div class="item" v-for="item in arr" :key="item.id"> 
                    <span v-if='item.id % 2 === 0' class="new-pro">新品</span>
                    <span v-else class="kill-pro">秒杀</span>
                    <div class="item-img">
                      <img v-lazy="item.mainImage" alt=""/>
                    </div>
                    <div class="item-info">
                      <h3>{{item.name}}</h3>
                      <p>{{item.subtitle}}</p>
                      <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <service-bar></service-bar>
        <modal 
          title="提示" 
          sureText='查看购物车' 
          btnType='1' 
          modalType='middle'
          :showModal='showModal'
          @submit='goToCart'
          @cancel='showModal=false'
        >
          <template v-slot:body>
            <p>商品添加成功！</p>
          </template>
        </modal>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Modal from '../components/Modal'
export default {
  name:'index',
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },{
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },{
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },{
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        }  ,{
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        }            
      ],
      menuList:[
        [
          {
            id:'30',
            img:'/imgs/item-box-1.png',
            name:'小米cc9'       
          },
          {
            id:'31',
            img:'/imgs/item-box-2.png',
            name:'小米8青春版'       
          },
          {
            id:'32',
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Rro'       
          },   
          {
            id:'33',
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区'       
          },                  
        ],[
          0,0,0,0
        ],[
          0,0,0,0
        ],[
          0,0,0,0
        ],[
          0,0,0,0
        ],[
          0,0,0,0
        ]
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },{
          id:46,
          img:'/imgs/ads/ads-2.jpg'
        },{
          id:48,
          img:'/imgs/ads/ads-3.png'
        },{
          id:47,
          img:'/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList:[],
      showModal:false
    }
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal 
  },
  mounted(){
    this.init();
  },
  methods: {
    goToCart(){
      this.$router.push('/cart');
    },
    close(){
      this.showModal = false;
    },
    addCart(id){
      this.axios.post('/carts',{
        productId: id,
        selected:true
      }).then((res)=>{
        this.showModal = true
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
      }).catch(()=>{
        this.showModal = true
      })
      
    },
    init(){
      this.axios.get("/products", {
        params:{
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res)=>{
         res.list = res.list.slice(6, 14)
         this.phoneList =  [res.list.slice(0,4), res.list.slice(4,8)]
      })
    }
  }

}
</script>

<style lang='scss' scoped>
@import '../../resource/scss/minx';
@import '../../resource/scss/base';
@import '../../resource/scss/config';
.index{
  .swiper-box{
    width: 1226px;
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 451px;
      z-index:9;
      padding:26px 0;
      background-color:#55585a8f;
      box-sizing: border-box;
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px; 
          .clidren{
            display:none;
            width:962px;
            height:451px;
            background-color: #fff;
            position:absolute;
            top:0;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                flex:1;
                padding-left:23px;
              }
              a{
                color:#333;
                font-size:14px;
              }
              img{
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }     
          a{
            width: 100%;
            display: inline-block;
            position: relative;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            box-sizing: border-box;   
            &::after{
              position: absolute;
              right: 30px;
              top:17.5px;
              content:' ';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
            }
          }
          &:hover{
            background-color:#ff6600;
            .clidren{
              display:block;
            }
          }
        }
      }
    }
    .swiper-container{
      height:451px;
      .swiper-button-prev{
        left:274px;
      }
      img{
        width:100%;
        height: 451px;
      }
    }
  }
  .ads-box{
   @include flex();
   margin-top: 14px;
   margin-bottom:31px;
   a{
     width: 296px;
     height: 167px;
   }
  }
  .banner{
    margin-bottom:50px;
  }
  .product-box{
    background-color:$colorJ;
    padding:30px 0 50px;
    h2{
      font-size:$fontF;
      height: 21px;
      line-height:21px;
      color:$colorB;
      margin-bottom:20px;
    }
    .wrapper{
      display:flex;
      .banner-left{
        margin-right: 16px;
        img{
          width: 224px;
          height: 619px;
        }
      }
      .list-box{
        .list{
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom:0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span{
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size:14px;
              line-height:24px;
              color:$colorG;
              &.new-pro{
                background-color: #7ecf68;
              }
              &.kill-pro{
                background-color:#e82626;
              }
            }
            .item-img{
              img{
                height: 195px;
                width: 100%;
              }
            }
            .item-info{
              h3{
                font-size:$fontJ;
                color: $colorB;
                line-height:$fontJ;
                font-weight:bold
              }
              p{
                color:$colorD;
                line-height:13px;
                margin:6px auto 13px;
              }
              .price{
                color:#f20A0A;
                font-size:$fontJ;
                font-weight: bold;
                cursor: pointer;
                &::after{
                  content:' ';
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  margin-left:5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
