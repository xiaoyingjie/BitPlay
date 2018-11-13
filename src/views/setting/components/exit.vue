<template>
  <div class="exit-wraper" v-show="isExit">
    <div class="inner">
      <h1>退出登录</h1>
      <h2>是否确认退出</h2>
      <div class="inner-foot">
        <span @click="ensure">确定</span>
        <span></span>
        <span @click="close">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exit',
  props: ['isExit'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    close () {
      this.$emit('update:isExit', false)
    },
    ensure () {
      this.$router.push('/logoin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.exit-wraper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  z-index: 10;
  .inner{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.2rem;
    height: 1.5rem;
    border-radius: 0.06rem;
    background: #fff;
    overflow: hidden;
    h1{
      font-size: 0.16rem;
      line-height: 0.18rem;
      padding-top: 0.16rem;
      padding-bottom: 0.18rem;
      text-align: center;
      font-weight: bold;
    }
    h2{
      font-size: 0.16rem;
      color: #999;
      line-height: 0.22rem;
      text-align: center;
      margin-bottom: 0.36rem;
    }
    .inner-foot{
      overflow: hidden;
      height: 0.4rem;
      box-sizing: border-box;
      background: #f0f0f0;
      padding-top: 1px;
      span{
        float: left;
        font-size: 0.14rem;
        line-height: 0.4rem;
        text-align: center;
        font-weight: 300;
        &:first-child{
          width: 1.09rem;
          height: 100%;
          color: #999;
        }
        &:nth-child(2){
          width: 0.01rem;
          height: 0.22rem;
          background: #d8d8d8;
          margin-top: 0.09rem;
        }
        &:last-child{
          width: 1.1rem;
          height: 100%;
          color: #4B88FB;
        }
      }
    }
  }
}
</style>
