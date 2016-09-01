/*eslint-disable*/
import content from './content'
import overlay from './overlay'
import icon from './icon/icon'
import iconButton from './icon/iconButton'
import badge from './badge'
import circular from './circular'
import refreshControl from './refreshControl'
import infiniteScroll from './infiniteScroll'

// button
import buttonArea from './button/buttonArea'
import buttonRow from './button/buttonRow'
import button from './button/button'

// bars
import headerBar from './bars/headerBar'
import tabBar from './bars/tabBar'
import tabBarItem from './bars/tabBarItem'
// tips
import toast from './toast'

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


// card
import card from './card/card'
import cardHeader from './card/cardHeader'
import cardFooter from './card/cardFooter'
import cardContent from './card/cardContent'
import cardTitle from './card/cardTitle'
import cardTools from './card/cardTools'
import cardImage from './card/cardImage'

// content block
import contentBlock from './contentBlock'
import contentTitle from './contentTitle'

// grid
import gridRow from './grid/gridRow'
import gridCol from './grid/gridCol'

// forms
import formList from './forms/formList'
import itemForm from './forms/itemForm'
import textField from './forms/textField'
import _switch from './forms/switch'
import range from './forms/range'
import checkbox from './forms/checkbox'
import radio from './forms/radio'
import selectField from './forms/selectField'
import dateSelect from './forms/dateSelect'

// modal
import modal from './modal/modal'
import alert from './modal/alert'
import confirm from './modal/confirm'
import prompt from './modal/prompt'

import popup from './popup/popup'
import actionSheet from './actionSheet/actionSheet'
var components = {
  content,
  overlay,
  icon,
  'icon-button': iconButton,
  badge,
  circular,
  'refresh-control': refreshControl,
  'infinite-scroll': infiniteScroll,
  'button-area': buttonArea,
  'button-row': buttonRow,
  button,
  'header-bar': headerBar,
  'tab-bar': tabBar,
  'tab-bar-item': tabBarItem,
  toast,
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
  card,
  'card-header': cardHeader,
  'card-footer': cardFooter,
  'card-content': cardContent,
  'card-title': cardTitle,
  'card-tools': cardTools,
  'card-image': cardImage,
  'form-list': formList,
  'item-form': itemForm,
  'text-field': textField,
  'switch': _switch,
  range,
  checkbox,
  radio,
  'select-field': selectField,
  'date-select': dateSelect,
  modal,
  alert,
  confirm,
  prompt,
  popup,
  'action-sheet': actionSheet
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
