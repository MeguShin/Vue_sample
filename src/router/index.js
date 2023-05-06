import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// TodoListコンポーネントをimport
import TodoList from '../views/TodoList.vue'
// IssueListコンポーネントをimport
import IssueList from '../views/IssueList.vue'
import TodosIssues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // '/todos'パス追加
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  // '/Issue'パス追加
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  // '/TodosIssues'パス追加
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: TodosIssues
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
