<template>
  <div class="integral-wraper">
    <div class="the-head">
      <div class="top-bar">
        Live积分
        <span @click="$router.push('/user_center')" class="icon1"><img src="/static/img/integral/arrow.png" alt=""></span>
        <span @click="$router.push('/record')" class="icon2">积分记录</span>
      </div>
      <div class="fen">1800.00</div>
      <div class="myfen">我的Live积分</div>
      <div class="invitation">已邀请5人，获得奖励15Live</div>
      <div class="btn" @click="showShare = true">
        <div class="inner">
          <img src="/static/img/integral/btn-icon.png" alt="">
          <span>邀请好友</span>
        </div>
      </div>
      <div class="instructions">
        <h1>什么是Live积分？</h1>
        <p>Live积分是Game Box 生态的通用积分，您只需要消耗少量的L值就可以免费体验游戏。Live积分不流通，只用于体验游戏，以及后续的抽奖，兑奖等活动。</p>
        <h1>如何获取L积分？</h1>
        <p>新注册用户，以及首次登录Game Box的币聊用户，可免费领取100Live积分，每邀请1位注册用户，可获得50Live积分。</p>
      </div>
    </div>
    <Share :showShare.sync="showShare"></Share>
  </div>
</template>

<script>
import Share from './components/share'
export default {
  name: 'getintegral',
  components: {
    Share
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showShare: false
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.integral-wraper{
  .the-head{
    height: 2.25rem;
    background: url('/static/img/integral/banner.png') no-repeat;
    background-size: 100%;
    .top-bar{
      font-size: 0.18rem;
      line-height: 0.25rem;
      padding-top: 0.3rem;
      color: #fff;
      text-align: center;
      position: relative;
      span{
        position: absolute;
        bottom: 0;
      }
      .icon1{
        width: 0.17rem;
        height: 0.16rem;
        left: 0.15rem;
        bottom: 0.08rem;
        img{
          width: 100%;
        }
      }
      .icon2{
        right: 0.15rem;
        font-size: 0.14rem;
      }
    }
    .fen{
      font-size: 0.4rem;
      line-height: 0.48rem;
      color: #fff;
      text-align: center;
      margin-top: 0.06rem;
      font-weight: bold;
    }
    .myfen{
      font-size: 0.14rem;
      color: rgba(255,255, 255,.5);
      line-height: 0.2rem;
      text-align: center;
    }
    .invitation{
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #fff;
      text-align: center;
      margin-top: 0.1rem;
      margin-bottom: 0.22rem;
    }
    .btn{
      width: 3rem;
      height: 0.5rem;
      margin: 0 auto;
      background: #fff;
      border-radius: 0.08rem;
      .inner{
        height: 0.5rem;
        text-align: center;
        padding-top: 1px;
        img{
          width: 0.18rem;
          height: 0.18rem;
          margin-top: 0;
        }
        span{
          display: inline-block;
          height: 0.5rem;
          font-size: 0.18rem;
          line-height: 0.5rem;
          color: #000;
          margin-left: 0.07rem;
        }
      }
    }
    .instructions{
      padding: 0 0.13rem;
      h1{
        font-size: 0.18rem;
        font-weight: 500;
        line-height: 0.25rem;
        padding-top: 0.3rem;
      }
      p{
        color: #999;
        font-size: 0.14rem;
        line-height: 0.22rem;
      }
    }
  }
}
</style>
