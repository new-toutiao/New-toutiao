<template>
  <div id="home">
    <div>
      <ul class="homeNav">
        <li v-for="(item,index) in this.$store.state.app.newList" :key="index" class="navBarLi">
          <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class="newsContent">
      <router-link
        v-for="(item,index) in page.data"
        :key="index"
        :to='{name:"list",params:{"id":item.tag_id}}'
        class="newsDetaile"
      >
        <p class="title">{{item.title}}</p>
        <div>
          <div class="imgsite">
            <img alt="加载出错" v-for="(img,index) in item.image_list" :key="index" v-lazy="img.url" />
          </div>
          <div class="bottomInfo clearfix">
            <span class="avIcon" v-show="item.label==='广告'">广告</span>
            <span class="writer">{{item.media_name}}</span> &nbsp;&nbsp;
            <span class="comment_count">评论&nbsp;{{item.comment_count}}</span>
            <span class="datetime">{{item.datetime}}</span>
          </div>
        </div>
      </router-link>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import http from "./http.js";
import TabBar from "../../components/bottom.vue";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      page: []
    };
  },
  methods: {
    ...mapActions(["getListMessage"]),
    ...mapMutations(["increament"]),
    haha() {
      http(
        "get",
        "/list/?tag=" +
          this.$route.query.type +
          "&ac=wap&count=20&format=json_raw&as=A1851D51995F47E&cp=5D19DFC4970EAE1&min_behot_time=0&_signature=NF9FFwAAaUyecAWXUyqFmjRfRQ&i="
      ).then(res => {
        this.page = res;
        console.log(this.page);
      });
    },
    getAllMsg(index) {
      return Http.getListMsg(index);
    }
  },
  mounted() {
    this.haha();
  },
  watch: {
    $route: function(newitem, olditem) {
      console.log(this.$store);
      this.getListMessage();

      this.haha();
    }
  },
  components: {
    TabBar
  },
  beforeCreate() {
    console.log(this.$store);
  }
};
</script>


<style lang="less" scoped>
.homeList {
  width: 100%;
  position: absolute;
  height: 100%;
}
#home {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  padding-top: 2.3rem;
  padding-bottom: 1rem;
}
.homeNav {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  position: fixed;
  left: 0;
  font-size: 0;
  top: 1.2rem;
  background: #f4f5f6;
  font-family: "微软雅黑";
  white-space: nowrap;
  z-index: 999;
  .navBarLi {
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    width: 1.62rem;
    font-size: 16px;
    a {
      color: #000;
    }
    .router-link-active {
      color: #f85959;
      font-size: 17px;
      font-weight: bold;
    }
  }
}

.newsContent {
  width: 100%;
  padding-bottom: 2rem;
  .newsDetaile {
    width: 94%;
    display: block;
    position: relative;
    margin: 0 auto;
    padding-bottom: 0.48rem;
    padding-top: 0.16rem;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);

    .title {
      font-size: 0.51rem;
      line-height: 0.63rem;
      color: #222;
      padding-top: 0.2rem;
      padding-bottom: 0.15rem;
    }
    .imgsite {
      display: flex;
      justify-content: space-around;
    }
    img {
      width: 30%;
      height: 2.3rem;
    }
    .bottomInfo {
      padding: 0 0.2rem;
      font-size: 10px;
      margin-top: 0.18rem;
      color: #999;
      .datetime {
        float: right;
      }
      .avIcon {
        display: inline-block;
        height: 0.4rem;
        width: 0.9rem;
        text-align: center;
        line-height: 0.4rem;
        border-radius: 4px;
        border: 1px solid #39f;
        font-size: 10px;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
