import PopupManager from './popup-manager'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    }
  },
  attached () {
    if (this.show && this.overlay) {
      PopupManager.open(this)
    }
  },
  detached () {
    PopupManager.close(this)
  },
  watch: {
    show (val) {
      if (val && this.overlay) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
