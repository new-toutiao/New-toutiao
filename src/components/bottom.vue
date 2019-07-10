<template>
  <mt-tabbar v-model="selected" id="footer">
    <mt-tab-item id="首页" >
      <i slot="icon"  class="iconfont icon-zhuye"/>
      首页
    </mt-tab-item>
    <mt-tab-item id="周边">
       <i slot="icon"  class="iconfont icon-shangcheng"/>
      周边
    </mt-tab-item>
    <mt-tab-item id="看车">
       <i slot="icon"  class="iconfont icon-qiche1"/>
      看车
    </mt-tab-item>
    <mt-tab-item id="我的">
      <i slot="icon"  class="iconfont icon-Icon_wode" />
        {{getUser.username?'我的':'未登录'}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TabBar",
  data() {
    return {
      selected:"首页",
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  watch:{
    selected:function(){
      console.log(this.selected)
      switch(this.selected){
        case "首页":this.$router.push('/home/all?type=__all__');break;
        case "我的":this.$router.push('/my');break;
        case "周边":this.$router.push('/hypermarket');break;
      }
    },
    
  }
};
</script>

<style lang="less" scoped>
#footer {
  z-index: 996;
  width: 100%;
  height: 1.4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  background: #fff;
}


#footer .iconfont {
  font-size: 0.5rem;
  padding-bottom: 0.1rem;
}

</style>
