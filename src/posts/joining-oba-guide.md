---
title: 搭建 OpenBMCLAPI 指南
date: 2024-11-03T00:00:00+08:00
tags: ["PCDN", "OpenBMCLAPI"]
description: "本文介绍了如何搭建 OpenBMCLAPI 节点。（仅供主题测试，可能不准确）"
outline:
  level: [2, 4]
---

> [!WARNING] ⚠️ 请注意
> 你需要有电脑、服务器基础知识，以及一定的操作能力。<br>
> 否则，我建议现在就关闭此文章

## 前言

> BMCLAPI 是 [@bangbang93](https://github.com/bangbang93) 开发的 BMCL 的一部分，用于解决国内线路对 Forge 和 Minecraft 官方使用的 Amazon S3 速度缓慢的问题。BMCLAPI 是对外开放的，所有需要 Minecraft 资源的启动器均可调用。

首先，你需要明白一点，OpenBMCLAPI 是 辅助 BMCLAPI 分发文件的一个项目，**本质上就是一个 PCDN，请务必结合当地政策决定是否搭建**。

> [!WARNING] ⚠️ 服务器/电脑要求
>
> 1. **公网可访问**（端口映射也可），可以非 80 端口；
> 2. 10Mbps 以上的上行速度；
> 3. 暂时不接受国外节点了；
> 4. 可以长时间**稳定在线**；
> 5. 暂不支持 **IPv6 only**（可以双栈）。

## 准备工作

首先，你需要加 OpenBMCLAPI 的官方 QQ 群 [`689855839`](https://qm.qq.com/q/1hpydZhNew)，你需要回答你的服务器地理位置，然后等待群主随缘审核。

在审核通过后，找到该群群主，与群主私聊，告诉他你准备搭建 OpenBMCLAPI，并提供你服务器的相关信息，以下为可能的示例对话：

```yaml
# 慢慢来版
你: 你好，我来申请下 CLUSTER_ID 和 CLUSTER_SECRET。
bangbang93: 你是哪里的什么服务器？
你: 武汉，Linux
bangbang93: 硬盘和带宽有多少
你: 硬盘 80G
bangbang93: 带宽呢
你: 上行 40 左右
bangbang93: 起个名字
你: 嗯嗯嗯嗯嗯
bangbang93: CLUSTER_ID = ************************
            CLUSTER_SECRET = ********************************
```

```yaml
# 一次性解决版
你: 你好，我来申请下 CLUSTER_ID 和 CLUSTER_SECRET。
  武汉的服务器，硬盘 80G，带宽上行 40 左右，名字为*****
bangbang93: CLUSTER_ID = ************************
  CLUSTER_SECRET = ********************************
```

我更推荐 `一次性解决版`，你节约时间也方便了群主（虽然但是我用的 `慢慢来版` 🤣）。

你也需要一个能访问 GitHub 的网络环境，以便后续操作，

## 开始搭建

在以下内容中，我将以不同的节点端为例，介绍如何搭建 OpenBMCLAPI，请注意善用目录功能（按照出现时间顺序来排序）。

> [!WARNING] ⚠️ 请注意
> 部分内容来源于节点端的 官方文档，请确保你已经了解相关内容。<br>
> 特殊标记：完全复制部分会有 `CV` 标记

### Node 端

- 主要开发者: [@bangbang93](https://github.com/bangbang93)
- 开发语言: TypeScript
- 仓库地址: [https://github.com/bangbang93/openbmclapi](https://github.com/bangbang93/openbmclapi)
- 文档: [https://github.com/bangbang93/openbmclapi/wiki](https://github.com/bangbang93/openbmclapi/wiki)

#### Docker Cli

[Docker CE 软件仓库镜像使用帮助 - CERNET 镜像源](https://help.mirrors.cernet.edu.cn/docker-ce/)

```bash
docker run -d \
-e CLUSTER_ID=${CLUSTER_ID} \
-e CLUSTER_SECRET=${CLUSTER_SECRET} \
-e CLUSTER_PUBLIC_PORT=${CLUSTER_PORT} \
-e TZ=Asia/Shanghai \
-v /data/openbmclapi:/opt/openbmclapi/cache \
-p ${CLUSTER_PORT}:4000 \
--restart always \
--name openbmclapi \
bangbang93/openbmclapi
```

请将 `${CLUSTER_ID}` 和 `${CLUSTER_SECRET}` 替换为你申请到的 CLUSTER_ID 和 CLUSTER_SECRET，`${CLUSTER_PORT}` 替换为你希望的端口号。

部分参数详解:

- `-p ${CLUSTER_PORT}:4000`: 将容器的 4000 端口映射到 宿主机的 `${CLUSTER_PORT}` 端口
- `--restart always` 设置自动重启
- `--name openbmclapi` 设置容器名称。

#### 安装包

1. 从 [GitHub Releases](https://github.com/bangbang93/openbmclapi/releases/latest) 中选择对应你的系统的最新版本
2. - Windows 系统: 运行 PowerShell 脚本 `run.ps1`
   - Linux / MacOS 系统: 运行 shell 脚本 `run.sh`
3. 如果你看到了 `CLUSTER_ID is not set` 的报错，属于正常情况，可以直接到[设置参数](#设置参数)部分了。

#### 从源代码安装（CV）

通过该方法安装，你需要以下的环境：

- Node.js 18 以上
- Windows / MacOS / Linux, x86 / arm 均可 (凡是支持 Node.js 的环境都可以)

##### 设置环境

1. 去 <https://nodejs.org/zh-cn/> 下载 LTS 版本的 Node.js 并安装
2. 克隆仓库并安装依赖

```bash
git clone https://github.com/bangbang93/openbmclapi
cd openbmclapi
## 安装依赖
npm ci
## 编译
npm run build
## 运行
node dist/index.js
```

3. 如果你看到了 `CLUSTER_ID is not set` 的报错，属于正常情况，可以直接到[设置参数](#设置参数)部分了。

#### 设置参数（CV）

首先，先附上一个参数的表格：
| 环境变量 | 必填 | 默认值 | 说明 |
|---------------------|----|--------------|--------------------------------------------------------------------------------------------------------|
| CLUSTER_ID | 是 | - | 集群 ID |
| CLUSTER_SECRET | 是 | - | 集群密钥 |
| CLUSTER_IP | 否 | 自动获取公网出口 IP | 用户访问时使用的 IP 或域名 |
| CLUSTER_PORT | 否 | 4000 | 监听端口 |
| CLUSTER_PUBLIC_PORT | 否 | CLUSTER_PORT | 对外端口 |
| CLUSTER_BYOC | 否 | false | 是否使用自定义域名，(BYOC = Bring you own certificate)，当使用国内服务器需要备案时，需要启用这个参数来使用你自己的域名，并且你需要自己提供 ssl termination |
| ENABLE_NGINX | 否 | false | 使用 Nginx 提供文件服务 |
| DISABLE_ACCESS_LOG | 否 | false | 禁用访问日志输出 |
| ENABLE_UPNP | 否 | false | 启用 UPNP 端口映射 |

> 如果你在源码中发现了其他环境变量，那么它们是为了方便开发而存在的，可能会随时修改，不要在生产环境中使用。———— bangbang93（2024 年 1 月 25 日）

1. 在项目根目录创建一个文件, 名为 `.env`
2. 在该文件中写入以下内容:

```dotenv
CLUSTER_ID = 你的 CLUSTER_ID
CLUSTER_SECRET = 你的 CLUSTER_SECRET
CLUSTER_PORT = 监听端口（可选）
CLUSTER_PUBLIC_PORT = 对外端口（可选）
```

3. 如果配置无误的话，运行程序，就会开始拉取文件，拉取完成后就会开始等待服务器分发请求了。

##### 附 - AList 配置

```dotenv
CLUSTER_STORAGE=alist
CLUSTER_STORAGE_OPTIONS={"url":"http://alist.application.svc:5244/dav","basePath":"openbmclapi","username":"openbmclapi","password":"openbmclapi" }
# 下为示例配置
CLUSTER_STORAGE=alist
CLUSTER_STORAGE_OPTIONS={"url":"http://127.0.0.1:5244/dav","basePath":"/BMCLAPI-Mirrors/189Cloud/download","username":"admin","password":"123456" }
```

## 后言

先不写了（先水一篇再说😄），后面有时间慢慢补😡
