<template>
  <!-- <div id="footer">
    <ul>
      <li
        v-for="(item,index) in tabBars"
        :key="index"
        :class="activeIndex == index?'active':''"
        @click="handleToggle(index)"
      >
        <i :class="['iconfont',item.icon]"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>-->
  <mt-tabbar v-model="selected" id="footer">
    <mt-tab-item id="首页" >
      <i slot="icon"  class="iconfont icon-zhuye"/>
      首页
    </mt-tab-item>
    <mt-tab-item id="周边">
       <i slot="icon"  class="iconfont icon-zhuye"/>
      周边
    </mt-tab-item>
    <mt-tab-item id="看车">
       <i slot="icon"  class="iconfont icon-zhuye"/>
      看车
    </mt-tab-item>
    <mt-tab-item id="我的">
      <i slot="icon"  class="iconfont icon-zhuye"/>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      selected:"首页",
    };
  },
  watch:{
    selected:function(){
      console.log(this.selected)
      switch(this.selected){
        case "首页":this.$router.push('/home/all?type=__all__');break;
        case "我的":this.$router.push('/my');break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#footer {
  z-index: 999;
  width: 100%;
  height: 1.4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  background: #fff;
}


#footer .iconfont {
  font-size: 0.7rem;
  padding-bottom: 0.1rem;
}

</style>
