window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "Button",
      "content": "按钮。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\ndisabled\nBoolean\nfalse\nfalse\n是否禁用\n\n\n\ntrue\n\n\nplain\nBoolean\nfalse\n\n按钮是否镂空，背景色透明\n\n\n\ntrue\n\n\ntype\nString\nfalse\ndefault\n按钮的样式类型\n可选值：default，primary，secondary，warn\n\n\ntrue\n\n\nsize\nString\nfalse\ndefault\n按钮的大小\n可选值：default，mini\n\n\ntrue\n\n\nloading\nBoolean\nfalse\nfalse\n名称前是否带 loading 图标\n\n\n\ntrue\n\n\nonClick\nFunction\nfalse\n\n点击的回调\n\n\n\ntrue\n\n\ncatchClick\nFunction\nfalse\n\n点击的回调\n\n\n\ntrue\n\n\nonTap\nFunction\nfalse\n\n点击的回调\n\n\n\ntrue\n\n\ncatchTap\nFunction\nfalse\n\n点击的回调\n\n\n\ntrue\n\n\n",
      "url": "/components/Button.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/Button.html#示例",
          "content": "示例基本使用：import React from '@react';import XButton from '@components/XButton/index';\nclass P extends React.Component {\n  handleClick(e) {\n    console.log('click', e);\n  }\n  render() {\n    return (\n      Default\n    );\n  }\n}\nexport default P;\n指定 Type：  Warn\n\nLoading 状态：  Loading\n\nDisabled：  Loading\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/components/Checkbox.html",
      "children": [
        {
          "title": "CheckboxGroup",
          "url": "/components/Checkbox.html#checkboxgroup",
          "content": "CheckboxGroup多项选择器，内部由多个 Checkbox 组成。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nonChange\nFunction\nfalse\n\nCheckboxGroup 中的 Checkbox 发生变化时触发 onChange 事件，e.detail = {value: [选中的 Checkbox 的 value 的数组]}\ntrue\ntrue\ntrue\ntrue\n\n\n"
        },
        {
          "title": "Checkbox",
          "url": "/components/Checkbox.html#checkbox",
          "content": "Checkbox多项选择项，非受控组件。通常需搭配 CheckboxGroup 使用。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nchecked\nBoolean\nfalse\nfalse\n当前是否选中\ntrue\ntrue\ntrue\ntrue\n\n\ndisabled\nBoolean\nfalse\nfalse\n是否禁用\ntrue\ntrue\ntrue\ntrue\n\n\nvalue\nString\nfalse\n''\nCheckbox 标识。当该 Checkbox 选中时，RadioGroup 的 onChange 事件会携带 Checkbox 的 value\ntrue\ntrue\ntrue\ntrue\n\n\ncolor\nColor\nfalse\n#1aad16\nCheckbox 的颜色，同 css 的 color\ntrue\ntrue\ntrue\ntrue\n\n\ntext\nString\nfalse\n''\n显示的文本\ntrue\ntrue\ntrue\ntrue\n\n\nisRight\nBoolean\nfalse\ntrue\n文本是否显示在 Checkbox 的右侧，默认显示在右侧\ntrue\ntrue\ntrue\ntrue\n\n\nsize\nString\nfalse\n'default'\nCheckbox 的大小，有三种选项：large、default、small\ntrue\ntrue\ntrue\ntrue\n\n\n"
        },
        {
          "title": "示例",
          "url": "/components/Checkbox.html#示例",
          "content": "示例基本用法：import React from '@react';import XCheckbox from '@components/XCheckbox/index';\nimport XCheckboxGroup from '@components/XCheckboxGroup/index';\nclass P extends React.Component {\n  constructor(props) {\n    this.handleChange = this.checkboxChange.bind(this);\n  }\n  handleChange(e) {\n    console.log('checkbox change', e);\n  }\n  render() {\n    return (\n      \n        \n        \n      \n    );\n  }\n}\nexport default P;\n"
        }
      ]
    },
    {
      "title": "Icon",
      "content": "图标。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nclassName\nString\nfalse\niconfont\nassets/style/iconfont.scss 中定义的字体类，给改图标指定了字体\ntrue\ntrue\ntrue\ntrue\n\n\nsize\nString\nfalse\n\nicon 的大小\ntrue\ntrue\ntrue\ntrue\n\n\ncolor\nString\nfalse\n\nicon 的颜色\ntrue\ntrue\ntrue\ntrue\n\n\n",
      "url": "/components/Icon.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/Icon.html#示例",
          "content": "示例// assets/style/iconfont.scss@font-face {\n  font-family: iconfont;\n  src: url(\"https://ss.qunarzz.com/yo/font/1.0.3/yofont.ttf\");\n}\n\n.iconfont {\n  font-family: iconfont;\n}\n\n.iconfont-another {\n  font-family: iconfont;\n}\n基本使用：import React from '@react';import XButton from '@components/XButton/index';\nclass P extends React.Component {\n  render() {\n    return (\n      \n    );\n  }\n}\nexport default P;\n自定义 className（该 class 需要写在 assets/style/iconfont.scss 文件中）：自定义 icon 颜色和大小："
        }
      ]
    },
    {
      "title": "Label",
      "content": "表单标签。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nfor\nString\nfalse\n\n绑定控件的 id\ntrue\ntrue\ntrue\ntrue\n\n\n用来改进表单组件的可用性，有两种使用方式：使用 for 属性找到对应的 id\n将控件放在该标签下，当点击时，就会触发对应的控件\nfor 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件目前可以绑定的控件有：XButton、XCheckbox、XRadio、XSwitch在快应用中，XLabel不支持这样的写法：apple，对于文本，需要用 text 包起来，也就是：apple。所以采用子元素的写法的时候，文本最好都用 text 包起来，不然快应用会有问题，暂时没找到解决方案\n由于 for 的使用方式会在每次点击的时候遍历页面所有元素来寻找对应 id 的控件、子元素的方式只会遍历 XLabel 标签内部的所有元素。所以为了效率，推荐尽量使用子元素的使用方式\n",
      "url": "/components/Label.html",
      "children": []
    },
    {
      "title": "Picker",
      "content": "滚动选择器。",
      "url": "/components/Picker.html",
      "children": [
        {
          "title": "普通选择器 mode = selector",
          "url": "/components/Picker.html#普通选择器-mode-=-selector",
          "content": "普通选择器 mode = selector\n\n属性\n类型\n默认值\n说明\n\n\n\n\nrange\nArray / Object Array\n[]\nmode 为 selector 或 multiSelector 时 range 有效\n\n\ndataMap\nObject\n{ id: 'name', items: 'sub' }\n当 range 是一个 Object Array 时，通过 dataMap 来指定 Object 中 key 的值作为选择器显示内容\n\n\nvalue\nNumber\n0\nselected 的值表示选择了 data 中的第几个（下标从 0 开始）\n\n\nonChange\nfunction\n\nselected 改变时触发 change 事件\n\n\nonCancel\nfunction\n\nbindcancel\tEventHandle\t\t取消选择或点遮罩层收起 picker 时触发\n\n\n"
        },
        {
          "title": "多列选择器 mode = multiSelector",
          "url": "/components/Picker.html#多列选择器-mode-=-multiselector",
          "content": "多列选择器 mode = multiSelector\n\n属性\n类型\n默认值\n说明\n\n\n\n\nrange\nArray / Object Array\n[]\nmode 为 selector 或 multiSelector 时 range 有效\n\n\ndataMap\nObject\n{ id: 'name', items: 'sub' }\n当 range 是一个 Object Array 时，通过 dataMap 来指定 Object 中 id 的值作为选择器显示内容, [{ name: '无脊柱动物', sub: [{name: '扁性动物',sub: [{name: '猪肉绦虫'},{name: '吸血虫'}]}]]\n\n\nvalue\nArray\n[]\nselected 的值表示选择了 data 中的第几个（下标从 0 开始）\n\n\nonChange\nfunction\n\nselected 改变时触发 change 事件\n\n\nonCancel\nfunction\n\nbindcancel\tEventHandle\t\t取消选择或点遮罩层收起 picker 时触发\n\n\n"
        },
        {
          "title": "日期选择器 | 时间选择器  type = date  | time",
          "url": "/components/Picker.html#日期选择器-|-时间选择器-type-=-date-|-time",
          "content": "日期选择器 | 时间选择器  type = date  | time\n\n属性\n类型\n默认值\n说明\n\n\n\n\nvalue\nString\n当前时间\ntime 格式： hh:mm ; date 格式： YYYY-MM-DD\n\n\nstart\nString\n\n开始  time 格式： hh:mm ; date 格式： YYYY-MM-DD\n\n\nend\nString\n\n结束  time 格式： hh:mm ; date 格式： YYYY-MM-DD\n\n\nonChange\nfunction\n\nselected 改变时触发 change 事件\n\n\nonCancel\nfunction\n\nbindcancel\tEventHandle 取消选择或点遮罩层收起 picker 时触发\n\n\n"
        },
        {
          "title": "省市区选择器  mode = region",
          "url": "/components/Picker.html#省市区选择器-mode-=-region",
          "content": "省市区选择器  mode = region\n\n属性\n类型\n默认值\n说明\n\n\n\n\nvalue\nArray\n[]\n表示选中的省市区，默认选中每一列的第一个值\n\n\nonChange\nfunction\n\nselected 改变时触发 change 事件\n\n\nonCancel\nfunction\n\nbindcancel\tEventHandle\t\t取消选择或点遮罩层收起 picker 时触发\n\n\n"
        },
        {
          "title": "示例代码",
          "url": "/components/Picker.html#示例代码",
          "content": "示例代码import React from '@react';import XPicker from '@components/XPicker/index';\nclass P extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      show: false,\n      index: 0,\n      multiIndex: ['无脊柱动物', '扁性动物', '猪肉绦虫'],\n      date: '2016-09-01',\n      time: '12:01',\n      region: ['广东省', '广州市', '海珠区'],\n      multiArray: [\n        {\n          name: '无脊柱动物',\n          sub: [\n            {\n              name: '扁性动物',\n              sub: [\n                {\n                  name: '猪肉绦虫'\n                },\n                {\n                  name: '吸血虫'\n                }\n              ]\n            },\n            {\n              name: '线形动物',\n              sub: [\n                {\n                  name: '蛔虫'\n                }\n              ]\n            }\n          ]\n        },\n        {\n          name: '脊柱动物',\n          sub: [\n            {\n              name: '鱼',\n              sub: [\n                {\n                  name: '鲫鱼'\n                },\n                {\n                  name: '带鱼'\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      list1: [\n        'iphone',\n        '华为',\n        '小米',\n        '三星',\n        '魅族',\n        '锤子',\n        'oppo',\n        'vivo',\n        'iphone',\n        '华为',\n        '小米',\n        '三星',\n        '魅族',\n        '锤子',\n        'oppo',\n        'vivo'\n      ]\n    };\n  }\n\n  showPicker() {\n    console.log('showPicker');\n    this.setState({\n      show: true\n    });\n  }\n\n  close() {\n    console.log('close');\n    this.setState({\n      show: false\n    });\n  }\n\n  change(e) {\n    console.log('...', e);\n    this.setState({\n      index: e.value\n    });\n  }\n\n  bindMultiPickerChange(e) {\n    this.setState({\n      multiIndex: e.value\n    });\n  }\n\n  bindDateChange(e) {\n    console.log('...bindDateChange', e);\n    this.setState({\n      date: e.value\n    });\n  }\n\n  bindTimeChange(e) {\n    this.setState({\n      time: e.value\n    })\n  }\n\n  bindRegionChange(e) {\n    this.setState({\n      region: e.value\n    })\n  }\n\n  render() {\n    return (\n      \n        \n          基本\n        \n        \n          一列\n          \n            当前选择：{this.state.list1[this.state.index]}\n          \n        \n        \n          多列\n          \n            \n              当前选择：{this.state.multiIndex[0]}, {this.state.multiIndex[1]},{' '}\n              {this.state.multiIndex[2]}\n            \n          \n        \n        \n          日期选择器\n          \n            当前选择：{this.state.date}\n          \n        \n        \n          时间选择器\n          \n            当前选择：{this.state.time}\n          \n        \n        \n          省市区选择器\n          \n            当前选择：{this.state.region[0]}, {this.state.region[1]},{this.state.region[2]}\n          \n        \n      \n    );\n  }\n}\n\nexport default P;\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/components/Radio.html",
      "children": [
        {
          "title": "RadioGroup",
          "url": "/components/Radio.html#radiogroup",
          "content": "RadioGroup单项选择器，内部由多个 Radio 组成。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nonChange\nFunction\nfalse\n\nRadioGroup 中的 Radio 发生变化时触发 onChange 事件，e.detail = { value: 选中 Radio 的 value }\ntrue\ntrue\ntrue\ntrue\n\n\n"
        },
        {
          "title": "Radio",
          "url": "/components/Radio.html#radio",
          "content": "Radio单项选择项，非受控组件。通常需搭配 RadioGroup 使用。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nchecked\nBoolean\nfalse\nfalse\n当前是否选中\ntrue\ntrue\ntrue\ntrue\n\n\ndisabled\nBoolen\nfalse\nfalse\n是否禁用\ntrue\ntrue\ntrue\ntrue\n\n\nvalue\nString\nfalse\n''\nRadio 标识。当该 Radio 选中时，RadioGroup 的 onChange 事件会携带 Radio 的 value\ntrue\ntrue\ntrue\ntrue\n\n\ncolor\nColor\nfalse\n#1aad16\nRadio 的颜色，同 css 的 color\ntrue\ntrue\ntrue\ntrue\n\n\ntext\nString\nfalse\n''\n显示的文本\ntrue\ntrue\ntrue\ntrue\n\n\nisRight\nBoolean\nfalse\ntrue\n文本是否显示在 Radio 的右侧，默认显示在右侧\ntrue\ntrue\ntrue\ntrue\n\n\nsize\nString\nfalse\n'default'\nRadio 的大小，有三种选项：large、default、small\ntrue\ntrue\ntrue\ntrue\n\n\n"
        },
        {
          "title": "示例",
          "url": "/components/Radio.html#示例",
          "content": "示例基本用法：import React from '@react';import XRadio from '@components/XRadio/index';\nimport XRadioGroup from '@components/XRadioGroup/index';\nclass P extends React.Component {\n  constructor(props) {\n    this.handleChange = this.checkboxChange.bind(this);\n  }\n  handleChange(e) {\n    console.log('checkbox change', e);\n  }\n  render() {\n    return (\n      \n        \n        \n      \n    );\n  }\n}\nexport default P;\n"
        }
      ]
    },
    {
      "title": "ScrollView",
      "content": "仅支持 H5，可滚动视图区域。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\nH5\n\n\n\n\nscrollX\nBoolean\nfalse\nfalse\n允许横向滚动\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nscrollY\nBoolean\nfalse\nfalse\n允许纵向滚动\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nupperThreshold\nNumber\nfalse\n50\n距顶部/左边多远时，触发 onScrollToUpper 事件\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nlowerThreshold\nNumber\nfalse\n50\n距底部/右边多远时，触发 onScrollToLower 事件\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nscrollTop\nNumber\nfalse\n\n设置竖向滚动条位置\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nscrollLeft\nNumber\nfalse\n\n设置横向滚动条位置\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nscrollIntoView\nString\nfalse\n\n值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nscrollWithAnimation\nNumber\nfalse\nfalse\n在设置滚动条位置时使用动画过渡\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nonScrollToUpper\nFunction\nfalse\n\n滚动到顶部/左边，会触发 onScrollToUpper 事件\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nonScrollToLower\nFunction\nfalse\n\n滚动到底部/右边，会触发 onScrollToLower 事件\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\nonScroll\nFunction\nfalse\n\n滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}\nfalse\nfalse\nfalse\nfalse\ntrue\n\n\n",
      "url": "/components/ScrollView.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/ScrollView.html#示例",
          "content": "示例基本用法：import React from '@react';import XScrollView from '@components/XScrollView/index';\nclass P extends React.Component {\n  render() {\n    return (\n       console.log(e.target.scrollTop)}\n        scrollWithAnimation={false}\n        onScrollToUpper={() => console.log('onScrollToUpper')}\n        onScrollToLower={() => console.log('onScrollToLower')}\n      >\n        \n          这是内容区域\n          示例段落\n          选中段落\n          示例段落\n        \n      \n  );\n  }\n}\n\nexport default P;\n横向：import React from '@react';import XScrollView from '@components/XScrollView/index';\n\nclass P extends React.Component {\n  render() {\n    return (\n      \n         console.dir(e.target.scrollTop)}\n          scrollWithAnimation={false}\n          onScrollToUpper={() => console.log('onScrollToUpper')}\n          onScrollToLower={() => console.log('onScrollToLower')}\n        >\n          \n            示例段落选中段落示例段落\n          \n        \n      \n    );\n  }\n}\n\nexport default P;\n"
        }
      ]
    },
    {
      "title": "Slider",
      "content": "滑动选择器，这是一个受控组件。\n\n属性名\n类型\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nmin\nNumber\n0\n最小值\n-\n-\n-\n√\n\n\nmax\nNumber\n100\n最大值\n-\n-\n-\n√\n\n\nstep\nNumber\n1\n步长，取值必须大于 0，并且可被(max - min)整除\n-\n-\n-\n√\n\n\ndisabled\nBoolean\nfalse\n是否禁用\n-\n-\n-\n√\n\n\nvalue\nNumber\n0\n当前取值\n-\n-\n-\n√\n\n\nactiveColor\nColor\n#1aad19\n已选择的颜色\n-\n-\n-\n√\n\n\nbackgroundColor\nColor\n#e9e9e9\n背景条的颜色\n-\n-\n-\n√\n\n\nblock-size\nNumber\n28\n滑块的大小，取值范围为 12 - 28\n-\n-\n-\n√\n\n\nblock-color\nColor\n#ffffff\n滑块的颜色\n-\n-\n-\n√\n\n\nshow-value\nBoolean\nfalse\n是否显示当前 value\n-\n-\n-\n√\n\n\nbindchange\nEventHandle\n\n完成一次拖动后触发的事件，event.detail = {value: value}\n-\n-\n-\n-\n\n\nbindchanging\nEventHandle\n\n拖动过程中触发的事件，event.detail = {value: value}\n-\n-\n-\n-\n\n\n",
      "url": "/components/Slider.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/Slider.html#示例",
          "content": "示例基本用法：import React from '@react';import XSlider from '@components/XSlider/index';\nclass P extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      value: 0,\n    };\n    this.handleChange = this.handleChange.bind(this);\n  }\n  handleChange(idx, value) {\n    this.setState({\n      value: value,\n    });\n  }\n  render() {\n    return (\n      \n    );\n  }\n}\nexport default P;\n自定义滑块大小：Disabled：不显示当前 value：步长：最大值和最小值：自定义样式："
        }
      ]
    },
    {
      "title": "Swiper",
      "content": "轮播图。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nstyle\nObject\nfalse\n\nSwiper 的样式\ntrue\ntrue\ntrue\ntrue\n\n\nindicatorDots\nBoolean\nfalse\nfalse\n是否显示面板指示点\ntrue\ntrue\ntrue\ntrue\n\n\nindicatorColor\nColor\nfalse\nrgba(0, 0, 0, .3)\n指示点颜色\ntrue\ntrue\ntrue\ntrue\n\n\nindicatorActiveColor\nColor\nfalse\n#000000\n当前选中的指示点颜色\ntrue\ntrue\ntrue\ntrue\n\n\nautoplay\nBoolean\nfalse\nfalse\n是否自动切换\ntrue\ntrue\ntrue\ntrue\n\n\ncurrent\nNumber\nfalse\n0\n当前所在滑块的 index\ntrue\ntrue\ntrue\ntrue\n\n\ninterval\nNumber\nfalse\n5000\n自动切换时间间隔\ntrue\ntrue\ntrue\ntrue\n\n\nduration\nNumber\nfalse\n500\n滑动动画时长\ntrue\ntrue\ntrue\ntrue\n\n\ncircular\nBoolean\nfalse\nfalse\n是否采用衔接滑动\ntrue\ntrue\ntrue\ntrue\n\n\nvertical\nBoolean\nfalse\nfalse\n滑动方向是否为纵向\ntrue\ntrue\ntrue\ntrue\n\n\nonChange\nEventHandle\nfalse\n\ncurrent 改变时会触发 change 事件，event.detail = {current: current, source: source}\ntrue\ntrue\ntrue\ntrue\n\n\nonAnimationfinish\nEventHandle\nfalse\n\n动画结束时会触发 animationfinish 事件，event.detail 同上\ntrue\ntrue\ntrue\ntrue\n\n\n",
      "url": "/components/Swiper.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/Swiper.html#示例",
          "content": "示例基础用法："
        }
      ]
    },
    {
      "title": "Switch",
      "content": "开关选择器。\n\n属性名\n类型\n必填\n默认值\n说明\n微信\n支付宝\n百度\n快应用\n\n\n\n\nchecked\nBoolean\nfalse\nfalse\n是否选中\ntrue\ntrue\ntrue\ntrue\n\n\ndisabled\nBoolean\nfalse\nfalse\n是否禁用\ntrue\ntrue\ntrue\ntrue\n\n\ncolor\nString\nfalse\n#2998F9\nswitch 开启的颜色\ntrue\ntrue\ntrue\ntrue\n\n\ncheckColor\nString\nfalse\n#C1C1C1\nswitch 关闭的颜色\ntrue\ntrue\ntrue\ntrue\n\n\nwrapperStyle\nObject\nfalse\n\n外层的样式\ntrue\ntrue\ntrue\ntrue\n\n\ninnerStyle\nObject\nfalse\n\n内部按钮的样式\ntrue\ntrue\ntrue\ntrue\n\n\nonChange\nFunction\nfalse\n\nchecked 改变时触发 change 事件 event.value\ntrue\ntrue\ntrue\ntrue\n\n\n",
      "url": "/components/Switch.html",
      "children": [
        {
          "title": "示例",
          "url": "/components/Switch.html#示例",
          "content": "示例基本用法：import React from '@react';import XSwitch from '@components/XSwitch/index';\nclass P extends React.Component {\n  change(e) {\n    console.log('change value', e);\n  }\n  render() {\n    return (\n      \n        \n      \n    );\n  }\n}\nexport default P;\nDisabled：自定义样式：import React from '@react';import XSwitch from '@components/XSwitch/index';\nclass P extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      innerStyle: {\n        borderRadius: 0,\n        backgroundColor: '#fac450'\n      },\n      wrapperStyle: {\n        borderRadius: 0\n      }\n    };\n  }\n\n  change(e) {\n    console.log('change value', e);\n  }\n\n  render() {\n    return (\n      \n        \n      \n    );\n  }\n}\n\nexport default P;\n"
        }
      ]
    }
  ],
  "Demo": [
    {
      "title": "",
      "content": "",
      "url": "/Demo.html",
      "children": [
        {
          "title": "Demo",
          "url": "/Demo.html#demo",
          "content": "Demo"
        }
      ]
    }
  ]
}