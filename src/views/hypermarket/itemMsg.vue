<template>
  <div>
    <div class="shopping-car"></div>
    <div class="car-list">
      <i class="esc-button iconfont icon-Delete" @click="closeListShow()"></i>
      <div>
        <img :src="item.sku_info[0].ali_image" alt />
      </div>
      <div class="car-info">
        <em class="price">￥{{item.price}}</em>
        <span class="cop-right">
          <i class="iconfont icon-qian"></i>
          <br />
          <span>降价提醒</span>
        </span>
        <div>
          <i class="mod_tag mod_tag_big">
            <img
              src="//img13.360buyimg.com/jdphoto/s48x28_jfs/t1/45124/16/1339/1092/5cf0a1ecE146f0776/df59d583faa7cfb9.png"
            />
          </i>
          <h3>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.shop_info.highlights}}</h3>
        </div>
        <mt-popup v-model="popupVisible" position="center">
          <div>
            <mt-radio title="选取版本" v-model="value" :options="options"></mt-radio>
          </div>
        </mt-popup>
        <div class="check-Action" @click="niubi(item.sku_info)">
          <div class="item-box-column box-line specs">
            <h6>已选版本</h6>
            <div class="item-box">
              <!---->
              <p>
                <span class="attr-name">颜色：</span>
                <span class="attr-value-color">{{item.sku_info[value-1].spec_json[0].show_name}}</span>
              </p>
              <p>
                <span class="attr-name">版本：</span>
                <span
                  class="attr-value"
                >{{item.sku_info[0].spec_json[1]?item.sku_info[0].spec_json[1].item_value:''}}</span>
              </p>
              <!---->
              <p>
                <span class="attr-name">数量：</span>
                <span class="attr-value">1</span>
              </p>
            </div>
          </div>
          <i class="right icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing iconfont"></i>
        </div>
      </div>
      <div class="insert-Car">
        <div class="insert-Car-left" @click="openCar">查看购物车</div>
        <div class="insert-Car-right" @click="itemget">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Local } from "#/js/cookie.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "itemMsg",
  props: ["item"],
  data() {
    return {
      showStyle: false,
      popupVisible: false,
      value: "1",
      options: [
        // {
        //   label: "disabled option",
        //   value: "0",
        //   disabled: true
        // },
        // {
        //   label: "checked disabled",
        //   value: "1",
        //   disabled: true
        // },
        // {
        //   label: "optionA",
        //   value: "2"
        // },
        // {
        //   label: "optionB",
        //   value: "3"
        // }
      ]
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    itemget: function() {
      var color  = document.getElementsByClassName('attr-value-color')[0];
      Local.set(this.getUser.username, {
        id: this.item.id,
        name: this.item.name,
        price: this.item.price,
        color:color,
        num: 1
      });
    },
    openCar(){
      this.$emit("closeListShow",true);
    },
    closeListShow() {
      this.$emit("closeListShow",false);
    },
    niubi(item) {
      this.popupVisible = true;
      var i = "";
      this.options = [];
      for (let a = 1; a < item.length && a < 5; a++) {
        i = {
          label: item[a].spec_json[0].show_name,
          value: a.toString()
        };
        this.options.push(i);
      }
    }
  },
  watch: {
    value: function() {
      console.log(this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.shopping-car {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background-color: #000;
  filter: alpha(opacity=50);
  -moz-opacity: 0.5;
  opacity: 0.5;
}
.car-list {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #fff;
  z-index: 991;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 80%;
    display: block;
    margin: 0 auto;
    height: 20%;
  }
  .price {
    color: #e4393c;
    font-weight: 700;
    line-height: 36px;
    display: inline-block;
    font-size: 22px;
  }
  .car-info {
    padding: 5px 10px 0;
    .cop-right {
      float: right;
      text-align: center;
      height: 36px;
    }
    .icon-qian {
      padding-top: 5px;
      font-size: 0.4rem;
      width: 0.5rem;
      height: 0.5rem;
    }
    .mod_tag {
      display: inline-block;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 5px;

      img {
        display: block;
        height: 100%;
        width: 30px;
      }
    }
    h3 {
      font-weight: 700;
      line-height: 24px;
      padding-right: 0;
      display: inline;
    }
  }
  .esc-button {
    position: absolute;
    right: 5px;
    top: 5px;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.5rem;
    color: #000;
  }
  .insert-Car {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    .insert-Car-right {
      float: right;
      color: #fff;
      background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
      text-align: center;
      width: 50%;
    }
    .insert-Car-left {
      float: left;
      color: #fff;
      background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
      text-align: center;
      width: 50%;
    }
  }
  .check-Action {
    position: relative;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
    margin-bottom: 6px;
    background: #fff;
    .right {
      position: absolute;
      top: 49%;
      right: 10px;
    }
    .item-box-column {
      position: relative;
      padding: 0.8rem 1.5rem 0.6rem 0.8rem;
    }
    h6 {
      font-size: 0.4rem;
      line-height: 1.2;
      padding: 0 0 0.3rem;
      color: #999;
    }
    .item-box {
      font-size: 0.3.325rem;
      p {
        line-height: 1.8;
        color: #333;
        display: table;
      }
    }
  }
}
.mint-popup-center {
  width: 100%;
}
</style>
