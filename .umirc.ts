export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel',
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/posts/create', component: 'posts/create' },
    { path: '/posts/edit/:id', component: 'posts/edit' },
    { path: '/login', component: 'login' },
    { path: '/posts/:postId', component: 'posts/post' },
    { path: '/register', component: 'register' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
};
