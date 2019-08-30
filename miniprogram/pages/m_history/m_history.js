// pages/index/index.js
const db = wx.cloud.database()
const com = db.command
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection("books").where({
      
    })
    .get({
      success: res => {
        this.setData({  // setdata 表示逻辑层和渲染层的数据传输
          books: res.data
        })
      }, fail: err => {
        wx.showToast({
          icon: "none",
          title: '查询记录失败',
        })
      }
    })
  },

/*
  onShow: function () {
    wx.showLoading({
      title: '加载中',
    })
    db.collection('books').where(com.and([
      {
        onshow: "1",
      },
      {
        _openid: com.neq(app.globalData.openid),
      }
      
    ])).get().then(e => {
      this.setData({
        books: e.data
      })
    wx.hideLoading()
    })
  },
  */
  onDel: function (e) {
    let id = e.currentTarget.dataset.id
    const db = wx.cloud.database();
    db.collection("books").doc(id).remove({
      success: res => {
        wx.showToast({
          title: '删除成功',
        })
        this.onLoad()//删除成功重新加载
      }, fail: err => {
        wx.showToast({
          title: '删除失败',
        })
      }
    })
    console.log(id)
  },
  onUpdate: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../set/set?id=' + id,
    })
  }
})