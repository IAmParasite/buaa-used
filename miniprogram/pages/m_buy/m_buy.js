//index.js
const app = getApp();
const db = wx.cloud.database();
const com = db.command
Page({
  data: {
    campus: ["学院路校区", "沙河校区"],
    postList: []
  },

  onLoad: function () {
      db.collection('books').get({
        success: res => {
          this.setData({
            books: res.data
          }).orde
        },fail: err => {
          wx.showToast({
            icon: "node",
            title: 'Failed',
          })
        }
      })
  },

  onPullDownRefresh: function () {
    

  },

  onReachBottom: function () {
   
  },

  bindCampusChange: function (e) {
    this.setData({
      campusIndex: e.detail.value
    })
  },
  onDel: function (event) {
    var id = event.target.dataset.id
    console.log(event)
    console.log(this.data)
    var that = this
    wx.showModal({
      title: '确认',
      content: 'Are U Sure?',
      success: res => {
        if (res.confirm) {
          wx.showLoading({
            title: 'Loading',
            mask: 'true',
          })
          db.collection('books').doc(id)
            .update({
              data: {
                onshow: "0",
              },
              success: res => {
                wx.hideLoading()
                wx.showToast({
                  title: 'Successful',
                  icon: 'success',
                  duration: 2000,
                  complete: res => {
                    /*for (var i = 0; i < this.data.books_list.length; i++) {
                      if (this.data.books_list[i].id == id) {
                        this.data.books_list[i].status = 'Finished'
                      }
                    }*/
                    this.setData({
                      books_list: this.data.books_list
                    })
                  }
                })
              }
            })
        }
        else if (!res.confirm) {
          return
        }
      }
    })
  },
  showInput: function () {
    
  },

  hideInput: function () {
    
  },

  clearInput: function () {
    
  },

  bindSearch: function (e) {
    
  },

  getList: function (k) {
    
  }

})
