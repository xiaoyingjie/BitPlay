<template>
  <div class="Authorization-wraper" v-show="ShowAuthorization">
    <ComHead text="授权登陆" @close="closeauthorization"></ComHead>
    <div class="ourlogo"><img src="/static/img/Authorization/banner.png" alt=""></div>
    <h1><span>使用</span>币聊<span>账户登录</span>Game Box</h1>
    <h2>● Game Box将获取您的公开信息 (昵称、头像等)</h2>
    <button class="btn-one">确认授权</button>
    <button class="btn-two" @click="Canot">暂不授权</button>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'Authorization',
  props: ['ShowAuthorization'],
  components: {
    ComHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    Canot () {
      this.$emit('update:ShowAuthorization', false)
    },
    closeauthorization () {
      this.$emit('update:ShowAuthorization', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.Authorization-wraper{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 10;
  .ourlogo{
    margin-bottom: 0.2rem;
    img{
      width: 100%;
    }
  }
  h1{
    font-size: 0.16rem;
    line-height: 0.22rem;
    padding-left: 0.15rem;
    span{
      color: #999;
    }
  }
  h2{
    font-size: 0.12rem;
    color: #999;
    line-height: 0.17rem;
    padding-left: 0.15rem;
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
  }
  button{
    display: block;
    height: 0.5rem;
    width: 3.48rem;
    margin: 0 auto;
    border: none;
    outline: none;
    border-radius: 0.08rem;
    font-size: 0.16rem;
  }
  .btn-one{
    background: #373838;
    color: #fff;
  }
  .btn-two{
    background: #fff;
    color: #999;
  }
}
</style>
