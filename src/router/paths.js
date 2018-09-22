export default [
    {
        path: '*',
        meta: {
            public: true,
        },
        redirect: {
            path: '/404'
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/academico',
        name: 'academico',
        component: () => import(
            /* webpackChunkName: "academico" */ 
            '@/pages/academico/Academico'
            ),
    },
    {
        path: '/academico/aulas',
        name: 'aulas',
        component: () => import(
            /* webpackChunkName: "aulas" */ 
            '@/pages/academico/aulas/Aulas'
            )
    },
    {
        path: '/academico/aulas-extra',
        name: 'aulas-extra',
        component: () => import(
            /* webpackChunkName: "aulas-extra" */ 
            '@/pages/academico/aulas-extra/AulasExtra'
            )
    },
    {
        path: '/academico/relatorios',
        name: 'relatorios',
        component: () => import(
            /* webpackChunkName: "relatorios" */ 
            '@/pages/academico/relatorios/Relatorios'
            )
    },
    {
        path: '/academico/substituicoes',
        name: 'substituicoes',
        component: () => import(
            /* webpackChunkName: "substituicoes" */ 
            '@/pages/academico/substituicoes/Substituicoes'
            )
    },
    {
        path: '/academico/turmas',
        name: 'turmas',
        component: () => import(
            /* webpackChunkName: "turmas" */ 
            '@/pages/academico/turmas/Turmas'
            )
    },
]