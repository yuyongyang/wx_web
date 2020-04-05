//app.js
//可获取app实例
App({

  
  onLaunch: function () {
    wx.setBackgroundFetchToken({
      token: 'hgkj'
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      console.info("初始化小程序");
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      userInfo:{name:"张三",tel:"13556789888"},
      userMenu:[                         
                   {name:"我的待办",
                    icon:"../menu/titleImg.png",
                    redirectPath:"",
                  },
                  {name:"创建工单",
                  icon:"../menu/titleImg.png",
                  redirectPath:"",
                }, {name:"我的已办",
                icon:"../menu/titleImg.png",
                redirectPath:"",
                  }, 
                  {name:"个人信息",
                 icon:"../menu/titleImg.png",
                    redirectPath:"",
            },   
                {name:"用户中心",
                 icon:"../menu/titleImg.png",
                 redirectPath:"",
          }

              
          
              
      ],
      picUrls:[
      
      ]
 
     }
     },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  //全局数据
  globalData: {
    userInfo:{name:"测试"},
    userMenu:[
      {name:"首页1",
       items:[{
         name:"待办工单",
         icon:"../index/titleImg.png",
         redirect:"121"
       },{
        name:"已办工单",
        icon:"../index/titleImg.png",
        redirect:"121"
      },{
        name:"知识库",
        icon:"../index/titleImg.png",
        redirect:"121"
      }]
  },
  {name:"首页2",
  items:[{
    name:"待办工单",
    icon:"../index/titleImg.png",
    redirect:"121"
  },{
   name:"已办工单",
   icon:"../index/titleImg.png",
   redirect:"121"
 },{
   name:"知识库",
   icon:"../index/titleImg.png",
   redirect:"121"
 }]
}]
}


})
