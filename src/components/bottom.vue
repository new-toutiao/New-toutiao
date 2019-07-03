<template>
  <div id="footer">
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
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBars: [
        {
          icon: "icon-zhuye",
          title: "首页"
        },
        {
          icon: "icon-star",
          title: "收藏"
        },
        {
          icon: "icon-guanzhu",
          title: "关注"
        },
        {
          icon: "icon-Icon_wode",
          title: "我的"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    handleToggle(index) {
      this.activeIndex = index;
      this.$emit("handle", index);
    }
  }
};
</script>

<style lang="less" scoped>
#footer {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  background: #fff;
}

#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  
  justify-content: space-between;
}
#footer > ul > li {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 0.4rem;
}
#footer > ul > li .iconfont{
    font-size: .7rem;
    padding-bottom: .1rem;
}
#footer > ul > .active {
  color: #c33;
}
</style>
