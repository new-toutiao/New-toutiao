<template>
  <div id="app">
    <keep-alive>
      <router-view v-cloak v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-cloak v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "./components/bottom.vue";
export default {
  name: "app",
  components:{
    TabBar
  }
};
</script>

<style lang="less">
[v-cloak] {
  display: none;
}#app{
        height: 100%;
    }
</style>
