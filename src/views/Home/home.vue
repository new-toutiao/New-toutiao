<template>
  <div id="home">
    <div>
        <Header></Header>
      <ul class="homeNav">
       
        <li v-for="(item,index) in this.$store.state.app.newList" :key="index" class="navBarLi">
          <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class="newsContent page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
          bottomLoadingText="加载中"
          :auto-fill="false"
        >
      <router-link
        v-for="(item,index) in getList"
        :key="index"
        :to='{name:"article",params:{"id":item.tag_id,datetime:item.datetime}}'
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
      <div slot="bottom" class="mint-loadmore-bottom">
            <span
              v-show="bottomStatus == 'loading'"
              :class="{ 'is-rotate': bottomStatus === 'drop' }"
            >↑</span>
            <span v-show="bottomStatus !== 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
    </div>
  </div>
</template>

<script>
import http from "./http.js";

import Header from "../../components/header.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      page: [],
      first: window.location.search.substring(6),
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0
    };
  },
  computed: {
    ...mapGetters(["list", "downLoadMore", "routerChange"]),
    getList: function() {
      if (this.$route.query.type) {
        return this.list[this.$route.query.type];
      } else {
        return this.list[this.first];
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('scroll',this.handleScroll)
    next();
  },
  methods: {
    ...mapActions(["getNewstwo", "getNews"]),
    handleScroll(){
      this.getNewstwo({
        kind: this.$route.query.type,
        change: this.routerChange})
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    loadBottom() {
      setTimeout(() => {
        this.handleScroll();
        this.$refs.loadmore.onBottomLoaded();
      }, 100);
      
      
    }
  
  },
  
  mounted() {
     this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    this.getNews({
      kind: this.first,
      change: this.routerChange
    });
    // console.log(this.$store,this)
  },
  watch: {
    $route: function() {
      this.getNews({
        kind: this.$route.query.type,
        change: this.routerChange
      });
      this.first = window.location.search.substring(6);
    }
  },
  components: {
    Header
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
  padding-bottom: 1.4rem;
}
.homeNav {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  position: fixed;
  left: 0;
  font-size: 0;
  top: 1rem;
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
*{touch-action: default;}
.newsContent {
  height: 100%;
  width: 100%;
  padding-top:2.2rem;
  padding-bottom: 1.5rem;
  overflow-y:auto;
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
 .mint-loadmore-bottom {
      span {
        display: inline-block;
        transition: 0.2s linear;
        vertical-align: middle;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
</style>
