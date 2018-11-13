<template>
  <div class="personal-wraper" v-show="showtopersonal">
   <ComHead text="设置" @close="closepersonal"></ComHead>
   <div class="line"></div>
   <div class="setting-content">
     <div class="setting-item">
       头像
       <div class="avatar" ref="avatar" @click="uplodeAvatar"><img :src="avatarUrl" alt=""></div>
       <input type="file" ref="uplode" style="display: none" @change="fileChange">
     </div>
     <div class="setting-item">
       昵称
       <div class="username">我是庄家</div>
     </div>
   </div>
  </div>
</template>

<script>
import ComHead from '@/components/ComHead.vue'
export default {
  name: 'personal',
  props: ['showtopersonal'],
  components: {
    ComHead
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      avatarUrl: ''
    }
  },
  methods: {
    closepersonal () {
      this.$emit('update:showtopersonal', false)
    },
    uplodeAvatar () {
      this.$refs.uplode.click()
    },
    fileChange (event) {
      let files = event.target.files
      let file = null
      let that = this
      if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0]
        // 来在控制台看看到底这个对象是什么
        console.log(typeof file)
        // 那么我们可以做一下诸如文件大小校验的动作
        // if (file.type !== 'image/jpeg') {
        //   alert('上传头像只能上传JPG格式')
        //   return false
        // }
        if (file.size > 1024 * 1024 * 2) {
          alert('图片大小不能超过 2MB!')
          return false
        }
        // !!!!!!
        // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
        // 获取 window 的 URL 工具
        let URL = window.URL || window.webkitURL
        // 通过 file 生成目标 url
        let imgURL = URL.createObjectURL(file)
        that.avatarUrl = imgURL
        // 用这个 URL 产生一个 <img> 将其显示出来
        // $('.fbpj .container').prev().find("img").attr('src', imgURL);
        // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
        // URL.revokeObjectURL(imgURL);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.personal-wraper{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: white;
  z-index: 10;
  .line{
    height: 0.04rem;
    background: #f9f9f9;
  }
  .setting-content{
    border-bottom: 1px solid #ddd;
    .setting-item{
      position: relative;
      height: 0.6rem;
      margin-left: 0.15rem;
      font-size: 0.16rem;
      line-height: 0.6rem;
      color: #999;
      .username{
        font-size: 0.16rem;
        line-height: 0.22rem;
        position: absolute;
        right: 0.15rem;
        top: 0.19rem;
        color: #000;
      }
      .avatar{
        position: absolute;
        right: 0.15rem;
        top: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
        background: #ddd;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &:first-child{
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
</style>
