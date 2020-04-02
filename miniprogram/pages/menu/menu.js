// pages/menu/menu.js
const app=getApp();
const menu_=app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


 test: function(e) {
  console.log("数据显示") ;
  console.log(app.globalData)  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载初始化数据
    this.setData(app.globalData);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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