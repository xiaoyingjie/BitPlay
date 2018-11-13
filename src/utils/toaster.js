import Vue from 'vue'
import Toaster from './components/Toaster.vue'
const ToastContructor = Vue.extend(Toaster)
let removeDom = (event) => {
  event.target.parentNode.removeChild(event.target)
}
ToastContructor.prototype.close = function () {
  this.showToast = false
  var transitionFlag = true
  this.$el.addEventListener('transitionend', function (e) {
    if (e.target === this && transitionFlag) {
      transitionFlag = false
      removeDom(e)
    }
  })
}
const Toast = function (options = {}) {
  var instance = (new ToastContructor()).$mount(document.createElement('div'))
  let duration = options.duration || 2000
  instance.message = typeof options === 'string' ? options : options.message
  instance.type = options.type || 'success'
  document.body.appendChild(instance.$el)
  instance.showToast = true
  Vue.nextTick(() => {
    instance.timer = setTimeout(function () {
      instance.close()
    }, duration)
  })
  return instance
}
export { Toast }
