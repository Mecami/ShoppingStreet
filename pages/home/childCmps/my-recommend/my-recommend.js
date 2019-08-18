// pages/home/childCmps/my-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //设置变量控制发送一次即可
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(){
      //当图片加载完成后告诉页面可以获取tab-control距离顶部的距离了
      // console.log('加载完成');
      if(!this.data.isLoad){
        this.triggerEvent('handleLoad');
        this.data.isLoad=true;
      }
    
    }
  }
})
