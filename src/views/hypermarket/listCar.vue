<template>
  <div class="markCar">
    <mt-popup v-model="mkShow" position="center" class="car" :closeOnClickModal="false">
      <div class="mark">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>商品</th>
              <th>总价</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in items" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.price*item.num}}(单品:￥{{item.price}})</td>
              <td>
                <button @click="subClick(item.id)">-</button>
                &nbsp;&nbsp;{{item.num}}&nbsp;&nbsp;
                <button
                  @click="addClick(item.id)"
                >+</button>
              </td>
              <td>
                <mt-button size="small" type="danger" @click="del(item.id)">删除</mt-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="insert-Car">
        <div class="insert-Car-left" @click="goBack">返回</div>
        <div class="insert-Car-right">购买</div>
      </div>
    </mt-popup>
  </div>
</template>


<script>
import { Local } from "#/js/cookie.js";
import { mapGetters } from "vuex";
export default {
  name: "markCar",
  props: {
    mkShow: Boolean,
    required: false
  },
  data() {
    return {
      Visible: true,
      items: {}
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  created() {
    this.items = Object.assign({}, Local.get(this.getUser.username));
  },
  methods: {
    del(id) {
      if (window.confirm("确定将此物品移除购物车吗？")) {
        Local.change(this.getUser.username, id);
        this.items = Object.assign({}, Local.get(this.getUser.username));
      }
    },
    goBack() {
      this.$emit("closeMark");
    },
    subClick(id) {
      Local.subnum(this.getUser.username, id);
      this.items = Object.assign({}, Local.get(this.getUser.username));
    },
    addClick(id) {
      Local.addnum(this.getUser.username, id);
      this.items = Object.assign({}, Local.get(this.getUser.username));
    }
  }
};
</script>


<style lang="scss" scoped>
.mark {
  margin-top: 1rem;
}
.markCar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 992;
  width: 100%;
  height: 100%;
}
.car {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-radius: 40px 0 40px 0/30px 0 30px 0;
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

//table
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
.table th,
.table td {
  width: 25%;
  padding: 0.3rem;
  vertical-align: center;
  text-align: center;
  border-top: 1px solid #dee2e6;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}
.table .table {
  background-color: #fff;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
