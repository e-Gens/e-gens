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
        path: '/academico/turmas-aulas',
        name: 'turmas-aulas/',
        component: () => import(
            /* webpackChunkName: "turmas-aulas" */ 
            '@/pages/academico/turmas-aulas/TurmasAulas'
            ),
    },
    {
        path: '/academico/turmas-aulas/aulas',
        name: 'aulas',
        component: () => import(
            /* webpackChunkName: "aulas" */ 
            '@/pages/academico/turmas-aulas/aulas/Aulas'
            )
    },
    {
        path: '/academico/turmas-aulas/aulas-extra',
        name: 'aulas-extra',
        component: () => import(
            /* webpackChunkName: "aulas-extra" */ 
            '@/pages/academico/turmas-aulas/aulas-extra/AulasExtra'
            )
    },
    {
        path: '/academico/turmas-aulas/substituicoes',
        name: 'substituicoes',
        component: () => import(
            /* webpackChunkName: "substituicoes" */ 
            '@/pages/academico/turmas-aulas/substituicoes/Substituicoes'
            )
    },
    {
        path: '/academico/turmas-aulas/turmas',
        name: 'turmas',
        component: () => import(
            /* webpackChunkName: "turmas" */ 
            '@/pages/academico/turmas-aulas/turmas/Turmas'
            )
    },
    {
        path: '/academico/matricula',
        name: 'matricula/',
        component: () => import(
            /* webpackChunkName: "matricula" */ 
            '@/pages/academico/matricula/Matricula'
            ),
    },
    {
        path: '/academico/matricula/desistencia',
        name: 'desistencia',
        component: () => import(
            /* webpackChunkName: "desistencia" */ 
            '@/pages/academico/matricula/desistencia/Desistencia'
            )
    },
    {
        path: '/academico/matricula/matricula',
        name: 'matricula',
        component: () => import(
            /* webpackChunkName: "matricula" */ 
            '@/pages/academico/matricula/matricula/Matricula'
            )
    },
    {
        path: '/academico/matricula/rematricula',
        name: 'rematricula',
        component: () => import(
            /* webpackChunkName: "rematricula" */ 
            '@/pages/academico/matricula/rematricula/Rematricula'
            )
    },
    {
        path: '/academico/matricula/transferencia',
        name: 'transferencia',
        component: () => import(
            /* webpackChunkName: "transferencia" */ 
            '@/pages/academico/matricula/transferencia/Transferencia'
            )
    },
    {
        path: '/academico/registro-academico',
        name: 'registro-academico/',
        component: () => import(
            /* webpackChunkName: "registro-academico" */ 
            '@/pages/academico/registro-academico/RegistroAcademico'
            ),
    },
    {
        path: '/academico/registro-academico/aluno',
        name: 'aluno',
        component: () => import(
            /* webpackChunkName: "aluno" */ 
            '@/pages/academico/registro-academico/aluno/Aluno'
            )
    },
    {
        path: '/academico/registro-academico/diploma',
        name: 'diploma',
        component: () => import(
            /* webpackChunkName: "diploma" */ 
            '@/pages/academico/registro-academico/diploma/Diploma'
            )
    },
    {
        path: '/academico/registro-academico/historico',
        name: 'historico',
        component: () => import(
            /* webpackChunkName: "historico" */ 
            '@/pages/academico/registro-academico/historico/Historico'
            )
    },
    {
        path: '/academico/registro-academico/listas-relatorios',
        name: 'listas-relatorios',
        component: () => import(
            /* webpackChunkName: "listas-relatorios" */ 
            '@/pages/academico/registro-academico/listas-relatorios/ListasRelatorios'
            )
    },
]