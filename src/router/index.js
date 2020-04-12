import Vue from 'vue'
import VueRouter from 'vue-router'
import Explore from '../views/Explore.vue'
import Projects from '../views/Projects.vue'
import Labs from '../views/Labs.vue'
import Challenges from '../views/Challenges.vue'
import ChallengeDetail from '../views/ChallengeDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'explore',
    component: Explore
  },
  {
    path: '/labs',
    name: 'lab',
    component: Labs
  },
  {
    path: '/project',
    name: 'project',
    component: Projects
  },
  {
    path: '/challenge/list',
    name: 'challenge',
    component: Challenges
  },
  {
    path: '/challenge/detail/:id',
    name: 'challenge-detail',
    component: ChallengeDetail
  },
]

const router = new VueRouter({
  routes
})

export default router
