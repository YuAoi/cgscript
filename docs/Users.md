## Users

1. [用户注册](#reg)
1. [用户登录](#login)
1. [用户登出](#logout)
1. [查看用户](#users)
1. [删除用户](#del)

  用户注册登录等相关的API

#### 用户注册

```
POST /register
```

__Parameters__

Name | Type | Description
-----|------|------------
username | string | 用户名
password | string | 密码

__Example__

``` json
{
  "username": "sgser_win",
  "password": "secret"
}
```

__Response__

*Status: 200 Ok*
``` json
{
  "success": true
}
```