import request from './network.js';

export function getMultiData(){
  //request返回的是promise实例，到时在首页可以调用该方法点出then出来
  return request({
    url:'/home/multidata'
  })
}

export function getGoodsData(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}