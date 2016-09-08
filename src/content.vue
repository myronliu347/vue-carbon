<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "./utils/normalize.css";
*,
*::before,
*::after{
  box-sizing: border-box;
}

html{
  line-height: 1.6;
  font-size: 62.5%;
}

body{
  font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  background-color: #EFF0F5;
  width: 100%;
  user-select: none;
  -webkit-user-select: none;
  font-size: 14px;
  line-height: 1.5;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  color: #7e848c;
}

body,html{
  overflow-x:hidden;
  overflow-y: auto;
  height: 100%;
}

a{
  text-decoration: none;
  color: #FF5252;
  user-select: none;
  -webkit-user-select: none;
}
.page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  justify-content: center;
  align-items: flex-start;
}
.page-content{
  width: 100%;
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
</style>
