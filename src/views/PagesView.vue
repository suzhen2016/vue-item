<template>
  <div class="pages-view">
    <!-- <header-bar @showTalion="open"></header-bar> -->
    <header-bar v-on:showTalion="open"></header-bar>
    <router-view></router-view>
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
