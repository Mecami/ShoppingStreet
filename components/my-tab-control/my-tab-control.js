// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
      
    }
  },
  externalClasses: ['pinkclass'],
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTab(e){
      var index = e.currentTarget.dataset.index;
       this.setData({
          
         currentIndex:index
       })
       //发送事件给页面，并且传递索引值
      this.triggerEvent('handleTab',{index},{})
    }
  }
})
