import {
  baseURL
  } from './config.js';
  
export default function request(obj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL+obj.url,
      data: obj.data || {},
      method: obj.method || 'get',
      success:resolve,
      fail:reject

    })
  })
}