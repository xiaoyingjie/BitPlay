<template>
  <div class="confirm-wraper" v-show="showConfirm">
    <div class="mask" @click="$emit('update:showConfirm', false)"></div>
    <div class="inner" v-if="type !== 'topup'">
      <button class="btn">去邀请</button>
    </div>
    <div class="inner2" v-if="type === 'topup'">
      <div class="icon"><img src="/static/img/layout/confirm2.png" alt=""></div>
      <p>您的ETH余额不足</p>
      <p style="color: #999">快去充值吧!</p>
      <button class="btn">去充值</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: ['showConfirm', 'type'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.confirm-wraper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  .mask{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.5);
  }
  .inner{
    position: absolute;
    width: 3rem;
    height: 2.8rem;
    background: url('/static/img/layout/confirm1.png') no-repeat;
    background-size: 100%;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .btn{
      width: 2.5rem;
      height: 0.5rem;
      border: none;
      outline: none;
      background: #373838;
      color: white;
      font-size: 0.16rem;
      position: absolute;
      bottom: 0.2rem;
      left: 0.25rem;
      border-radius: 0.08rem;
    }
  }
  .inner2{
    position: absolute;
    width: 3rem;
    height: 2.46rem;
    z-index: 10;
    top: 50%;
    left: 50%;
    background: white;
    transform: translate(-50%, -50%);
    border-radius: 0.08rem;
    .icon{
      width: 0.74rem;
      height: 0.75rem;
      margin: 0.26rem auto 0.1rem;
      img{
        width: 100%;
      }
    }
    p{
      font-size: 0.16rem;
      line-height: 0.22rem;
      text-align: center;
      margin-bottom: 0.06rem;
    }
    .btn{
      display: block;
      border-radius: 0.08rem;
      width: 2.5rem;
      height: 0.5rem;
      border: none;
      outline: none;
      background: #373838;
      color: white;
      font-size: 0.16rem;
      margin: 0.16rem auto 0;
    }
  }
}
</style>
