import {getZIndex} from '../utils'
import Vue from 'vue'
import overlayOpt from '../overlay'
const Overlay = Vue.extend(overlayOpt)
const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}

const PopupManager = {
  instances: [],
  overlay: false,
  open (instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (this.instances.length === 0) {
      this.showOverlay(instance.overlayColor, instance.overlayOpacity)
    }
    this.instances.push(instance)
    this.changeOverlayStyle()
    const dom = getDOM(instance.$el)
    dom.style.zIndex = getZIndex()
  },
  close (instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    Vue.nextTick(() => {
      this.instances.splice(index, 1)
      if (this.instances.length === 0) {
        this.closeOverlay()
      }
      this.changeOverlayStyle()
    })
  },
  showOverlay (color, opacity) {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    overlay.fixed = true
    overlay.color = color
    overlay.opacity = opacity
    overlay.onClick = this.handlerOverlayClick.bind(this)
    overlay.$appendTo(document.body)

    // body 操作
    this.bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  },
  closeOverlay () {
    document.body.style.overflow = this.bodyOverflow
    let overlay = this.overlay
    this.overlay = null
    overlay.$remove(() => {
      overlay.$destroy()
    })
  },
  changeOverlayStyle () {
    if (!this.overlay || this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    this.overlay.color = instance.overlayColor
    this.overlay.opacity = instance.overlayOpacity
  },
  handlerOverlayClick () {
    if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    if (instance.overlayClick) {
      instance.overlayClick()
    }
  }
}

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) { // ESC
    if (PopupManager.instances.length > 0) {
      const topInstance = PopupManager.instances[PopupManager.instances.length - 1]
      if (!topInstance) return
      if (topInstance.escPress) {
        topInstance.escPress()
      }
    }
  }
})

export default PopupManager
