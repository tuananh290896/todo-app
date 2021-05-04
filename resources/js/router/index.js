import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('access_token');

  if(to.matched.some(record => record.meta.requireAuth)) {
      if (!token) {
          next({ path: '/login',  params: { next_url: to.fullPath } });
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(token == null){
          next()
      }
      else{
          next({ name: 'home'})
      }
  }

  next();
})


export default router;