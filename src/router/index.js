import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import HomeView from '../views/HomeView'
import MovieView from '../views/MovieView'
import MyView from '../views/MyView'
import FirstView from '../views/FirstView'
import BookView from '../views/BookView'
import StatusView from '../views/StatusView'
import GroupView from '../views/GroupView'
import SubjectView from '../views/SubjectView'
import DetailView from '../views/DetailView'
import SearchView from '../views/SearchView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/my'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'my',
          name: 'MyView',
          component: MyView
        },
        {
          path: 'first',
          name: 'FirstView',
          component: FirstView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
