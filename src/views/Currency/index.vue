<template>
  <div class="currency-wraper">
    <ComHead text="ETH" toPath="/assets" ></ComHead>
    <div class="line"></div>
    <div class="balance">
      <div class="title">可用余额</div>
      <div class="count">56.123344 <img src="/static/img/currency/currency_icon.png" alt=""></div>
      <div class="frozen">冻结 10.123321</div>
    </div>
    <div class="operation">
      <span @click="$router.push('/top_up')">充值</span>
      <span></span>
      <span @click="$router.push('/Withdrawal')">提现</span>
    </div>
    <div class="record-head">
      资产明细
      <span>{{ optionItemText }}</span>
      <img @click="watchoption" :src="showoption? arrowTop : arrowBottom " alt="">
    </div>
    <div class="detailmain">
      <div class="property-table">
        <div class="table-body">
          <div class="table-item">
            <div class="icon"><img src="/static/img/currency/icon-1.png" alt=""></div>
            <div class="content">
              <div class="l-message">
                <p>充值</p>
                <p>2018年09月28日 09:22:34</p>
              </div>
              <div class="r-messgae">
                +25.456
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/currency/icon-2.png" alt=""></div>
            <div class="content">
              <div class="l-message">
                <p>提现</p>
                <p>2018年09月28日 09:22:34</p>
              </div>
              <div class="r-messgae">
                -12.2
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/currency/icon-3.png" alt=""></div>
            <div class="content">
              <div class="l-message">
                <p>竞猜 - 消耗</p>
                <p>2018年09月28日 09:22:34</p>
              </div>
              <div class="r-messgae">
                -12.3
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="icon"><img src="/static/img/currency/icon-4.png" alt=""></div>
            <div class="content">
              <div class="l-message">
                <p>爆点 - 赚取</p>
                <p>2018年09月28日 09:22:34</p>
              </div>
              <div class="r-messgae">
                +52.11
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SearchOption :optionData="DetailoptionData" :showoption.sync="showoption" @setOption="setOption"></SearchOption>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
import SearchOption from './components/SearchOption'
export default {
  name: 'Currency',
  components: {
    ComHead,
    SearchOption
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showoption: false,
      arrowTop: '/static/img/integral/record_arrow1.png',
      arrowBottom: '/static/img/integral/record_arrow.png',
      optionItemText: '全部',
      DetailoptionData: ['全部', '收入', '支出']
    }
  },
  methods: {
    watchoption () {
      this.showoption = !this.showoption
    },
    setOption (item) {
      this.optionItemText = item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.currency-wraper{
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
  .operation{
    overflow: hidden;
    height: 0.5rem;
    border-top: 1px solid #ededed;
    padding-top: 1px;
    span{
      float: left;
      &:first-child,&:last-child{
        width: 1.87rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.18rem;
        font-weight: 500;
      }
      &:last-child{
        color: #999;
      }
      &:nth-child(2){
        width: 0.01rem;
        height: 0.2rem;
        background: #d8d8d8;
        margin-top: 0.15rem;
      }
    }
  }
  .record-head{
    height: 0.5rem;
    background: #f6f6fb;
    line-height: 0.5rem;
    font-size: 0.14rem;
    font-weight: bold;
    padding-left: 0.15rem;
    overflow: hidden;
    position: relative;
    span{
      float: right;
      margin-right: 0.31rem;
      font-weight: 500;
    }
    img{
      width: 0.07rem;
      position: absolute;
      right: 0.15rem;
      bottom: 0.23rem;
    }
  }
  .detailmain{
    .property-table{
      padding: 0 0.15rem;
      border-bottom: 1px solid #ddd;
      .table-body{
        .table-item{
          overflow: hidden;
          height: 0.69rem;
          .icon{
            float: left;
            width: 0.4rem;
            height: 0.4rem;
            padding-top: 0.14rem;
            padding-left: 0.07rem;
            img{
              width: 100%;
            }
          }
          &:last-child{
            .content{
              border: none;
            }
          }
          .content{
            float: left;
            width: 2.85rem;
            height: 0.69rem;
            border-bottom: 1px solid #ededed;
            box-sizing: border-box;
            margin-left: 0.13rem;
            .l-message{
              float: left;
              height: 0.69rem;
              p{
                &:first-child{
                  font-size: 0.16rem;
                  font-weight: 500;
                  line-height: 0.19rem;
                  padding: 0.11rem 0 0.04rem;
                }
                &:last-child{
                  font-size: 0.12rem;
                  color: #999;
                  line-height: 0.17rem;
                }
              }
            }
            .r-messgae{
              float: right;
              height: 0.69rem;
              line-height: 0.69rem;
              font-size: 0.16rem;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
