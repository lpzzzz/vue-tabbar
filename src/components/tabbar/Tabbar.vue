<template>
  <div id="tabbar">
    <slot> </slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tabbar {
    /*文字水平分布*/
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: #f7f7f7;
    /*设置阴影 box-shadow: x轴偏移（正向右偏移） y轴偏移（正值向下偏移） 阴影高度 颜色值 */
    box-shadow: 0 -3px 5px rgba(100, 100, 100, .1);
  }
</style>
