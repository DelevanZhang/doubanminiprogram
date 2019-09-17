//index.js
//获取应用实例
const app = getApp()
import request from '../../server/http.js'
Page({
  data: {
    list: [],
    page_start: 0,
    loading: false
  },
  onLoad() {
    this.loadData()
  },
  //-------------加载数据-------------
  loadData() {
    this.setData({
      loading: true
    })
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    
    let data = {
      page_start: this.data.page_start
    }
    let page_start = this.data.page_start + 10
    request("", data).then(res => {
        let temList = this.data.list
        temList.push(...(res.data.subjects))
        this.setData({
          list: temList,
          page_start,
          loading: false
        })
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err)
      })
  },
  //-------------加载更多数据---------
  loadMoreData() {
    if (!this.data.loading) {
      console.log(111)
      this.loadData()
    }
  }
})