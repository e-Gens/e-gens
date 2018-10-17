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
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/pages/login/Login')
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
        path: '/tarefas',
        name: 'tarefa',
        component: () => import(
            /* webpackChunkName: "tarefa" */
            '@/pages/tarefa/Tarefa'
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
    {
        path: '/academico/diario-classe',
        name: 'diario-classe',
        component: () => import(
            /* webpackChunkName: "diario-classe" */
            '@/pages/academico/diario-classe/DiarioClasse'
        )
    },
    {
        path: '/academico/docente',
        name: 'docente',
        component: () => import(
            /* webpackChunkName: "docente" */
            '@/pages/academico/docente/Docente'
        )
    },
    {
        path: '/academico/frequencia',
        name: 'frequencia',
        component: () => import(
            /* webpackChunkName: "frequencia" */
            '@/pages/academico/frequencia/Frequencia'
        )
    },
    {
        path: '/pedagogico',
        name: 'pedagogico',
        component: () => import(
            /* webpackChunkName: "pedagogico" */
            '@/pages/pedagogico/Pedagogico'
        ),
    },
    {
        path: '/pedagogico/planejamento',
        name: 'planejamento',
        component: () => import(
            /* webpackChunkName: "planejamento" */
            '@/pages/pedagogico/planejamento/Planejamento'
        ),
    },
    {
        path: '/pedagogico/planejamento/avaliacao',
        name: 'avaliacao',
        component: () => import(
            /* webpackChunkName: "avaliacao" */
            '@/pages/pedagogico/planejamento/avaliacao/Avaliacao'
        ),
    },
    {
        path: '/pedagogico/planejamento/calendario-escolar',
        name: 'calendario-escolar',
        component: () => import(
            /* webpackChunkName: "calendario-escolar" */
            '@/pages/pedagogico/planejamento/calendario-escolar/CalendarioEscolar'
        ),
    },
    {
        path: '/pedagogico/planejamento/curso',
        name: 'curso',
        component: () => import(
            /* webpackChunkName: "curso" */
            '@/pages/pedagogico/planejamento/curso/Curso'
        ),
    },
    {
        path: '/pedagogico/planejamento/disciplina',
        name: 'disciplina',
        component: () => import(
            /* webpackChunkName: "disciplina" */
            '@/pages/pedagogico/planejamento/disciplina/Disciplina'
        ),
    },
    {
        path: '/pedagogico/planejamento/horario',
        name: 'horario',
        component: () => import(
            /* webpackChunkName: "horario" */
            '@/pages/pedagogico/planejamento/horario/Horario'
        ),
    },
    {
        path: '/pedagogico/desempenho',
        name: 'desempenho',
        component: () => import(
            /* webpackChunkName: "desempenho" */
            '@/pages/pedagogico/desempenho/Desempenho'
        ),
    },
    {
        path: '/pedagogico/desempenho/desempenho-aluno',
        name: 'desempenho-aluno',
        component: () => import(
            /* webpackChunkName: "desempenho-aluno" */
            '@/pages/pedagogico/desempenho/desempenho-aluno/DesempenhoAluno'
        ),
    },
    {
        path: '/pedagogico/desempenho/desempenho-turma',
        name: 'desempenho-turma',
        component: () => import(
            /* webpackChunkName: "desempenho-turma" */
            '@/pages/pedagogico/desempenho/desempenho-turma/DesempenhoTurma'
        ),
    },
    {
        path: '/pedagogico/desempenho/desempenho-professor',
        name: 'desempenho-professor',
        component: () => import(
            /* webpackChunkName: "desempenho-professor" */
            '@/pages/pedagogico/desempenho/desempenho-professor/DesempenhoProfessor'
        ),
    },

    {
        path: '/pedagogico/ocorrencia',
        name: 'ocorrencia',
        component: () => import(
            /* webpackChunkName: "ocorrencia" */
            '@/pages/pedagogico/ocorrencia/Ocorrencia'
        ),
    },

    {
        path: '/pedagogico/relatorios-pedagogico',
        name: 'relatorios-pedagogico',
        component: () => import(
            /* webpackChunkName: "relatorios-pedagogico" */
            '@/pages/pedagogico/relatorios-pedagogico/RelatoriosPedagogico'
        ),
    },


    {
        path: '/pedagogico/resultado',
        name: 'resultado',
        component: () => import(
            /* webpackChunkName: "resultado" */
            '@/pages/pedagogico/resultado/Resultado'
        ),
    },
    {
        path: '/pedagogico/resultado/resultado-avaliacao',
        name: 'resultado-avaliacao',
        component: () => import(
            /* webpackChunkName: "resultado-avaliacao" */
            '@/pages/pedagogico/resultado/resultado-avaliacao/ResultadoAvaliacao'
        ),
    },
    {
        path: '/pedagogico/resultado/resultado-extra',
        name: 'resultado-extra',
        component: () => import(
            /* webpackChunkName: "resultado-extra" */
            '@/pages/pedagogico/resultado/resultado-extra/ResultadoExtra'
        ),
    },
    {
        path: '/pedagogico/resultado/resultado-final',
        name: 'resultado-final',
        component: () => import(
            /* webpackChunkName: "resultado-final" */
            '@/pages/pedagogico/resultado/resultado-final/ResultadoFinal'
        ),
    },

    {
        path: '/gerencial',
        name: 'gerencial',
        component: () => import(
            /* webpackChunkName: "gerencial" */
            '@/pages/gerencial/Gerencial'
        ),
    },
    {
        path: '/gerencial/contrato',
        name: 'contrato',
        component: () => import(
            /* webpackChunkName: "contrato" */
            '@/pages/gerencial/contrato/Contrato'
        ),
    },
    {
        path: '/gerencial/contrato/desconto-abatimento',
        name: 'desconto-abatimento',
        component: () => import(
            /* webpackChunkName: "desconto-abatimento" */
            '@/pages/gerencial/contrato/desconto-abatimento/DescontoAbatimento'
        ),
    },
    {
        path: '/gerencial/contrato/juro-multa',
        name: 'juro-multa',
        component: () => import(
            /* webpackChunkName: "juro-multa" */
            '@/pages/gerencial/contrato/juro-multa/JuroMulta'
        ),
    },
    {
        path: '/gerencial/contrato/mensalidade',
        name: 'mensalidade',
        component: () => import(
            /* webpackChunkName: "mensalidade" */
            '@/pages/gerencial/contrato/mensalidade/Mensalidade'
        ),
    },
    {
        path: '/gerencial/contrato/taxa-adicional',
        name: 'taxa-adicional',
        component: () => import(
            /* webpackChunkName: "taxa-adicional" */
            '@/pages/gerencial/contrato/taxa-adicional/TaxaAdicional'
        ),
    },
    {
        path: '/gerencial/gestao-financeira',
        name: 'gestao-financeira',
        component: () => import(
            /* webpackChunkName: "gestao-financeira" */
            '@/pages/gerencial/gestao-financeira/GestaoFinanceira'
        ),
    },
    {
        path: '/gerencial/gestao-pessoas',
        name: 'gestao-pessoas',
        component: () => import(
            /* webpackChunkName: "gestao-pessoas" */
            '@/pages/gerencial/gestao-pessoas/GestaoPessoas'
        ),
    },
    {
        path: '/gerencial/marketing-vendas',
        name: 'marketing-vendas',
        component: () => import(
            /* webpackChunkName: "marketing-vendas" */
            '@/pages/gerencial/marketing-vendas/MarketingVendas'
        ),
    },
    {
        path: '/gerencial/qualidade-processos',
        name: 'qualidade-processos',
        component: () => import(
            /* webpackChunkName: "qualidade-processos" */
            '@/pages/gerencial/qualidade-processos/QualidadeProcessos'
        ),
    },
    {
        path: '/gerencial/gestao-estrategica',
        name: 'gestao-estrategica',
        component: () => import(
            /* webpackChunkName: "gestao-estrategica" */
            '@/pages/gerencial/gestao-estrategica/GestaoEstrategica'
        ),
    },

    {
        path: '/financeiro',
        name: 'financeiro',
        component: () => import(
            /* webpackChunkName: "financeiro" */
            '@/pages/financeiro/Financeiro'
        ),
    },
    {
        path: '/financeiro/lancamentos',
        name: 'lancamento',
        component: () => import(
            /* webpackChunkName: "lancamento" */
            '@/pages/financeiro/lancamento/Lancamento'
        ),
    },
    {
        path: '/financeiro/cobranca',
        name: 'cobranca',
        component: () => import(
            /* webpackChunkName: "cobranca" */
            '@/pages/financeiro/cobranca/Cobranca'
        ),
    },
    {
        path: '/financeiro/cobranca/boleto',
        name: 'boleto',
        component: () => import(
            /* webpackChunkName: "boleto" */
            '@/pages/financeiro/cobranca/boleto/Boleto'
        ),
    },
    {
        path: '/financeiro/cobranca/remessa',
        name: 'remessa',
        component: () => import(
            /* webpackChunkName: "remessa" */
            '@/pages/financeiro/cobranca/remessa/Remessa'
        ),
    },
    {
        path: '/financeiro/cobranca/devedor',
        name: 'devedor',
        component: () => import(
            /* webpackChunkName: "devedor" */
            '@/pages/financeiro/cobranca/devedor/Devedor'
        ),
    },
    {
        path: '/financeiro/cliente',
        name: 'cliente',
        component: () => import(
            /* webpackChunkName: "cliente" */
            '@/pages/financeiro/cliente/Cliente'
        ),
    },
    {
        path: '/financeiro/fornecedor',
        name: 'fornecedor',
        component: () => import(
            /* webpackChunkName: "fornecedor" */
            '@/pages/financeiro/fornecedor/Fornecedor'
        ),
    },

    {
        path: '/logistica',
        name: 'logistica',
        component: () => import(
            /* webpackChunkName: "logistica" */
            '@/pages/logistica/Logistica'
        ),
    },
    {
        path: '/logistica/produto',
        name: 'produto',
        component: () => import(
            /* webpackChunkName: "produto" */
            '@/pages/logistica/produto/Produto'
        ),
    },
    {
        path: '/logistica/estoque',
        name: 'estoque',
        component: () => import(
            /* webpackChunkName: "estoque" */
            '@/pages/logistica/estoque/Estoque'
        ),
    },
    {
        path: '/logistica/recurso',
        name: 'recurso',
        component: () => import(
            /* webpackChunkName: "recurso" */
            '@/pages/logistica/recurso/Recurso'
        ),
    },
    {
        path: '/logistica/recurso/sala',
        name: 'sala',
        component: () => import(
            /* webpackChunkName: "sala" */
            '@/pages/logistica/recurso/sala/Sala'
        ),
    },
    {
        path: '/logistica/recurso/equipamento',
        name: 'equipamento',
        component: () => import(
            /* webpackChunkName: "equipamento" */
            '@/pages/logistica/recurso/equipamento/Equipamento'
        ),
    },

    {
        path: '/operacional',
        name: 'operacional',
        component: () => import(
            /* webpackChunkName: "operacional" */
            '@/pages/operacional/Operacional'
        ),
    },
    {
        path: '/operacional/usuario',
        name: 'usuario',
        component: () => import(
            /* webpackChunkName: "usuario" */
            '@/pages/operacional/usuario/Usuario'
        ),
    },
    {
        path: '/operacional/base-dados',
        name: 'base-dados',
        component: () => import(
            /* webpackChunkName: "base-dados" */
            '@/pages/operacional/base-dados/BaseDados'
        ),
    },
]