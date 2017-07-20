## Users

1. [用户注册](#用户注册)
1. [用户登录](#用户登录)
1. [查看用户](#查看用户)
1. [删除用户](#删除用户)

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

#### 用户登录

```
POST /login
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
  "success": true,
  "username": "sgser_win",
  "token": "jsonwebtoken",
  "create_time": 190940893458
}
```

#### 查看用户

```
GET /users
```

__Response__

*Status: 200 Ok*
``` json
{
  "success": true,
  "result": [User]
}
```

#### 删除用户

```
POST /deluser
```

__Parameters__

Name | Type | Description
-----|------|------------
id | string | ObjectId

__Example__

``` json
{
  "id": "1209390402033"
}
```

__Response__

*Status: 200 Ok*
``` json
{
  "success": true
}
```
