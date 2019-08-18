// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js';

const types=['pop','new','sell'];
const topDistance=2000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     banners:[],
      recommends:[],
      list:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType:'pop',
    isShow:false,
    isfixed:true
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图数据
    this._getMultiData();
    //获取商品列表数据
   // this._getGoodsData('pop');
     //this._getGoodsData('new');
    this._getGoodsData('pop');
  
   
  },
  //-------------------------网络请求----------------------
  //获取轮播图和推荐数据
  _getMultiData(){
    getMultiData().then(res => {
      // console.log(res);
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })

    })
  },
  _getGoodsData(type){
    //注意goods后面的type不能用.点出来，因为这里的type是个字符串，只能用[]
    const page=this.data.goods[type].page + 1;
    getGoodsData(type,page).then(res=>{
    //获取goods中对应的旧数组
    const oldList=this.data.goods[type].list;
    //发送请求获取到的新数据
    const newList=res.data.data.list;
    //设置好的数组
    oldList.push(...newList);
    //将设置好的数组重新放到goods中，并且页面重新渲染，用setData
    //获取setData中goods对应的数组
    const listKey=`goods.${type}.list`;
    //数据添加后修改page的值
    const pageKey=`goods.${type}.page`;
    this.setData({
      //这里的listKey要用[]包起来，不然会去data中查找listKey
      [listKey]:oldList,
      [pageKey]:page
    })

    })
  },
// ---------------------------事件处理-----------------------------
  handleTab(event) {
    // console.log(event.detail.index);
    const index=event.detail.index;
    //发送网络请求获取数组
   this._getGoodsData(types[index]);
    //重新渲染数据
   this.setData({
     currentType:types[index]
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
    this._getGoodsData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll:function(option){
    const scrollTop=option.scrollTop;
    console.log(scrollTop);
    const flag=scrollTop >= topDistance;
    const flag2=scrollTop>=555;
    // console.log(option);
    //这里的if只有经过特点值才执行，其他的都不执行！！！！！
    if (flag!=this.data.isShow){
      this.setData({
        isShow:flag
      })
    }
    if(flag2!=this.data.fixed){
      this.setData({
        fixed: flag2
      })
    }
  }
  
})