<template>
  <div class="movie-view has-header">
    <!-- <types></types> -->
    <!-- <list-item></list-item> -->
    {{addressMovies}}
    <download-app class="download-wei"></download-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import DownloadApp from '../components/DownloadApp'

export default {
  name: 'first-view',
  components: { DownloadApp },
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      addressMovies: state => state.first.list
    })
  },
  methods: {
    // Dispatching getMovie
    getAddress: function () {
      this.$store.dispatch('getAddress')
    }
  },
  created () {
    // Getting movies data on created
    this.getAddress()
  }
}
</script>

<style scoped>
  .download-wei {
    position: fixed;
    bottom: 3rem;
  }
</style>
