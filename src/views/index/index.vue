<template>
  <div class="index-wraper">
    <div class="main-wraper">
      <Authorization :ShowAuthorization.sync="ShowAuthorization"></Authorization>
      <router-view></router-view>
    </div>
    <div class="foot-wraper">
      <router-link to="/game_center">
        <div class="menu_icon"></div>
        <p>游戏中心</p>
      </router-link>
      <span class="line"></span>
      <router-link to="/user_center">
        <div class="menu_icon"></div>
        <p>个人中心</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Authorization from '@/layout/Authorization.vue'
export default {
  name: 'Index',
  components: {
    Authorization
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ShowAuthorization: false
    }
  },
  methods: {
    ToUserCenter () {
      this.$router.push('/user_center')
    }
  },
  watch: {
    $route (to, from) {
      // if (to.path === '/user_center') {
      //   this.$router.push('/logoin')
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.index-wraper{
  height: 100%;
}
.foot-wraper{
  height: 0.46rem;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  overflow: hidden;
  color: #c0c0c0;
  p{
    font-size: 0.12rem;
    color: #c0c0c0;
    line-height: 0.16rem;
  }
  a{
    float: left;
    width: 1.87rem;
    text-align: center;
    height: 100%;
    padding-top: 0.05rem;
    &:first-child{
      .menu_icon{
        margin: 0 auto;
        width: 0.21rem;
        height: 0.2rem;
        background: url('/static/img/index/gamecenter1.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    &:last-child{
      .menu_icon{
        margin: 0 auto;
        width: 0.18rem;
        height: 0.2rem;
        background: url('/static/img/index/usercenter.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  a:first-child.router-link-active.router-link-exact-active{
    p{
      color: #000;
    }
    .menu_icon{
      background: url('/static/img/index/gamecenter.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  a:last-child.router-link-active.router-link-exact-active{
    p{
      color: #000;
    }
    .menu_icon{
      background: url('/static/img/index/usercenter1.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .line{
    width: 1px;
    float: left;
    height: 0.18rem;
    // display: inline-block;
    background: #ddd;
    margin-top: 0.14rem;
  }
}
.main-wraper{
  width: 100%;
  height: calc(100% - 0.46rem);
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
