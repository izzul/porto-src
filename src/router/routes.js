const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'sub', component: () => import('pages/IndexPage.vue') }
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'fullstack', component: () => import('src/pages/sub/SubSkillsPage.vue'), name: 'Full-Stack' },
      { path: 'devops', component: () => import('src/pages/sub/SubSkillsPage.vue'), name: 'Dev Ops' },
      { path: 'data', component: () => import('src/pages/sub/SubSkillsPage.vue'), name: 'Data Engineer' },
      { path: 'ai', component: () => import('src/pages/sub/SubSkillsPage.vue'), name: 'AI Engineer' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
