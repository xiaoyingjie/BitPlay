<template>
  <div class="Withdrawal-wraper">
    <ComHead text="提现" toPath="/currency" ></ComHead>
    <div class="line"></div>
    <div class="balance">
      <div class="title">可用余额</div>
      <div class="count">56.123344 <img src="/static/img/currency/currency_icon.png" alt=""></div>
    </div>
    <div class="tip">友情提示：在提现之前请认真核对提币地址是否正确,若错误您的 资产将无法找回</div>
    <div class="form-content">
      <div class="formitem">
        <label for="">提现地址</label>
        <input type="text" placeholder="输入或长按粘贴地址">
      </div>
      <div class="formitem">
        <label for="">提现数量</label>
        <input type="text" placeholder="最小提现数量为0.01">
        <span>全部</span>
      </div>
      <p>手续费：0.01ETH</p>
      <div class="errorbox">{{ errorMsg }}</div>
      <button class="btn" @click="withdrawal">确认提现</button>
    </div>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'Withdrawal',
  components: {
    ComHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      errorMsg: ''
    }
  },
  methods: {
    withdrawal () {
      this.errorMsg = '地址格式错误，请重新输入'
    }
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
.Withdrawal-wraper{
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .balance{
    padding: 0 0.15rem 0.2rem;
    .title{
      font-size: 0.14rem;
      color: #999;
      line-height: 0.2rem;
      padding-top: 0.16rem;
    }
    .count{
      height: 0.43rem;
      line-height: 0.43rem;
      font-weight: bold;
      font-size: 0.36rem;
      overflow: hidden;
      padding-top: 1px;
      img{
        float: right;
        height: 0.32rem;
        margin-top: 0.06rem;
      }
    }
    .frozen{
      font-size: 0.16rem;
      color: #999;
      line-height: 0.2rem;
    }
  }
  .tip{
    height: 0.5rem;
    background: #F6F6FB;
    box-sizing: border-box;
    padding: 0.08rem 0.15rem;
    color: #F5A725;
    font-size: 0.12rem;
    line-height: 0.17rem;
  }
  .form-content{
    padding: 0 0.15rem;
    .formitem{
      height: 0.5rem;
      overflow: hidden;
      border-bottom: 1px solid #ededed;
      label{
        float: left;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
        margin-right: 0.3rem;
      }
      input{
        float: left;
        border: none;
        outline: none;
        padding: 0;
        background: transparent;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
      }
      span{
        float: right;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
      }
    }
    p{
      font-size: 0.16rem;
      line-height: 0.22rem;
      margin-top: 0.14rem;
      margin-bottom: 0.24rem;
    }
    .errorbox{
      height: 0.2rem;
      font-size: 0.14rem;
      color: #FF5C5C;
      text-align: center;
      line-height: 0.2rem;
    }
    .btn{
      border: none;
      outline: none;
      background: #373838;
      width: 3.48rem;
      height: 0.5rem;
      display: block;
      margin: 0 auto;
      border-radius: 0.08rem;
      font-size: 0.16rem;
      color: #fff;
    }
  }
}
</style>
