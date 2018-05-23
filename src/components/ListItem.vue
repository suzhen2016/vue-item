<template>
    <div class="list">
        <h2>我的大事纪</h2>
        <div class="content">
            <ul class='ui-list'>
                <li v-for="item in items">
                    <!-- <a :href=" baseUri ">{{item.title}}</a>  -->
                    <router-link :to="{ name: 'MovieView'}">{{item.title}}</router-link> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'listItem',
  data () {
    return {
      baseUri: 'https://www.baidu.com/',
      items: [
        {
          title: '开天辟地，诞生记',
          href: 'movie/classic'
        },
        {
          title: '邻家小伙初长成',
          href: 'movie/underrated'
        },
        {
          title: '小学开学第一课',
          href: 'movie/doubantop'
        },
        {
          title: '第一次离开家乡',
          ref: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        },
        {
          title: '第一次离开家乡',
          href: 'movie/action'
        }
      ]
    }
  },
  methods: {
    open: function () {

    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 1rem;
  h2 {
    height: 3.6rem;
    line-height: 3.6rem;
    padding: 0 1.6rem;
    display: inline-block;
    color:#42bd56;
    font-size: 2rem;
  }
  .ui-list {
      margin: 1.6rem 0 0 1.6rem;
    li{
      list-style: none;
      font-size: 1.6rem;
      height: 4.2rem;
      line-height: 4.2rem;
      float: left;
      width: 50%;
      a {
        color: #42bd56;
      }
    }
    
  }
}
</style>
