<template>
  <div class="record-wraper">
    <ComHead text="积分记录" toPath="/getintegral" ></ComHead>
    <div class="record-head">
      积分明细
      <span>{{ optionItemText }}</span>
      <img @click="watchoption" :src="showoption? arrowTop : arrowBottom " alt="">
    </div>
    <div class="main">
      <div class="record-item">
        <div class="item-left">
          <p>奖励 - 邀请好友</p>
          <p>2018年09月28日 09:22:34</p>
        </div>
        <div class="item-right">+25.456</div>
      </div>
      <div class="record-item">
        <div class="item-left">
          <p>竞猜</p>
          <p>2018年09月28日 09:22:34</p>
        </div>
        <div class="item-right">+25.456</div>
      </div>
      <div class="record-item">
        <div class="item-left">
          <p>奖励</p>
          <p>2018年09月28日 09:22:34</p>
        </div>
        <div class="item-right">+25.456</div>
      </div>
    </div>
    <SearchOption :optionData="RecordDetail" :showoption.sync="showoption" @setOption="setOption"></SearchOption>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
import SearchOption from './SearchOption'
export default {
  name: 'Record',
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
      RecordDetail: ['全部', '奖励', '消耗']
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
.record-wraper{
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
  .main{
    padding: 0 0.15rem;
    border-bottom: 1px solid #ddd;
    .record-item{
      height: 0.69rem;
      overflow: hidden;
      border-bottom: 0.01rem solid #ededed;
      &:last-child{
        border: none;
      }
      .item-left{
        height: 0.69rem;
        float: left;
        p{
          &:first-child{
            font-size: 0.16rem;
            line-height: 0.22rem;
            padding-top: 0.11rem;
            padding-bottom: 0.04rem;
            font-weight: 500;
          }
          &:last-child{
            font-size: 0.12rem;
            color: #999;
            line-height: 0.17rem;
          }
        }
      }
      .item-right{
        height: 0.69rem;
        float: right;
        line-height: 0.69rem;
        font-size: 0.16rem;
        font-weight: 500;
        margin-right: 0.18rem;
      }
    }
  }
}
</style>
