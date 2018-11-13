<template>
  <div class="share-wraper" v-show="showShare">
    <div class="inner">
      <h1>分享到</h1>
      <div class="shareContent">
        <div class="share-item" v-for="(item, index) in shareData" :key="index">
          <div class="icon"><img :src="item.url" alt=""></div>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="share-foot" @click="$emit('update:showShare', false)">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Share',
  props: ['showShare'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      shareData: [
        {url: '/static/img/integral/icon1.png', text: '站内转发'},
        {url: '/static/img/integral/icon2.png', text: '微信'},
        {url: '/static/img/integral/icon3.png', text: '朋友圈'},
        {url: '/static/img/integral/icon4.png', text: 'QQ'}
      ]
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.share-wraper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  .inner{
    width: 100%;
    height: 1.6rem;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0.08rem 0.08rem 0 0;
    h1{
      font-size: 0.14rem;
      line-height: 0.2rem;
      text-align: center;
      padding-top: 0.14rem;
    }
    .shareContent{
      overflow: hidden;
      padding-top: 0.13rem;
      padding-bottom: 0.14rem;
      border-bottom: 1px solid #ddd;
      .share-item{
        float: left;
        width: 0.93rem;
        .icon{
          width: 0.3rem;
          height: 0.3rem;
          margin-bottom: 0.04rem;
          margin: 0 auto;
          img{
            width: 100%;
          }
        }
        p{
          font-size: 0.12rem;
          color: #666;
          line-height: 0.17rem;
          text-align: center;
        }
      }
    }
    .share-foot{
      height: 0.51rem;
      line-height: 0.51rem;
      text-align: center;
      font-size: 0.16rem;
      color: #999;
    }
  }
}
</style>
