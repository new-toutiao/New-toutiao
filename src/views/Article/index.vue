<template>
  <div class="article">
    <div class="header">
      <div @click="comback()" class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing"></div>
    </div>
    <div class="title">
      <h1>{{pushArticle.title}}</h1>
      <div class="article_auther">
        <div class="auther_left">
          <div class="auther_head">
            <img
              src="http://b-ssl.duitang.com/uploads/item/201510/08/20151008192345_uPC5U.jpeg"
              alt
            />
          </div>
          <div>
            <p>
              {{pushArticle.detail_source}}
              <span class="vip"></span>
            </p>
            <span class="publish_time">发布时间</span>
            :{{datetime}}
          </div>
        </div>
        <div class="auther_right">{{pushArticle.comment_count}}评论</div>
      </div>
    </div>

    <div v-html="pushArticle.content" class="article_content"></div>
    <div class="recommendation-list">
       <h2>热门推荐</h2>
      <router-link v-for="(item,index) in active" :key="index" 
      :to='{name:"article",params:{"id":item.id,datetime:createTime(item.create_time)}}'
       class="active_list"
       tag="div">
        <p>{{item.title}}</p>
        <div class="active_img" >
          <img  v-for="(i_img,index) in item.image_list" :key="index"  v-if='index<3' :src="i_img.url" alt="">
        </div>
        <div class="info"><span>
          {{item.author.name}}
          </span></div>
       </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import http from "../Home/http.js";
export default {
  name: "hotarticle",
  props: ["id", "datetime"],
  data() {
    return {
      msg: {},
      timer: null,
      active: {}
    };
  },
  computed: {
    ...mapGetters(["getArticleMsg", "newsArticle"]),
    pushArticle: function() {
      if (this.newsArticle) {
    
        console.log(this.active);
        return this.newsArticle;
      }
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.getArticle({
        id: this.id,
        state: this.getArticleMsg
      });
    }, 200);
  },
  mounted() {
    
    http(
      "get",
      "/i/related/open/" +
        this.id +
        "/?parent_rid=10782173562249379545&city=深圳&province=广东&page_type=article&share_iid=&share_app_name=&wx_share_count=0&site_id=5000246&num=5&num=15&code_id=14798012085000246&code_id=14799599715000246&except_page=&test_params=%7B%7D&tt_running=0&enable_mix=1&web_id=" +
        this.id +
        "&utm_source=&utm_medium=&utm_campaign="
    ).then(res => {
      this.active = Object.assign({}, res.data["14798012085000246"]);
      console.log(this);
      clearInterval(this.timer);
      this.timer = null;
    });
  },

  beforeDestroy(){
    this.clearArticles();
  },
  beforeRouteLeave(to, from, next) {
   
    next();
  },
  methods: {
    ...mapActions(["getArticle", "changeArticleMsg", "clearArticles"]),
    comback() {
      this.$router.back();
    },
    createTime(time){
      return new Date(time*1000).toLocaleDateString().replace(/\//g,"-")
    },
  },
  watch: {}
};
</script>

<style lang="scss">
.article{
.header {
  background: #fff;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 4px;
  line-height: 50px;
  .iconfont {
    font-size: 0.6rem;
    height: 50px;
    width: 30px;
    text-align: center;
  }
  .icon-fanhuizuojiantouxiangzuoshangyibuxianxing {
    float: left;
  }
}
.title {
  padding: 0 14px;
  h1 {
    font-family: "PingFangSC-Medium";
    font-weight: 500;
    color: #222222;
    font-size: 24px;
    line-height: 34px;
  }
}
.article_auther {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  .auther_head {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: auto;
    display: inline-block;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .publish_time {
    font-weight: 700;
  }
  .auther_left {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #222;
    margin-left: 14px;
    p {
      font-weight: 700;
      margin-bottom: 2px;
    }
    .vip {
      width: 14px;
      height: 14px;
      background-size: 100% 100%;
      display: inline-block;
      margin-right: 10px;
      vertical-align: -2px;
      background-image: url(//s1.pstatp.com/growth/mobile_detail/image/v-0.tl0z9x5L.png);
    }
  }
  .auther_right {
    font-size: 14px;
    margin-right: 14px;
    line-height: 24px;
    color: #999999;
  }
}
.article_content {
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  clear: both;
  padding: 0 14px;
  padding-bottom: 24px;
  border-bottom: 2px solid #ccc;
  p,
  span {
    word-wrap: break-word;
    color: #222;
    text-align: justify;
    list-style-position: inside;
    list-style-type: square;
    font-size: 18px;
    line-height: 1.76;
  }
  .pgc-img {
    width: 100%;
    min-height: 160px;
  }
  img {
      width: 100%;
    }
  h1 {
    font-size: 18px;
    border-left-width: 3px;
    border-left: solid #ed4040;
    padding-left: 6px;
    line-height: 28px;
    margin: 24px 0;
  }
  .pgc-img-caption {
    text-align: center;
    color: #777;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 15px;
  }
  ul li {
    line-height: 1.3;
    font-size: 14px;
  }
}
.recommendation-list {
  display: flex;
  flex-wrap: wrap;
 
  h2 {
    font-size: 15px;
    padding: 14px 0 8px 0;
    line-height: 15px;
    font-weight: 600;
    position: relative;
    &::before {
      content: "";
      width: 4px;
      height: 18px;
      border-radius: 1px;
      margin-right: 10px;
      background-color: #f85959;
      display: inline-block;
      vertical-align: sub;
    }
  }
  .active_list{
     padding: 0 14px 0 14px;
    width: 100%;
    margin-bottom: 16px;
    p{
      font-size: 18px;
      line-height: 24px;
      max-height: 48px;
      overflow: hidden;
    }
    .active_img{
      display: flex;
      justify-content: space-around;
      max-height: 22vw;
      img{
        width: 32%;
        height: 100%;
      }
    }
    .info{
      font-size: 12px;
      color:#999;
      margin-top: 9px;
    }
  }
}
}

</style>
