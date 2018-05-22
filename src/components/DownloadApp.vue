<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/app-logo.png" alt="下载苏氏之道">
      <div class="info-content">
        <strong>苏氏之道</strong>
        <div>我若成佛，天下无魔，我若成魔，佛奈我何</div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
  export default {
    name: 'download-app',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.download-app {
  padding: 0 0 2rem 0;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.5rem;
}

.info {
  margin: 0 auto 1.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1.4rem;
  display: inline-block;
  color: #111;
}

img {
  float: left;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
}

.info-content {
  overflow: hidden;
}

strong {
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 2.8rem;
}

.download-app a:last-child {
  display: block;
  color: #42bd56;
  text-decoration: none;
}
</style>
