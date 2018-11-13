<template>
  <div class="logo-wraper">
    <ComHead text="欢迎登录" toPath="/game_center"></ComHead>
    <div class="line"></div>
    <div class="form-Wraper">
      <div class="form-item">
        <input type="text" placeholder="请输入手机号" class="phone_input">
      </div>
      <div class="form-item">
        <input type="text" placeholder="短信验证" class="code_input">
        <span></span>
        <p>获取验证码</p>
      </div>
    </div>
    <button class="btn" @click="LogoIn">登录</button>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'LogoIn',
  components: {
    ComHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    LogoIn () {
      this.$router.push('/logo_success')
    }
  },
  watch: {
    $route (to, from) {
      console.log(111)
      console.log(from.path)
      // if (to.path === '/user_center') {
      //   this.$router.push('/game_center')
      // }
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #ddd;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #ddd;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #ddd;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #ddd;
}
.logo-wraper{
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .form-Wraper{
    padding: 0.4rem 0.38rem 0;
  }
  .form-item{
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.24rem;
    overflow: hidden;
    input{
      display: block;
      font-size: 0.16rem;
      line-height: 0.22rem;
      border: none;
      outline: none;
    }
    .code_input{
      float: left;
      width: 1.9rem;
      padding-top: 0.03rem;
    }
    span{
      float: left;
      width: 1px;
      height: 0.27rem;
      background-color: #ddd;
    }
    p{
      float: left;
      margin-left: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.22rem;
      color: #373838;
      padding-top: 0.03rem;
    }
  }
  .btn{
    width: 3rem;
    height: 0.5rem;
    display: block;
    margin: 0 auto;
    color: #fff;
    background: #868787;
    font-size: 0.16rem;
    border: none;
    outline: none;
    border-radius: 0.08rem;
  }
}
</style>
