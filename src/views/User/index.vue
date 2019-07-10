<template>
  <div class="user">
    <div class="loading" @click="goLoading()">
      <span class="headImg">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132439836,751153610&fm=26&gp=0.jpg"
          alt
        />
      </span>

      <div class="clickLoad" v-if="getUser.username">
        {{getUser.username}}
        <br />
        <span>用户已登陆</span>
      </div>
      <div class="clickLoad" v-else>
        点击登陆
        <br />
        <span>登陆后红包天天领</span>
      </div>
      <i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
    </div>
    <div class="banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img src="@/img/adv1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/img/adv2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/img/adv3.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/img/adv4.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="user-list">
      <a href="javascript:;" class="index_info">
        <div>
          <i class="iconfont icon-weizhi red"></i>我的地址
          <i class="right iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
      </a>
    </div>
    <div class="user-list">
      <a href="javascript:;" class="index_info">
        <div>
          <i class="iconfont icon-beibao pink"></i>金币商城
          <i class="right iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
      </a>
      <a href="javascript:;" class="index_info">
        <div>
          <i class="iconfont icon-liwu green"></i>分享20元现金
          <i class="right iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
      </a>
    </div>
    <div class="user-list">
      <a href="javascript:;" class="index_info">
        <div>
          <i class="iconfont icon-erji orange"></i>我的客服
          <i class="right iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
      </a>
      <a href="javascript:;" class="index_info">
        <div>
          <i class="iconfont icon-guize blue"></i>规则中心
          <i class="right iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
      </a>
    </div>
    <div class="exit" v-if="getUser.username">
      <mt-button type="danger" @click="exitLoading">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["change_Login", "change_Load", "esc"]),
    goLoading() {
      console.log(this.getUser);
      if (this.getUser.username == "") {
        this.change_Load(false);
        this.change_Login(true);
      } else {
        alert("登陆了");
      }
    },
    exitLoading() {
      if (window.confirm("确定退出吗？")) {
        this.esc();
        this.$router.push('/')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
.loading {
  padding: 0.95rem 0.2rem 0.2rem 0.2rem;
  height: 2.5rem;
  background-color: rgb(248, 43, 43);
  overflow: hidden;
  i {
    line-height: 2rem;
    float: right;
    font-size: 0.6rem;
  }
  .clickLoad {
    margin-top: 10px;
    float: left;
    margin-left: 20px;
    font-size: 0.6rem;
    font-weight: bold;
    span {
      font-weight: normal;
      font-size: 0.35rem;
      color: #fff;
    }
  }
}
.banner {
  height: 3rem;
  background-color: #fff;

  .mint-swipe-items-wrap {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.headImg {
  margin-top: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #fff;
  display: block;
  float: left;
  overflow: hidden;
}
.headImg img {
  width: 100%;
  display: block;
  height: 100%;
}
.mint-swipe {
  width: 100%;
}
.user-list {
  margin-top: 2.666667vw;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 0.42rem;
  min-height: 0.9rem;
  line-height: 1.2rem;
  background: #fff;
  padding-left: 5px;
  a div {
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }
  .iconfont {
    width: 0.6rem;
    height: 0.6rem;
    font-size: 0.42rem;
  }
  .right {
    float: right;
    padding-right: 10px;
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .orange {
    color: orangered;
  }
  .pink {
    color: pink;
  }
  .green {
    color: rgba(132, 235, 15, 0.467);
  }
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     top: 3px;
  //     z-index: 3;
  //     border-bottom: 3px solid #e8e8e8;
  //   }
}
.exit {
  margin-top: 2.666667vw;
  button {
    width: 100%;
  }
  text-align: center;
  font-weight: bold;
}
</style>
