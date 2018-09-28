const Menu = [
  { header: 'Acadêmico' },
  {
    title: 'Turmas e Aulas',
    group: 'turmas-aulas',
    component: 'turmas-aulas',
    icon: 'event_note',
    items: [
      { name: 'turmas', title: 'Turmas', component: 'turmas' },
      { name: 'aulas', title: 'Aulas', component: 'aulas' },
      { name: 'substituicoes', title: 'Substituições', component: 'substituicoes' },
      { name: 'aulas-extra', title: 'Aulas Extra', component: 'aulas-extra' },
    ]
  },
  {
    title: 'Matrícula',
    group: 'matricula',
    component: 'matricula',
    icon: 'group_add',
    items: [
      { name: 'matricula', title: 'Matrícula', component: 'matricula' },
      { name: 'transferencia', title: 'Transferência', component: 'transferencia' },
      { name: 'rematricula', title: 'Rematrícula', component: 'rematricula' },
      { name: 'desistencia', title: 'Desistência', component: 'desistencia' },
    ]
  },
  {
    title: 'Registro Acadêmico',
    group: 'registro-academico',
    component: 'registro-academico',
    icon: 'layers',
    items: [
      { name: 'aluno', title: 'Aluno', component: 'aluno' },
      { name: 'historico', title: 'Histórico Escolar', component: 'historico' },
      { name: 'diploma', title: 'Diploma', component: 'diploma' },
      { name: 'listas-relatorios', title: 'Listas e Relatórios', component: 'listas-relatorios' },
    ]
  },
  {
    title: 'Diário de Classe',
    group: 'diario-classe',
    component: 'diario-classe',
    icon: 'class',
    items: [
      { name: 'controle-aulas', title: 'Controle de Aulas', component: 'home' },
    ]
  },
  {
    title: 'Docentes',
    group: 'gestao-professores',
    component: 'gestao-professores',
    icon: 'supervised_user_circle',
    items: [
      { name: 'controle-aulas', title: 'Controle de Aulas', component: 'home' },
    ]
  },
  { header: 'Pedagógico' },
  {
    title: 'Planejamento',
    group: 'components',
    component: 'components',
    icon: 'developer_board',
    items: [
      { name: 'controle-aulas', title: 'PPP', component: 'home' },
      { name: 'controle-aulas', title: 'Planos de Aula', component: 'home' },
      { name: 'controle-aulas', title: 'Disciplinas', component: 'home' },
      { name: 'controle-aulas', title: 'Grade Curricular', component: 'home' },
      { name: 'controle-aulas', title: 'Avaliações', component: 'home' },
      { name: 'controle-aulas', title: 'Calendário Escolar', component: 'home' },
      { name: 'controle-aulas', title: 'Gestão de Horários', component: 'home' },

    ]
  },
  {
    title: 'Resultados',
    group: 'components',
    component: 'components',
    icon: 'bar_chart',
    items: [
      { name: 'controle-aulas', title: 'Avaliações', component: 'home' },
      { name: 'controle-aulas', title: 'Finais', component: 'home' },
      { name: 'controle-aulas', title: 'Atividades Extra', component: 'home' },

    ]
  },
  {
    title: 'Aval. Desempenho',
    group: 'components',
    component: 'components',
    icon: 'trending_up',
    items: [
      { name: 'controle-aulas', title: 'Turmas', component: 'home' },
      { name: 'controle-aulas', title: 'Alunos', component: 'home' },
      { name: 'controle-aulas', title: 'Professores', component: 'home' },

    ]
  },
  {
    title: 'Relatórios',
    group: 'components',
    component: 'components',
    icon: 'rate_review',
    items: [
      { name: 'controle-aulas', title: 'Ata de Resultados', component: 'home' },

    ]
  },
  {
    title: 'Ocorrências Aluno',
    group: 'components',
    component: 'components',
    icon: 'report',
    items: [
      { name: 'controle-aulas', title: 'Acompanhamento', component: 'home' },
      { name: 'controle-aulas', title: 'Nova Ocorrência', component: 'home' },

    ]
  },

  { header: 'Gerencial' },
  {
    title: 'Gestão de Contratos',
    group: 'pickers',
    component: 'picker',
    icon: 'business_center',
    items: [
      { name: 'controle-aulas', title: 'Contratos', component: 'home' },
      { name: 'controle-aulas', title: 'Valor de Mensalidades', component: 'home' },
      { name: 'controle-aulas', title: 'Descontos e Abatimentos', component: 'home' },
      { name: 'controle-aulas', title: 'Juros e Multa', component: 'home' },
      { name: 'controle-aulas', title: 'Taxas adicionais', component: 'home' },
      { name: 'controle-aulas', title: 'Gestão de etapas', component: 'home' },
    ]
  },
  {
    title: 'Gestão de Pessoas',
    group: 'pickers',
    component: 'picker',
    icon: 'group',
    items: [
      { name: 'controle-aulas', title: 'Cadastros', component: 'home' },
      { name: 'controle-aulas', title: 'Relatórios', component: 'home' },
      { name: 'controle-aulas', title: 'Perfil do Profissional', component: 'home' },
    ]
  },
  {
    title: 'Gestão Financeira',
    group: 'pickers',
    component: 'picker',
    icon: 'attach_money',
    items: [
      { name: 'controle-aulas', title: 'Planos de Contas', component: 'home' },
      { name: 'controle-aulas', title: 'Relatórios', component: 'home' },
    ]
  },
  {
    title: 'Marketing e Vendas',
    group: 'pickers',
    component: 'picker',
    icon: 'local_offer',
    items: [
      { name: 'controle-aulas', title: 'Produtos e/ou Serviços', component: 'home' },
      { name: 'controle-aulas', title: 'Análise do Mercado', component: 'home' },
      { name: 'controle-aulas', title: 'Plano de Marketing', component: 'home' },
    ]
  },
  {
    title: 'Qual. e Pocessos',
    group: 'pickers',
    component: 'picker',
    icon: 'tune',
    items: [
      { name: 'controle-aulas', title: 'A definir...', component: 'home' },
    ]
  },
  {
    title: 'Gestão Estratégica',
    group: 'pickers',
    component: 'picker',
    icon: 'transform',
    items: [
      { name: 'controle-aulas', title: 'Premissas Gerais', component: 'home' },
      { name: 'controle-aulas', title: 'Análise SWOT', component: 'home' },
      { name: 'controle-aulas', title: 'Metas', component: 'home' },
      { name: 'controle-aulas', title: 'Plano de ação', component: 'home' },
      { name: 'controle-aulas', title: 'Resultados Consolidados', component: 'home' },
      { name: 'controle-aulas', title: 'Gráficos e Relatórios', component: 'home' },
    ]
  },
  { header: 'Financeiro' },
  {
    title: 'Clientes',
    group: 'layout',
    component: 'layout',
    icon: 'how_to_reg',
    items: [
      { name: 'controle-aulas', title: 'Controle de Contrats', component: 'home' },
      { name: 'controle-aulas', title: 'Registro Financeiro', component: 'home' },
      { name: 'controle-aulas', title: 'Imposto de Renda', component: 'home' },
      { name: 'controle-aulas', title: 'Situação Financeira', component: 'home' },
    ]
  },
  {
    title: 'Fonecedores',
    group: 'layout',
    component: 'layout',
    icon: 'shopping_basket',
    items: [
      { name: 'controle-aulas', title: 'Controle de Contratos', component: 'home' },
      { name: 'controle-aulas', title: 'Histórico de Relacionamento', component: 'home' },
      { name: 'controle-aulas', title: 'Relatórios', component: 'home' },
    ]
  },
  {
    title: 'Lançamentos',
    group: 'layout',
    component: 'layout',
    icon: 'note_add',
    items: [
      { name: 'controle-aulas', title: 'Controle de Receitas', component: 'home' },
      { name: 'controle-aulas', title: 'Controle de Despesas', component: 'home' },
    ]
  },
  {
    title: 'Cobranças',
    group: 'layout',
    component: 'layout',
    icon: 'monetization_on',
    items: [
      { name: 'controle-aulas', title: 'Boletos', component: 'home' },
      { name: 'controle-aulas', title: 'Comunicação com Banco', component: 'home' },
      { name: 'controle-aulas', title: 'Devedores', component: 'home' },
    ]
  },
  { header: 'Logística e Operações' },
  {
    title: 'Produtos',
    group: 'forms',
    component: 'forms',
    icon: 'shopping_cart',
    items: [
      { name: 'controle-aulas', title: 'Registro no Sistema', component: 'home' },
      { name: 'controle-aulas', title: 'Entrada no Estoque', component: 'home' },
      { name: 'controle-aulas', title: 'Saida de Produto', component: 'home' },
    ]
  },
  {
    title: 'Relatórios',
    group: 'forms',
    component: 'forms',
    icon: 'poll',
    items: [
      { name: 'controle-aulas', title: 'Estoque', component: 'home' },
    ]
  },
  {
    title: 'Salas e Recursos',
    group: 'forms',
    component: 'forms',
    icon: 'meeting_room',
    items: [
      { name: 'controle-aulas', title: 'Espaços', component: 'home' },
      { name: 'controle-aulas', title: 'Equipamentos', component: 'home' },
    ]
  },
  { divider: true },
  {
    title: 'Painel de Operações',
    group: 'extra',
    icon: 'settings',
    items: [
      { name: 'controle-aulas', title: 'Tarefas e Ações', component: 'home' },
      { name: 'controle-aulas', title: 'Usuários e Permissões', component: 'home' },
      { name: 'controle-aulas', title: 'Backup do BD', component: 'home' },
    ]
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
