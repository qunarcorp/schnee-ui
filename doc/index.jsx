---
banner:
  name: 'Schnee UI'
  desc: '运用于 Nanachi 的 H5、快应用的补丁组件'
  btns:
    - { name: '文档', href: './components/Button.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/qunarcorp/schnee-ui' }
  caption: ''
features:
  - { name: '三套模板', desc: '旅游、商城、音乐三套通用模板' }
  - { name: '多端支持', desc: '支持微信、百度、支付宝小程序与快应用的转译，头条小程序正在跟进中' }
  - { name: '支持 slot', desc: '突破小程序 template 限制，支持组件标签包含其他内容' }
  - { name: '支持事件传参', desc: '突破 wxml 的限制，实现多次 bind this 与参数' }
  - { name: '组件化编程', desc: '完美兼容 React 生命周期钩子' }
  - { name: '支持 Render Props', desc: '可以更自由地写组件' }

footer:
  copyRight:
    name: 'YMFE Team'
    href: 'https://ymfe.org/'
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/qunarcorp/schnee-ui' }
      - { name: 'Github Issue', href: 'https://github.com/qunarcorp/schnee-ui/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />