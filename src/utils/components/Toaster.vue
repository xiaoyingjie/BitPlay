<template>
  <transition name="fade">
    <div class="wraper-toast" v-show="showToast">
      <div class="toast-inner">
        <span>{{ message }}</span>
        <span :class="type">{{ type === 'success' ? '✔' : '!' }}</span>
      </div>
    </div>
  </transition>
</template>
<script type="text/javascript">
export default {
  name: 'Toast',
  data () {
    return {
      showToast: false,
      message: '',
      type: ''
    }
  },
  methods: {
    closeBox () {
      this.showToast = false
    }
  }
}
</script>
<style scoped lang = 'scss'>
  .wraper-toast{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .toast-inner{
      width: 2.7rem;
      height: 0.54rem;
      text-align: center;
      background: #1C2339;
      border-radius:0.12rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding-top: 1px ;
      span{
        display: inline-block;
        font-size: 0.14rem;
        vertical-align: top;
        margin-top: 0.2rem;
        color: #fff;
        &:last-child{
          font-size: 0.12rem;
          color: #333;
          width: 0.14rem;
          height: 0.14rem;
          border-radius: 50%;
          margin-left: 0.1rem;
        }
      }
      .success{
        background: #2EA9A3;
      }
      .error{
        background: red;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: 0.001s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate(-50%,-50%);
  }
</style>
