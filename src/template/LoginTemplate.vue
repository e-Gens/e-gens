<template>
  <v-app>
    <!-- Barra Superior -->
    <v-toolbar app dense :clipped-left="clipped" color="primary lighten-1" dark>
      <v-toolbar-side-icon @click.stop="handleDrawerToggle" v-if="!drawer || showIcon">
          <v-img src="/img/logo/logo-light.png" alt="Logo " contain></v-img>
      </v-toolbar-side-icon>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
        
      <v-toolbar-items >
        <v-btn :to="{name: 'tarefa'}" icon>
          <v-badge color="red" overlap v-model="tarefas">
          <span slot="badge">2</span>
          <v-icon medium >assignment</v-icon>
          </v-badge>
        </v-btn>
      <v-btn icon>
        <v-badge color="purple" overlap v-model="mensagens">
        <span slot="badge">3</span>
        <v-icon medium >mail</v-icon>
      </v-badge>
      </v-btn >
      <!-- Botão de ação do perfil do usuário -->
      <v-menu v-model="menu" left :close-on-content-click="false" transition="slide-x-reverse-transition" >
          <v-btn slot="activator" flat block>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg">
            </v-list-tile-avatar>
            <small>{{ usuario }}</small>
            <v-icon small >keyboard_arrow_down</v-icon>
          </v-btn>
  
        <v-card flat light color="secondary " >
          <v-list>
            <v-list-tile avatar >
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ usuario }}</v-list-tile-title>
                <v-list-tile-sub-title>Função do usuário</v-list-tile-sub-title>
              </v-list-tile-content>
              
              <v-list-tile-action>
                <v-btn fav icon @click="menu = false">
                  <v-icon>keyboard_arrow_up</v-icon>
                </v-btn>
              </v-list-tile-action>
  
              <v-list-tile-action>
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="mensagens" color="blue"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Habilitar mensagens</v-list-tile-title>
            </v-list-tile>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="tarefas" color="blue"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Habilitar tarefas</v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn flat @click="menu = false">Cancelar</v-btn>
            <v-btn color="primary" flat @click="menu = false">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      </v-toolbar-items> 
      
    </v-toolbar>

    <!-- Conteúdo Principal -->
    <v-content>
      <slot name="main">
          <!-- Conteúdo das páginas será carregado aqui -->
      </slot>
    </v-content>
   
    <!-- Rodapé -->
    <gns-footer>
        <slot name="footer">
        </slot>
    </gns-footer>

  </v-app>
</template>

<script>
import GnsFooter from "@/components/elements/GnsFooter";
import GnsMenu from "@/components/elements/GnsMenu";
import Util from '@/util';

export default {
  name: "SpaTemplate",
  data() {
    return {
      fixed: false,
      clipped: false,
      mini: false,
      drawer: true,

      menu: false,
      mensagens: false,
      tarefas: true,
      fav: true,

      title: "e-Gens",
      client: "Preparatório Diamantinense",
      usuario: "José da Silva"
    };
  },
  components: {
    GnsMenu,
    GnsFooter
  },
  created () {
  },
  mounted () {
  },
  computed: {
    toolbarColor () {
      return this.$vuetify.options.extra.mainNav;
    },
    showIcon () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return true
      }
    }
  },
  methods: {
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
      this.drawer = !this.drawer;
    },
    handleFullScreen () {
      Util.toggleFullScreen();
    }
  }
};
</script>
