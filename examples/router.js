import home from './views/home'

// base
import icon from './views/icon'
import badge from './views/badge'
import button from './views/button'
import overlay from './views/overlay'
import circular from './views/circular'
import toast from './views/toast'
import refreshControl from './views/refreshControl'
import infiniteScroll from './views/infiniteScroll'
// css
import headerBar from './views/headerBar'
import tabBar from './views/tabbar'
import grid from './views/grid'
import contentBlock from './views/contentBlock'
import listView from './views/listView'
import card from './views/card'

// forms
import inputs from './views/inputs'
import _switch from './views/switch'
import range from './views/range'
import check from './views/check'
import select from './views/select'
import dateSelect from './views/dateSelect'

// modal
import modal from './views/modal'
import popup from './views/popup'
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
    },
    '/refreshControl': {
      name: 'refreshControl',
      component: refreshControl
    },
    '/tabBar': {
      name: 'tabBar',
      component: tabBar
    },
    '/infiniteScroll': {
      name: 'infiniteScroll',
      component: infiniteScroll
    },
    '/inputs': {
      name: 'inputs',
      component: inputs
    },
    '/switch': {
      name: '_switch',
      component: _switch
    },
    '/range': {
      name: 'range',
      component: range
    },
    '/check': {
      name: 'check',
      component: check
    },
    '/select': {
      name: 'select',
      component: select
    },
    '/dateSelect': {
      name: 'dateSelect',
      component: dateSelect
    },
    '/modal': {
      name: 'modal',
      component: modal
    },
    '/popup': {
      name: 'popup',
      component: popup
    }
  })
}
