module.exports = {
  title: "Notes",
  description: "Welcome",
  head: [["link", { rel: "icon", href: "https://cn.vitejs.dev/logo.svg" }]],
  themeConfig: {
    darkMode: false,
    navbar: false,
    sidebar: {
      "/": [
        {
          text: "首页",
          link: "/",
        },
        {
          text: "介绍",
          link: "/welcome",
        },
        {
          text: "服务器",
          link: "/notes/nginx",
          children: [
            {
              text: "Nginx 安装",
              link: "/notes/nginx",
            },
            {
              text: "Verdaccio 安装",
              link: "/notes/verdaccio",
            },
          ],
        },
      ],
    },
  },
};
