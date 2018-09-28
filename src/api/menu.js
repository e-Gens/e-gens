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
    name: 'diario-classe',
    component: 'diario-classe',
    icon: 'class'
  },
  {
    title: 'Docente',
    group: 'docente',
    name: 'docente',
    component: 'docente',
    icon: 'supervised_user_circle',
  },
  {
    title: 'Frequência',
    group: 'frequencia',
    name: 'frequencia',
    component: 'frequencia',
    icon: 'assignment_turned_in',
  },
  { header: 'Pedagógico' },
  {
    title: 'Planejamento',
    group: 'planejamento',
    component: 'planejamento',
    icon: 'developer_board',
    items: [
      { name: 'avaliacao', title: 'Avaliações', component: 'avaliacao' },
      { name: 'calendario-escolar', title: 'Calendário Escolar', component: 'calendario-escolar' },
      { name: 'curso', title: 'Cursos', component: 'curso' },
      { name: 'disciplina', title: 'Disciplinas', component: 'disciplina' },
      { name: 'horario', title: 'Gestão de Horários', component: 'horario' },

    ]
  },
  {
    title: 'Resultados',
    group: 'resultado',
    component: 'resultado',
    icon: 'bar_chart',
    items: [
      { name: 'resultado-avaliacao', title: 'Avaliações', component: 'resultado-avaliacao' },
      { name: 'resultado-final', title: 'Finais', component: 'resultado-final' },
      { name: 'resultado-extra', title: 'Atividades Extra', component: 'resultado-extra' },

    ]
  },
  {
    title: 'Desempenho',
    group: 'desempenho',
    component: 'desempenho',
    icon: 'trending_up',
    items: [
      { name: 'desempenho-turma', title: 'Turmas', component: 'desempenho-turma' },
      { name: 'desempenho-aluno', title: 'Alunos', component: 'desempenho-aluno' },
      { name: 'desempenho-professor', title: 'Professores', component: 'desempenho-professor' },

    ]
  },
  {
    title: 'Relatórios',
    group: 'relatorios-pedagogico',
    name: 'relatorios-pedagogico',
    component: 'relatorios-pedagogico',
    icon: 'rate_review'
  },
  {
    title: 'Ocorrências Aluno',
    group: 'ocorrencia',
    name: 'ocorrencia',
    component: 'ocorrencia',
    icon: 'report'
  },

  { header: 'Gerencial' },
  {
    title: 'Gestão de Contratos',
    group: 'contrato',
    component: 'contrato',
    icon: 'business_center',
    items: [
      { name: 'contrato', title: 'Contratos', component: 'contrato' },
      { name: 'mensalidade', title: 'Valor de Mensalidades', component: 'mensalidade' },
      { name: 'desconto-abatimento', title: 'Descontos e Abatimentos', component: 'desconto-abatimento' },
      { name: 'juro-multa', title: 'Juros e Multa', component: 'juro-multa' },
      { name: 'taxa-adicional', title: 'Taxas adicionais', component: 'taxa-adicional' },
    ]
  },
  {
    title: 'Gestão de Pessoas',
    group: 'gestao-pessoas',
    name: 'gestao-pessoas',
    component: 'gestao-pessoas',
    icon: 'group',
    //items: [
    //  { name: 'controle-aulas', title: 'Cadastros', component: 'home' },
    //  { name: 'controle-aulas', title: 'Relatórios', component: 'home' },
    //  { name: 'controle-aulas', title: 'Perfil do Profissional', component: 'home' },
    //]
  },
  {
    title: 'Gestão Financeira',
    group: 'gestao-financeira',
    name: 'gestao-financeira',
    component: 'gestao-financeira',
    icon: 'attach_money',
    //items: [
    //  { name: 'controle-aulas', title: 'Planos de Contas', component: 'home' },
    //  { name: 'controle-aulas', title: 'Relatórios', component: 'home' },
    //]
  },
  {
    title: 'Marketing e Vendas',
    group: 'marketing-vendas',
    name: 'marketing-vendas',
    component: 'marketing-vendas',
    icon: 'local_offer',
    //items: [
    //  { name: 'controle-aulas', title: 'Produtos e/ou Serviços', component: 'home' },
    //  { name: 'controle-aulas', title: 'Análise do Mercado', component: 'home' },
    //  { name: 'controle-aulas', title: 'Plano de Marketing', component: 'home' },
    //]
  },
  {
    title: 'Qualidade e Pocessos',
    group: 'qualidade-processos',
    name: 'qualidade-processos',
    component: 'qualidade-processos',
    icon: 'tune',
    //items: [
    //  { name: 'controle-aulas', title: 'A definir...', component: 'home' },
    //]
  },
  {
    title: 'Gestão Estratégica',
    group: 'gestao-estrategica',
    name: 'gestao-estrategica',
    component: 'gestao-estrategica',
    icon: 'transform',
    //items: [
    //  { name: 'controle-aulas', title: 'Premissas Gerais', component: 'home' },
    //  { name: 'controle-aulas', title: 'Análise SWOT', component: 'home' },
    //  { name: 'controle-aulas', title: 'Metas', component: 'home' },
    //  { name: 'controle-aulas', title: 'Plano de ação', component: 'home' },
    //  { name: 'controle-aulas', title: 'Resultados Consolidados', component: 'home' },
    //  { name: 'controle-aulas', title: 'Gráficos e Relatórios', component: 'home' },
    //]
  },
  { header: 'Financeiro' },
  {
    title: 'Clientes',
    group: 'layout',
    component: 'layout',
    icon: 'how_to_reg',
    items: [
      { name: 'controle-aulas', title: 'Controle de Contratos', component: 'home' },
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
