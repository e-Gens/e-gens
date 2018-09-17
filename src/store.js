import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: sessionStorage.getItem('usuario') ? JSON.parse(sessionStorage.getItem('usuario')) : null,
    menus: {
      academico: [["Turmas","",""],
                  ["Matrícula","",""],
                  ["Registro Acadêmico","",""],
                  ["Diário de Classe","",""],
                  ["Gestão de Professores","",""],
                  ["Salas e Equipamentos","",""]],
      pedagogico: [
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
