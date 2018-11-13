<template>
  <div class="BeInvited-wraper">
    <ComHead text="Bitplay" ></ComHead>
    <div class="content">
      <div class="inputitem">
        <input type="text" placeholder="输入手机号领取积分奖励">
      </div>
      <div class="inputitem">
        <input type="text" placeholder="短信验证码">
        <span></span>
        <p>获取短信验证</p>
      </div>
      <button class="btn">进入Bitplay</button>
    </div>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'BeInvited',
  components: {
    ComHead
  },
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
.BeInvited-wraper{
  height: 100%;
  .content{
    height: calc(100% - 0.38rem);
    background: url('/static/img/integral/invited.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    padding-top: 3.88rem;
    box-sizing: border-box;
    .inputitem{
      width: 3rem;
      height: 0.5rem;
      margin: 0.14rem auto 0.09rem;
      padding-top: 1px;
      border: 1px solid #8a8a8a;
      border-radius: 0.08rem;
      input{
        display: block;
        width: 1.54rem;
        height: 0.2rem;
        margin: 0.15rem auto 0;
        border: none;
        outline: none;
        padding: 0;
        font-size: 0.14rem;
        background: transparent;
        color: #525252;
      }
      &:nth-child(2){
        overflow: hidden;
        margin-top: 0.1rem;
        input{
          float: left;
          width: 0.8rem;
          margin-left: 0.51rem;
        }
        span{
          float: left;
          width: 0.01rem;
          height: 0.2rem;
          background: white;
          margin: 0.15rem  0.21rem 0 0.4rem;
        }
        p{
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.14rem;
          color: white;
        }
      }
    }
  }
  .btn{
    border: none;
    outline: none;
    display: block;
    margin: 0.21rem auto 0;
    background: #fff;
    color: #999;
    font-size: 0.14rem;
    width: 3rem;
    height: 0.5rem;
    border-radius: 0.08rem;
  }
}
</style>
