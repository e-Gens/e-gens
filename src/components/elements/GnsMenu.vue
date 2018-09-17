<template>
  <vue-perfect-scrollbar class="scroll-area" :settings="scrollSettings">
          <v-list>
              <v-list-group prepend-icon="school" no-action >
                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title @click="teste">Acadêmico</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Turmas</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Matrícula</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Registro Acadêmico</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Diário de Classe</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Gestão de Professores</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Salas e Equipamentos</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
              
              <v-list-group prepend-icon="school" no-action >
                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title @click="teste">Gerencial</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Gestão de Contratos</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Gestão de Pessoas</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Gestão Financeira</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Relatórios</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Marketing e Vendas</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Qualidade e Processos</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Gestão Estratégica</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
              
              <v-list-group prepend-icon="school"  no-action >
                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title @click="teste">Financeiro</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Clientes</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Fornecedores</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Lançamentos Financeiros</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="teste">
                  <v-list-tile-content>
                    <v-list-tile-title>Controle de Cobrança</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                
              </v-list-group>


            <v-list-group
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
  
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                @click="item.action"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
  </vue-perfect-scrollbar>
</template>


<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: "GnsMenu",
  data() {
    return {
      active: false,
      scrollSettings: {
      maxScrollbarLength: 60
    }, 

      items: [
        {
          action: "local_activity",
          title: "Attractions",
          items: [{ title: "List Item" }]
        },
        {
          action: "restaurant",
          title: "Dining",
          items: [
            { title: "Breakfast & brunch", action: "teste" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          action: "school",
          title: "Education",
          items: [{ title: "List Item" }]
        },
        {
          action: "directions_run",
          title: "Family",
          items: [{ title: "List Item" }]
        },
        {
          action: "healing",
          title: "Health",
          items: [{ title: "List Item" }]
        },
        {
          action: "content_cut",
          title: "Office",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Promotions",
          items: [{ title: "List Item" }]
        }
      ]
    };
  },
  methods: {
      teste: function(){
          return console.log('OK!')
      },
      scrollHanle(evt) {
        console.log(evt)
    }
  },
  components: {
    VuePerfectScrollbar,
  }
};
</script>

<style lang="css">
.scroll-area {
  position: relative;
  margin: auto;
}
</style> 