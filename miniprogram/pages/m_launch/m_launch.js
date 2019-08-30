const db = wx.cloud.database()
Page({
  data:{
    campus: ["学院路校区", "沙河校区"],
    campusIndex: 3,
  },
  bindConditionChange: function (e) {
    this.setData({
      conditionIndex: e.detail.value
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
                    for (var i = 0; i < this.data.books_list.length; i++) {
                      if (this.data.books_list[i].id == id) {
                        this.data.books_list[i].status = 'Finished'
                      }
                    }
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
  bindCampusChange: function (e) {
    this.setData({
      campusIndex: e.detail.value
    })
  },
  order_submit: function(e) {
    console.log(e)
    wx.showLoading({
      title: '请稍后',
      mask:"true",
    })
    db.collection('books').add({
      data: {
        books_name: e.detail.value.books_name,
        books_ISBN: e.detail.value.books_ISBN,
        books_author: e.detail.value.books_author,
        books_Press: e.detail.value.books_Press,
        books_Price: e.detail.value.books_Price,
        books_remarks: e.detail.value.books_remarks,
        books_fee: e.detail.value.books_fee,
        books_phone: e.detail.value.books_phone,
        books_status: '0',
        onshow: '1'
      },
      success:function() {
        wx.hideLoading()
        wx.showModal({
          title: '成功',
          content: '你已经成功提交',
          showCancel: false,
          success: function(){
            wx.switchTab({
              url: '../m_launch/m_launch',
            })
          }
        })
      }
    })
  }



  
})