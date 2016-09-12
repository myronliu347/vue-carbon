<template>
  <div class="vc-date-picker" :style="{'z-index': zIndex}">
    <div class="vc-date-monthly">
      <div class="vc-date-previous" @click="nextMonth('pre')">
        <i class="icon icon-keyboard_arrow_left"></i>
      </div>
      <div class="vc-date-caption">
        <a class="date-year" @click="showYear"><small>{{checked.year}}</small></a>
        <a class="date-month" @click="showMonth">{{displayInfo.month}}</a>
      </div>
      <div class="vc-date-next" @click="nextMonth('next')">»</div>
    </div>
    <div class="date-box" v-if="showInfo.day">
      <div class="vc-picker-box">
        <div class="vc-week">
          <ul>
            <li v-for="weekie in library.week">{{weekie}}</li>
          </ul>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index < 7"><span>{{day.value}}</span></div>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index >= 7 && $index < 14"><span>{{day.value}}</span></div>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index >= 14 && $index < 21"><span>{{day.value}}</span></div>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index >= 21 && $index < 28"><span>{{day.value}}</span></div>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index >= 28 && $index < 35"><span>{{day.value}}</span></div>
        </div>
        <div class="vc-day-row">
          <div
          class="vc-day"
          v-for="day in dayList"
          track-by="$index"
          @click="checkDay(day)"
          :class="{'checked':day.checked,'unavailable':day.unavailable,'vc-passive-day': !(day.inMonth)}"
          v-if="$index >= 35 && $index < 42"><span>{{day.value}}</span></div>
        </div>
      </div>
    </div>
    <div class="date-box list-box" v-if="showInfo.year">
      <div class="vc-picker-box vc-date-list" id="yearList">
        <div class="vc-date-item" v-for="yearItem in library.year" track-by="$index" @click="setYear(yearItem)">{{yearItem}}</div>
      </div>
    </div>
    <div class="date-box list-box" v-if="showInfo.month">
      <div class="vc-picker-box vc-date-list">
        <div class="vc-date-item" v-for="monthItem in library.month" track-by="$index" @click="setMonth(monthItem)">{{monthItem}}</div>
      </div>
    </div>
    <div class="date-box list-box" v-if="showInfo.hour">
      <div class="vc-picker-box vc-date-list">
        <div class="vc-watch-box">
          <div class="vc-hour-box">
            <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
            <ul>
              <li class="vc-hour-item" v-for="hitem in hours" @click="setTime('hour', hitem, hours)"
              :class="{'active':hitem.checked}">{{hitem.value}}</li>
            </ul>
          </div>
          <div class="vc-min-box">
            <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
              <div
              class="vc-min-item"
              v-for="mitem in mins"
              @click="setTime('min',mitem, mins)"
              :class="{'active':mitem.checked}"
              >{{mitem.value}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="vc-button-box">
      <button @click="dismiss" :text="option.buttons? option.buttons.cancel : 'Cancel' " ></button>
      <button @click="picked" :text="option.buttons? option.buttons.ok : 'Ok' " ></button>
    </div>
  </div>
</template>

<script>
// week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
// month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
/*eslint-disable*/
import moment from 'moment'
import {getZIndex} from '../utils'
import button from '../button/button'
export default {
  props: {
    time: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'day'
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    option: {
      type: Object,
      default () {
        return {
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          buttons : {
            ok : '确定',
            cancel : '取消'
          }
        }
      }
    },
    limit: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    function hours() {
        let list = []
        let hour = 24
        while (hour > 0) {
          hour--
          list.push({
            checked: false,
            value: hour < 10 ?  '0' + hour : hour
          })
        }
        return list
      }
    function mins() {
      let list = []
      let min = 60
      while (min > 0) {
        min--
        list.push({
          checked: false,
          value: min < 10 ?  '0' + min : min
        })
      }
      return list
    }
    return {
      zIndex: getZIndex(),
      hours: hours(),
      mins: mins(),
      showInfo: {
        hour: false,
        day: false,
        month: false,
        year: false,
        check: false
      },
      displayInfo: {
        month: ''
      },
      library: {
        week: this.option.week,
        month: this.option.month,
        year: []
      },
      checked: {
        oldtime: '',
        currentMoment: null,
        year: '',
        month: '',
        day: '',
        hour: '00',
        min: '00'
      },
      dayList: [],
      selectedDays: []
    }
  },
  ready (){
    this.showCheck()
  },
  methods: {
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    pad (n){
      return n<10 ? '0'+ n : n
    },
    nextMonth (type) {
      let next = null
      type == 'next' ? next = moment(this.checked.currentMoment).add(1, 'M') : next = moment(this.checked.currentMoment).add(-1, 'M')
      this.showDay(next)
    },
    showDay (time) {
      if (!time) {
        this.checked.currentMoment = moment()
      } else {
        this.checked.currentMoment = moment(time, this.format)
      }
      this.showOne('day')
      this.checked.year = moment(this.checked.currentMoment).format("YYYY")
      this.checked.month = moment(this.checked.currentMoment).format("MM")
      this.checked.day = moment(this.checked.currentMoment).format("DD")
      this.displayInfo.month = this.library.month[moment(this.checked.currentMoment).month()]
      let days = []
      let currentMoment = this.checked.currentMoment
      let firstDay = moment(currentMoment).date(1).day()
      //gettting previous and next month
      let currentMonth = moment(currentMoment)
      let previousMonth = moment(currentMoment)
      let nextMonth = moment(currentMoment)
      nextMonth.add(1,'months')
      previousMonth.subtract(1,'months')
      let monthDays = moment(currentMoment).daysInMonth()
      let oldtime = this.checked.oldtime;
      for (let i = 1; i <= monthDays; ++i) {
        days.push({
          value: i,
          inMonth: true,
          unavailable: false,
          checked: false,
          moment: moment(currentMoment).date(i)
        })
        if (i == Math.ceil(moment(currentMoment).format("D")) && moment(oldtime, this.format).year() == moment(currentMoment).year() && moment(oldtime, this.format).month() == moment(currentMoment).month()) {
          days[i - 1].checked = true
        }
        this.checkBySelectDays(i, days)
      }
      if (firstDay == 0) firstDay = 7
      for (let i = 0; i < firstDay - 1; i++) {
          let passiveDay = {
            value: previousMonth.daysInMonth() - (i),
            inMonth: false,
            action : 'previous',
            moment: moment(currentMoment).date(1).subtract(i+1, 'days')
          }
          days.unshift(passiveDay);
      }
      if (this.limit.length > 0) {
        for (let li of this.limit) {
          switch (li.type) {
            case 'fromto':
              days = this.limitFromTo(li, days)
              break;
            case 'weekday':
              days = this.limitWeekDay(li, days)
              break;
          }
        }
      }
      var passiveDaysAtFinal = 42 - days.length;
      for (let i = 1; i <= passiveDaysAtFinal; i++) {
          let passiveDay = {
            value: i,
            inMonth: false,
            action : 'next',
            moment: moment(currentMoment).add(1, 'months').date(i)
          }
          days.push(passiveDay);
      }
      this.dayList = days
    },
    checkBySelectDays (d, days) {
      this.selectedDays.forEach(day => {
        if (this.checked.year === moment(day).format("YYYY") && this.checked.month === moment(day).format("MM") && d === Math.ceil(moment(day).format("D"))) {
            days[d - 1].checked = true
        }
      })
    },
    limitWeekDay (limit, days) {
      days.map((day) => {
        if (limit.available.indexOf(day.moment.format('d')) == -1) {
          day.unavailable = true
        }
      })
      return days
    },
    limitFromTo (limit, days) {
      days.map((day) => {
        if (!day.moment.isBetween(limit.from, limit.to)) {
          day.unavailable = true
        }
      })
      return days
    },
    checkDay (obj) {
      if (obj.unavailable || obj.value == '') {
        return false
      }
      if(!(obj.inMonth)){
        this.nextMonth(obj.action)
      }
      if (this.type === 'day' || this.type === 'min') {
        this.dayList.map(x => x.checked = false)
        this.checked.day = this.pad(obj.value)
        obj.checked = true
      } else {
        let day = this.pad(obj.value)
        let ctime = this.checked.year + '-' + this.checked.month + '-' + day
        if (obj.checked === true) {
          obj.checked = false
          this.selectedDays.$remove(ctime)
        } else {
          this.selectedDays.push(ctime)
          obj.checked = true
        }
      }
      switch (this.type) {
        case 'day' :
        //  this.picked()
          break;
        case 'min' :
          this.showOne('hour')
          break;
      }
    },
    showYear () {
      let year = moment(this.checked.currentMoment).year()
      this.library.year = []
      let yearTmp = []
      for (let i = year - 100; i < year + 5; ++i) {
        yearTmp.push(i)
      }
      this.library.year = yearTmp
      this.showOne('year')
      let self = this
      this.$nextTick(() => {
        let listDom = this.$el.querySelector('#yearList')
        listDom.scrollTop = (listDom.scrollHeight - 100)
        self.addYear()
      })
    },
    showOne (type) {
      switch (type) {
        case 'year':
          this.showInfo.hour = false
          this.showInfo.day = false
          this.showInfo.year = true
          this.showInfo.month = false
          break;
        case 'month':
          this.showInfo.hour = false
          this.showInfo.day = false
          this.showInfo.year = false
          this.showInfo.month = true
          break;
        case 'day':
          this.showInfo.hour = false
          this.showInfo.day = true
          this.showInfo.year = false
          this.showInfo.month = false
          break;
        case 'hour':
          this.showInfo.hour = true
          this.showInfo.day = false
          this.showInfo.year = false
          this.showInfo.month = false
          break;
        default:
          this.showInfo.day = true
          this.showInfo.year = false
          this.showInfo.month = false
          this.showInfo.hour = false
      }
    },
    showMonth () {
      this.showOne('month')
    },
    addYear() {
      let self = this
      let listDom = this.$el.querySelector('#yearList')
      let tmp = 0
      listDom.addEventListener('scroll', function(e) {
        if (listDom.scrollTop < listDom.scrollHeight - 100) {
          let len = self.library.year.length
          let lastYear = self.library.year[len - 1]
          self.library.year.push(lastYear + 1)
        }
      }, false)
    },
    setYear(year) {
      this.checked.currentMoment = moment(year + '-' + this.checked.month + '-' + this.checked.day)
      this.showDay(this.checked.currentMoment)
    },
    setMonth(month) {
      let mo = (this.library.month.indexOf(month) + 1)
      if (mo < 10) {
        mo = '0' + '' + mo
      }
      this.checked.currentMoment = moment(this.checked.year + '-' + mo + '-' + this.checked.day)
      this.showDay(this.checked.currentMoment)
    },
    showCheck() {
      if (!this.time) {
        this.showDay()
      } else {
        if (this.type === 'day' || this.type === 'min') {
          this.checked.oldtime = this.time
          this.showDay(this.time)
        } else {
          this.selectedDays = JSON.parse(this.time)
          if (this.selectedDays.length) {
            this.checked.oldtime = this.selectedDays[0]
            this.showDay(this.selectedDays[0])
          } else {
            this.showDay()
          }
        }
      }
    },
    setTime (type, obj, list) {
      for (let item of list) {
        item.checked = false
        if (item.value == obj.value) {
          item.checked = true
          this.checked[type] = item.value
        }
      }
    },
    picked () {
      if (this.type === 'day' || this.type === 'min') {
        let ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day+' '+this.checked.hour+':'+this.checked.min
        this.checked.currentMoment = moment(ctime, "YYYY-MM-DD HH:mm")
        this.time = moment(this.checked.currentMoment).format(this.format)
      } else {
        this.time = JSON.stringify(this.selectedDays)
      }
      this.$emit('date-select-sure', this.time)
    },
    dismiss () {
      this.$emit('date-select-cancel')
    }
  },
  components: {
    'button': button
  }
}
</script>
<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-date-picker {
  display: inline-block;
  background: @color;
  overflow: hidden;
  position: fixed;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  position: fixed;
  display: block;
  max-width: 400px;
  width: 90%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.vc-picker-box {
  background: #fff;
  width: 100%;
  max-width: 400px;
  height: 280px;
}
.vc-day-row{
  display: flex;
  justify-content: center;
  align-items: center;
}
.vc-day {
  width: 14.2857143%;
  text-align: center;
  cursor: pointer;
  height: 40px;
  padding: 0;
  color: #000;
  background: #fff;
  .flex-shrink(10);
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    height: 36px;
    line-height: 36px;
    display: block;
    width: 36px;
  }
  &.checked span{
    background: @red;
    color: #FFF !important;
    border-radius: 50%;
  }
}
.vc-week{
  height: 40px;
  width: 100%;
}
.vc-week ul {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 40px;
}
.vc-week ul li {
  width: 14.2%;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  background: transparent;
  color: #000;
  font-weight: bold;
}
.vc-passive-day{
  color: #bbb;
}
.unavailable {
  color: #ccc;
  cursor: not-allowed;
}
.vc-date-monthly {
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}
.vc-date-monthly > div {
  display: block;
  text-align: center;
  cursor: pointer;
}
.vc-date-previous,
.vc-date-next {
  position: relative;
  width: 20% !important;
  text-indent: -300px;
  overflow: hidden;
  height: 100px;
  color: #fff;
}
.vc-date-caption {
  width: 60%;
  box-sizing: border-box;
  font-size: 24px;
  a.date-year,
  a.date-month{
    .active-highlight();
    display: block;
    color: #FFF;
    position: relative;
  }
}

.vc-date-caption span:hover {
  color: rgba(255, 255, 255, 0.7);
}

.vc-date-next::before,
.vc-date-previous::before {
  width: 20px;
  height: 2px;
  text-align: center;
  position: absolute;
  background: #fff;
  top: 50%;
  margin-top: -7px;
  margin-left: -7px;
  left: 50%;
  line-height: 0;
  content: '';
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}
.vc-date-next::after,
.vc-date-previous::after {
  width: 20px;
  height: 2px;
  text-align: center;
  position: absolute;
  background: #fff;
  margin-top: 6px;
  margin-left: -7px;
  top: 50%;
  left: 50%;
  line-height: 0;
  content: '';
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.vc-date-previous::after {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}
.vc-date-previous::before {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.vc-date-item {
  text-align: center;
  font-size: 20px;
  padding: 10px 0;
  cursor: pointer;
}
.vc-date-item:hover {
  background: #e0e0e0;
}
.vc-date-list {
  overflow: auto;
  vertical-align: top;
  padding: 0;
}
.vc-vue-date {
  display: inline-block;
  color: #5D5D5D;
}
.vc-button-box {
  background: #fff;
  vertical-align: top;
  height: 48px;
  line-height: 48px;
  text-align: right;
  padding: 6px 8px;
  display: flex;
  justify-content: flex-end;
}
.vc-watch-box {
  height: 100%;
  overflow: hidden;
}
.vc-hour-box,
.vc-min-box {
  display: inline-block;
  width: 50%;
  text-align: center;
  height: 100%;
  overflow: auto;
  float: left;
}
.vc-hour-box ul,
.vc-min-box ul{
  list-style: none;
    margin: 0;
    padding: 0;
}
.vc-hour-item, .vc-min-item {
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
.vc-hour-box .active, .vc-min-box .active{
  background: @red;
  color: #FFF !important;
}
::-webkit-scrollbar {
    width: 2px;
}
::-webkit-scrollbar-track {
    background: #E3E3E3;
}
::-webkit-scrollbar-thumb {
    background: #C1C1C1;
    border-radius: 2px;
}

</style>
