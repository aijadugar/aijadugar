import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'
import ProfilesComponent from '../components/ProfilesComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsComponent
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: ProfilesComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

let firstLoad = true;

router.beforeEach((to, from, next) => {
  if (firstLoad) {
    firstLoad = false;
    if (to.path !== '/') {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router