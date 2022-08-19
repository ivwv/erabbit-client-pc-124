// 扩展vue原有的功能:全局组件,自定义指令，挂载原型方法，没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import defaultImg from '@/assets/images/200.png'
// import XtxMore from './xtx-more.vue'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'

// 导入library文件夹下的所有组件
// 普良导入需要使一个函数 require.context(dir,deep,matching)
// 参数：1.目录 2.是否加载子目录 3.加载的正则匹配
const importFn = require.context('./', false, /\.vue$/)
// console.dir(importFn.keys())

export default {
  install(app) {
    // 在app上进行扩展，app提供component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    // app.component(XtxSkeleton.name, XtxSkeleton)
    // app.component(XtxCarousel.name, XtxCarousel)
    // app.component(XtxMore.name, XtxMore)
    // app.component(XtxBread.name, XtxBread)
    // app.component(XtxBreadItem.name, XtxBreadItem)

    // 批量注册全局组件
    importFn.keys().forEach((key) => {
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })

    defineDirective(app)
  },
}

// 定义指令
const defineDirective = (app) => {
  // 1. 图片懒加载指令 v-lazy
  // 原理：先存储图片地址不能在src上，当图片进入可视区，将你存储图片地址设置给图片元素即可。
  app.directive('lazy', {
    // vue2.0 监听使用指令的DOM是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      // 2. 创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止观察
            observe.unobserve(el)
            // 3. 把指令的值设置给el的src属性 binding.value就是指令的值
            // 4. 处理图片加载失败 error 图片加载失败的事件 load 图片加载成功
            el.onerror = () => {
              // 加载失败，设置默认图
              el.src = defaultImg
            }
            el.src = binding.value
          }
        },
        {
          threshold: 0,
        }
      )
      // 开启观察
      observe.observe(el)
    },
  })
}
