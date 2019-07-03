<template>
  <div id="app">
    <keep-alive>
      <router-view v-cloak></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
[v-cloak] {
  display: none;
}#app{
        height: 100%;
    }
</style>
