<template>
  <div id="app">
    <Login :class="{'login-active': getLogin}" @close="closeLogin()"></Login>
    <keep-alive>
      <router-view v-cloak v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-cloak v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>
    <TabBar v-if="$route.name !== 'search'" />
  </div>
</template>

<script>
import TabBar from "./components/bottom.vue";
import { mapGetters, mapActions } from "vuex";
import Login from "./components/login.vue";
export default {
  name: "app",
  components: {
    TabBar,
    Login
  },
  computed: {
    ...mapGetters(["getLogin"])
  },
  methods: {
    ...mapActions(["change_Login"]),
    closeLogin() {
      this.change_Login(false);
    }
  }
};
</script>

<style lang="less">
[v-cloak] {
  display: none;
}
#app {
  height: 100%;
  .login-active {
    opacity: 1;
    top: 0;
  }
}
</style>
