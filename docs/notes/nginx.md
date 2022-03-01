# Nginx 安装

1. 安装启动 Nginx

```sh
# 安装运行环境
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 下载压缩包
wget http://nginx.org/download/nginx-1.21.6.tar.gz
# 进入目录
cd nginx-1.21.6
# 配置 顺带装一下相关依赖 性能统计 ssl证书 http2
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module
# 编译
make
#安装
make install
# 查找nginx安装目录，也可跳过，默认就在/usr/local/nginx/
whereis nginx
# 执行nginx的sbin目录下的nginx文件，即启动
/usr/local/nginx/sbin/nginx
# 访问服务器IP， nginx默认占据80端口 http
```

2. 相关语法

```sh
#启动
/usr/local/nginx/sbin/nginx
#关闭
/usr/local/nginx/sbin/nginx -s stop
#重启-重新载入配置文件
/usr/local/nginx/sbin/nginx -s reload
#检查配置文件
/usr/local/nginx/sbin/nginx -t
```
