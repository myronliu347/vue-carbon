import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import routerMap from './router'
import App from './App'
import VueCarbon from '../src'
FastClick.attach(document.body)
Vue.use(VueRouter)
Vue.use(VueCarbon)
let router = new VueRouter({})

routerMap(router)
router.start(App, 'app')

// 处理retina屏幕显示效果
var classNames = []
let pixelRatio = window.devicePixelRatio || 1
classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
if (pixelRatio >= 2) {
  classNames.push('retina')
}

let html = document.getElementsByTagName('html')[0]

classNames.forEach((className) => html.classList.add(className))
