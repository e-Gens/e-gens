<template>
  <v-app>
    <!-- Barra de nevagação esquerda -->
    <v-navigation-drawer stateless value="true"
        persistent
        :mini-variant.sync="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        app
        dense
        mini-variant-width="70">
      <!-- Cabeçalho do menu lateral esquerdo -->
      <v-toolbar @click.stop="miniVariant = !miniVariant" color="primary lighten-1" dark>
        <v-toolbar-side-icon >
          <v-icon large gray>home</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title v-text="client" class=".font-weight-black .font-italic"></v-toolbar-title>                   
      </v-toolbar>
      
      <!-- Itens do menu lateral esquerdo -->
      <slot name="menu">
        </slot>
      
            
    </v-navigation-drawer>

    <!-- Barra Superior -->
    <v-toolbar app :clipped-left="clipped" color="primary lighten-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <v-img src="./img/logo/logo-light.png" alt="Logo Escola" contain></v-img>
      </v-toolbar-side-icon>
      <v-list-tile>
      
       <v-toolbar-title v-text="title" class=".font-weight-black .font-italic"></v-toolbar-title>                   
      </v-list-tile>

      <v-spacer></v-spacer>
        <slot name="user-nav-data">
        </slot>
      
    </v-toolbar>

    <!-- Conteúdo Principal -->
    <v-content>
      <slot name="main">
          <!-- Conteúdo das páginas será carregado aqui -->
      </slot>
    </v-content>

    <!-- Barra de navegação à direita -->
    <v-navigation-drawer
      temporary
      height="60%"
      :right="right"
      v-model="profileDrawer"
      app>
      <v-list>
        <v-list-tile right>
          <v-list-tile-action>
            <v-list-tile-avatar v-if="profileDrawer" @click.stop="profileDrawer = !profileDrawer">
              <img src="https://randomuser.me/api/portraits/men/11.jpg">
            </v-list-tile-avatar>
          </v-list-tile-action>
          <v-list-tile-title>Dados do Usuário</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <!-- Rodapé -->
    <gns-footer>
        <slot name="footer">
        </slot>
    </gns-footer>

  </v-app>
</template>

<script>
import GnsFooter from "@/components/elements/GnsFooter";

export default {
  name: "SpaTemplate",
  data() {
    return {
      drawer: true,
      fixed: false,
      clipped: false,

      miniVariant: true,
      right: true,
      profileDrawer: false,
      title: "e-Gens",
      client: "Nome do Cliente"
    };
  },
  components: {
    GnsFooter
  }
};
</script>
