import Page from "@/views/Page";

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
        redirect: {
            path: '/app'
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    },
    {
        path: '/app',
        component: Page,
        children:[
            {
                path: '/app/turmas-aulas/aulas',
                name: 'aulas',
                component: () => import(
                    /* webpackChunkName: "aulas" */
                    '@/pages/academico/turmas-aulas/aulas/Aulas'
                )
            },
            {
                path: '/app/turmas-aulas',
                name: 'turmas-aulas/',
                component: () => import(
                    /* webpackChunkName: "turmas-aulas" */
                    '@/pages/academico/turmas-aulas/TurmasAulas'
                ),
            },
            {
                path: '/app/turmas-aulas/aulas-extra',
                name: 'aulas-extra',
                component: () => import(
                    /* webpackChunkName: "aulas-extra" */
                    '@/pages/academico/turmas-aulas/aulas-extra/AulasExtra'
                )
            },
            {
                path: '/app/turmas-aulas/substituicoes',
                name: 'substituicoes',
                component: () => import(
                    /* webpackChunkName: "substituicoes" */
                    '@/pages/academico/turmas-aulas/substituicoes/Substituicoes'
                )
            },
            {
                path: '/app/turmas-aulas/turmas',
                name: 'turmas',
                component: () => import(
                    /* webpackChunkName: "turmas" */
                    '@/pages/academico/turmas-aulas/turmas/Turmas'
                )
            },
            {
                path: '/app/academico',
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
                path: '/app/matricula',
                name: 'matricula/',
                component: () => import(
                    /* webpackChunkName: "matricula" */
                    '@/pages/academico/matricula/Matricula'
                ),
            },
            {
                path: '/app/matricula/desistencia',
                name: 'desistencia',
                component: () => import(
                    /* webpackChunkName: "desistencia" */
                    '@/pages/academico/matricula/desistencia/Desistencia'
                )
            },
            {
                path: '/app/matricula/matricula',
                name: 'matricula',
                component: () => import(
                    /* webpackChunkName: "matricula" */
                    '@/pages/academico/matricula/matricula/Matricula'
                )
            },
            {
                path: '/app/matricula/rematricula',
                name: 'rematricula',
                component: () => import(
                    /* webpackChunkName: "rematricula" */
                    '@/pages/academico/matricula/rematricula/Rematricula'
                )
            },
            {
                path: '/app/matricula/transferencia',
                name: 'transferencia',
                component: () => import(
                    /* webpackChunkName: "transferencia" */
                    '@/pages/academico/matricula/transferencia/Transferencia'
                )
            },
            {
                path: '/app/registro-academico',
                name: 'registro-academico/',
                component: () => import(
                    /* webpackChunkName: "registro-academico" */
                    '@/pages/academico/registro-academico/RegistroAcademico'
                ),
            },
            {
                path: '/app/registro-academico/aluno',
                name: 'aluno',
                component: () => import(
                    /* webpackChunkName: "aluno" */
                    '@/pages/academico/registro-academico/aluno/Aluno'
                )
            },
            {
                path: '/app/registro-academico/diploma',
                name: 'diploma',
                component: () => import(
                    /* webpackChunkName: "diploma" */
                    '@/pages/academico/registro-academico/diploma/Diploma'
                )
            },
            {
                path: '/app/registro-academico/historico',
                name: 'historico',
                component: () => import(
                    /* webpackChunkName: "historico" */
                    '@/pages/academico/registro-academico/historico/Historico'
                )
            },
            {
                path: '/app/registro-academico/listas-relatorios',
                name: 'listas-relatorios',
                component: () => import(
                    /* webpackChunkName: "listas-relatorios" */
                    '@/pages/academico/registro-academico/listas-relatorios/ListasRelatorios'
                )
            },
            {
                path: '/app/diario-classe',
                name: 'diario-classe',
                component: () => import(
                    /* webpackChunkName: "diario-classe" */
                    '@/pages/academico/diario-classe/DiarioClasse'
                )
            },
            {
                path: '/app/docente',
                name: 'docente',
                component: () => import(
                    /* webpackChunkName: "docente" */
                    '@/pages/academico/docente/Docente'
                )
            },
            {
                path: '/app/frequencia',
                name: 'frequencia',
                component: () => import(
                    /* webpackChunkName: "frequencia" */
                    '@/pages/academico/frequencia/Frequencia'
                )
            },
            {
                path: '/app/pedagogico',
                name: 'pedagogico',
                component: () => import(
                    /* webpackChunkName: "pedagogico" */
                    '@/pages/pedagogico/Pedagogico'
                ),
            },
            {
                path: '/app/planejamento',
                name: 'planejamento',
                component: () => import(
                    /* webpackChunkName: "planejamento" */
                    '@/pages/pedagogico/planejamento/Planejamento'
                ),
            },
            {
                path: '/app/planejamento/avaliacao',
                name: 'avaliacao',
                component: () => import(
                    /* webpackChunkName: "avaliacao" */
                    '@/pages/pedagogico/planejamento/avaliacao/Avaliacao'
                ),
            },
            {
                path: '/app/planejamento/calendario-escolar',
                name: 'calendario-escolar',
                component: () => import(
                    /* webpackChunkName: "calendario-escolar" */
                    '@/pages/pedagogico/planejamento/calendario-escolar/CalendarioEscolar'
                ),
            },
            {
                path: '/app/planejamento/curso',
                name: 'curso',
                component: () => import(
                    /* webpackChunkName: "curso" */
                    '@/pages/pedagogico/planejamento/curso/Curso'
                ),
            },
            {
                path: '/app/planejamento/disciplina',
                name: 'disciplina',
                component: () => import(
                    /* webpackChunkName: "disciplina" */
                    '@/pages/pedagogico/planejamento/disciplina/Disciplina'
                ),
            },
            {
                path: '/app/planejamento/horario',
                name: 'horario',
                component: () => import(
                    /* webpackChunkName: "horario" */
                    '@/pages/pedagogico/planejamento/horario/Horario'
                ),
            },
            {
                path: '/app/desempenho',
                name: 'desempenho',
                component: () => import(
                    /* webpackChunkName: "desempenho" */
                    '@/pages/pedagogico/desempenho/Desempenho'
                ),
            },
            {
                path: '/app/desempenho/desempenho-aluno',
                name: 'desempenho-aluno',
                component: () => import(
                    /* webpackChunkName: "desempenho-aluno" */
                    '@/pages/pedagogico/desempenho/desempenho-aluno/DesempenhoAluno'
                ),
            },
            {
                path: '/app/desempenho/desempenho-turma',
                name: 'desempenho-turma',
                component: () => import(
                    /* webpackChunkName: "desempenho-turma" */
                    '@/pages/pedagogico/desempenho/desempenho-turma/DesempenhoTurma'
                ),
            },
            {
                path: '/app/desempenho/desempenho-professor',
                name: 'desempenho-professor',
                component: () => import(
                    /* webpackChunkName: "desempenho-professor" */
                    '@/pages/pedagogico/desempenho/desempenho-professor/DesempenhoProfessor'
                ),
            },

            {
                path: '/app/ocorrencia',
                name: 'ocorrencia',
                component: () => import(
                    /* webpackChunkName: "ocorrencia" */
                    '@/pages/pedagogico/ocorrencia/Ocorrencia'
                ),
            },

            {
                path: '/app/relatorios-pedagogico',
                name: 'relatorios-pedagogico',
                component: () => import(
                    /* webpackChunkName: "relatorios-pedagogico" */
                    '@/pages/pedagogico/relatorios-pedagogico/RelatoriosPedagogico'
                ),
            },


            {
                path: '/app/resultado',
                name: 'resultado',
                component: () => import(
                    /* webpackChunkName: "resultado" */
                    '@/pages/pedagogico/resultado/Resultado'
                ),
            },
            {
                path: '/app/resultado/resultado-avaliacao',
                name: 'resultado-avaliacao',
                component: () => import(
                    /* webpackChunkName: "resultado-avaliacao" */
                    '@/pages/pedagogico/resultado/resultado-avaliacao/ResultadoAvaliacao'
                ),
            },
            {
                path: '/app/resultado/resultado-extra',
                name: 'resultado-extra',
                component: () => import(
                    /* webpackChunkName: "resultado-extra" */
                    '@/pages/pedagogico/resultado/resultado-extra/ResultadoExtra'
                ),
            },
            {
                path: '/app/resultado/resultado-final',
                name: 'resultado-final',
                component: () => import(
                    /* webpackChunkName: "resultado-final" */
                    '@/pages/pedagogico/resultado/resultado-final/ResultadoFinal'
                ),
            },

            {
                path: '/app/gerencial',
                name: 'gerencial',
                component: () => import(
                    /* webpackChunkName: "gerencial" */
                    '@/pages/gerencial/Gerencial'
                ),
            },
            {
                path: '/app/contrato',
                name: 'contrato',
                component: () => import(
                    /* webpackChunkName: "contrato" */
                    '@/pages/gerencial/contrato/Contrato'
                ),
            },
            {
                path: '/app/contrato/desconto-abatimento',
                name: 'desconto-abatimento',
                component: () => import(
                    /* webpackChunkName: "desconto-abatimento" */
                    '@/pages/gerencial/contrato/desconto-abatimento/DescontoAbatimento'
                ),
            },
            {
                path: '/app/contrato/juro-multa',
                name: 'juro-multa',
                component: () => import(
                    /* webpackChunkName: "juro-multa" */
                    '@/pages/gerencial/contrato/juro-multa/JuroMulta'
                ),
            },
            {
                path: '/app/contrato/mensalidade',
                name: 'mensalidade',
                component: () => import(
                    /* webpackChunkName: "mensalidade" */
                    '@/pages/gerencial/contrato/mensalidade/Mensalidade'
                ),
            },
            {
                path: '/app/contrato/taxa-adicional',
                name: 'taxa-adicional',
                component: () => import(
                    /* webpackChunkName: "taxa-adicional" */
                    '@/pages/gerencial/contrato/taxa-adicional/TaxaAdicional'
                ),
            },
            {
                path: '/app/gestao-financeira',
                name: 'gestao-financeira',
                component: () => import(
                    /* webpackChunkName: "gestao-financeira" */
                    '@/pages/gerencial/gestao-financeira/GestaoFinanceira'
                ),
            },
            {
                path: '/app/gestao-pessoas',
                name: 'gestao-pessoas',
                component: () => import(
                    /* webpackChunkName: "gestao-pessoas" */
                    '@/pages/gerencial/gestao-pessoas/GestaoPessoas'
                ),
            },
            {
                path: '/app/marketing-vendas',
                name: 'marketing-vendas',
                component: () => import(
                    /* webpackChunkName: "marketing-vendas" */
                    '@/pages/gerencial/marketing-vendas/MarketingVendas'
                ),
            },
            {
                path: '/app/qualidade-processos',
                name: 'qualidade-processos',
                component: () => import(
                    /* webpackChunkName: "qualidade-processos" */
                    '@/pages/gerencial/qualidade-processos/QualidadeProcessos'
                ),
            },
            {
                path: '/app/gestao-estrategica',
                name: 'gestao-estrategica',
                component: () => import(
                    /* webpackChunkName: "gestao-estrategica" */
                    '@/pages/gerencial/gestao-estrategica/GestaoEstrategica'
                ),
            },

            {
                path: '/app/financeiro',
                name: 'financeiro',
                component: () => import(
                    /* webpackChunkName: "financeiro" */
                    '@/pages/financeiro/Financeiro'
                ),
            },
            {
                path: '/app/lancamentos',
                name: 'lancamento',
                component: () => import(
                    /* webpackChunkName: "lancamento" */
                    '@/pages/financeiro/lancamento/Lancamento'
                ),
            },
            {
                path: '/app/cobranca',
                name: 'cobranca',
                component: () => import(
                    /* webpackChunkName: "cobranca" */
                    '@/pages/financeiro/cobranca/Cobranca'
                ),
            },
            {
                path: '/app/cobranca/boleto',
                name: 'boleto',
                component: () => import(
                    /* webpackChunkName: "boleto" */
                    '@/pages/financeiro/cobranca/boleto/Boleto'
                ),
            },
            {
                path: '/app/cobranca/remessa',
                name: 'remessa',
                component: () => import(
                    /* webpackChunkName: "remessa" */
                    '@/pages/financeiro/cobranca/remessa/Remessa'
                ),
            },
            {
                path: '/app/cobranca/devedor',
                name: 'devedor',
                component: () => import(
                    /* webpackChunkName: "devedor" */
                    '@/pages/financeiro/cobranca/devedor/Devedor'
                ),
            },
            {
                path: '/app/cliente',
                name: 'cliente',
                component: () => import(
                    /* webpackChunkName: "cliente" */
                    '@/pages/financeiro/cliente/Cliente'
                ),
            },
            {
                path: '/app/fornecedor',
                name: 'fornecedor',
                component: () => import(
                    /* webpackChunkName: "fornecedor" */
                    '@/pages/financeiro/fornecedor/Fornecedor'
                ),
            },

            {
                path: '/app/logistica',
                name: 'logistica',
                component: () => import(
                    /* webpackChunkName: "logistica" */
                    '@/pages/logistica/Logistica'
                ),
            },
            {
                path: '/app/produto',
                name: 'produto',
                component: () => import(
                    /* webpackChunkName: "produto" */
                    '@/pages/logistica/produto/Produto'
                ),
            },
            {
                path: '/app/estoque',
                name: 'estoque',
                component: () => import(
                    /* webpackChunkName: "estoque" */
                    '@/pages/logistica/estoque/Estoque'
                ),
            },
            {
                path: '/app/recurso',
                name: 'recurso',
                component: () => import(
                    /* webpackChunkName: "recurso" */
                    '@/pages/logistica/recurso/Recurso'
                ),
            },
            {
                path: '/app/recurso/sala',
                name: 'sala',
                component: () => import(
                    /* webpackChunkName: "sala" */
                    '@/pages/logistica/recurso/sala/Sala'
                ),
            },
            {
                path: '/app/recurso/equipamento',
                name: 'equipamento',
                component: () => import(
                    /* webpackChunkName: "equipamento" */
                    '@/pages/logistica/recurso/equipamento/Equipamento'
                ),
            },

            {
                path: '/app/operacional',
                name: 'operacional',
                component: () => import(
                    /* webpackChunkName: "operacional" */
                    '@/pages/operacional/Operacional'
                ),
            },
            {
                path: '/app/usuario',
                name: 'usuario',
                component: () => import(
                    /* webpackChunkName: "usuario" */
                    '@/pages/operacional/usuario/Usuario'
                ),
            },
            {
                path: '/app/base-dados',
                name: 'base-dados',
                component: () => import(
                    /* webpackChunkName: "base-dados" */
                    '@/pages/operacional/base-dados/BaseDados'
                ),
            },
            {
                path: '',
                component: () => import(
                    /* webpackChunkName: "home" */
                    '@/pages/home/Home'
                ),
            },
        ]
    },
]