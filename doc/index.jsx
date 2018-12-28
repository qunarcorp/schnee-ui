---
banner:
  name: 'Schnee UI'
  desc: '运用于 Nanachi 的 H5、快应用的补丁组件'
  btns:
    - { name: '文档', href: './components/Button.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/qunarcorp/schnee-ui' }
  caption: ''
features:
  - { name: '多端支持', desc: '支持微信、百度、支付宝小程序与快应用' }

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