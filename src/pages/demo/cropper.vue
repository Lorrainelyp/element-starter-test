<template>
<div>
  <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
    <div :style="previews.div">
      <img :src="option.img" :style="previews.img">
      <img src="../../assets/Desert.jpg" class="aaaa">
    </div>
  </div>
<vueCropper
  ref="cropper"
  :img="option.img"   
  :outputSize="option.size"    
  :outputType="option.outputType"    
  :info="true"	    
  :canScale="true"    
  :full="option.full"	
  :canMove="option.canMove"	
  :canMoveBox="option.canMoveBox"   
  :fixedBox="option.fixedBox"	
  :original="option.original"	
  @realTime="realTime"	   
></vueCropper>
</div>
</template>
<script>
// import vueCropper from 'vue-cropper'
import imgurl from '../../assets/Desert.jpg'
export default {
  name: 'Cropper',
  // components: {
  //   vueCropper
  // },
  data() {
    return {
      // 裁剪组件的基础配置option
      option: {
        img: imgurl, // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 300, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: false, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [7, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      previews:{
        
      }
    }
  },
  methods: {

    realTime (data) {
      this.previews = data
    }

  }
}
</script>
<style scoped>

</style>