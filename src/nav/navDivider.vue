<template>
<div class="nav-divider"></div>
</template>

<style lang="css">
.nav-divider{
  display: block;
  width: 100%;
  height: 1px;
  background-color: #edeff2;
  margin-top: 10px;
  margin-bottom: 10px;
}

html.pixel-ratio-2 .nav-divider {
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .nav-divider {
  transform: scaleY(0.33);
}
</style>
