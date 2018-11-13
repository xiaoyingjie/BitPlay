<template>
  <div class="success-wraper">
    <div class="play">
      <div class="wraper">
        登录成功
        <img src="/static/img/comhead/back-w.png" alt="">
      </div>
      <button class="btn" @click="playgame">进入游戏</button>
    </div>
    <h1>温馨提示
      <span></span>
      <span></span>
    </h1>
    <p>币圈第一群聊软件{币聊}已全面支持Bitplay,在币聊 内玩游戏体验更佳！欢迎下载体验~</p>
    <div class="line"></div>
    <div class="thefoot">
      <a href="https://activity.dmgoods.com/h5/member-insert" target="_blank">下载币聊</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    playgame () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.success-wraper{
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .play{
    height: 4.84rem;
    background: url('/static/img/layout/logo_success.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    .wraper {
      font-size: 0.18rem;
      padding: 0.1rem 0;
      text-align: center;
      position: relative;
      color: white;
    }
    .wraper img {
      width: 0.17rem;
      height: 0.16rem;
      position: absolute;
      left: 0.15rem;
      top: 0.12rem;
    }
    .btn{
      position: absolute;
      left: 0.38rem;
      bottom: 0.34rem;
      height: 0.5rem;
      width: 3rem;
      margin: 0 auto;
      border: none;
      outline: none;
      border-radius: 0.08rem;
      font-size: 0.16rem;
      background: #373838;
      color: #fff;
    }
  }
  h1{
    font-size: 0.16rem;
    line-height: 0.22rem;
    position: relative;
    text-align: center;
    margin-top: 0.4rem;
    span{
      position: absolute;
      top: 0.11rem;
      width: 1.2rem;
      height: 1px;
      background: #d8d8d8;
      &:first-child{
        left: 0.15rem;
      }
      &:last-child{
        right: 0.15rem;
      }
    }
  }
  p{
    padding: 0.1rem 0.32rem 0.2rem;
    font-size: 0.14rem;
    color: #999;
    line-height: 0.2rem;
    text-align: center;
  }
  .thefoot{
    position: relative;
    a{
      position: absolute;
      font-size: 0.16rem;
      color: #4B88FB;
      line-height: 0.22rem;
      padding-top: 0.14rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
