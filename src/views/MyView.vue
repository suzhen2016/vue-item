<template>
  <div class="movie-view has-header">
    <!-- <types></types> -->
    <list-item></list-item>
    <download-app class="download-wei"></download-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ListItem from '../components/ListItem'
import DownloadApp from '../components/DownloadApp'

export default {
  name: 'movie-view',
  components: { ListItem, DownloadApp },
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    // Dispatching getMovie
    getMovie: function () {
      this.$store.dispatch('getMovie')
    }
  },
  created () {
    // Getting movies data on created
    this.getMovie()
  }
}
</script>

<style scoped>
  .download-wei {
    position: fixed;
    bottom: 3rem;
  }
</style>
