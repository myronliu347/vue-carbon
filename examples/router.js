import home from './views/home'

// base
import icon from './views/icon'
import badge from './views/badge'
import button from './views/button'
import overlay from './views/overlay'
import circular from './views/circular'
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
    }
  })
}
