const Menu = [
  { header: 'Acadêmico' },
  {
    title: 'Turmas e Aulas',
    group: 'turmas-aulas',
    component: 'about',
    icon: 'class',
    items: [
      { name: 'turmas', title: 'Turmas', component: 'turmas' },
      { name: 'aulas', title: 'Aulas', component: 'aulas' },
      { name: 'substituicoes', title: 'Substituições', component: 'substituicoes' },
      { name: 'relatorios', title: 'Relatórios', component: 'relatorios' },
      { name: 'aulas-extra', title: 'Aulas Extra', component: 'aulas-extra' },
    ]
  },
  {
    title: 'Matrícula',
    group: 'matriculas',
    component: 'about',
    icon: 'class',
    items: [
      { name: 'matricula', title: 'Matrícula', component: 'home' },
      { name: 'transferencia', title: 'Transferência', component: 'about' },
      { name: 'rematricula', title: 'Rematrícula', component: 'home' },
      { name: 'desistencia', title: 'Desistência', component: 'about' },
    ]
  },
  {
    title: 'Registro Acadêmico',
    group: 'registro-academico',
    component: 'about',
    icon: 'class',
    items: [
      { name: 'controle-aulas', title: 'Alunos', component: 'home' },
      { name: 'controle-aulas', title: 'Histórico Escolar', component: 'home' },
      { name: 'controle-aulas', title: 'Ficha do Aluno', component: 'home' },
      { name: 'controle-aulas', title: 'Diplomas', component: 'home' },
      { name: 'controle-aulas', title: 'Listas e Relatórios', component: 'home' },
    ]
  },
  {
    title: 'Diário de Classe',
    group: 'diario-classe',
    component: 'about',
    icon: 'class',
    items: [
      { name: 'controle-aulas', title: 'Controle de Aulas', component: 'home' },
    ]
  },
  {
    title: 'Gestão de Professores',
    group: 'gestao-professores',
    component: 'about',
    icon: 'class',
    items: [
      { name: 'controle-aulas', title: 'Controle de Aulas', component: 'home' },
    ]
  },
  { header: 'Pedagógico' },
  {
    title: 'Planejamento Escolar',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' }

    ]
  },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' }

    ]
  },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' }

    ]
  },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' }

    ]
  },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', component: 'components/alerts' }

    ]
  },





  { header: 'Gerencial' },
  {
    title: 'Gerencial',
    group: 'pickers',
    component: 'picker',
    icon: 'filter_vintage',
    items: [
      { name: 'timepicker', title: 'Timepicker', component: 'pickers/timepicker' },
    ]
  },
  { header: 'Financeiro' },
  {
    title: 'Financeiro',
    group: 'layout',
    component: 'layout',
    icon: 'view_compact',
    items: [
      { name: 'bottom-sheets', title: 'Bottom panels', component: 'components/bottom-sheets' },
    ]
  },
  { header: 'Logística e Operações' },
  {
    title: 'Logística e Operações',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      { name: 'basic', title: 'General', component: 'components/basic-forms' },
    ]
  },
  { divider: true },
  { header: 'Painel de Operações' },
  {
    title: 'Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: 'Login', title: 'Login', component: 'Login' },
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
