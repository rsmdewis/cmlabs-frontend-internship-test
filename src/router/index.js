import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '../pages/CategoryPage.vue';
import CategoryDetailPage from '../pages/CategoryDetailPage.vue';
import MealDetailPage from '../pages/MealDetailPage.vue';

const routes = [
  { path: '/', component: CategoryPage },
  { path: '/category/:name', component: CategoryDetailPage },
  { path: '/meal/:id', component: MealDetailPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
