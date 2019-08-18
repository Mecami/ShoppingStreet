// components/my-cmp/my-cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'默认值',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    },
    content: {
      type: String,
      value: '默认值',
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    },
  },
  externalClasses: ['title2','title3'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleclick(){
      this.triggerEvent('create',{name:'jack',age:'23'},{})
    }
  }
})
