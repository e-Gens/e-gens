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
        accent>
      <!-- Cabeçalho do menu lateral esquerdo -->
      <v-toolbar dense flat class="transparent" >
        <v-list class="pa-0">
          <v-list-tile avatar tile @click.stop="miniVariant = !miniVariant">
            <v-avatar tile >
              <v-toolbar-side-icon :ripple="false">
                  <v-img src="./img/logo/logo.png" alt="Logo Escola" contain></v-img>
              </v-toolbar-side-icon>             
            </v-avatar>
            <v-toolbar-title v-text="title"></v-toolbar-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      
      <!-- Itens do menu lateral esquerdo -->
      <slot name="menu">
        </slot>
      
    </v-navigation-drawer>

    <!-- Barra Superior -->
    <v-toolbar app dense :clipped-left="clipped" color="primary lighten-1" dark>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn v-if="drawer" icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-list-tile-avatar v-if="!profileDrawer" @click.stop="profileDrawer = !profileDrawer">
        <img src="https://randomuser.me/api/portraits/men/85.jpg">
      </v-list-tile-avatar>
      <v-toolbar-title>Usuário</v-toolbar-title>
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
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
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
      clipped: false,
      drawer: true,
      fixed: false,

      miniVariant: false,
      right: true,
      profileDrawer: false,
      title: "e-Gens"
    };
  },
  components: {
    GnsFooter
  }
};
</script>
