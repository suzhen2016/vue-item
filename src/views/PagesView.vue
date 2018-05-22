<template>
  <div class="pages-view">
    <!-- <header-bar @showTalion="open" 监听的事件  在本模块内执行的方法></header-bar> -->
    <header-bar v-on:showTalion="open"></header-bar>
    <router-view></router-view>
    <!-- 抽像路由要显示的视图位置 -->
    <talion-view v-show="talion" @closeTalion="closeTalions"></talion-view>
    <!--  @closeTalion="close" 链接子组件想要执行父组件的方法，@子组件广播的事件名称字段 -->
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import TalionView from '../views/TalionView'

export default {
  name: 'pages-view',
  components: { HeaderBar, TalionView },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    open: function (e) {
      this.talion = 'open'
      console.log(e)
    },
    close: function (data) {
      this.talion = ''
      console.log(data)
    },
    closeTalions: function (e) {
      console.log(e)
      this.talion = ''
    }
  }
}
</script>

<style scoped>

</style>
