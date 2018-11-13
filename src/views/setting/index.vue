<template>
  <div class="setting-wraper">
   <ComHead text="设置" toPath="/user_center"></ComHead>
   <div class="line"></div>
   <div class="setting-content">
     <div class="setting-item" @click="topersonal">
       个人信息
       <img src="/static/img/setting/arrow.png" alt="">
     </div>
     <div class="setting-item" @click="exit">
       退出登录
     </div>
   </div>
   <Exit :isExit.sync="isExit"></Exit>
   <Personal :showtopersonal.sync="showtopersonal"></Personal>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
import Exit from './components/exit'
import Personal from './components/personal'
export default {
  name: 'Index',
  components: {
    ComHead,
    Exit,
    Personal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isExit: false,
      showtopersonal: false
    }
  },
  methods: {
    exit () {
      this.isExit = true
    },
    topersonal () {
      this.showtopersonal = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.setting-wraper{
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .setting-content{
    border-bottom: 1px solid #ddd;
    .setting-item{
      position: relative;
      height: 0.6rem;
      margin-left: 0.15rem;
      font-size: 0.16rem;
      line-height: 0.6rem;
      img{
        position: absolute;
        right: 0.15rem;
        top: 0.22rem;
        width: 0.08rem;
        height: 0.15rem;
      }
      &:first-child{
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
</style>
