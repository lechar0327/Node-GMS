define({ "api": [
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/good/insertCates",
    "title": "添加品类",
    "description": "<p>添加品类</p>",
    "name": "cate-insertCates",
    "group": "cate",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "cate",
            "description": "<p>品类code</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "cate_zh",
            "description": "<p>品类中文</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"创建成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/cate/insertCates"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/cateRouter.js",
    "groupTitle": "cate"
  },
  {
    "type": "get",
    "url": "http://10.36.147.178:3000/api/cate/queryCates",
    "title": "查询品类",
    "description": "<p>查询品类</p>",
    "name": "cate-query",
    "group": "cate",
    "parameter": {
      "fields": {
        "parmas": [
          {
            "group": "parmas",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页</p>"
          },
          {
            "group": "parmas",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页容量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/cate/queryCates"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/cateRouter.js",
    "groupTitle": "cate"
  },
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/good/deleteGood",
    "title": "删除商品信息",
    "description": "<p>删除商品信息</p>",
    "name": "good-delete",
    "group": "good",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/good/deleteGood"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/good/insertGoods",
    "title": "添加修改商品",
    "description": "<p>添加商品</p>",
    "name": "good-options",
    "group": "good",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>商品图片地址</p>"
          },
          {
            "group": "body",
            "type": "Decimal128",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "cate",
            "description": "<p>品类code</p>"
          },
          {
            "group": "body",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>商品状态(0:未上架 1:已上架 default:0)</p>"
          },
          {
            "group": "body",
            "type": "Array",
            "optional": false,
            "field": "attribute",
            "description": "<p>商品属性</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>商品备注描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/good/insertGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "get",
    "url": "http://10.36.147.178:3000/api/good/queryGoodsList",
    "title": "查询商品列表",
    "description": "<p>查询商品列表</p>",
    "name": "good-query",
    "group": "good",
    "parameter": {
      "fields": {
        "parmas": [
          {
            "group": "parmas",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页</p>"
          },
          {
            "group": "parmas",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页容量</p>"
          },
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "cate",
            "description": "<p>商品品类</p>"
          },
          {
            "group": "parmas",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "parmas",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/good/queryGoodsList"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "get",
    "url": "http://10.36.147.178:3000/api/good/queryGoodsBaseInfo",
    "title": "查询商品基础信息",
    "description": "<p>查询商品基础信息</p>",
    "name": "goodbaseInfo-query",
    "group": "good",
    "parameter": {
      "fields": {
        "parmas": [
          {
            "group": "parmas",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/good/queryGoodsBaseInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/goodRouter.js",
    "groupTitle": "good"
  },
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/menu/insertMenu",
    "title": "添加菜单",
    "description": "<p>添加菜单</p>",
    "name": "menu-insert",
    "group": "menu",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>跳转路径</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>图标</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "component",
            "description": "<p>组件名</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>父菜单id,默认为0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"创建成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/menu/insertMenu"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/menuRouter.js",
    "groupTitle": "menu"
  },
  {
    "type": "get",
    "url": "http://10.36.147.178:3000/api/menu/queryMenu",
    "title": "菜单查询",
    "description": "<p>菜单查询</p>",
    "name": "menu-query",
    "group": "menu",
    "parameter": {
      "fields": {
        "parmas": [
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>第几页</p>"
          },
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页容量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/menu/queryMenu"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/menuRouter.js",
    "groupTitle": "menu"
  },
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/upload",
    "title": "图片上传",
    "description": "<p>图片上传(标签name='file')</p>",
    "name": "img-upload",
    "group": "upload",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/upload"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/uploadImgRouter.js",
    "groupTitle": "upload"
  },
  {
    "type": "post",
    "url": "http://10.36.147.178:3000/api/user/insertUser",
    "title": "注册",
    "description": "<p>注册</p>",
    "name": "user-LoginRegister",
    "group": "user",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"创建成功\"\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/user/insertUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "http://10.36.147.178:3000/api/user/login",
    "title": "登录即注册",
    "description": "<p>登录即注册(推荐使用此接口)</p>",
    "name": "user-login",
    "group": "user",
    "parameter": {
      "fields": {
        "parmas": [
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "parmas",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"0\",\n    \"msg\" : \"ok\",\n    \"token\":\n\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://10.36.147.178:3000/api/user/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "user"
  }
] });
