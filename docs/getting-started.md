---
sidebar_position: 2
---

# 快速开始

介绍如何快速安装并使用 **微信助手 Pro** 软件。

## 准备工作

* 准备 Windows 系统电脑或云服务器。
* 安装指定版本微信（3.9.11.25）。
* 申请 [WeChat API](https://www.wechatsdk.com/zh) License 。
* 联系我们，获取 **微信助手 Pro** 软件和授权码。

## 安装使用

首次安装 **微信助手 Pro** 软件，需要输入授权码 和 WeChat API License。

* 授权码是由 **微信助手 Pro** 官方人员发放，请 [联系我们](http://localhost:3000/docs/contact) 获取。
* WeChat API License 是 **微信助手 Pro** 软件的核心功能，需要到 [WeChat API](https://www.wechatsdk.com/zh) 官网申请。

输入授权码和 WeChat API License 后，创建微信助手账号，返回登录页面，点击登录即可使用完整功能。

## 多开微信

**微信助手 Pro** 支持多开微信，可以同时登录多个微信号，并在不同微信号之间切换。

您需要找到 **微信助手 Pro** 应用的安装目录，并复制完整路径。例如：

```
D:\Install\wechat-assistant-pro\微信助手.exe
```

然后您可以创建批处理文件，在其中启动多个 **微信助手 Pro** 应用，并指定不同的端口号。

```bash
@echo off

echo 启动微信助手...

start /b "" "D:\Install\wechat-assistant-pro\微信助手.exe" --port=4000

start /b "" "D:\Install\wechat-assistant-pro\微信助手.exe" --port=4002

start /b "" "D:\Install\wechat-assistant-pro\微信助手.exe" --port=8080

echo 微信助手启动完成

exit 
```

将文件保存成 `.bat` 格式，双击运行即可启动多个微信助手 Pro 应用。
