<template>
  <div class="tabbar-item" @click="itemClick">
    <!--在这里使用具名插槽在使用的时候进行替换即可-->
    <div v-if="!isActive">
      <slot name="slot-icon"/>
    </div>
    <!--活跃状态下的图片插槽-->
    <div v-else>
      <slot name="slot-icon-active"/>
    </div>
    <!--需要使用一个div将其进行包裹起来，否则在使用的时候会将插槽的内容全部替换里面的属性样式都会被替换掉-->
    <!--<slot :class="{active:isActive}" name="slot-text"/>-->
    <div :style="activeStyle">
      <slot name="slot-text"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar-item",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        /*该条件成立的时候表示某个tabbar-item属于活跃状态*/
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log("itemClick被点击" + this.path);
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tabbar-item {
    /*每一项均等分*/
    flex: 1;
    text-align: center;
    vertical-align: middle;
    margin-top: 3px;
    font-size: 14px;
    margin-bottom: 2px;
  }

  /*设置图标样式*/
  .tabbar-item img {
    height: 24px;
    width: 24px;
  }

  .active {
    color: red;
  }
</style>
