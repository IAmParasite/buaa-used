const app = getApp();
const db = wx.cloud.database();
const com = db.command
const that = this
Page({

  data: {
    avatar: '',
    name: ''
  },
  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    } 
  },
  onShow: function () {

    this.setData({
      avatar: wx.getStorageSync('avatar'),
      name: wx.getStorageSync('name') || ''
    });

  },

  navTo: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.target == 'user' ? '/pages/m_history/m_history' : '/pages/m_user/m_user'
    });
  }

})