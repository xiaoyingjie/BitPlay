<template>
  <div class="topup-wraper">
    <ComHead text="充值ETH" toPath="/currency" ></ComHead>
    <div class="line"></div>
    <div class="comtent">
      <div class="inner">
        <div class="QR"></div>
        <div class="code">{{ code }}</div>
        <button class="btn" @click="copyTextToClipboard(code)">复制地址</button>
        <div class="notice">
          <p>充值须知</p>
          <p>充值需要一定的网络确认才能到账，请务必确认您 的地址及充值币种信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'TopUp',
  components: {
    ComHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: '0x6c0604D4asd0sad9989j1a2dasd551xasd'
    }
  },
  methods: {
    copyTextToClipboard (text) {
      var textArea = document.createElement('textarea')
      textArea.style.position = 'fixed'
      textArea.style.top = 0
      textArea.style.left = 0
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = 0
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      try {
        var msg = document.execCommand('copy') ? '成功' : '失败'
        console.log('复制内容 ' + msg)
      } catch (err) {
        console.log('不能使用这种方法复制内容')
      }
      document.body.removeChild(textArea)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.topup-wraper{
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .comtent{
    height: calc(100% - 0.42rem);
    padding-top: 0.2rem;
    background: #fdfdfd;
    .inner{
      width: 3.45rem;
      height: 4.3rem;
      margin: 0 auto 0;
      padding-top: 1px;
      box-shadow: 0 0 0.1rem 0.1rem #f9f9f9;
      .QR{
        width: 1.8rem;
        height: 1.8rem;
        background: #999;
        margin: 0.4rem auto 0.15rem;
      }
      .code{
        font-size: 0.14rem;
        line-height: 0.17rem;
        margin-bottom: 0.21rem;
        font-weight: bold;
        text-align: center;
      }
      .btn{
        border: none;
        outline: none;
        width: 3rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
        font-size: 0.14rem;
        color: #fff;
        background: #373838;
        border-radius: 0.08rem;
        margin-bottom: 0.19rem;
      }
      .notice{
        padding: 0 0.18rem;
        p{
          font-size: 0.14rem;
          color: #F5A725;
          text-align: center;
          line-height: 0.2rem;
        }
      }
    }
  }
}
</style>
