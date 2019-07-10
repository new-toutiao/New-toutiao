<template>
  <div class="shopping-market" v-if="getUser.username" @mousewheel.prevent>
    <!-- @touchmove.prevent -->
    <mt-header title="头条商城">
      <span to="/" slot="right" title="购物车" @click="openCar">
        <mt-button class="iconfont icon-qicheqianlian-1-copy"></mt-button>
      </span>
    </mt-header>
    <!-- 
        :src="item.sku_info[0].ali_image" 
    -->
    <div class="phone-banner">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>
          <img
            src="//img.alicdn.com/imgextra/i3/1114511827/O1CN0105AVGZ1PMo9YSNSja_!!1114511827.jpg_580x580Q90s50.jpg_.webp"
            data-src="https://img.alicdn.com/imgextra/i3/1114511827/O1CN0105AVGZ1PMo9YSNSja_!!1114511827.jpg"
            alt="荣耀20定制礼盒"
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="//img.alicdn.com/imgextra/i2/901409638/O1CN01tDBU0L2L4FnDZQOqo_!!901409638.jpg_580x580Q90s50.jpg_.webp"
            data-src="https://img.alicdn.com/imgextra/i2/901409638/O1CN01tDBU0L2L4FnDZQOqo_!!901409638.jpg"
            alt="OPPO reno"
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="//img.alicdn.com/imgextra/i3/1714128138/O1CN01Ypdu5B29zFipkF4LI_!!1714128138.jpg_580x580Q90s50.jpg_.webp"
            data-src="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01Ypdu5B29zFipkF4LI_!!1714128138.jpg"
            alt="小米CC 全新系列手机"
            data-spm-anchor-id="tmphone.228206/N.2114139198.i1"
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="//img.alicdn.com/imgextra/i2/1714128138/O1CN01IpZLhM29zFh6vGxFj_!!1714128138.jpg_580x580Q90s50.jpg_.webp"
            data-src="https://img.alicdn.com/imgextra/i2/1714128138/O1CN01IpZLhM29zFh6vGxFj_!!1714128138.jpg"
            alt="小米9周年"
          />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="JRTT_mklist">
      <ul>
        <li to="/" v-for="(item,index) in marklist" :key="index" @click="openListShow(item)">
          <img :src="item.sku_info[0].ali_image" alt />
          <div class="content">
            <h4>{{item.name}}</h4>
            <p>{{item.shop_info.highlights}}</p>
            <span class="price">￥{{item.price}}</span>
          </div>
        </li>
      </ul>
    </div>
    <itemMsg v-if="listcar" :item="items" @closeListShow="closeList" />
    <ListCar v-if="markCarShow" :mkShow="markCarShow" @closeMark="closeCar" />
  </div>
  <div class="shopping-market bg-wap" v-else>
    <div class="login-logo">
      <h1>请先登录</h1>
      <mt-button size="normal" type="primary" @click="openLoading">点击登陆</mt-button>
    </div>
  </div>
</template>
<script>
import { getMarcketLists } from "api/market";
import itemMsg from "./itemMsg.vue";
import ListCar from "./listCar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "hypermarket",
  async created() {
    let data = await getMarcketLists();
    console.log(data.data.list);
    this.marklist = data.data.list;
    this.items = data.data.list[0];
  },
  data() {
    return {
      marklist: [],
      listcar: false,
      items: "",
      markCarShow: false
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  watch: {
    // markCarShow: function() {
    //   if (this.markCarShow == true) {
    //     document.addEventListener("touchmove", function(e) {
    //       e.preventDefault();
    //     });
    //   } else {
    //     document.removeEventListener("touchmove");
    //   }
    // }
  },
  methods: {
    ...mapActions(["change_Login", "change_Load", "esc"]),
    closeList(car) {
      this.listcar = false;
      if (car == true) {
        this.markCarShow = true;
      }
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", this.touchStart, {
        passive: false
      });
    },
    openListShow(item) {
      this.items = item;
      this.listcar = true;
      document.body.classList.add("overflow-hidden");
      document.addEventListener("touchmove", this.touchStart, {
        passive: false
      });
    },
    openLoading() {
      if (this.getUser.username == "") {
        this.change_Load(false);
        this.change_Login(true);
      }
    },
    openCar() {
      this.markCarShow = true;
      document.body.classList.add("overflow-hidden");
      document.addEventListener("touchmove", this.touchStart, {
        passive: false
      });
    },
    touchStart() {
      event.preventDefault(); //通知 Web 浏览器不要执行与事件关联的默认动作
    },
    closeCar() {
      this.markCarShow = false;
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("touchmove", this.touchStart, {
        passive: false
      });
    }
  },
  components: {
    itemMsg,
    ListCar
  }
};
</script>

<style <style lang="scss" scoped>
.mint-header {
  z-index: 991;
  position: fixed;
  width: 100%;
}
.shopping-market {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding-bottom: 1rem;
  // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-color: #fff;
  background-image: linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;

  .icon-qicheqianlian-1-copy {
    font-size: 0.8rem;
  }
  .phone-banner {
    top: 40px;
    position: relative;
    height: 360px;
    padding-top: 0;
    padding-bottom: 42px;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0 0px 30px 30px;
    }
  }
  .JRTT_mklist {
    position: relative;
    height: 100%;
    padding: 5px;
    ul {
      display: flex;
      align-content: center;
      justify-content: space-between;
      flex-wrap: wrap;

      width: 100%;
      li {
        width: calc(50% - 0.2rem);
        flex-shrink: 0;
        position: relative;
        min-height: 300px;
        img {
          border: 1px solid #f0f0f0;
          position: relative;
          left: 0;
          top: 0;
          width: 100%;
          border-radius: 0.2rem;
        }
        &:nth-of-type(odd) {
          margin-right: 0.2rem;
        }
        &:nth-of-type(2n) {
          margin-left: 0.2rem;
        }
      }
    }
  }
  .content {
    padding: 0.4rem 0.6rem 0.9rem;
    margin: 0 auto;
    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      font-size: 0.4rem;
      color: #333;
    }
    p {
      margin-top: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.3rem;
      line-height: 1.2;
      color: #7f7f7f;
      min-height: 0.6rem;
    }
    .price {
      color: #d44d44;
      display: inline-block;
      white-space: nowrap;
      font-weight: 700;
    }
  }
}
.login-logo {
  margin: 0 auto;
  width: 60%;
  height: 20%;
  position: relative;
  top: 75%;
  text-align: center;
  h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #ff495f;
  }
  img {
    width: 100%;
  }
}
.bg-wap {
  width: 100%;
  height: 100%;
  background: url(//s1.pstatp.com/growth/mobile_landingpage/images/bg-wap.9710384a.png);
  background-position: 50%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  position: fixed;
}
</style>
