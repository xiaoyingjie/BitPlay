<template>
  <div class="option-wraper" v-show="showoption">
    <div class="option-inner">
      <div class="option-item" v-for="(item, index) in optionData" :key="index" @click="setOption(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option',
  props: ['showoption', 'optionData'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    setOption (item) {
      this.$emit('update:showoption', false)
      this.$emit('setOption', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.option-wraper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0.88rem;
  background: rgba(0,0,0,.5);
  .option-inner{
    padding: 0 0.15rem;
    background: #fff;
    border-radius: 0 0 0.08rem 0.08rem;
    .option-item{
      height: 0.49rem;
      line-height: 0.49rem;
      font-size: 0.16rem;
      text-align: center;
      border-bottom: 1px solid #ededed;
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
