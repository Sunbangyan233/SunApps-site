# How to use?

1. Clone这个repo
 
 ```
 git clone https://github.com/Sunbangyan233/SunApps-site.git
 ```
2. 本地构建

```
npm run build
```

### 编译后的静态文件在/build目录中。

---

or 使用[Cloudflare Page](https://pages.cloudflare.com/)等服务

1. Fork这个repo。

2. 从dashboard连接你的GitHub。

3. 设置环境变量 ```NODE_VERSION``` 为Docusaurus支持的版本（如16.14.0）。

好了，以下是原注释，我也不改了（
---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
