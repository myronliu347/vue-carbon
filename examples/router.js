import home from './views/home'

// base
import icon from './views/icon'
import badge from './views/badge'
import button from './views/button'
import overlay from './views/overlay'
import circular from './views/circular'
import toast from './views/toast'

// css
import headerBar from './views/headerBar'
import grid from './views/grid'
import contentBlock from './views/contentBlock'
import listView from './views/listView'
import card from './views/card'
export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: home
    },
    '/icons': {
      name: 'icon',
      component: icon
    },
    '/badge': {
      name: 'badge',
      component: badge
    },
    '/button': {
      name: 'button',
      component: button
    },
    '/overlay': {
      name: 'overlay',
      component: overlay
    },
    '/circular': {
      name: 'circular',
      component: circular
    },
    '/toast': {
      name: 'toast',
      component: toast
    },
    '/headerBar': {
      name: 'headerBar',
      component: headerBar
    },
    '/grid': {
      name: 'grid',
      component: grid
    },
    '/contentBlock': {
      name: 'contentBlock',
      component: contentBlock
    },
    '/listView': {
      name: 'listView',
      component: listView
    },
    '/card': {
      name: 'card',
      component: card
    }
  })
}
