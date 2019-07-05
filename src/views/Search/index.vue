<template>
  <div>
    <div class="kong"></div>
    <div class="cont">
      <div class="pic_k">
        <img src="../../static/logo.png" alt srcset />
      </div>
      <div class="kuang">
        <span>搜你想搜的</span>
        <i class="iconfont icon-fangdajing"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // imgurl:"../img/logo.png"
    };
  }
};
</script>
<style>
.kong {
  height: 53vw;
}

.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.pic_k {
  width: 2.58rem;
  height: 1.08rem;
  margin: 0 auto;
}

.cont img {
  width: 100%;
  height: 100%;
}

.kuang {
  position: relative;
  width: 94%;
  margin-left: 3%;
  height: 1.2rem;
  background-color: #f1f3f5;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  color: #9b9b9b;
  box-sizing: border-box;
  margin-top: 0.54rem;
}

.kuang span {
  font-size: 0.42rem;
  line-height: 1.2rem;
}
.kuang > i {
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  font-size: 0.4rem;
  color: #000;
}
</style>
