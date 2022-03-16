# Https 配置

1. 前置准备

> 已购买域名，内地服务器要 ICP 备案

> 已将相关域名解析到 nginx 所在的那个服务器 IP 上

> 已有证书文件，没有就先申请免费的

> 下载阿里云提供的 Nginx 版 xxxx.key 私钥 和 xxxx.pem 证书文件

2. 动手

```sh
# 进入nginx的配置文件夹
cd /usr/local/nginx/sbin/nginx/conf
# 创个证书目录，
mkdir cert

# 把前面准备的 .key文件和.pem文件放到cert目录下，走rz或者sftp都可以

# 再回到conf列表
cd /usr/local/nginx/sbin/nginx/conf
# 编辑配置文件，vim的语法百度
vim nginx.conf
# 完成相关事宜
# 1. 443端口放开，且配上pem和key文件
# 2. 80端口永久重定向到https
```

2. 部分代码示例

```
server {
    listen       80;
    server_name  www.meedfine.com meedfine.com;
    return 301 https://$server_name$request_uri;

}

# HTTPS server
#
server {
    listen 443 ssl http2;
    server_name www.meedfine.com meedfine.com;
    ssl_certificate cert/7333609_www.meedfine.com.pem;
    ssl_certificate_key cert/7333609_www.meedfine.com.key;
    location / {
        charset utf-8;
        proxy_pass https://notes-meedfine.vercel.app/;
    }
    location /music-api/ {
        charset utf-8;
        proxy_pass https://netease-cloud-music-api-meedfine.vercel.app/;
    }
}


```
