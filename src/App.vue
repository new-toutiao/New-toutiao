<template>
  <div id="app">
    <div v-if="$route.meta.car_info">
      <keep-alive>
        <Header></Header>
      </keep-alive>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <keep-alive>
        <Title v-if="xianshi" />
      </keep-alive>
      <keep-alive>
        <TableList></TableList>
      </keep-alive>
      <keep-alive>
        <Footer></Footer>
      </keep-alive>
    </div>
    <div v-else>
      <Login :class="{'login-active': getLogin}" @close="closeLogin()"></Login>
      <keep-alive>
        <router-view v-cloak v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-cloak v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>
      <TabBar v-if="$route.name !== 'search'" />
    </div>
  </div>
</template>

<script>
import Header from "./views/Car/commot/header.vue";
import Title from "./views/Car/table1/table1.vue";
import TableList from "./views/Car/tableList/index.vue";
import Footer from "./views/Car/commot/footer.vue";
import TabBar from "./components/bottom.vue";
import { mapGetters, mapActions } from "vuex";
import Login from "./components/login.vue";
export default {
  name: "app",
  components: {
    Title,
    TableList,
    Footer,
    Header,
    TabBar,
    Login
  },
  data() {
    return {
      xianshi: true
    };
  },
  created() {
    this.$observer.$on("xianshi", msg => {
      this.xianshi = msg;
    });
    this.$observer.$on("cancel", data => {
      this.xianshi = data;
    });
    this.$observer.$on("handlCar", msgCar => {
      this.xianshi = msgCar;
    });
    this.$observer.$on("carNav", msgcarNav => {
      this.xianshi = msgcarNav;
    });
    this.$observer.$on("tableList", msgtable => {
      this.xianshi = msgtable.xianshi;
    });
    // export default {
    //   name: "app",
    //   components: {

    //   },
  },
  computed: {
    ...mapGetters(["getLogin"])
  },
  methods: {
    ...mapActions(["change_Login"]),
    closeLogin() {
      this.change_Login(false);
    }
  },
  mounted() {
    // console.log(this.$route);
  }
};
</script>

<style lang="less">
body,
html {
  height: 100%;
}
#app {
  height: 100%;
  [v-cloak] {
    display: none;
  }
}
#app {
  height: 100%;
  .login-active {
    opacity: 1;
    top: 0;
  }
}
</style>
