<template>
  <div class="wraper">
    {{ text }}
    <img @click="getBack" src="/static/img/comhead/back.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ComHead',
  props: ['text', 'toPath'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getBack () {
      if (!this.toPath) {
        this.$emit('close')
      } else {
        this.$router.push(this.toPath)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.wraper{
  font-size: 0.18rem;
  padding: 0.1rem 0;
  text-align: center;
  position: relative;
  img{
    width: 0.17rem;
    height: 0.16rem;
    position: absolute;
    left: 0.15rem;
    top: 0.12rem;
  }
}
</style>
