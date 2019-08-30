//app.js
App({
  
  onLaunch: function () {
    console.info('loading index...')
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        
        env: 'iamparasite-qttne',
        traceUser: true,
      })
    var name = wx.getStorageSync('name');
    var avatar = wx.getStorageSync('avatar');

    if (!name || !avatar) {
      wx.getUserInfo({
        success: function (res) {
          var userInfo = res.userInfo;
          wx.setStorageSync('name', userInfo.nickName);
          wx.setStorageSync('avatar', userInfo.avatarUrl);
        }
      });
    }
    }
    this.globalData = {}
  }
})
