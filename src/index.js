/*eslint-disable*/
import content from './content'
import overlay from './overlay'
import icon from './icon/icon'
import badge from './badge'
import circular from './circular'

// button
import buttonArea from './button/buttonArea'
import buttonRow from './button/buttonRow'
import button from './button/button'

// bars
import action from './bars/action'
import headerBar from './bars/headerBar'

// tips
import toast from './toast/toast'

// listview
import list from './list/list'
import item from './list/item'
import itemCell from './list/itemCell'
import itemMedia from './list/itemMedia'
import itemContent from './list/itemContent'
import itemTitleRow from './list/itemTitleRow'
import itemTitle from './list/itemTitle'
import itemTitleAfter from './list/itemTitleAfter'
import itemSubTitle from './list/itemSubTitle'
import itemText from './list/itemText'
import itemDivider from './list/itemDivider'

// content block
import contentBlock from './contentBlock'
import contentTitle from './contentTitle'

// grid
import gridRow from './grid/gridRow'
import gridCol from './grid/gridCol'

var components = {
  content,
  overlay,
  icon,
  badge,
  circular,
  'button-area': buttonArea,
  'button-row': buttonRow,
  button,
  'header-bar': headerBar,
  toast,
  action,
  list,
  item,
  'item-cell': itemCell,
  'item-media': itemMedia,
  'item-content': itemContent,
  'item-title-row': itemTitleRow,
  'item-title': itemTitle,
  'item-title-after': itemTitleAfter,
  'item-sub-title': itemSubTitle,
  'item-text': itemText,
  'item-divider': itemDivider,
  'content-block': contentBlock,
  'content-title': contentTitle,
  'grid-row': gridRow,
  'grid-col': gridCol,
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
