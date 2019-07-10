<template>
  <div class="login-wrapper">
    <a class="logo-wrap" href="./">
      <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" alt />
    </a>
    <div class="login-wrap">
      <div class="form-main">
        <div id="login-switch-form" class="login-switch-title active">头条登录/注册</div>
      </div>
      <div class="form-body" onsubmit="return false">
        <form action>
          <input
            v-model="username"
            placeholder="账号"
            autocomplete="on"
            type="text"
            id="user-mobile"
            class="id-input"
          />
          <span :class="{'animate': username_msg}">{{username_msg}}</span>
          <input
            placeholder="请输入6位以上密码"
            autocomplete="off"
            type="text"
            id="pass-code"
            minlength="6"
            class="pass-input"
            v-model="password"
          />
          <button class="login" @click="login">进入头条</button>
          <button class="login" style="background:rgb(0, 255, 97)" @click="$emit('close')">返回</button>
        </form>
      </div>
    </div>
    <div style="font-size:12px;color:gray;" id="more-info">
      <span class="terms">
        登录/注册即表示你同意
        <a href="https://www.toutiao.com/user_agreement/" target="_blank">用户协议</a> 和
        <a href="https://www.toutiao.com/privacy_protection/" target="_blank">隐私条款</a>
        <a style="margin-left: 40px;" href="#" target="_blank">忘记密码</a>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      username_msg: "",
      password: "",
      password_msg: ""
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["addUser"]),
    async login() {
      if (!this.username) {
        this.username_msg = "请输入用户名/密码";
      } else {
        this.username_msg = "";
      }
      if (this.username_msg) return;

      if (!this.password) {
        this.password_msg = "请输入用户名/密码";
      } else {
        this.password_msg = "";
      }
      if (this.password_msg) return;

      this.addUser({ username: this.username, password: this.password });
      this.$emit("close");
      //   this.$showLoading();
      //   try {
      //     await this.$store.dispatch("login", {
      //       username: this.username,
      //       password: this.password
      //     });
      //   } catch (e) {}
      //   this.$hideLoading();
      //   this.$set(this.$store.state.user.footerBarList, 3, {
      //     title: "我的",
      //     icon: "account1",
      //     path: "/account"
      //   });
      // let avatar = require('assets/images/avatar.png')
      // this.Cookie.set('username', this.username)
      // this.Cookie.set('avatar', avatar)
      // this.$store.state.app.user.name = this.username
      // this.$store.state.app.user.avatar = avatar
      // this.$emit('close')
    }
  }
};
</script>
<style lang="less" scoped>
.login-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100%;
  z-index: 1000;
  opacity: 0;
  background-color: #fff;
  border-top-right-radius: 0.05rem;
  border-top-left-radius: 0.05rem;
  text-align: center;
  transition: top 0.2s ease-out;
  .logo-wrap {
    display: inline-block;
    position: absolute;
    top: 16px;
    left: 16px;
    width: 110px;
    height: 27px;
    img {
      width: 110px;
      height: 27px;
    }
  }
  .login-wrap {
    position: relative;
    margin: 0 auto;
    width: 350px;
    border-radius: 6px;
    top: 80px;
    .form-main {
      padding: 0 10px;
    }
    .login-switch-title {
      height: 54px;
      line-height: 64px;
      font-size: 16px;
      border-bottom: #d9d9d9 1px solid;
    }
    .form-body {
      padding: 20px 0;
      position: relative;
      input {
        position: relative;
        width: 100%;
        margin-bottom: 16px;
        height: 46px;
        border-bottom: solid 1px #e8e8e8;
      }
    }
    .id-input,
    .pass-input {
      display: block;
      font-size: 16px;
      line-height: 24px;
      height: 80%;
      padding-left: 20px;
      border: none;
      border-radius: 4px;
      outline: none;
    }
  }
  .close {
    position: absolute;
    right: 0rem;
    top: 0rem;
    font-size: 0.2rem;
    width: 0.4rem;
    height: 0.4rem;
    padding: 0.1rem;
    color: #555;
  }
  .input {
    width: 80%;
    height: 0.4rem;
    margin: 0 auto;
    margin-bottom: 0.3rem;
    position: relative;
    span {
      position: absolute;
      left: 0.15rem;
      top: 0.45rem;
      font-size: 0.1rem;

      opacity: 0;
    }
    .animate {
      opacity: 1;
      animation: swing 0.5s linear;
    }
    @keyframes swing {
      10% {
        transform: translateX(-0.06rem);
      }
      // 20% {transform: translateX(0.1rem);}
      30% {
        transform: translateX(0.06rem);
      }
      // 40% {transform: translateX(0.08rem);}
      50% {
        transform: translateX(-0.06rem);
      }
      // 60% {transform: translateX(0.06rem);}
      70% {
        transform: translateX(0.06rem);
      }
      80% {
        transform: translateX(-0.04rem);
      }
      90% {
        transform: translateX(0.04rem);
      }
      // 95% {transform: translateX(0.02rem);}
      100% {
        transform: translateX(0rem);
      }
    }
  }
  input {
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    text-indent: 0.15rem;
    outline: none;
    font-size: 0.14rem;
    color: #333;
  }
  .login {
    position: relative;
    border-radius: 5px;
    font-size: 18px;
    height: 46px;
    margin-top: 12px;
    background-color: #f85959;
    width: 100%;
    border: none;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    color: #fff;
    cursor: pointer;
    transition: box-shadow 0.5s;
  }
  .login:hover {
    box-shadow: 0 0 1px 1px red;
  }
  .terms {
    position: absolute;
    top: 80%;
    left: 0;
    color: gray;
    text-align: center;
    display: block;
    width: 100%;
  }
}
.animate {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  color: red;
}
</style>