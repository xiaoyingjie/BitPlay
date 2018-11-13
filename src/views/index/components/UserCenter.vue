<template>
  <div class="user-center-wraper">
    <div class="center-head">
      <div class="usermes">
        <div class="avtar"></div>
        <div class="username">
          <p>我是庄家</p>
          <p>186****4567</p>
        </div>
        <div class="detail" @click="setting"><img src="/static/img/usercenter/tolook.png" alt=""></div>
      </div>
      <div class="integral">
        <img src="/static/img/usercenter/star.png" alt="">
        <span>Live积分:1800.00</span>
        <span @click="getintegral">获取Live积分</span>
      </div>
    </div>
    <div class="center-main">
      <div class="property-table">
        <div class="table-head">
          <span>资产</span>
          <img src="/static/img/usercenter/detail.png" alt="">
          <span @click="$router.push('/assets')">资产明细</span>
        </div>
        <div class="table-body">
          <div class="table-item">
            <div class="icon"><img src="/static/img/usercenter/icon-1.png" alt=""></div>
            <div class="content">
              <div class="l-message">ETH</div>
              <div class="r-messgae">
                <p>25.200000</p>
                <p>11.324600</p>
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/usercenter/icon-2.png" alt=""></div>
            <div class="content">
              <div class="l-message">ETH</div>
              <div class="r-messgae">
                <p>25.200000</p>
                <p>11.324600</p>
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/usercenter/icon-3.png" alt=""></div>
            <div class="content">
              <div class="l-message">ETH</div>
              <div class="r-messgae">
                <p>25.200000</p>
                <p>11.324600</p>
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/usercenter/icon-4.png" alt=""></div>
            <div class="content">
              <div class="l-message">ETH</div>
              <div class="r-messgae">
                <p>25.200000</p>
                <p>11.324600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaiA } from '@/server/getData.js'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    BaiA().then((res) => {
      console.log(111)
    })
  },
  methods: {
    setting () {
      this.$router.push('/setting')
    },
    getintegral () {
      this.$router.push('/getintegral')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.user-center-wraper{
  .center-head{
    padding-top: 1px;
    height: 1.98rem;
    background: url('/static/img/usercenter/banner.png') no-repeat;
    background-size: 100% 100%;
    .usermes{
      margin-top: 0.58rem;
      padding-top: 1px;
      overflow: hidden;
      .avtar{
        float: left;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        box-sizing: border-box;
        border: 0.03rem solid #6b6b6b;
        margin-left: 0.18rem;
      }
      .username{
        float: left;
        margin-left: 0.1rem;
        margin-top: 0.06rem;
        p{
          color: #fff;
          font-size: 0.16rem;
          line-height: 0.22rem;
          &:first-child{
            margin-bottom: 0.03rem;
          }
        }
      }
      .detail{
        float: right;
        width: 0.1rem;
        height: 0.18rem;
        margin-right: 0.25rem;
        margin-top: 0.21rem;
        img{
          width: 100%;
        }
      }
    }
    .integral{
      margin-top: 0.25rem;
      overflow: hidden;
      img{
        float: left;
        width: 0.22rem;
        height: 0.22rem;
        margin-left: 0.22rem;
      }
      span{
        &:nth-child(2){
          float: left;
          color: white;
          font-size: 0.22rem;
          margin-left: 0.06rem;
        }
        &:nth-child(3){
          float: right;
          color: #FDE100;
          font-size: 0.14rem;
          line-height: 0.22rem;
          margin-right: 0.15rem;
        }
      }
    }
  }
  .center-main{
    .property-table{
      padding: 0 0.15rem;
      .table-head{
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.18rem;
        padding: 0.24rem 0 0.12rem;
        border-bottom: 1px solid #ededed;
        img{
          width: 0.06rem;
          height: 0.1rem;
          float: right;
          margin-left: 0.1rem;
          margin-top: 0.07rem;
        }
        span{
          float: left;
          &:first-child{
            font-weight: bold;
          }
          &:nth-child(3){
            float: right;
            font-size: 0.14rem;
          }
        }
      }
      .table-body{
        .table-item{
          overflow: hidden;
          height: 0.69rem;
          .icon{
            float: left;
            width: 0.4rem;
            height: 0.4rem;
            padding-top: 0.14rem;
            padding-left: 0.07rem;
            img{
              width: 100%;
            }
          }
          .content{
            float: left;
            width: 2.85rem;
            height: 0.69rem;
            border-bottom: 1px solid #ededed;
            box-sizing: border-box;
            margin-left: 0.13rem;
            .l-message{
              float: left;
              height: 0.69rem;
              line-height: 0.69rem;
              font-size: 0.16rem;
            }
            .r-messgae{
              float: right;
              height: 0.69rem;
              p{
                &:first-child{
                  font-size: 0.16rem;
                  line-height: 0.22rem;
                  padding-top: 0.13rem;
                }
                &:last-child{
                  font-size: 0.14rem;
                  color: #999;
                  line-height: 0.2rem;
                  text-align: right;
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
