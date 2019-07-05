<template>
  <div class="user">
    <div class="loading">
      <span class="headImg">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132439836,751153610&fm=26&gp=0.jpg"
          alt
        />
      </span>
      <div class="clickLoad">
        点击登陆
        <br />
        <span>登陆后红包天天领</span>
      </div>
       
    </div>
    <div class="banner"></div>
    <div class="user-list">
      <ul>
        <li>
          <p>扫一扫</p>
          <i>></i>
        </li>
        <li>
          <p>扫一扫</p>
          <i>></i>
        </li>
        <li>
          <p>扫一扫</p>
          <i>></i>
        </li>
      </ul>
      <ul>
        <li>
          <p>我的书架</p>
          <i>></i>
        </li>
        <li>
          <p>钱包</p>
          <i>></i>
        </li>
        <li>
          <p>关注</p>
          <i>></i>
        </li>
        <li>
          <p>通知</p>
          <i>></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  padding: 0.95rem 0.2rem 0.2rem 0.2rem;
  height: 2.4rem;
  background-color: #7777;

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
  background-color: blue;
}
.headImg {
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
  height: 100%;
}

.user-list {
  ul {
    margin-top: 0.24rem;
    background: #fff;
    li {
      position: relative;
      height: 1.56rem;
      line-height: 1.56rem;
      font-size: 0.48rem;
      margin: 0 0.45rem;
      box-sizing: border-box;
      p {
        float: left;
      }
      i {
        float: right;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 3px;
        z-index: 3;
        border-bottom: 3px solid #e8e8e8;
      }
    }
  }
}
</style>
