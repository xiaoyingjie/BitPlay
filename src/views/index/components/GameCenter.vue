<template>
  <div class="game-center-wraper">
    <div class="game-center-head">
      <img src="/static/img/index/game-center-head.png" alt="">
    </div>
    <div class="game_item">
      <div class="playgame" @click="toplaygame"><img src="/static/img/index/playgame.png" alt=""></div>
      <h1>小粉龙跳跃</h1>
      <h2>最好玩的跳跃小游戏</h2>
      <div class="game-img" @click="showConfirm = true">
        <img src="/static/img/index/game1.png" alt="">
      </div>
    </div>
    <div class="game_item">
      <div class="playgame"><img src="/static/img/index/playgame.png" alt=""></div>
      <h1>小粉龙跳跃</h1>
      <h2>最好玩的跳跃小游戏</h2>
      <div class="game-img">
        <img src="/static/img/index/game1.png" alt="">
      </div>
    </div>
    <div class="game_item">
      <div class="playgame"><img src="/static/img/index/playgame.png" alt=""></div>
      <h1>小粉龙跳跃</h1>
      <h2>最好玩的跳跃小游戏</h2>
      <div class="game-img">
        <img src="/static/img/index/game1.png" alt="">
      </div>
    </div>
    <Authorization :ShowAuthorization.sync="ShowAuthorization"></Authorization>
    <Confirm :showConfirm.sync="showConfirm" type="top5up"></Confirm>
  </div>
</template>

<script>
import Authorization from '@/layout/Authorization.vue'
import Confirm from '@/layout/Confirm.vue'
export default {
  name: 'GameCenter',
  components: {
    Authorization,
    Confirm
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ShowAuthorization: false,
      showConfirm: false
    }
  },
  methods: {
    toplaygame () {
      this.ShowAuthorization = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.game-center-head{
  padding: 0.1rem;
  box-shadow: 0 0 0.04rem #DDD;
  img{
    width: 0.75rem;
    height: 0.2rem;
    display: block;
    margin: 0 auto;
  }
}
.game_item{
  padding: 0.2rem 0.15rem 0;
  position: relative;
  .playgame{
    position: absolute;
    width: 0.26rem;
    height: 0.25rem;
    right: 0.15rem;
    top: 0.3rem;
    img{
      width: 100%;
    }
  }
  h1{
    font-size: 0.18rem;
    line-height: 0.25rem;
  }
  h2{
    font-size: 0.16rem;
    color: #999;
    line-height: 0.22rem;
    margin-bottom: 0.1rem;
  }
  .game-img{
    width: 3.45rem;
    height: 2rem;
    // border-radius: 0.05rem;
    // overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>
