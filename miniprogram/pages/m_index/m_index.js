//index.js
const db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    list: [
      {
        name: "学习资源",
        imagePath: "/icons/h.png",
        id: 1234
      },
      {
        name: "联系我们",
        imagePath: "/icons/s.png",
        id: 111
      },
      {
        name: "反馈意见",
        imagePath: "/icons/t.png",
        id: 123
      }
    ],
  },
  onLoad: function () {
    // 获取用户信息
    /*wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })*/
    // 调用云函数
    /*wx.showLoading({
      title: '请稍后',
      mask: true,
    })*/
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        //console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.hideLoading()
      },
      fail: err => {
        //console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  click_pan: function()
  {
        wx.navigateTo({
          url: '/pages/m_pan/m_pan',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      
  },
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
  onShareAppMessage: function () {

  }
}) 
