---
date: '2022-06-12'
featured: true
cover: 'vpn.jpg'
---

>>>ENG
---
title: 'How to Build an Airport from Start'
---

> Part of this article
> references [Self-host Relay Service with CDN | Wenxuan Shi (whexy.com)](https://www.whexy.com/posts/relay_cdn)

## Brief view

In this article, we will build an airport from start.

##### Requirements & Environments

- A **VPS**. I have chosen [DigitalOcean](https://www.digitalocean.com/) because they offered me a $100 coupon.
- **Clash**. I used [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases), which is a Clash
  with GUI.
- **Docker** Environment
- AWS CloudFront (a **CDN** service of AWS, optional)

##### Basic Process

We'll use VPS + docker to build a server and use Clash on client to connect. Then we'll can use Amazon CDN service to
speed up our airport and bypass the blockings of GFW.

## Server Side Configuration

First, we need to write a configuration file of xray.

```shell
mkdir ~/xray
vim ~/xray/config.json
```

In the configuration file, we add some basic configurations for xray.

```json
{
  "inbounds": [
    {
      "port": 12345,
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "<GUID>",
            "alterId": 0
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/api/v1"
        }
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    }
  ]
}
```

You should replace the `<GUID>` with your own GUID. You can generate a GUID online.

Set `alterId` as `0`, so that AEAD is enabled.

Change the port to your own, and you can set a websocket path so that your request seems like a request to the
resources.

Then we can use one single command to start the server in docker.

```shell
docker run -d -v ~/xray:/etc/xray --network=host --restart=always teddysun/xray
```

You can use `netstat -antpl` to check whether the port is up.

## Client Side Configuration

On client side, we just need to configure the Clash to connect to the server.

Add the following configuration into the configuration file of Clash.

```yaml
- {
  name: <proxy_name>,
  server: <server>,
  port: 12345,
  type: vmess,
  uuid: <GUID>,
  alterId: 0,
  cipher: none,
  tls: false,
  skip-cert-verify: true,
  network: ws,
  ws-opts: { path: /api/v1, headers: { Host: <host_name> } },
  udp: true,
}
```

Replace the `<GUID>` of the same GUID you got, then you can try to connect to the server.

You can check whether the server has been accessed by checking the log of docker. Add the following into the config file
of xray.

```json
"log": {
"loglevel": "warning"
}
```

Then you can check the logs of docker with the following commands.

```shell
docker logs <container_name>
```

## CDN Speed Up

The method we used above have two drawbacks:

1. The connection can be unstable due to the network environments, especially for servers abroad.
2. Our airport may be blocked by GFW.

We can use CDN to resolve these two problems, though this is not what it initially designed for. The reason is that the
communication between client and CDN server will not be blocked, and what's more, the CDN can ensure the quality of the
communication since it will automatically choose the nearest server around client, and the CDN server will redirect the
flow to our server in a dedicated line so the speed and stability is ensured.

I have chosen AWS CloudFront for this, there are something that you needs to pay attentions to.

Specify your server and port. Note that you can specify the server path which is configured in the xray configuration
file in the `origin path` field here, or in the configuration file of Clash. Also, since the communication between CDN
and server is a dedicated line, so we can just use HTTP here.

![image-20220618000403551](/figures/articles/airport/image-20220618000403551.png)

Also, we need to change the cache settings to legacy so that none of our request will be cached by CDN, though it should
be one of the core functions of CDN.

![image-20220618004914623](/figures/articles/airport/image-20220618004914623.png)

We only allow HTTPS here to make sure that every flow from client to the CDN is encrypted by TLS (So the final
protocol stack is VMESS + WS + TLS). You may need to apply for a certificate for this.

![image-20220618010225934](/figures/articles/airport/image-20220618010225934.png)

After deployment, we can get a URL of CDN.

Finally, we need to do a little modification to the configuration file of Clash.

```yaml
- {
  name: <proxy_name>,
  server: <CDN_URL>,
  port: 443, # the one of HTTPS used by CDN server
  type: vmess,
  uuid: <GUID>,
  alterId: 0,
  cipher: none,
  tls: true, # enable TLS
  skip-cert-verify: true,
  network: ws,
  ws-opts: { path: /api/v1, headers: { Host: <CDN_URL> } },
  udp: true,
}
```

>>>


