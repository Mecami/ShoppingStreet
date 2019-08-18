// pages/category/category.js
import request from '../../service/network.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:['衣服','裤子','鞋子','围巾'],
      currentIndex:0,
      count:0
  },
  handleClick(e){
    //  console.log(e.currentTarget.dataset);
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })
  },
  click(e){
    // console.log(e.detail);
  },
  add(){
    //获取组件对象
    const cpnObj = this.selectComponent('#my-cmp2');
    cpnObj.add(10);
  },
  oncreate(event){
     this.setData({
       count:this.data.count+1
     })
    //  console.log(event);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'http://www.liulongbin.top:3005/api/getlunbo',
      
    }).then(res=>{
      console.log(res);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(){
    return {
      title:'哈哈哈',
      imageUrl:'https://i0.hdslb.com/bfs/sycp/creative_img/201908/ee80f144b2f1a0fb877c89133e0dba9e.png@160w_100h.png'
    }
  }
})