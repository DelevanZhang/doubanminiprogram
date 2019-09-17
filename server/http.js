import {baseURL} from '../common/config.js'
export default function(url,data={},method='get'){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseURL,
      method,
      data,
      success:resolve,
      fail:reject
    })
  })
}